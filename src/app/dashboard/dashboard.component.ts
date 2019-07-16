import { DOCUMENT } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private globals: Globals) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'min-h-screen');
    this.renderer.addClass(this.document.body, 'bg-gray-200');
  }

  ngOnDestroy(): void{
    this.renderer.removeClass(this.document.body, 'min-h-screen');
    this.renderer.removeClass(this.document.body, 'bg-gray-200');
  }

}
