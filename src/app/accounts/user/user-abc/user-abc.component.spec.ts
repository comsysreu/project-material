import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAbcComponent } from './user-abc.component';

describe('UserAbcComponent', () => {
  let component: UserAbcComponent;
  let fixture: ComponentFixture<UserAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
