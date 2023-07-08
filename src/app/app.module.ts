import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserlistingComponent,
    UpdatepopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatTableModule,
  ToastrModule.forRoot(),
  BrowserAnimationsModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule,
  MatButtonModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
