import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightdmPage } from './lightdm.page';

describe('LightdmPage', () => {
  let component: LightdmPage;
  let fixture: ComponentFixture<LightdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LightdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
