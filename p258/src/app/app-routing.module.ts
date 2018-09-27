import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'router-link-test', component: RouterLinkTestComponent },
  { path: 'href-test', component: HrefTestComponent },
  { path: 'pages/first-page', component: FirstPageComponent },
  { path: 'pages/second-page', component: SecondPageComponent },
  { path: 'pages/third-page', component: ThirdPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent }
];

const lazyRoutes: Routes = [
 // {
 //   path: 'lazy',
 //   loadChildren: 'app/player/player.module#PlayerModule',
 //   canLoad: [AuthGuard]
 // }
];

const appRoutes: Routes = [
  ...lazyRoutes,
  ...routes,
  { path: '**', component: NotFoundComponent }
];

// export const appRoutingProviders: any[] = [
//   authProviders,
//   CanDeactivateGuard
// ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
