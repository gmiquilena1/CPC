import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCentrosCostosComponent } from './tabla-centros-costos.component';

describe('TablaCentrosCostosComponent', () => {
  let component: TablaCentrosCostosComponent;
  let fixture: ComponentFixture<TablaCentrosCostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCentrosCostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCentrosCostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
