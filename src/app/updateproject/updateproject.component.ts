import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UpdateprojectService } from '../services/updateproject.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent  implements OnInit{
  projects: any[];
  success: string;
  errorMessage: string;

  constructor(private ups: UpdateprojectService){

  }
         
  ngOnInit() {
     this.loadProjects();
  }
  loadProjects(){
    this.ups.getProjects().subscribe(projects=>{
      this.projects=projects;
    });
  }
  saveStatus(projectCode: number, status: string) {
    this.ups.updateStatus(projectCode,status).subscribe((response) => {
        console.log('Status updated successfully');
        this.success='Status Updated Succesfully';
      },  error => {
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
