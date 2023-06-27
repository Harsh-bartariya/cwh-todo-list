import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
   @Input()
  todo: Todo = new Todo;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
  console.log("onclick button has clicked"); // we can see this in console, ctrl+shift+i 
}

}
