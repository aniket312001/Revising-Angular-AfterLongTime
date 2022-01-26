import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  allData:any
  constructor(private service: UserService) { }

  ngOnInit(): void {

    this.getUserList()
  }

  getUserList(){
    this.service.getData().subscribe(data=>{
      this.allData = data
    })
  }


}