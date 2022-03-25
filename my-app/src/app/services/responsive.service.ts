import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private isMobileLayout = new BehaviorSubject(false);
  currentData = this.isMobileLayout.asObservable();

  constructor() { }

  setData(data) {
    this.isMobileLayout.next(data);
}
}


