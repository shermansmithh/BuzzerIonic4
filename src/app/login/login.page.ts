import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController,  AlertController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Device } from '@ionic-native/device/ngx';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  loading: any;
  introSlides: any
  slideOpts: any;
  constructor(
    private router: Router,
    private fb: Facebook,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth,
    private device: Device,
    public alertCtrl: AlertController
  ) { 
    this.slideOpts = {
      effect: 'fade'
    };

    this.introSlides = [
      {
        title: 'Find your match nearby',
        image: 'assets/img/intro/intro_1.jpg'
      },
      {
        title: 'Buzz someone that you like',
        image: 'assets/img/intro/intro_1.jpg'
      },
      {
        title: 'If they also Buzz you <br /> then "It\'s a Match!"',
        image: 'assets/img/intro/intro_1.jpg'
      },
      {
        title: 'Only people you\'ve matched <br /> with can message you',
        image: 'assets/img/intro/intro_1.jpg'
      }
    ]
  }

  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }

  async presentLoading(loading) {
    await loading.present();
  }




  facebookLogin() {
     // Not already logged in to FB so sign in

    var vm = this
    //Remove to prevent user colide
    localStorage.removeItem('rftoken')
    localStorage.removeItem('accestoken')
    localStorage.removeItem('fbid')
    localStorage.removeItem('userid')

        var perms = new Array('email', 'user_birthday', 'user_photos', 'user_gender', 'user_friends');
        this.fb.login(perms).then((response) => {
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
          //Check if Can Login device check and more
          firebase.database().ref('/onlinestatus/' + response.authResponse.userID).once('value', function (snapshot) {

            // If no login entry has been saved or is the same devide go to login form
            if ((snapshot.val() == undefined || null) || (snapshot.val().deviceid == vm.device.uuid) || snapshot.val().isOnline == false) {
              firebase.auth().signInWithCredential(facebookCredential)
                .then((userinfo) => {
                 
                  localStorage.setItem('rftoken', userinfo.user.refreshToken);
                  localStorage.setItem('accestoken', response.authResponse.accessToken);
                  localStorage.setItem('fbid', response.authResponse.userID);
                  var ref = firebase.database().ref();
                  ref.child('profiles').child(userinfo.user.uid).update({
                    isOnline: true
                  });
                  ref.child('onlinestatus').child(response.authResponse.userID).update({
                    isOnline: true,
                    uid: userinfo.user.uid,
                    deviceid: vm.device.uuid ? vm.device.uuid : null,
                    fbid: response.authResponse.userID,
                    model: vm.device.model,
                    time: firebase.database.ServerValue.TIMESTAMP
                  })
                  localStorage.setItem("userid", userinfo.user.uid);
                })
                .catch((error) => {
                  console.log("Firebase failure: " + JSON.stringify(error));
                });
            } else {
              vm.showAlert(snapshot)
            }
          });
        }).catch((error) => { console.log(error) });
      }
      
      
      showAlert(snapshot){
       
          this.alertCtrl.create({
            header: 'Alert',
            message: "You must first log out of the other device: " + snapshot.val().model,
            buttons: ['OK']
          }).then(alert => alert.present());

      }
  }
  

