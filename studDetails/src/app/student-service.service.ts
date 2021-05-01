import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  dataFromServer:any = [];
  constructor(private Http : HttpClient) { }
  url = "http://localhost:3000/update";
    FormData(formData):Observable<any>{
      return this.Http.post<any>('http://localhost:3000/FormData',formData);
    }

    retrive(){
      //console.log("retrived called");
      return this.Http.get<any>('http://localhost:3000/retrive');
    }

    getCurrentData(id){
      //console.log("getCurrentData called");
      return this.Http.get(`${this.url}/${id}`);
    }

    updateStud(id,formData){
      console.log("Updatestud called");
      console.log(formData);
      return this.Http.put(`${this.url}/${id}`,formData);
    }

    deleteStud(deleteStudentid:string){
      console.log("deleteStud called");
      return this.Http.delete<any>('http://localhost:3000/deleteStud/'+deleteStudentid)
      .subscribe(()=>{  
        console.log("Deleted");  
    });  
    }
}

//deleteStudentid:number +deleteStudentid