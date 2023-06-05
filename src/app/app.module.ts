import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { AddresourceComponent } from './addresource/addresource.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule, Routes } from '@angular/router';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { NotfoundComponent } from './notfound/notfound.component';


const route: Routes=[{path:'createproject',component:CreateprojectComponent},
             {path:'addresource',component:AddresourceComponent},
            {path: 'updateproject',component:UpdateprojectComponent},
          {path:"**",component:NotfoundComponent}]
@NgModule({
  declarations: [
    AppComponent,
    CreateprojectComponent,
    AddresourceComponent,
    UpdateprojectComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
