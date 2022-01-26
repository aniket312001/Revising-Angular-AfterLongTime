import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map ,filter} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 

  constructor(private http : HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
  }

  getMoreValue():Observable<any>{
    return this.http.get<any>("http://localhost:3000/udata").pipe(map((val)=>{
      console.log(val)
        return val 
    }),
  //   map((val)=>{
  //     console.log("2:",val)
  //     return val.filter((val2:any) => val2.status === "active")
  // }),
  filter((val:any)=>{
    
    console.log(val,"2")
    return val.length > 5
  })
  )
  }

}
