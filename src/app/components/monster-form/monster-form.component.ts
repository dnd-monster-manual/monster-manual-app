import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StaticDataService } from '../../services';
import { Monster } from '../../models';

@Component({
  selector: 'app-monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss']
})
export class MonsterFormComponent implements OnInit {
@Input() monster = new Monster();
sizes;
types;
alignments;
speeds;
ability_scores;
damage_types;
conditions;
senses;
ability_types;
tags;
monsterForm: FormGroup;

@Output() submitMonster = new EventEmitter<Monster>();

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
       name: this.monster.name,
       size: this.monster.size,
       monsterType: this.monster.monster_type,
       alignment: this.monster.alignment,
       selectedTags: [],
       ac: this.monster.ac,
       acNote: this.monster.ac_note,
       hp: this.monster.hp,
       hd: this.monster.hd,
       abilityScores: this.formBuilder.array(this.monster.ability_scores),
       savingThrows: this.formBuilder.array(this.monster.saving_throws)
       // speeds: this.formBuilder.array([this.formBuilder.group({
       //   speedType: '',
       //   speedDistance: null
       // })])
    });

    this.monsterForm.patchValue({
      selectedTags: this.monster.tags
    });

    console.log(this.monsterForm);
  }

  formatUrl(name) {
    var regex = /[^0-9a-zA-Z]/gi;
    return name.toLowerCase().replace(regex,'');
  }

  buildStaticData() {
    this.sizes = this.staticDataService.getSizes();
    this.types = this.staticDataService.getTypes();
    this.alignments = this.staticDataService.getAlignments();
    this.speeds = this.staticDataService.getSpeeds();
    this.ability_scores = this.staticDataService.getAbilityScores();
    this.damage_types = this.staticDataService.getDamageTypes();
    this.conditions = this.staticDataService.getConditions();
    this.senses = this.staticDataService.getSenses();
    this.ability_types = this.staticDataService.getAbilityTypes();
    this.tags = this.staticDataService.getTags();
  }

  submit() {
    this.submitMonster.emit(this.monster);
  }
}
