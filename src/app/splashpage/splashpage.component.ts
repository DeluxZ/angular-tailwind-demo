import { DOCUMENT } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-splashpage',
  templateUrl: './splashpage.component.html',
  styleUrls: ['./splashpage.component.scss']
})
export class SplashpageComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'bg-gray-100');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'bg-gray-100');
  }

}
