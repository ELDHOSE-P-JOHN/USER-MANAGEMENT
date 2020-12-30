import { Injectable } from '@angular/core';
import { UserDetails } from './user-detail.modal';
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient) { } 

  formData:UserDetails = new UserDetails();
  readonly baseUrl='http://localhost:50968/api/userdetails';
  list:UserDetails[];

postuserdetail()
{
  return this.http.post(this.baseUrl,this.formData);
}
putuserdetail()
{
  return this.http.put(`${this.baseUrl}/${this.formData.userid}`,this.formData);
}
deleteuserdetail(id:number)
{ return this.http.delete(`${this.baseUrl}/${id}`);

}
refreshlist()
{
  this.http.get(this.baseUrl)
  .toPromise()
  .then(res=>this.list=res as UserDetails[]);
}
}
