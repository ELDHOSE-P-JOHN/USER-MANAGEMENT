import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserDetails } from 'src/app/shared/user-detail.modal';
import { UserDetailService } from 'src/app/shared/user-detail.service';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styles: [
  ]
})
export class UserDetailsFormComponent implements OnInit {

  constructor(public service:UserDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    if(this.service.formData.userid==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

insertRecord(form:NgForm)
{this.service.postuserdetail().subscribe(
  res=>{this.resetform(form);
    this.service.refreshlist();
         
         this.toastr.success('SUBMITTED SUCCESSFULLY','USER MANAGEMENT');
  },
  err=>{
    console.log(err);
  }
);}
updateRecord(form:NgForm)
{
  this.service.putuserdetail().subscribe(
    res=>{this.service.refreshlist();
           this.resetform(form);
           this.toastr.info('UPDATTED SUCCESSFULLY','USER MANAGEMENT');
    },
    err=>{
      console.log(err);
    }
  );
}


  resetform(form:NgForm)
  {
    form.form.reset();
    this.service.formData=new UserDetails();
  }

}
