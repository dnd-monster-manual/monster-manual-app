export class Monster {
  name: string;
  url: string;
  size: string;
  monster_type: string;
  tags: string[];
  alignment: string;
  ac: number;
  ac_note: string;
  hp: number;
  hd: string;
  speeds: {
    speed_type: string,
    speed: number
  }[];
  ability_scores: number[];
  saving_throws: number[];
  skills: {
    skill: string,
    bonus: number
  }[];
  immunities: string[];
  resistances: string[];
  vulnerabilities: string[];
  condition_immunities: string[];
  senses: {
    sense: string,
    distance: number
  }[];
  languages: string[];
  cr: number;
  xp: number;
  attacks: {
    weapon: string,
    attack_type: string,
    to_hit: number,
    reach: number,
    range: string,
    num_targets: string,
    average_damage: number,
    damage: string,
    damage_type: string,
    effect: string
  }[];
  abilities: {
    name: string,
    ability_type: string,
    effect: string
  }[];
  legendary_actions: number;
  climate: string[];
  terrain: string[];
  rarity: string;
  organization: string;
  activity_cycle: string;
  diet: string;
  physical_description: string;
  habitat_society: string;
  ecology: string;
  item_components: {
    item: string,
    source: string
  }[];
  monster_relationships: {
    monster_id: string,
    relationship: string
  }[];

  constructor() {
    this.name = null;
    this.url = null;
    this.size = null;
    this.monster_type = null;
    this.tags = [];
    this.alignment = null;
    this.ac = null;
    this.ac_note = null;
    this.hp = null;
    this.hd = null;
    this.speeds = [];
    this.ability_scores = [null, null, null, null, null, null];
    this.saving_throws = [null, null, null, null, null, null];
    this.skills = [];
    this.immunities = [];
    this.resistances = [];
    this.vulnerabilities = [];
    this.condition_immunities = [];
    this.senses = [];
    this.languages = [];
    this.cr = null;
    this.xp = null;
    this.attacks = [];
    this.abilities = [];
    this.legendary_actions = null;
    this.climate = [];
    this.terrain = [];
    this.rarity = null;
    this.organization = null;
    this.activity_cycle = null;
    this.diet = null;
    this.physical_description = null;
    this.habitat_society = null;
    this.ecology = null;
    this.item_components = [];
    this.monster_relationships = [];
  }
}
