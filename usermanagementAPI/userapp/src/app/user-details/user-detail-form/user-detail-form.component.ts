import { Component, OnInit } from '@angular/core';
import { UserDetailService } from 'src/app/shared/user-detail.service';
import{NgForm} from '@angular/forms'
import { UserDetail } from 'src/app/shared/user-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styles: [
  ]
})
export class UserDetailFormComponent implements OnInit {

  constructor(public service:UserDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
if(this.service.formData.userid==0)
this.insertRecord(form);
else
this.updateRecord(form);    

  }
insertRecord(form:NgForm){
  this.service.postuserdetail().subscribe(
    res =>{
                this.resetForm(form);
                this.service.refreshList();
                this.toastr.success('SUBMITTED SUCCESSFULLY','USER DETAIL REGISTER');
     },
     err =>{console.log(err);}
   );

}


updateRecord(form:NgForm){
  this.service.putuserdetail().subscribe(
    res =>{
                this.resetForm(form);
                this.service.refreshList();
                this.toastr.info('UPDATED SUCCESSFULLY','USER DETAIL REGISTER')
     },
     err =>{console.log(err);}
   );

}

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData= new UserDetail();
  }

}
