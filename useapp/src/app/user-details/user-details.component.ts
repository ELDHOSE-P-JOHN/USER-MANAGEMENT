import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserDetails } from '../shared/user-detail.modal';
import { UserDetailService } from '../shared/user-detail.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor(public service:UserDetailService,
    private toastr:ToastrService) { }
    public showModal : boolean = false;
  ngOnInit(): void {
    this.service.refreshlist();
  }
  populateform(selectedRecord:UserDetails)
  {
    this.service.formData=Object.assign({},selectedRecord);
  }
  onDelete(id:number)
  { if(confirm('Are you sure to delete this record'))
    this.service.deleteuserdetail(id)
    .subscribe(
      res=>{
        this.service.refreshlist();
        this.toastr.error("DELETED SUCCESSFULLY","PAYMENT DETAIL REGISTER");
      },
      err=>{console.log(err)}
    )

  }
  
}
