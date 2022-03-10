import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss']
})
export class CircleProgressComponent implements OnInit {

  @Input() outerStrokeColor!:string
  @Input() innerStrokeColor!:string
  @Input() percent!:number

  constructor() { }

  ngOnInit(): void {
  }

}
