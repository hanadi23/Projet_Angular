import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: 'register', component: CreateRegistrationComponent },
  { path: 'update/:id', component: CreateRegistrationComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'list', component: RegistrationListComponent },
  {path: 'quiz',component:QuizListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
