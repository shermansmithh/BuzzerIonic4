import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdaytoAgePageRoutingModule } from './birthdayto-age-routing.module';

import { BirthdaytoAgePage } from './birthdayto-age.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdaytoAgePageRoutingModule
  ],
  declarations: [BirthdaytoAgePage]
})
export class BirthdaytoAgePageModule {}
