import { Component, OnInit, Input} from '@angular/core';
import { Seat } from '../models/seat';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() seat! : Seat;
  seat_color: string = 'grey';
  constructor() { }

  ngOnInit(): void {
  }

}
