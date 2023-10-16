import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  prop1 = 1;

  increment() {
    this.prop1++;
    return this.prop1;
  }
}
