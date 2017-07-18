import { Directive, ElementRef, Renderer, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appShowBackDrop]'
})
export class ShowBackDropDirective implements OnInit, OnChanges {
  @Input() show: Boolean;
  constructor(public el: ElementRef, public renderer: Renderer) { }
  ngOnInit() {
    this.removePointerEvents();

  }
  ngOnChanges() {
    this.removePointerEvents()
  }
  removePointerEvents() {
    let pointerEvents = (this.show) ? "none" : "auto";
    this.renderer.setElementStyle(this.el.nativeElement, 'pointer-events', pointerEvents);
  }
}
