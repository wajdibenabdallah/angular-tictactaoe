import { Pipe, PipeTransform } from '@angular/core';
import { Players } from '../players';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === Players.PLAYER_O) {
      return 'Player O';
    }
    if (value === Players.PLAYER_X) {
      return 'Player X';
    }
    return 'Player';
  }
}
