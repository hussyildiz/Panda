import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapBadgesComponent } from './bootstrap-badges.component';

describe('BootstrapBadgesComponent', () => {
  let component: BootstrapBadgesComponent;
  let fixture: ComponentFixture<BootstrapBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapBadgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
