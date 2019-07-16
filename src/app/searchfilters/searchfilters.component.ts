import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-searchfilters',
  templateUrl: './searchfilters.component.html',
  styleUrls: ['./searchfilters.component.scss']
})
export class SearchfiltersComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

  toggle() {
    this.globals.isOpen = !this.globals.isOpen;
  }
}
