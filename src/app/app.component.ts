import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afterlongtime';
  
  srcData = localStorage.getItem("img")
  filesSelected :any | ""

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

  
  encodeImageFileAsURL(){   // img converter with  base64
    
     this.filesSelected = (<HTMLInputElement>document.getElementById("inputFileToLoad")).files;
    //  this.filesSelected = document.getElementById("inputFileToLoad").files;
    console.log(this.filesSelected)
    if (this.filesSelected.length > 0) {
        
        var fileToLoad = this.filesSelected[0];
        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent) {
            
          console.log(fileLoadedEvent.target?.result)   // <--- data: base64
          localStorage.setItem("img",String(fileLoadedEvent.target?.result) )
        }

        fileReader.readAsDataURL(fileToLoad);  // function call
    }

  }


  data:any
}
