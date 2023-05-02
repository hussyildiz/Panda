import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutThreeComponent } from './page-layout-three.component';

describe('PageLayoutThreeComponent', () => {
  let component: PageLayoutThreeComponent;
  let fixture: ComponentFixture<PageLayoutThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLayoutThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLayoutThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
