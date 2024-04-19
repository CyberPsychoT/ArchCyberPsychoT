import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BspwmPage } from './bspwm.page';

describe('BspwmPage', () => {
  let component: BspwmPage;
  let fixture: ComponentFixture<BspwmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BspwmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
