import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PfaBackendRestServerService } from './pfa-backend-rest-server.service';

describe('PfaBackendRestServer Service', () => {
  beforeEachProviders(() => [PfaBackendRestServerService]);

  it('should ...',
      inject([PfaBackendRestServerService], (service: PfaBackendRestServerService) => {
    expect(service).toBeTruthy();
  }));
});
