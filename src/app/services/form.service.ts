import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Monster } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) { }

  fillFormArray(property: string, propertyArray: any[]) {
    let formArray = [];
    for(let propertyObject of propertyArray) {
      formArray.push(this.addFormGroup(property, propertyObject));
    }
    return formArray;
  }

  addFormGroup(property: string, values: any = null) {
    switch(property) {
      case "speeds": {
        return this.buildSpeed(values);
      }
      case "skills": {
        return this.buildSkill(values);
      }
      case "senses": {
        return this.buildSense(values);
      }
      case "attacks": {
        return this.buildAttack(values);
      }
      case "abilities": {
        return this.buildAbility(values);
      }
      case "item_components": {
        return this.buildItemComponent(values);
      }
      case "monster_relationships": {
        return this.buildMonsterRelationship(values);
      }
    }
  }

  buildSpeed(values: any): FormGroup {
    return this.formBuilder.group({
      speed_type: [values?values['speed_type']:null, [Validators.required]],
      speed: [values?values['speed']:null, [Validators.required, Validators.min(0)]]
    });
  }

  buildSkill(values: any) {
    return this.formBuilder.group({
      skill: [values?values['skill']:null, [Validators.required]],
      bonus: [values?values['bonus']:null, [Validators.required]]
    });
  }

  buildSense(values: any) {
    return this.formBuilder.group({
      sense: [values?values['sense']:null, [Validators.required]],
      distance: [values?values['distance']:null, [Validators.required, Validators.min(0)]]
    });
  }

  buildAttack(values: any) {
    return this.formBuilder.group({
      weapon: [values?values['weapon']:null, [Validators.required]],
      attack_type: [values?values['attack_type']:null, [Validators.required]],
      to_hit: [values?values['to_hit']:null, [Validators.required]],
      reach: [values?values['reach']:null, [Validators.required]],
      range: [values?values['range']:null, [Validators.required]],
      num_targets: [values?values['num_targets']:null, [Validators.required]],
      average_damage: [values?values['average_damage']:null, [Validators.required]],
      damage: [values?values['damage']:null, [Validators.required]],
      damage_type: [values?values['damage_type']:null, [Validators.required]],
      effect: [values?values['effect']:null, [Validators.required]]
    });
  }

  buildAbility(values: any) {
    return this.formBuilder.group({
      name: [values?values['name']:null, [Validators.required]],
      ability_type: [values?values['ability_type']:null, [Validators.required]],
      effect: [values?values['effect']:null, [Validators.required]]
    });
  }

  buildItemComponent(values: any) {
    return this.formBuilder.group({
      item: [values?values['item']:null, [Validators.required]],
      source: [values?values['source']:null, [Validators.required]]
    });
  }

  buildMonsterRelationship(values: any) {
    return this.formBuilder.group({
      monster_name: [values?values['monster_name']:null, [Validators.required]],
      relationship: [values?values['relationship']:null, [Validators.required, Validators.min(0)]]
    });
  }

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
