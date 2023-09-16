import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TicTacToeService } from './shared/services/tictactoe.service';
import { CaseDirective } from './shared/directives/case.directive';
const LEVEL = 9;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('case') private cases!: CaseDirective;

  Arr = Array;
  num: number = LEVEL;
  Player!: string;

  constructor(
    private _tictactoe: TicTacToeService,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this._tictactoe.status().subscribe((value) => (this.Player = value));
  }

  reset(): void {
    this.cases.reset();
    // this.cases.forEach((element) => {
    //   console.log('element', element);
    //   element.reset();
    // });
  }
}
