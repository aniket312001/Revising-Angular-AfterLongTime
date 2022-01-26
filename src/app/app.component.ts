import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afterlongtime';

  name:String = "Aniket Chavan"

  getName(){
    return this.name
  }

  obj  =  {
    id:1,
    name:"aniket",
    age:20  
  }


  arr = ["sam","john","peter"]


  alertMyName(){
    alert(this.name)
  }

  myEvent(ev:any){
    console.log(ev)
  }


  data:any
}
