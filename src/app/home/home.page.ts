import { Component, OnInit,  ViewChild } from '@angular/core';
import { NavController, ModalController, IonSlides, ToastController, AlertController,Platform } from '@ionic/angular';
import * as firebase from 'firebase';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
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
  @ViewChild(IonSlides ,{static: true}) slides: IonSlides;
  userId: string = "null"
  fbid: String = "null"
  accestoken: String
  user: any
  plususers: any
  users: any[] = []
  compliancearray: any[] = []
  favusers: any[] = []
  hidussers: any
  isLoading: boolean = true;
  currentSlideIndex: number = 0;
  internet: boolean = true
  downloaded: any = {}
  watch: any
  subscription: any
  watchnetwork: any
  appversion: any
  ioslink:any
  androidlink:any

  constructor() { }

  ngOnInit() {
  }

}
