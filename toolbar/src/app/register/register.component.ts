import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loader = true;
  ngOnInit():void{

    setTimeout(()=>{
      this.loader = false;
    },3000);
  }

}
