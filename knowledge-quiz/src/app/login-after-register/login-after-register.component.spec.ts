import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAfterRegisterComponent } from './login-after-register.component';

describe('LoginAfterRegisterComponent', () => {
  let component: LoginAfterRegisterComponent;
  let fixture: ComponentFixture<LoginAfterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAfterRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAfterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
