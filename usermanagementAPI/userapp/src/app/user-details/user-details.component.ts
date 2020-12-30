import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from '../shared/user-detail.model';
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


  

  ngOnInit(): void {
    this.service.refreshList();
  }
  
  populateForm(selectedRecord:UserDetail){
    this.service.formData=Object.assign({},selectedRecord);
  }

  onDelete(id:number)
  {if(confirm('Are you sure to delete'))
    {this.service.Deleteuserdetail(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("DELETED SUCCESSFULLY",'USER DETAIL REGISTER');
      },
      err=>{console.log(err)}
    )
  }  }
   

}
