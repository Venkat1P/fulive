import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSliderPage } from './info-slider.page';

describe('InfoSliderPage', () => {
  let component: InfoSliderPage;
  let fixture: ComponentFixture<InfoSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSliderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
