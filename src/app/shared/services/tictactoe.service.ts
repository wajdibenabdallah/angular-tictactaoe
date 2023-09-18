import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Players } from '../players';

// Provide the service in the root : 'any' => provide a unique instance for every module
@Injectable({
  providedIn: 'root',
})
export class TicTacToeService {
  turnOf$ = new BehaviorSubject(Players.PLAYER_X);
  caseValues$ = new BehaviorSubject<Array<Players>>([]);

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

  constructor() {}

  turnOf(): Observable<Players> {
    return this.turnOf$.asObservable();
  }

  getStats(): Observable<Array<Players>> {
    return this.caseValues$.asObservable();
  }

  nextTic(player: Players, caseIndex: number, stats: Array<Players>): void {
    stats[caseIndex] = player;
    this.caseValues$.next(stats);
    this.check(player, stats);
    player === Players.PLAYER_O
      ? this.turnOf$.next(Players.PLAYER_X)
      : this.turnOf$.next(Players.PLAYER_O);
  }

  check(player: Players, stats: Array<Players>): void {
    const played = stats
      .map((_case, index) => {
        if (_case === player) return index;
        else return null;
      })
      .filter((_case) => _case !== null)
      .join('');
    if (played.length > 2) {
      const line = this.includeWinner(played);
      if (line) {
        console.log('The winner', player, line);
      }
    }
  }

  includeWinner(played: string): boolean | string {
    for (const winnerCase of this.winnerCases) {
      if (played.includes(winnerCase)) {
        return winnerCase;
      }
    }
    return false;
  }

  reset(): void {
    this.caseValues$.next([]);
    this.turnOf$.next(Players.PLAYER_X);
  }
}
