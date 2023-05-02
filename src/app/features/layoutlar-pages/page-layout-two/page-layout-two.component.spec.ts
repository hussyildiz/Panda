import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutTwoComponent } from './page-layout-two.component';

describe('PageLayoutTwoComponent', () => {
  let component: PageLayoutTwoComponent;
  let fixture: ComponentFixture<PageLayoutTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLayoutTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLayoutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
