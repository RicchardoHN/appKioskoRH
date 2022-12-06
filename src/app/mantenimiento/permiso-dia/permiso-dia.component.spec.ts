import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoDiaComponent } from './permiso-dia.component';

describe('PermisoDiaComponent', () => {
  let component: PermisoDiaComponent;
  let fixture: ComponentFixture<PermisoDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoDiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
