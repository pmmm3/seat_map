import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
//npm i @angular/cdk
  estado: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  seleccionar() {
    this.estado = 'selected';
  }
}
