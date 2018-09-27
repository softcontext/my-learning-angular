import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member/member.component';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule
  ],
  declarations: [MemberComponent]
})
export class MemberModule { }
