import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAbcComponent } from './profile-abc.component';

describe('ProfileAbcComponent', () => {
  let component: ProfileAbcComponent;
  let fixture: ComponentFixture<ProfileAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
