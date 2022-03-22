import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todo:ITodo[] = [
    {
      title: "You'll Find Out",
      description: 'Displaced spiral fracture of shaft of unsp fibula, sequela',
      isCompleted: false,
      isArchived: true,
      endDate: '10/13/2021',
    },
    {
      title: 'Judy Berlin',
      description: 'Unspecified injury of left carotid artery',
      isCompleted: true,
      isArchived: false,
      endDate: '3/27/2021',
    },
    {
      title: 'Last Days of Pompeii, The',
      description: 'Burn of unsp deg mult sites of left wrist and hand, subs',
      isCompleted: false,
      isArchived: true,
      endDate: '12/17/2021',
    },
    {
      title: 'Black or White',
      description: 'Poisoning by coronary vasodilators, assault, sequela',
      isCompleted: true,
      isArchived: false,
      endDate: '10/8/2021',
    },
    {
      title: 'Mac & Devin Go to High School',
      description: 'Subluxation of proximal interphaln joint of l rng fngr, init',
      isCompleted: true,
      isArchived: false,
      endDate: '4/27/2021',
    },
    {
      title: 'Divorce, Le',
      description: 'Displacement of int fix of right femur, sequela',
      isCompleted: true,
      isArchived: true,
      endDate: '4/7/2021',
    },
    {
      title: 'Kid from Brooklyn, The',
      description: 'Strain of musc/fasc/tend at forarm lv, right arm, sequela',
      isCompleted: true,
      isArchived: true,
      endDate: '3/8/2022',
    },
    {
      title: 'Teenage',
      description: 'Traumatic amputation of shoulder and upper arm, level unsp',
      isCompleted: true,
      isArchived: true,
      endDate: '3/17/2022',
    },
    {
      title: 'Thérèse: The Story of Saint Thérèse of Lisieux',
      description: 'Underdosing of cocaine, sequela',
      isCompleted: true,
      isArchived: true,
      endDate: '2/27/2022',
    },
    {
      title: 'Trouble with Girls, The',
      description: 'Influenza due to other identified influenza virus',
      isCompleted: true,
      isArchived: true,
      endDate: '7/5/2021',
    },
  ];
  constructor() { }
  private todoSubject:BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todo)

  public getTodo():Observable<Array<ITodo>>{
      return this.todoSubject.asObservable()
  }
}
