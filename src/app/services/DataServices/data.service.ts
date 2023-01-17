import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('All notes');
  currentMessage = this.messageSource.asObservable();

  private info = new Subject<any>();
  public store = this.info.asObservable();


  constructor() { }

  sendMessage(message: string) {
    this.messageSource.next(message)
  }

  nextDataUpdate(text: any) {
    this.info.next(text);
  }
}
