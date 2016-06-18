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
import { PfaInvPlanningComponent } from './pfa-inv-planning.component';

describe('Component: PfaInvPlanning', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PfaInvPlanningComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PfaInvPlanningComponent],
      (component: PfaInvPlanningComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PfaInvPlanningComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PfaInvPlanningComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-pfa-inv-planning></app-pfa-inv-planning>
  `,
  directives: [PfaInvPlanningComponent]
})
class PfaInvPlanningComponentTestController {
}

