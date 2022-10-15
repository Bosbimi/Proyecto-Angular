import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercademiComponent } from './Acercademi.component';

describe('PresentacionComponent', () => {
  let component: AcercademiComponent;
  let fixture: ComponentFixture<AcercademiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercademiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercademiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
