import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient) { }

  formData:UserDetail=new UserDetail();
  readonly baseURL= 'http://localhost:50968/api/userdetails'
  list : UserDetail[];

  
  postuserdetail(){
    return this.http.post(this.baseURL,this.formData);
   }
   putuserdetail(){
    return this.http.put(`${this.baseURL}/${this.formData.userid}`,this.formData);
   }
   Deleteuserdetail(id:number)
   {
    return this.http.delete(`${this.baseURL}/${id}`);
   }
   refreshList(){
     this.http.get(this.baseURL)
     .toPromise()
     .then(res=>this.list=res as UserDetail[]);
   }
}
