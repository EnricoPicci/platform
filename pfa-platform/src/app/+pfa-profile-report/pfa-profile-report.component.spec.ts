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
import { PfaProfileReportComponent } from './pfa-profile-report.component';

describe('Component: PfaProfileReport', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PfaProfileReportComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PfaProfileReportComponent],
      (component: PfaProfileReportComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PfaProfileReportComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PfaProfileReportComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-pfa-profile-report></app-pfa-profile-report>
  `,
  directives: [PfaProfileReportComponent]
})
class PfaProfileReportComponentTestController {
}

