import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.scss']
})
export class SiteheaderComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

  toggle() {
    this.globals.isDropdownOpen = !this.globals.isDropdownOpen;
  }

}
