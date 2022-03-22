import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todo: ITodo[] = [
    {
      title: "You'll Find Out",
      description: 'Displaced spiral fracture of shaft of unsp fibula, sequela',
      isCompleted: false,
      isArchived: true,
      endDate: '10/13/2021',
      selected: true,
    },
    {
      title: 'Judy Berlin',
      description: 'Unspecified injury of left carotid artery',
      isCompleted: true,
      isArchived: false,
      endDate: '3/27/2021',
      selected: false,
    },
    {
      title: 'Last Days of Pompeii, The',
      description: 'Burn of unsp deg mult sites of left wrist and hand, subs',
      isCompleted: false,
      isArchived: true,
      endDate: '12/17/2021',
      selected: false,
    },
    {
      title: 'Black or White',
      description: 'Poisoning by coronary vasodilators, assault, sequela',
      isCompleted: true,
      isArchived: false,
      endDate: '10/8/2021',
      selected: false,
    },
    {
      title: 'Mac & Devin Go to High School',
      description:
        'Subluxation of proximal interphaln joint of l rng fngr, init',
      isCompleted: true,
      isArchived: false,
      endDate: '4/27/2021',
      selected: false,
    },
    {
      title: 'Divorce, Le',
      description: 'Displacement of int fix of right femur, sequela',
      isCompleted: true,
      isArchived: true,
      endDate: '4/7/2021',

      selected: false,
    },
  ];
  constructor() {}
  private todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this.todo
  );
  public singaleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this.todo[0]
  );
  public getTodo(): Observable<Array<ITodo>> {
    return this.todoSubject.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo> {
    return this.singaleTodoSubject.asObservable();
  }
  public chooseSelectedTodo(todo: ITodo): void {
    this.singaleTodoSubject.next(todo);
  }
}
