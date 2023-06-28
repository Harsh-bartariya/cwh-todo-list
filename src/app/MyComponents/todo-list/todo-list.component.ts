import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"; //yha us class ko import kra rhe hai Todo class ko

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[]; //ye ek Todo type ka array hai, jo model udhr se export kia h uska...islie isme ye Todo objects hai iske andar
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "This is title1",
        desc: "Description1",
        active: true
      },
      {
        sno: 2,
        title: "This is title2",
        desc: "Description2",
        active: true
      },
      {
        sno: 3,
        title: "This is title3",
        desc: "Description3",
        active: true
      }
    ]
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
  }

}
