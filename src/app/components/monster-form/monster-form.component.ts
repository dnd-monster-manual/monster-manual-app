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

    // Change url in real time as name is edited
    this.monsterForm.get('name').valueChanges.subscribe(
      value => this.monster.url = this.formatUrl(value)
    );

    // Change related form fields based on whether or not the monster is legendary
    this.monsterForm.get('is_legendary').valueChanges.subscribe(legendary => {
      this.toggleLegendaryTag(legendary);
      this.toggleLegendaryAbilityType(legendary);
    });
  }

  toggleLegendaryAbilityType(legendary: boolean) {
    let abilities = this.monsterForm.get('abilities').value;
    if(!legendary) {
      let i = abilities.findIndex(a => a.ability_type == 'Legendary');
      do {
        abilities.splice(i, 1);
        this.removeFormGroup('abilities', i);
        i = abilities.findIndex(a => a.ability_type == 'Legendary');
      } while(i !== -1)
    }
    this.abilityTypeList = this.formService.setAbilityTypes(this.staticDataService.getAbilityTypes(), legendary);
  }

  toggleLegendaryTag(legendary: boolean) {
    let tags = this.monsterForm.get('tags').value;
    if(legendary && tags.indexOf('legendary') == -1) tags.unshift('legendary');
    else {
      let i = tags.indexOf('legendary');
      if(i !== -1) tags.splice(i, 1);
    }
    this.monsterForm.patchValue({ tags: tags });
  }

  buildForm() {
    this.monsterForm = this.formBuilder.group({
       name: [this.monster.name, [Validators.required]],
       size: [this.monster.size, [Validators.required]],
       monster_type: [this.monster.monster_type, [Validators.required]],
       alignment: [this.monster.alignment, [Validators.required]],
       is_legendary: this.monster.is_legendary,
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

  // Dynamically add form group to form array
  addFormGroup(property: string) {
    let formGroup = new FormGroup({});
    formGroup = <FormGroup>this.formService.buildFormElement(property, this.monster[property]);
    (<FormArray>this.monsterForm.get(property)).push(formGroup);
  }

  // Remove form group from form array at given index
  removeFormGroup(property: string, i: number) {
    (<FormArray>this.monsterForm.get(property)).removeAt(i);
  }

  // Reset all form groups and values in form array
  resetFormArray(property: string) {
    if(property == 'abilities') this.resetMultiple(['is_legendary']);
    this.monsterForm.setControl(property, this.formBuilder.array(this.formService.fillFormArray(property, this.monster[property])));
  }

  // Reset multiple properties on form (usually not form arrays)
  resetMultiple(properties: string[]) {
    let form = {};
    for(let property of properties) {
      form[property] = this.monster[property];
    }
    this.monsterForm.patchValue(form);
  }

  // Check to see if control for given property is valid
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

  // Format name to be url-friendly
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
    this.abilityTypeList = this.formService.setAbilityTypes(this.staticDataService.getAbilityTypes(), this.monster.is_legendary);
    this.attackTypeList = this.staticDataService.getAttackTypes();
    this.tagList = this.formService.setTags(this.staticDataService.getTags());
    this.skillList = this.staticDataService.getSkills();
  }

  submit() {
    let m:Monster = {...this.monster, ...this.monsterForm.value};
    this.submitMonster.emit(m);
  }
}
