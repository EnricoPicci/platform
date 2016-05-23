import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PfaProfileChooseSimilarComponent } from './pfa-profile-choose-similar.component';

describe('Component: PfaProfileChooseSimilar', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PfaProfileChooseSimilarComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PfaProfileChooseSimilarComponent],
      (component: PfaProfileChooseSimilarComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PfaProfileChooseSimilarComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PfaProfileChooseSimilarComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-pfa-profile-choose-similar></app-pfa-profile-choose-similar>
  `,
  directives: [PfaProfileChooseSimilarComponent]
})
class PfaProfileChooseSimilarComponentTestController {
}

