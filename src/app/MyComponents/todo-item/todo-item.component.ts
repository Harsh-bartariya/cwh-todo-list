import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
   @Input()
  todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
   constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.todoDelete.emit(this.todo);
  console.log("onclick button has clicked"); // we can see this in console, ctrl+shift+i 
}

}
