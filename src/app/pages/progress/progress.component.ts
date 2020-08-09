import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.less']
})
export class ProgressComponent implements OnInit {

  progreso1: number = 15;
  progreso2: number = 35;
  progreso3: number = 40;
  progreso4: number = 50;


  get getProgreso1() {
    return `${ this.progreso1 }%`;
  }

  get getProgreso2() {
    return `${ this.progreso2 }%`;
  }

  get getProgreso3() {
    return `${ this.progreso3 }%`;
  }

  get getProgreso4() {
    return `${ this.progreso4 }%`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
