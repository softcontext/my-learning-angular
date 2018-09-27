import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from './member/member.component';

const routes: Routes = [
  // http://localhost:4200/member
  { path: '', component: MemberComponent },
  { path: 'member', component: MemberComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
