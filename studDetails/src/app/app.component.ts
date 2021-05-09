import { Component } from '@angular/core';
import { Router ,  RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentDetails';

  constructor(private router:Router){}

  homepage(){
    this.router.navigateByUrl('');
  }

  addstud(){
    this.router.navigateByUrl('/studDetails');
  }

  showstud(){
    this.router.navigateByUrl('/retrive');
  }
}
