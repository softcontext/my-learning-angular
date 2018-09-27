import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/* feature module */
import {MemberModule} from './member/member.module';
import {ChildrenModule} from './children/children.module';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HelloComponent } from './hello/hello.component';
import { RouterLinkTestComponent } from './router-link-test/router-link-test.component';
import { HrefTestComponent } from './href-test/href-test.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HelloComponent,
    RouterLinkTestComponent,
    HrefTestComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    LoginComponent,
    AdminComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberModule, ChildrenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
