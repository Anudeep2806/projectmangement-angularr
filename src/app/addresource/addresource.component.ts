import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddresourceService } from '../services/addresource.service';


@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css']
})
export class AddresourceComponent  implements OnInit{
     


   projects: any[]=[];
   errorMessage: String;

   generatedUserId: any;
   res: string;
   resourceForm:FormGroup;
 
   constructor(
     private ads: AddresourceService) {
   }
   ngOnInit(): void{
     this.loadProjects();
     this.resourceForm=new FormGroup(
      {'firstName':new FormControl(null,[Validators.required,Validators.pattern('^[A-Za-z]+$')]),
      'lastName':new FormControl(null,[Validators.required,Validators.pattern('^[A-Za-z]+$')]),
      'email': new FormControl(null,Validators.required),
      'phno': new FormControl(null,Validators.required),
      'role': new FormControl('Tester',Validators.required),
      'projectCode': new FormControl(null,Validators.required)
    });
      console.log(this.resourceForm);
   }
 
   loadProjects(){
     this.ads.getProjects().subscribe(projects=>{
       this.projects=projects.filter(project=>project.status!=='Cancelled' && project.status!=='Completed');
     });
   }
 
   resourceSubmit(){
    if (this.resourceForm.invalid) {
      this.resourceForm.markAllAsTouched();
      return;
    }
        this.ads.updateStatus(this.resourceForm).subscribe(response=>{  
        this.generatedUserId=response;
        this.res='Resource created !'+JSON.stringify(this.generatedUserId);
        console.log('Resource created with User Id:'+this.generatedUserId);
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
   
