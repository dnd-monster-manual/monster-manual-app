import { Component, OnInit, Input } from '@angular/core';
import { StaticDataService } from '../../services';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss']
})
export class MonsterFormComponent implements OnInit {
@Input() monster;
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

  constructor(private staticDataService: StaticDataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if(!this.monster) this.newEmptyMonster();
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
       speeds: this.formBuilder.array([this.formBuilder.group({
         speedType: '',
         speedDistance: null
       })])
    });

    this.monsterForm.patchValue({
      selectedTags: this.monster.tags
    });

    console.log(this.monsterForm);
  }

  newEmptyMonster() {
    this.monster = {
      name: null,
      url: null,
      size: null,
      monster_type: null,
      alignment: null,
      tags: [],
      ac: null,
      ac_note: null,
      hp: null,
      hd: null,
      speeds: [],
      ability_scores: [],
      saving_throws: [],
      skills: [],
      immunities: [],
      resistances: [],
      vulnerabilities: [],
      condition_immunities: [],
      senses: [],
      languages: [],
      cr: null,
      xp: null,
      attacks: [],
      abilities: [],
      legendary_actions: null,
      climate: [],
      terrain: [],
      rarity: null,
      organization: null,
      activity_cycle: null,
      diet: null,
      physical_description: null,
      habitat_society: null,
      ecology: null,
      item_components: [],
      monster_relationships: []
    }
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
}
