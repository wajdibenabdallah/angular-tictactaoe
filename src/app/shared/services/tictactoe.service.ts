import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Players } from '../enums/players';
import { winnerCases } from '../constants/game';

// @info 'root' Provide the service in the root / OR 'any' => provide a unique instance for every module
@Injectable({
  providedIn: 'root',
})
export class TicTacToeService {
  turnOf$ = new BehaviorSubject<Players>(Players.PLAYER_X);
  winnerCase$ = new Subject();

  private caseValues: Players[] = [];

  constructor() {}

  getTurnOf(): Observable<Players> {
    return this.turnOf$.asObservable();
  }

  setTurnOf(player: Players): void {
    if (player === Players.PLAYER_O) {
      this.turnOf$.next(Players.PLAYER_X);
    }
    if (player === Players.PLAYER_X) {
      this.turnOf$.next(Players.PLAYER_O);
    }
  }

  getStats(): Array<Players> {
    return this.caseValues;
  }

  getWinnerCase(): Observable<any> {
    return this.winnerCase$.asObservable();
  }

  nextTic(player: Players, caseIndex: number): void {
    this.caseValues[caseIndex] = player;
    this.check(player);
    this.setTurnOf(player);
  }

  check(player: Players): void {
    console.log('this.caseValues', this.caseValues);
    const played = this.caseValues
      .map((_case, index) => {
        if (_case === player) return index;
        else return null;
      })
      .filter((_case) => _case !== null)
      .join('');
    if (played.length > 2) {
      const line = this.includeWinner(played);
      if (line) {
        console.log('winnerCase *** ');
        this.winnerCase$.next(line);
      }
    }
  }

  includeWinner(played: string): boolean | string {
    for (const winnerCase of winnerCases) {
      if (played.includes(winnerCase)) {
        return winnerCase;
      }
    }
    return false;
  }

  replay(): void {
    this.caseValues = [];
    this.turnOf$.next(Players.PLAYER_X);
    this.winnerCase$.next(null);
  }
}
