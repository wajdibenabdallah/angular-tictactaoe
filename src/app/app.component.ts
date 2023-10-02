import {
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TicTacToeService } from './shared/services/tictactoe.service';
import { CaseDirective } from './shared/directives/case.directive';
import { Players } from './shared/enums/players';
import { animate, style, transition, trigger } from '@angular/animations';
import { animations } from './shared/constants/animations';
import { LEVEL } from './shared/constants/game';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('line', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChildren(CaseDirective) cases!: QueryList<CaseDirective>;
  animation: boolean = false;
  start!: string;
  end!: string;
  player!: Players;
  playerSubsciption!: Subscription;
  winnerCaseSubsciption!: Subscription;
  lineStyle: any = {
    height: '0.1rem',
    'background-color': 'black',
    position: 'fixed',
    'z-index': 2,
  };

  constructor(private _tictactoe: TicTacToeService) {}
  ngOnDestroy(): void {
    this.playerSubsciption.unsubscribe();
    this.winnerCaseSubsciption.unsubscribe();
  }

  ngOnInit(): void {
    this.playerSubsciption = this._tictactoe
      .getTurnOf()
      .subscribe((player) => (this.player = player));
    this.winnerCaseSubsciption = this._tictactoe
      .getWinnerCase()
      .subscribe((line) => {
        if (line) {
          this.drawLine(line);
          this.endOfGame();
        }
      });
  }

  level(): any {
    return new Array(LEVEL);
  }

  caseClick(index: number): void {
    this._tictactoe.nextTic(this.player, index);
  }

  endOfGame() {
    this.cases.forEach((element) => {
      element.endOfGame();
    });
  }

  drawLine(line: string): void {
    this.animation = true;
    console.log({ line });
    this.lineStyle = {
      ...this.lineStyle,
      ...animations[line].style,
    };
  }

  replay(): void {
    this._tictactoe.replay();
    this.animation = false;
    this.cases.forEach((element) => {
      element.reset();
    });
  }
}
