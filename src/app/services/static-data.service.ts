import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor() { }

  getSizes() {
    return ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];
  }

  getTypes() {
    return ["Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"];
  }

  getAlignments() {
    return ["Unaligned", "Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil", "Any Lawful", "Any Chaotic", "Any Good", "Any Evil", "Any Neutral"];
  }

  getSpeeds() {
    return ["Walk", "Swim", "Fly", "Hover", "Burrow", "Climb"];
  }

  getAbilityScores() {
    return ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
  }

  getDamageTypes() {
    return ["Acid", "Cold", "Fire", "Lightning", "Poison", "Bludgeoning", "Piercing", "Slashing", "Force", "Necrotic", "Psychic", "Radiant", "Thunder"];
  }

  getConditions() {
    return ["Blinded", "Charmed", "Deafened", "Fatigued", "Frightened", "Grappled", "Incapacitated", "Invisible", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained", "Stunned", "Unconscious"];
  }

  getSenses() {
    return ["Blindsight", "Darkvision", "Telepathy", "Tremorsense", "Truesight"];
  }

  getAbilityTypes() {
    return ["Action", "Passive", "Reaction", "Legendary"];
  }

  getAttackTypes() {
    return ["Melee weapon", "Ranged weapon", "Melee spell", "Ranged spell", "Melee or ranged weapon", "Melee or ranged spell"];
  }

  getTags() {
    return ["aarakocra", "shapechanger", "legendary"];
  }

  getSkills() {
    return ["Acrobatics", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"];
  }
}
