import { TestBed } from '@angular/core/testing';

import { SparqlClientService } from './sparql-client.service';

describe('SparqlClientService', () => {
  let service: SparqlClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparqlClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
