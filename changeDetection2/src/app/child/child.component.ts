import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() somedata; // this is unused data

  count = 0;

  constructor() { }

  increaseCount() {
    this.count += 1;
  }

  ngOnChanges() {
    console.log(' onChanges');
  }

  ngOnInit() {
    console.log(' onInit');
  }

  ngDoCheck() {
    console.log(' doCheck');
  }

  ngAfterContentInit() {
    console.log(' afterContentInit');
  }

  ngAfterContentChecked() {
    console.log(' afterContentChecked');
  }

  ngAfterViewInit() {
    // this.increaseCount();
    console.log(' afterViewInit');
  }

  ngAfterViewChecked() {
    console.log(' afterViewChecked');
  }

  get runchangDetection() {
    console.log("detect changes run in childComponent")
    return true;
  }





}
