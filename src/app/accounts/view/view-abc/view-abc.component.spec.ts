import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAbcComponent } from './view-abc.component';

describe('ViewAbcComponent', () => {
  let component: ViewAbcComponent;
  let fixture: ComponentFixture<ViewAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
