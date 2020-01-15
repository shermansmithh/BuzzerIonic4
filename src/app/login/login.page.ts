import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: any;
  introSlides: any

  constructor(
    private router: Router,
    private fb: Facebook,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth
  ) { 
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

  async login() {

    this.fb.login(['email'])
      .then((response: FacebookLoginResponse) => {
        this.onLoginSuccess(response);
        console.log(response.authResponse.accessToken);
      }).catch((error) => {
        console.log(error)
        alert('error:' + error)
      });
  }
  onLoginSuccess(res: FacebookLoginResponse) {

    const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    this.fireAuth.auth.signInWithCredential(credential)
      .then((response) => {
        console.log(response)
        this.router.navigate(["/tabs/tab2"]);
        this.loading.dismiss();
      })

  }
  onLoginError(err) {
    console.log(err);
  }


  
  
}
