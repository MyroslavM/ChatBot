import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularBotModule} from './angular-bot/angular-bot.module';
import {ChatComponent} from './chat/chat.component';
import {MainComponent} from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularBotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
