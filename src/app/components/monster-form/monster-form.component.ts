import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { StaticDataService, FormService } from '../../services';
import { Monster } from '../../models';

@Component({
  selector: 'app-monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss']
})

export class MonsterFormComponent implements OnInit {

  @Input() monster = new Monster();
  @Input() isNewMonster: boolean = false;
  @Output() submitMonster = new EventEmitter<Monster>();
  monsterForm: FormGroup;

  sizeList = [];
  typeList = [];
  alignmentList = [];
  speedList = [];
  abilityScoreList = [];
  damageTypeList = [];
  conditionList = [];
  senseList = [];
  abilityTypeList = [];
  attackTypeList = [];
  tagList = [];
  skillList = [];

  constructor(private staticDataService: StaticDataService, private formService: FormService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.buildStaticData();
    this.monsterForm.get('name').valueChanges.subscribe(
      value => this.monster.url = this.formatUrl(value)
    );
  }

  buildForm() {
    this.monsterForm = this.formBuilder.group({
       name: [this.monster.name, [Validators.required]],
       size: [this.monster.size, [Validators.required]],
       monster_type: [this.monster.monster_type, [Validators.required]],
       alignment: [this.monster.alignment, [Validators.required]],
       tags: [this.monster.tags],
       ac: [this.monster.ac, [Validators.required]],
       ac_note: this.monster.ac_note,
       hp: [this.monster.hp, [Validators.required]],
       hd: [this.monster.hd, [Validators.required]],
       speeds: this.formBuilder.array(this.formService.fillFormArray('speeds', this.monster['speeds'])),
       ability_scores: this.formBuilder.array(this.formService.fillFormArray('ability_scores', this.monster['ability_scores'])),
       saving_throws: this.formBuilder.array(this.formService.fillFormArray('saving_throws', this.monster['saving_throws'])),
       immunities: [this.monster.immunities],
       resistances: [this.monster.resistances],
       vulnerabilities: [this.monster.vulnerabilities],
       condition_immunities: [this.monster.condition_immunities],
       skills: this.formBuilder.array(this.formService.fillFormArray('skills', this.monster['skills'])),
       senses: this.formBuilder.array(this.formService.fillFormArray('senses', this.monster['senses'])),
       languages: [this.monster.languages],
       cr: [this.monster.cr, [Validators.required]],
       xp: [this.monster.xp, [Validators.required]],
       legendary_actions: this.monster.legendary_actions,
       abilities: this.formBuilder.array(this.formService.fillFormArray('abilities', this.monster['abilities'])),
       attacks: this.formBuilder.array(this.formService.fillFormArray('attacks', this.monster['attacks'])),
       climate: [this.monster.climate],
       terrain: [this.monster.terrain],
       rarity: this.monster.rarity,
       organization: this.monster.organization,
       activity_cycle: this.monster.activity_cycle,
       diet: this.monster.diet,
       physical_description: this.monster.physical_description,
       habitat_society: this.monster.habitat_society,
       ecology: this.monster.ecology,
       item_components: this.formBuilder.array(this.formService.fillFormArray('item_components', this.monster['item_components'])),
       monster_relationships: this.formBuilder.array(this.formService.fillFormArray('monster_relationships', this.monster['monster_relationships']))
    });
  }

  addFormGroup(property: string) {
    let formGroup = new FormGroup({});
    formGroup = <FormGroup>this.formService.buildFormElement(property, this.monster[property]);
    (<FormArray>this.monsterForm.get(property)).push(formGroup);
  }

  removeFormGroup(property: string, i: number) {
    (<FormArray>this.monsterForm.get(property)).removeAt(i);
  }

  resetFormArray(property: string) {
    this.monsterForm.setControl(property, this.formBuilder.array(this.formService.fillFormArray(property, this.monster[property])));
  }

  resetMultiple(properties: string[]) {
    let form = {};
    for(let property of properties) {
      form[property] = this.monster[property];
    }
    this.monsterForm.patchValue(form);
  }

  isInvalid(property: string, index?: number, nestedProperty?: string) {
    let control = this.monsterForm.get(property);
    if(index !== undefined) {
      control = (<FormArray>control).controls[index];
      if(nestedProperty) {
        control = (<FormGroup>control).controls[nestedProperty];
      }
    }
    return (control.touched || control.dirty) && !control.valid;
  }

  formatUrl(name: string) {
    var regex = /[^0-9a-zA-Z]/gi;
    return name.toLowerCase().replace(regex,'');
  }

  buildStaticData() {
    this.sizeList = this.staticDataService.getSizes();
    this.typeList = this.staticDataService.getTypes();
    this.alignmentList = this.staticDataService.getAlignments();
    this.speedList = this.staticDataService.getSpeeds();
    this.abilityScoreList = this.staticDataService.getAbilityScores();
    this.damageTypeList = this.staticDataService.getDamageTypes();
    this.conditionList = this.staticDataService.getConditions();
    this.senseList = this.staticDataService.getSenses();
    this.abilityTypeList = this.staticDataService.getAbilityTypes();
    this.attackTypeList = this.staticDataService.getAttackTypes();
    this.tagList = this.staticDataService.getTags();
    this.skillList = this.staticDataService.getSkills();
  }

  submit() {
    let m:Monster = {...this.monster, ...this.monsterForm.value};
    this.submitMonster.emit(m);
  }
}
