import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  num: number;
  constructor() {
    this.num = 0;
  }

  value(): number {
    return this.num;
  }

  add(n: number) {
    this.num += n;
  }

}
