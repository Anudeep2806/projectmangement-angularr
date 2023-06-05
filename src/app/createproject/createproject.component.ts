import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  clients: any[]=[];

  projectForm: FormGroup;

  constructor(
    private http: HttpClient) {
  }

  ngOnInit(){
    this.loadClients();
    this.projectForm=new FormGroup(
      {'projectCode':new FormControl(null,Validators.required),
      'title':new FormControl(null,Validators.required),
      'createdOn': new FormControl(null,Validators.required),
      'budget': new FormControl(null,Validators.required),
      'startDate': new FormControl(null,Validators.required),
      'expectedEndDate': new FormControl(null,Validators.required),
      'lastUpdatedOn': new FormControl(null,Validators.required),
      'status': new FormControl(null,Validators.required),
      'cId':new FormControl(null,Validators.required)
    });

    }

  

  loadClients(){
    this.http.get<any[]>('http://localhost:8080/api/clients').subscribe(clients=>{
      this.clients=clients;
    });
  }

  formSubmit(){
    console.log(this.projectForm);
       this.http.post<any>('http://localhost:8080/api/projects/new',this.projectForm.value).subscribe(response=>{
        console.log(response);
        alert('Project added successfully');
  },
  error => {
    console.error(error);
    if (error.error && error.error.errors) {
      const errorMessages = Object.values(error.error.errors);
      alert('Validation Error: ' + errorMessages.join(', '));
    } else {
      alert('An error occurred. Please try again');
    }
  }
       );
  }
} 
 
  
  

