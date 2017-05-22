import { Pipe, PipeTransform } from '@angular/core';

import {Games}                   from '../games/games';

@Pipe({
  name: 'gameFilter',
  pure: false
})

export class GameFilterPipe implements PipeTransform {

  transform(items: Games[], filter: Games): any {
      if(!items || !filter) {
       return items;
      }
      //filter items array, items which match and return true will be kept, false will be filtered out
      return items.filter((item:Games) => this.applyFilter(item, filter));
  }

  applyFilter(game:Games, filter:Games): boolean {
      for (let field in filter) {
          if (filter[field]) {
              if (typeof filter[field] === 'string') {
                  if(game[field].toLocaleLowerCase().indexOf(filter[field].toLocaleLowerCase()) === -1) {
                      return false;
                  }
              }else if (typeof filter[field] === 'number') {
                  if(game[field] !== filter[field]) {
                      return false;
                  }
              }
          }
      }
      return true;
  }
}
