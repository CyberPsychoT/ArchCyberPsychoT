import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrubCustomPage } from './grub-custom.page';

describe('GrubCustomPage', () => {
  let component: GrubCustomPage;
  let fixture: ComponentFixture<GrubCustomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GrubCustomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
