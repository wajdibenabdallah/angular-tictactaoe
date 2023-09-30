import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TicTacToeService } from './shared/services/tictactoe.service';
import { CaseDirective } from './shared/directives/case.directive';
import { Players } from './shared/enums/players';
import { trigger } from '@angular/animations';
import {
  _012,
  _036,
  _048,
  _147,
  _246,
  _258,
  _345,
  _678,
} from './shared/constants/animations';
import { LEVEL } from './shared/constants/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('line', [
      _012.from,
      _012.to,
      _012.transition,
      _345.from,
      _345.to,
      _345.transition,
      _678.from,
      _678.to,
      _678.transition,
      _036.from,
      _036.to,
      _036.transition,
      _147.from,
      _147.to,
      _147.transition,
      _258.from,
      _258.to,
      _258.transition,
      _048.from,
      _048.to,
      _048.transition,
      _246.from,
      _246.to,
      _246.transition,
    ]),
  ],
})
export class AppComponent implements OnInit {
  @ViewChildren(CaseDirective) cases!: QueryList<CaseDirective>;
  animation!: boolean;
  start!: string;
  end!: string;
  player!: Players;
  constructor(private _tictactoe: TicTacToeService) {}
  ngOnInit(): void {
    this._tictactoe.getTurnOf().subscribe((player) => (this.player = player));
  }

  level(): any {
    return new Array(LEVEL);
  }

  caseClick(index: number): void {
    this._tictactoe.nextTic(this.player, index);
    this._tictactoe.getWinnerCase().subscribe((line) => {
      if (line) {
        this.drawLine(line);
        this.endOfGame();
      }
    });
  }

  endOfGame() {
    this.cases.forEach((element) => {
      element.endOfGame();
    });
  }

  drawLine(line: string): void {
    console.log('drawLine', line, this.animation);
    // this.animation = !this.animation;
    // this.start = 'start' + line;
    // this.end = 'end' + line;
  }

  reset(): void {
    this._tictactoe.reset();
    this.animation = false;
    this.cases.forEach((element) => {
      element.reset();
    });
  }
}
