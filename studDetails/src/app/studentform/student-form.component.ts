import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder } from '@angular/forms';
import { StudentServiceService } from  '../student-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studForm : FormGroup;
  result: any;
  data:any;
  test = [
    {
      name: 'Jesse',
      surname: 'alian'
    },
    {
      name: 'Joe',
      surname: 'Task'
    }
  ]
 
  constructor(private formbuilder : FormBuilder,
    private studentService: StudentServiceService, private ActiveRoute : ActivatedRoute) {
    this.studForm = new FormGroup({
    Identity : new FormControl(),
    Name : new FormControl(),
    city : new FormControl(),
    state : new FormControl(),
    country : new FormControl(),
    passd : new FormControl()
    
  })}
  
  ngOnInit(): void {
   console.log(this.ActiveRoute.snapshot.params.id);
   this.studentService.getCurrentData(this.ActiveRoute.snapshot.params.id).subscribe((result) => {
    this.studForm =new FormGroup({
      //Identity : new FormControl(result[0].Identity),
      Name : new FormControl(result[0].stud_name),
      city : new FormControl(result[0].stud_city),
      state : new FormControl(result[0].stud_state),
      country : new FormControl(result[0].stud_country),
      passd : new FormControl(result[0].stud_password)

    })
    
  }) 
  }

  updateStud(){
    this.studentService.updateStud(this.ActiveRoute.snapshot.params.id,this.studForm.value).subscribe((result) =>{
      console.log(result);
      console.log(result,"Data updated successfully");
    })
  }

  postData(){
  
   this.result = this.studForm.value;
  // console.log(this.result);
  //  let results = "Stud Id: " + result.Identity + "Stud Name : "+ result.Name;
  //  console.log(results);

  this.studentService.FormData(this.result)
  .subscribe(data => {
    this.data = data;
    console.log(this.data);
  })
    
  }

  }


  // this.studForm.setValue({
  //   Identity: new FormControl(result['stud_id']),
  //   Name : new FormControl(result['Name']),
  //   city :  new FormControl(result['city']),
  //   state : new FormControl(result['state']),
  //   country :new FormControl(result['country']),
  //   passd : new FormControl(result['passd'])
  // })
  