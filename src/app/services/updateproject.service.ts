import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateprojectService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    return this.http.get<any[]>('http://localhost:8080/api/projects')
  }
  
  updateStatus(projectCode: number, status: string){
    const url = `http://localhost:8080/api/projects/${projectCode}/update`;
    const requestBody = { status: status };

    return this.http.put(url, requestBody)

  }

}
