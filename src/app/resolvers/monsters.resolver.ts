import { Injectable } from '@angular/core';
import { ApiService } from '../services';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MonstersResolver implements Resolve<any> {
  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getMonsters();
  }
}
