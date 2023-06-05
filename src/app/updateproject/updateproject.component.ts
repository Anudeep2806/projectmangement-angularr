import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent  implements OnInit{
  projects: any[];

  constructor(private http: HttpClient){

  }
         
  ngOnInit() {
     this.loadProjects();
  }
  loadProjects(){
    this.http.get<any[]>('http://localhost:8080/api/projects').subscribe(projects=>{
      this.projects=projects;
    });
  }
  saveStatus(projectCode: number, status: string) {
    const url = `http://localhost:8080/api/projects/${projectCode}/update`;
    const requestBody = { status: status };

    this.http.put(url, requestBody).subscribe((response) => {
        console.log('Status updated successfully');
        alert('Status Updated Succesfully');
      }, (error) => {
        console.error('Failed to update status:', error);
        // You can handle the error scenario here
      });
  }

}
