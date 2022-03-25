import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRpComponent } from './user-rp.component';

describe('UserRpComponent', () => {
  let component: UserRpComponent;
  let fixture: ComponentFixture<UserRpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
