import { TestBed, inject } from '@angular/core/testing';

import { CentrosCostosService } from './centros-costos.service';

describe('CentrosCostosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentrosCostosService]
    });
  });

  it('should be created', inject([CentrosCostosService], (service: CentrosCostosService) => {
    expect(service).toBeTruthy();
  }));
});
