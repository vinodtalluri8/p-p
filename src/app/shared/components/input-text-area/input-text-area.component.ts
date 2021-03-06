/**
 * This file should contains all the logic and parameters related to text area components.
 * Any changes in this file will lead to changes in all the places
 * where ever its refered
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css']
})
export class InputTextAreaComponent implements OnInit {
  @Input() textareaForm: FormGroup;
  @Input() property: string;
  @Input() rowSize: number;
  @Input() colSize: number;
  @Input() value: string;
  @Input() name: string;
  @Output() inputTextAreaSelected = new EventEmitter();

  constructor() {
    this.rowSize = 3;
    this.value = '';
  }

  ngOnInit() {
  }

  change(event) {
    if (event.target) {
      this.inputTextAreaSelected.emit(event.target.value);
    }
  }

}
