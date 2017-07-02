import { Status } from 'app/shared/models/status.enum';
import { ToDoItem } from './../models/to-do-item';
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ToDoService {

  constructor() { }

  public setItem(todoItem: ToDoItem): string {
    let key: string = (localStorage.length + 1).toString();
    todoItem.id = key;
    let value: string = JSON.stringify(todoItem);
    localStorage.setItem(key, value);
    return key;
  }

  public getItem(): ToDoItem[] {
    let data = Array<ToDoItem>();
    for (var i = 0; i < localStorage.length; i++) {
      let item = new ToDoItem();
      let parsedObject: ToDoItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
      data.push(parsedObject);
    }
    return data;
  }

  public updateStatus(id: string, status: Status): void {
    let todoItem: ToDoItem = JSON.parse(localStorage.getItem(id));
    todoItem.status = status;
    localStorage.setItem(id, JSON.stringify(todoItem));
  }
}
