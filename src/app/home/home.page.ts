import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController, AlertController,Platform } from '@ionic/angular';
import * as firebase from 'firebase';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { FCM } from '@ionic-native/fcm/ngx';
import { tap } from 'rxjs/operators';

import { MatchedPage } from '../matched/matched.page'
import { ProfilePage } from '../profile/profile.page';
import { LookingforPage } from '../lookingfor/lookingfor.page'
import { BirthdaytoAgePipe } from '../pipes/birthdayto-age/birthdayto-age'
import { ChatPage } from '../chat/chat.page'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Network } from '@ionic-native/network';
import { File } from '@ionic-native/file/';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
