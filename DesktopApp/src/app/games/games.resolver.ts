import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { GamesService } from './games.service';

@Injectable()

export class GamesResolver implements Resolve<any> {

  constructor(private gamesService: GamesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.gamesService.getGamesAll();
  }
}