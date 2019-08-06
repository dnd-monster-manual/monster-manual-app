import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Monster } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) { }

  fillFormArray(property: string, propertyArray: any[]) {
    let formArray = [];
    if(propertyArray)
    {
      for(let propertyValues of propertyArray) {
        formArray.push(this.buildFormElement(property, propertyValues));
      }
    }
    return formArray;
  }

  buildFormElement(property: string, values: any = null): any {
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
      case "ability_scores": {
        return this.buildAbilityScore(values);
      }
      case "saving_throws": {
        return this.buildSavingThrow(values);
      }
      case "lair_actions": {
        return this.buildLairAction(values);
      }
      case "lair_effects": {
        return this.buildLairEffect(values);
      }
    }
  }

  buildSpeed(values: any): FormGroup {
    return this.formBuilder.group({
      speed_type: [values?values['speed_type']:null, [Validators.required]],
      speed: [values?values['speed']:null, [Validators.required, Validators.min(0)]]
    });
  }

  buildSkill(values: any): FormGroup {
    return this.formBuilder.group({
      skill: [values?values['skill']:null, [Validators.required]],
      bonus: [values?values['bonus']:null, [Validators.required]]
    });
  }

  buildSense(values: any): FormGroup {
    return this.formBuilder.group({
      sense: [values?values['sense']:null, [Validators.required]],
      distance: [values?values['distance']:null, [Validators.required, Validators.min(0)]]
    });
  }

  buildAttack(values: any): FormGroup {
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
      effect: [values?values['effect']:null, []]
    });
  }

  buildAbility(values: any): FormGroup {
    return this.formBuilder.group({
      name: [values?values['name']:null, [Validators.required]],
      ability_type: [values?values['ability_type']:null, [Validators.required]],
      effect: [values?values['effect']:null, [Validators.required]]
    });
  }

  buildItemComponent(values: any): FormGroup {
    return this.formBuilder.group({
      item: [values?values['item']:null, [Validators.required]],
      source: [values?values['source']:null, [Validators.required]]
    });
  }

  buildMonsterRelationship(values: any): FormGroup {
    return this.formBuilder.group({
      monster_name: [values?values['monster_name']:null, [Validators.required]],
      relationship: [values?values['relationship']:null, [Validators.required, Validators.min(0)]]
    });
  }

  buildAbilityScore(value: any): FormControl {
    return new FormControl(value, [Validators.required, Validators.min(0)]);
  }

  buildSavingThrow(value: any): FormControl {
    return new FormControl(value, [Validators.required]);
  }

  buildLairAction(value: any): FormControl {
    return new FormControl(value?value:null, [Validators.required]);
  }

  buildLairEffect(value: any): FormControl {
    return new FormControl(value?value:null, [Validators.required]);
  }

  setTags(tags: string[]) {
    let tagsList = [];
    for(let tag of tags) {
      tagsList.push({
        name: tag,
        disabled: tag == 'legendary'? true : false
      });
    }
    return tagsList;
  }

  setAbilityTypes(abilityTypes: string[], isLegendary: boolean = false) {
    let atList = [];
    for(let at of abilityTypes) {
      atList.push({
        name: at,
        disabled: at == 'Legendary'? !isLegendary : false
      });
    }
    return atList;
  }
}
