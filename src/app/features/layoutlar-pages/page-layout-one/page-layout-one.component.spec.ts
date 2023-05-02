import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutOneComponent } from './page-layout-one.component';

describe('PageLayoutOneComponent', () => {
  let component: PageLayoutOneComponent;
  let fixture: ComponentFixture<PageLayoutOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLayoutOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLayoutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
