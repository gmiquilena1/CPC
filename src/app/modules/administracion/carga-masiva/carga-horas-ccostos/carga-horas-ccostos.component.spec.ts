import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaHorasCcostosComponent } from './carga-horas-ccostos.component';

describe('CargaHorasCcostosComponent', () => {
  let component: CargaHorasCcostosComponent;
  let fixture: ComponentFixture<CargaHorasCcostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaHorasCcostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaHorasCcostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
