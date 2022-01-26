import { Component, OnInit } from '@angular/core';
import { map, filter,from, concatMap, toArray } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  allData:any
  val:any
  constructor(private service: UserService) { }

  ngOnInit(): void {

    this.getUserList()
    this.getmore()
  }

  getUserList(){
    this.service.getData().subscribe(data=>{
      this.allData = data
    })
  }
  getmore(){
    // this.service.getMoreValue().pipe(map((val)=>{
    //       return val.filter((val2:any) => val2.status === "active")
    //    }),).subscribe(data=>{
    //   this.val = data
    //   console.log(this.val)
    // })
                                      //  concatMap will make array in simple data    // toArray will make data to array
    this.service.getMoreValue().pipe(concatMap(val=>val), filter((val:any)=>val.age>30),toArray()).subscribe(data=>{
      this.val = data
      console.log(this.val)
    })
  }
  


}
