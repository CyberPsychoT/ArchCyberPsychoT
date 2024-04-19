import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolybarPage } from './polybar.page';

describe('PolybarPage', () => {
  let component: PolybarPage;
  let fixture: ComponentFixture<PolybarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PolybarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
