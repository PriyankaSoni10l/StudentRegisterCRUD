import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studForm : FormGroup;

  constructor(private formbuilder : FormBuilder) {

    this.studForm = formbuilder.group({
    Identity : new FormControl(),
    Name : new FormControl(),
    city : new FormControl(),
    state : new FormControl(),
    country : new FormControl(),
    passd : new FormControl()
    
  })}
  

  ngOnInit() {
  }

  postData(){
  
   let result = JSON.stringify(this.studForm.value) ;
   console.log(result);
  //  let results = "Stud Id: " + result.Identity + "Stud Name : "+ result.Name;
  //  console.log(results);

}

  }


