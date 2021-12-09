import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPaswwordPage } from './reset-paswword.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPaswwordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPaswwordPageRoutingModule {}
