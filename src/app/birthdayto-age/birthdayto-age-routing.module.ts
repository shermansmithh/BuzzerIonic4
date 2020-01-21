import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdaytoAgePage } from './birthdayto-age.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdaytoAgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdaytoAgePageRoutingModule {}
