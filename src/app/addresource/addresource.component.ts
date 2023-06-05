import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css']
})
export class AddresourceComponent  implements OnInit{
     


   projects: any[]=[];

   generatedUserId: any;
   res: string;
   resourceForm:FormGroup;
 
   constructor(
     private http: HttpClient) {
   }
   
 
   ngOnInit(): void{
     this.loadProjects();
     this.resourceForm=new FormGroup(
      {'firstName':new FormControl(null,Validators.required),
      'lastName':new FormControl(null,Validators.required),
      'email': new FormControl(null,Validators.required),
      'phno': new FormControl(null,Validators.required),
      'role': new FormControl('Tester',Validators.required),
      'projectCode': new FormControl(null,Validators.required)}
      
      
      );
      console.log(this.resourceForm);
   }
 
   loadProjects(){
     this.http.get<any[]>('http://localhost:8080/api/projects').subscribe(projects=>{
       this.projects=projects.filter(project=>project.status!=='Cancelled' && project.status!=='Completed');
     });
   }
 
   resourceSubmit(){
        this.http.post<any>('http://localhost:8080/api/projects/addresource',this.resourceForm.value
        ).subscribe(
          response=>{
            
        this.generatedUserId=response;
        this.res='Resource created !'+JSON.stringify(this.generatedUserId);
        console.log('Resource created with User Id:'+this.generatedUserId);
   },
   error=>{
     console.error("Error:"+error.message);
     
   }
        );
   }
 } 
   
