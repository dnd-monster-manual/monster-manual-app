export class Monster {
  name: string;
  url: string;
  size: string;
  monster_type: string;
  tags: [string];
  alignment: string;
  ac: number;
  ac_note: string;
  hp: number;
  hd: string;
  speeds: {
    speed_type: string,
    speed: number
  }[];
  ability_scores: [number];
  saving_throws: [number];
  skills: {
    skill: string,
    bonus: number
  }[];
  immunities: [string];
  resistances: [string];
  vulnerabilities: [string];
  condition_immunities: [string];
  senses: {
    sense: string,
    distance: number
  }[];
  languages: [string];
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
  climate: [string];
  terrain: [string];
  rarity: string;
  organization: string;
  activity_cycle: string;
  diet: string;
  physical_description: string;
  habitat_society: string;
  ecology: string;
  item_components: [{
    item: string,
    source: string
  }];
  monster_relationships: [{
    monster_id: string,
    relationship: string
  }];
}
