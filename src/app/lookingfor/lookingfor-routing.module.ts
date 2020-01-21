import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookingforPage } from './lookingfor.page';

const routes: Routes = [
  {
    path: '',
    component: LookingforPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LookingforPageRoutingModule {}
