import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() class_State: string = '';
  seat_color: string = '';
  constructor() { }

  ngOnInit(): void {
    if (this.class_State)
    {
      if (this.class_State == ('disabled'))
      {
        this.seat_color = 'grey';
      }
      else if (this.class_State == ('selected'))
      {
        this.seat_color = 'green';
      }
    }
  }

}
