import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../models/property';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.scss']
})
export class PropertycardComponent implements OnInit {

  @Input() property: Property;

  get formattedPrice() {
    const formatter = new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    })
    return formatter.format(this.property.price / 100)
  }

  beds : {[k: string]: string} = {
    '=0': 'beds',
    '=1': '# bed',
    'other': '# beds',
  };

  baths : {[k: string]: string} = {
    '=0': 'baths',
    '=1': '# bath',
    'other': '# baths',
  };
  

  constructor() { }

  ngOnInit() {
  }

}
