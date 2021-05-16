import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalepageComponent } from './salepage.component';

describe('SalepageComponent', () => {
  let component: SalepageComponent;
  let fixture: ComponentFixture<SalepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
