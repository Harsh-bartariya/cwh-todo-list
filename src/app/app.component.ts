import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //this is selector, if U put this tag in a div or body 
  templateUrl: './app.component.html', // code of this app.component.html will apply on that in which you use the selector
  styleUrls: ['./app.component.css'] // this will pick the style and point to the same file as above
})
export class AppComponent {
  title = 'cwh-todo-list';
  constructor(){
    setTimeout(() => {
      this.title= "Dynamic Title" ; //this setTimeout is a function in js, help to execute code later,
    }, 2000); //ye time hai Ms me, or ye poora constructor me dala hai, init ke purpose se
  } //without reloading hamara code change ho jayega
}
