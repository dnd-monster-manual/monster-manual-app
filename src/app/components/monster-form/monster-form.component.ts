import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { StaticDataService } from '../../services';
import { Monster } from '../../models';

@Component({
  selector: 'app-monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss']
})

export class MonsterFormComponent implements OnInit {

  @Input() monster = new Monster();
  monsterForm: FormGroup;
  @Output() submitMonster = new EventEmitter<Monster>();
  sizeList = [];
  typeList = [];
  alignmentList = [];
  speedList = [];
  abilityScoreList = [];
  damageTypeList = [];
  conditionList = [];
  senseList = [];
  abilityTypeList = [];
  tagList = [];
  skillList = [];

  constructor(private staticDataService: StaticDataService, private formBuilder: FormBuilder) { }

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
       monster_type: this.monster.monster_type,
       alignment: this.monster.alignment,
       tags: [this.monster.tags],
       ac: this.monster.ac,
       ac_note: this.monster.ac_note,
       hp: this.monster.hp,
       hd: this.monster.hd,
       speeds: this.formBuilder.array(this.fillFormArray('speeds')),
       ability_scores: this.formBuilder.array(this.monster.ability_scores),
       saving_throws: this.formBuilder.array(this.monster.saving_throws),
       immunities: [this.monster.immunities],
       resistances: [this.monster.resistances],
       vulnerabilities: [this.monster.vulnerabilities],
       condition_immunities: [this.monster.condition_immunities],
       skills: this.formBuilder.array(this.fillFormArray('skills')),
       senses: this.formBuilder.array(this.fillFormArray('senses')),
       languages: [this.monster.languages],
       cr: this.monster.cr,
       xp: this.monster.xp,
       attacks: this.formBuilder.array(this.fillFormArray('attacks'))
    });
  }

  fillFormArray(property: string) {
    let formArray = [];
      for(let object of this.monster[property]) {
        let properties = Object.keys(object);
        let formGroup = new FormGroup({});
        for(let prop of properties) {
          if(prop !== '_id') {
            let formControl = new FormControl(object[prop]);
            formGroup.addControl(prop, formControl);
          }
        }
        formArray.push(formGroup);
      }
    return formArray;
  }

  addFormGroup(property: string) {
    let formGroup = new FormGroup({});
    let properties = Object.keys(this.monster[property][0]);
    for(let property of properties) {
      if(property !== '_id') {
        let formControl = new FormControl(null);
        formGroup.addControl(property, formControl);
      }
    }
    (<FormArray>this.monsterForm.get(property)).push(formGroup);
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
    this.tagList = this.staticDataService.getTags();
    this.skillList = this.staticDataService.getSkills();
  }

  submit() {
    let m:Monster = {...this.monster, ...this.monsterForm.value};
    this.submitMonster.emit(m);
  }
}
