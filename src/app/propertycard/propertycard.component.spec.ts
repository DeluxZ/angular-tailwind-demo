import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PropertycardComponent } from './propertycard.component';

describe('PropertycardComponent', () => {
  let component: PropertycardComponent;
  let fixture: ComponentFixture<PropertycardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
