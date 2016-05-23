import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PfaPlatformAppComponent } from '../app/pfa-platform.component';

beforeEachProviders(() => [PfaPlatformAppComponent]);

describe('App: PfaPlatform', () => {
  it('should create the app',
      inject([PfaPlatformAppComponent], (app: PfaPlatformAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'pfa-platform works!\'',
      inject([PfaPlatformAppComponent], (app: PfaPlatformAppComponent) => {
    expect(app.title).toEqual('pfa-platform works!');
  }));
});
