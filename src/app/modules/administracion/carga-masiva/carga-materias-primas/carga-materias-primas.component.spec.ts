import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaMateriasPrimasComponent } from './carga-materias-primas.component';

describe('CargaMateriasPrimasComponent', () => {
  let component: CargaMateriasPrimasComponent;
  let fixture: ComponentFixture<CargaMateriasPrimasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaMateriasPrimasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaMateriasPrimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
