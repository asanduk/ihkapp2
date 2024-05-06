import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizModeComponent } from './quiz-mode/quiz-mode.component';
import { LeitfadenComponent } from './leitfaden/leitfaden.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz-mode', component: QuizModeComponent },
  { path: 'leitfaden', component: LeitfadenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
