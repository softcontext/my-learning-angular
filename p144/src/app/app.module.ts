import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { MyDatePipe } from './pipe/my-date.pipe';
import { MyHiddenDirective } from './directive/my-hidden.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { MyHighlightDirective } from './directive/my-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipeComponent,
    MyDatePipe,
    MyHiddenDirective,
    CustomDirectiveComponent,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
