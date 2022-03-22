import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import {ITodo} from '../../models/todo.interface'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  public todos:Array<ITodo> = []
  constructor(private todoService: TodoService) {}
  private subscribe: Subscription = new Subscription();
  ngOnInit(): void {
    this.subscribe.add(
      this.todoService.getTodo().subscribe((data) => {
        console.log(data);
        this.todos = data
      })
    );
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
