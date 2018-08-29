/**
 * This file should contains all the logic and parameters related to input.
 * Any changes in this file will lead to changes in all the places
 * where ever its refered
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() size: number;
  @Input() id: string;
  @Input() value: string;
  @Output() inputTextSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  change(event) {
    this.inputTextSelected.emit(event.target.value);
  }
}
