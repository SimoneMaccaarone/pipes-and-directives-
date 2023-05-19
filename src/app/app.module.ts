import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FirstUpperPipe } from './pipes/first-upper/first-upper.pipe';
import { AccutalAgePipe } from './pipes/accutual-age/accutal-age.pipe';
import { ChopDescPipe } from './pipes/chop-desc/chop-desc.pipe';
import { SpecialButtonDirective } from './directives/special-button/special-button.directive';
import { UnlessDirective } from './unless.directive';







@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    DirectiveComponent,
    FirstUpperPipe,
    AccutalAgePipe,
    ChopDescPipe,
    SpecialButtonDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
