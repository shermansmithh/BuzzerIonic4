import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LookingforPageRoutingModule } from './lookingfor-routing.module';

import { LookingforPage } from './lookingfor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LookingforPageRoutingModule
  ],
  declarations: [LookingforPage]
})
export class LookingforPageModule {}
