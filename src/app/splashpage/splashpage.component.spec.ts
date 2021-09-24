import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SplashpageComponent } from './splashpage.component';

describe('SplashpageComponent', () => {
  let component: SplashpageComponent;
  let fixture: ComponentFixture<SplashpageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
