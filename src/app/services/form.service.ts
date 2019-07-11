import { Injectable } from '@angular/core';
import { Monster } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FormService {

templateMonster: Monster = new Monster();
  constructor() { }

  getProperty(prop: string) {
    if (prop == "speeds") {
      return {
        speed_type: null,
        speed: null
      }
    }
    else if (prop == "skills") {
      return {
        skill: null,
        bonus: null
      }
    }
    else if (prop == "senses") {
      return {
        sense: null,
        distance: null
      }
    }
    else if (prop == "attacks") {
      return {
        weapon: null,
        attack_type: null,
        to_hit: null,
        reach: null,
        range: null,
        num_targets: null,
        average_damage: null,
        damage: null,
        damage_type: null,
        effect: null
      }
    }
    else if (prop == "abilities") {
      return {
        name: null,
        ability_type: null,
        effect: null
      }
    }
    else if (prop == "item_components") {
      return {
        item: null,
        source: null
      }
    }
    else if (prop == "monster_relationships") {
      return {
        monster_id: null,
        relationship: null
      }
    }
    else {
      return null;
    }
  }
}
