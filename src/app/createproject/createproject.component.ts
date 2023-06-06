import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateprojectService } from '../services/createproject.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  clients: any[]=[];

  projectForm: FormGroup;

   errorMessage: string;
   success: string;

  constructor(
    private cps: CreateprojectService) {
  }

  ngOnInit(){
    this.loadClients();
    this.projectForm=new FormGroup(
      {'projectCode':new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
      'title':new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'createdOn': new FormControl(null,Validators.required),
      'budget': new FormControl(null,[Validators.required,Validators.pattern('^[0-9]+$')]),
      'startDate': new FormControl(null,Validators.required),
      'expectedEndDate': new FormControl(null,Validators.required),
      'lastUpdatedOn': new FormControl(null,Validators.required),
      'status': new FormControl(null,Validators.required),
      'cId':new FormControl(null,Validators.required)
    });

    }

    loadClients(){
      this.cps.getClients().subscribe(clients=>{
        this.clients=clients;
      });
    }

  

  formSubmit(){
    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }
    console.log(this.projectForm);
       this.cps.postProject(this.projectForm).subscribe(response=>{
        console.log(response);
        this.success='Project Added Succesfully';
  },
  error => {
    this.errorHandler(error);
  }
       );
  }errorHandler(error: HttpErrorResponse) {
  

    if (error.error instanceof ErrorEvent) {
      // Client-side error

      this.errorMessage = error.error.message;
    }
    else {
      // Server-side error
      this.errorMessage = error.error;

    }
    
    console.error("err:"+this.errorMessage);
  }
} 
 
  
  

