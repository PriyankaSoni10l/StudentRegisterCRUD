import { NgModule } from '@angular/core';
import {StudentFormComponent} from './studentform/student-form.component';
import {StudentListComponent} from './student-list/student-list.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'studDetails',component:StudentFormComponent},
  {path:'retrive',component:StudentListComponent},
  {path:'update/:id',component:StudentFormComponent},
  {path:'deleteStud',component:StudentListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
