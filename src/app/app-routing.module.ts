import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';


import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';




const routes: Routes = [
 { path: 'home', component: HomeComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full'},
 { path: '**', component: NoPageFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
