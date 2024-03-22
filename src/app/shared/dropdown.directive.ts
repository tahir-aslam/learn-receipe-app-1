import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class dropDownDirective{
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        console.log('Toggle Open method called: '+ this.isOpen);
      this.isOpen = !this.isOpen;
    }
  }
  