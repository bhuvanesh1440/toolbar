import { Component } from '@angular/core';
import { FormControl, FormGroup,FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'https';

  loader = true;
  ngOnInit():void{

    setTimeout(()=>{
      this.loader = false;
    },3000);
  }
  

  
}
