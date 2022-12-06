import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoHoraComponent } from './permiso-hora.component';

describe('PermisoHoraComponent', () => {
  let component: PermisoHoraComponent;
  let fixture: ComponentFixture<PermisoHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoHoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisoHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
