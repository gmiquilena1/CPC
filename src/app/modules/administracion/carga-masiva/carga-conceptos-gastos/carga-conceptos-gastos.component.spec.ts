import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaConceptosGastosComponent } from './carga-conceptos-gastos.component';

describe('CargaConceptosGastosComponent', () => {
  let component: CargaConceptosGastosComponent;
  let fixture: ComponentFixture<CargaConceptosGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaConceptosGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaConceptosGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
