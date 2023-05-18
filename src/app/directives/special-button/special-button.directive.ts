import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSpecialButton]'
})
export class SpecialButtonDirective {

  _appSpecialButton: string = 'blue'

  @Input() set appSpecialButton(value : string){
    this._appSpecialButton = value
    this.element.nativeElement.style.backgroundColor = this._appSpecialButton

  }

    constructor(private element: ElementRef) {

      // element.nativeElement.style.backgroundColor = this.appSpecialButton
    }

}

