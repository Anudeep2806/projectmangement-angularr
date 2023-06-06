import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateprojectService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(){
    return this.http.get<any[]>('http://localhost:8080/api/clients');
    
  }
  postProject(projectForm: FormGroup){
    return  this.http.post<any>('http://localhost:8080/api/projects/new',projectForm.value)
  }
}
