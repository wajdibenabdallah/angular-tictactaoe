import { TestBed } from '@angular/core/testing';

import { TurnService } from './tictactoe.service';

describe('TurnService', () => {
  let service: TurnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
