import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AuthModule } from './auth/auth.module';
import { AcountModule } from './acount/acount.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoPageFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    AcountModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    MatIconModule

  ],
  exports:[
    AppComponent,
    HomeComponent,
    NoPageFoundComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
