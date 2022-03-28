import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit,OnDestroy,OnChanges {
  public todo:ITodo ;
  constructor(private todoService:TodoService) { }
  private subscription:Subscription = new Subscription()
  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data =>{
        this.todo = data
      })
    )  
  }

  ngOnDestroy(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onComplete(todo:ITodo){
    todo.isCompleted = true
  }
  onArchive(){
    this.todo.isArchived = true
  }
}
