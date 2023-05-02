import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapButtonGroupComponent } from './bootstrap-button-group.component';

describe('BootstrapButtonGroupComponent', () => {
  let component: BootstrapButtonGroupComponent;
  let fixture: ComponentFixture<BootstrapButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
