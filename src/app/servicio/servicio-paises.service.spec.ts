import { TestBed, inject } from '@angular/core/testing';

import { ServicioPaisesService } from './servicio-paises.service';

describe('ServicioPaisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioPaisesService]
    });
  });

  it('should be created', inject([ServicioPaisesService], (service: ServicioPaisesService) => {
    expect(service).toBeTruthy();
  }));
});
