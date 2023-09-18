import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { Players } from '../players';
@Directive({
  selector: '[appCase]',
})
export class CaseDirective {
  value!: string;
  case: boolean = false;
  stats: Array<Players> = [];
  @Input('index') index!: number;
  @Input('player') player!: Players;
  @Output('caseClick') caseClick = new EventEmitter();
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    if (!this.isPlayed()) {
      this.renderer.setProperty(
        this.el.nativeElement.children[0],
        'innerHTML',
        this.player
      );
      this.case = true;
      this.caseClick.emit();
    }
  }

  isPlayed(): Boolean {
    return this.case;
  }

  reset(): void {
    this.case = false;
    this.renderer.setProperty(
      this.el.nativeElement.children[0],
      'innerHTML',
      ''
    );
  }
}
