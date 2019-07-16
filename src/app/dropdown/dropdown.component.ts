import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

  toggle() {
    this.globals.isDropdownOpen = !this.globals.isDropdownOpen;
  }
}
