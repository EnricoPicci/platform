// from https://proto.io/freebies/onoff/

import { Component, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sliding-button',
  template: `
      <div>
        <img src="{{onIcon}}" class="img-rounded sb-icon" width="20">
        <div class="onoffswitch sb-button">
            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" 
                id="myonoffswitch" (change)="onChange($event.target.checked)"
                [checked]="checked">
            <label class="onoffswitch-label" for="myonoffswitch">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
            </label>
        </div>
        <img src="{{offIcon}}" class="img-rounded sb-icon" width="20">
      </div>
  `,
  styleUrls: ['slidingButtonComponent.component.css'],
  inputs: ['onText', 'offText', 'onIcon', 'offIcon', 'checked'],
  outputs: ['changeStatus']
})
export class SlidingButtonComponent {
  public onText = '';
  public offText = '';
  public onIcon: string;
  public offIcon: string;
  public checked = false;
  public changeStatus = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
  }
  
  onChange(inChecked: boolean) {
    this.changeStatus.emit(inChecked);
  }

}
