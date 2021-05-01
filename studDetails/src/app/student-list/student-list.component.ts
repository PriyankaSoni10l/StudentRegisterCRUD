import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from  '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentServiceService ) { }
  
  fetch:any;
  stud_name : any;
  //delete_id: string;
  ngOnInit() {
  }

  retriveStudentData(){
    console.log("Retrive function called");
  this.studentService.retrive()
  .subscribe(data => {
    this.fetch = data;
    
  })
}

  delStud(delete_id:string){
      this.studentService.deleteStud(delete_id);
      console.log(delete_id);
  }

  Search(){
    if(this.stud_name ==""){
       console.log("entered searching if condition");
       this.retriveStudentData(); 
    }else{
      console.log("entered searching else condition");
      this.fetch = this.fetch.filter(res => {
        return res.stud_name.toLocaleLowerCase().match(this.stud_name.toLocaleLowerCase());
      })
    }
  }
   key : string = 'id';
  reverse :boolean = false;
  sort(key){
   this.key = key;
   this.reverse = !this.reverse;
 } 
  
}


