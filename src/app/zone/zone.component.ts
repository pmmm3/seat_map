import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { Seat } from '../models/seat';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  seats : Seat[] = []
  constructor() {
    this.seats.push(new Seat('a1', 10, 10))
    this.seats.push(new Seat('a2', 20, 10))
    this.seats.push(new Seat('a3', 30, 10))
    this.seats.push(new Seat('a4', 40, 10))
  }

  ngOnInit(): void {
    console.log(this.seats)
  }
  droppedElement(event: CdkDragEnd,seat:Seat)
  {
    seat.coordinate_x = event.source.getRootElement().getBoundingClientRect().x + document.getElementsByClassName('container-map')[0].scrollLeft;
    seat.coordinate_y = event.source.getRootElement().getBoundingClientRect().y + document.getElementsByClassName('container-map')[0].scrollTop;
    console.log(event)
  }


}
