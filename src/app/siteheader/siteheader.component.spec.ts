import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SiteheaderComponent } from './siteheader.component';

describe('SiteheaderComponent', () => {
  let component: SiteheaderComponent;
  let fixture: ComponentFixture<SiteheaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
