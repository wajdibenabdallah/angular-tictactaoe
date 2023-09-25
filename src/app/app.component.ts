import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TicTacToeService } from './shared/services/tictactoe.service';
import { CaseDirective } from './shared/directives/case.directive';
import { Players } from './shared/players';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
const LEVEL = 9;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('line', [
      state(
        'hide',
        style({
          width: '1rem',
          margin: '2rem 18rem',
          transform: 'rotate(45deg)',
        })
      ),
      state(
        'show',
        style({
          width: '35rem',
          margin: '16rem 15rem',
          transform: 'rotate(45deg)',
        })
      ),
      transition('hide => show', [animate('0.2s')]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  @ViewChildren(CaseDirective) cases!: QueryList<CaseDirective>;
  anime: boolean = false;

  Arr = Array;
  level: number = LEVEL;
  player!: Players;
  stats: Array<Players> = [];
  winnerCases: Array<string> = [
    '012',
    '345',
    '678',
    '036',
    '147',
    '258',
    '048',
    '246',
  ];
  constructor(private _tictactoe: TicTacToeService) {}
  ngOnInit(): void {
    this._tictactoe.turnOf().subscribe((value) => (this.player = value));
    this._tictactoe.getStats().subscribe((value) => {
      this.stats = value;
    });
  }

  caseClick(index: number): void {
    this._tictactoe.nextTic(this.player, index, this.stats);
  }

  action(): void {
    this.anime = !this.anime;
  }

  reset(): void {
    this._tictactoe.reset();
    this.cases.forEach((element) => {
      element.reset();
    });
  }
}
