import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent {
  value: string = '';

  //ngondestroy
  exits: boolean = true;
  ngondestroy(){
    this.exits=false;
  }

  updateParent(box: any) {
    this.value = box.value;
  }
}
