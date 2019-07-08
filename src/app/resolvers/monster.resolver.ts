import { Injectable } from '@angular/core';
import { ApiService } from '../services';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MonsterResolver implements Resolve<any> {

  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const url = route.params['url'];
    return this.apiService.getMonsterByName(url);
  }
}
