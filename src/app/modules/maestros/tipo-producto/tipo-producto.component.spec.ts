import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProductoComponent } from './tipo-producto.component';

describe('TipoProductoComponent', () => {
  let component: TipoProductoComponent;
  let fixture: ComponentFixture<TipoProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
