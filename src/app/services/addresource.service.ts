import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddresourceService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getProjects();
  }

  getProjects(){
   return  this.http.get<any[]>('http://localhost:8080/api/projects')
  }

  updateStatus(resourceForm: FormGroup){
    return  this.http.post<any>('http://localhost:8080/api/projects/addresource',resourceForm.value)
  }
}
