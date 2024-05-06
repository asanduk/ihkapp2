import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { QuizModeComponent } from './quiz-mode/quiz-mode.component';
import { LeitfadenComponent } from './leitfaden/leitfaden.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    QuizModeComponent,
    LeitfadenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
