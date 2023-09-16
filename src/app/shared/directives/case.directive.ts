import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Players } from '../players';
import { TicTacToeService } from '../services/tictactoe.service';
@Directive({
  selector: '[appCase]',
})
export class CaseDirective implements OnInit {
  value!: string;
  case: boolean = false;
  @Input('index') index!: number;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private _tictactoe: TicTacToeService
  ) {}
  ngOnInit(): void {
    this._tictactoe.status().subscribe((value) => {
      this.value = value;
    });
    console.log('index', this.index);
  }

  isPlayed(): Boolean {
    return this.case;
  }

  @HostListener('click')
  onClick() {
    if (!this.isPlayed()) {
      this.renderer.setProperty(
        this.el.nativeElement.children[0],
        'innerHTML',
        this.value
      );
      this.case = true;
      this._tictactoe.nextTic(this.value);
    }
  }

  reset(): void {
    console.log('xxxxxxxxx')
    this.case = false;
    this.renderer.setProperty(
      this.el.nativeElement.children[0],
      'innerHTML',
      ''
    );
  }
}
