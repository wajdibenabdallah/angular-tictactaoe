import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Players } from '../players';

// Provide the service in the root : 'any' => provide a unique instance for every module
@Injectable({
  providedIn: 'root',
})
export class TicTacToeService {
  playing$ = new BehaviorSubject(Players.PLAYER_X);

  constructor() {}

  status(): Observable<string> {
    return this.playing$.asObservable();
  }

  nextTic(value: string): void {
    value === Players.PLAYER_O
      ? this.playing$.next(Players.PLAYER_X)
      : this.playing$.next(Players.PLAYER_O);
  }
}
