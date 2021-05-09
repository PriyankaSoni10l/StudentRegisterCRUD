import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from  '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentServiceService ) { }
  paginationdisplay : boolean = false;
  fetch:any;
  stud_name : any;
  key : string = 'id';
  reverse :boolean = false;
  totalRecords : String ; 
  page: Number =1;
  //delete_id: string;
  ngOnInit() {
  }

  retriveStudentData(){
    this.paginationdisplay = true;
    // console.log("Retrive function called");
  this.studentService.retrive()
  .subscribe(data => {
    this.fetch = data;
    this.totalRecords = data.length;
    console.log(this.totalRecords);
  })
}

  delStud(delete_id:string){
      this.studentService.deleteStud(delete_id);
      console.log(delete_id);
  }

  Search(){
    if(this.stud_name ==""){
       this.retriveStudentData(); 
    }else{
      this.fetch = this.fetch.filter(res => {
        return res.stud_name.toLocaleLowerCase().match(this.stud_name.toLocaleLowerCase());
      })
    }
  }
     
  sort(key){
   this.key = key;
   this.reverse = !this.reverse;
 } 
  
}


