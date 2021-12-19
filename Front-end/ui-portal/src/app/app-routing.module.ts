import { ViewHistoryComponent } from './components/view-history/view-history.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent,canActivate:[AuthenticationGuard]  },
 {path: 'login', component: LoginComponent },
//  {path: 'registeruser', component: RegisterComponent },
 {path: 'send-email', component: SendEmailComponent ,canActivate:[AuthenticationGuard]},
 {path: 'view-history', component: ViewHistoryComponent,canActivate:[AuthenticationGuard] }
]
// const routes: Routes = [
//   {path: '' , redirectTo: 'login', pathMatch: 'full'},
//  {path: 'home', component: HomeComponent,canActivate:[AuthenticationGuard] },
//  {path: 'login', component: LoginComponent},
//  {path: 'registeruser', component: RegisterComponent },
//  {path: 'send-email', component: SendEmailComponent,canActivate:[AuthenticationGuard] },
//  {path: 'view-history', component: ViewHistoryComponent,canActivate:[AuthenticationGuard] }
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
