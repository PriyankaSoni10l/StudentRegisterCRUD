import { NgModule } from '@angular/core';
import {StudentFormComponent} from './studentform/student-form.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'studDetails',component:StudentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
