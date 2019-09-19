import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticDataService } from '../../services';

@Component({
  selector: 'app-view-monster',
  templateUrl: './view-monster.component.html',
  styleUrls: ['./view-monster.component.scss']
})
export class ViewMonsterComponent implements OnInit {
monster;
skills;
abilityScoreList;

  constructor(private route: ActivatedRoute, private staticDataService: StaticDataService) { }

  ngOnInit() {
    this.monster = this.route.snapshot.data.monster.body;
    this.calculateSkills();
    this.abilityScoreList = this.staticDataService.getAbilityScores();
  }

  calculateSkills() {
    let baseSkills = [
      { skill: "Acrobatics", ability: 2},
      { skill: "Animal Handling", ability: 5},
      { skill: "Arcana", ability: 4},
      { skill: "Athletics", ability: 1},
      { skill: "Deception", ability: 6},
      { skill: "History", ability: 4},
      { skill: "Insight", ability: 5},
      { skill: "Intimidation", ability: 6},
      { skill: "Investigation", ability: 4},
      { skill: "Medicine", ability: 5},
      { skill: "Nature", ability: 4},
      { skill: "Perception", ability: 5},
      { skill: "Performance", ability: 6},
      { skill: "Persuasion", ability: 6},
      { skill: "Religion", ability: 5},
      { skill: "Sleight of Hand", ability: 2},
      { skill: "Stealth", ability: 2},
      { skill: "Survival", ability: 5}];
    this.skills = [];
    for(let i = 0; i < baseSkills.length; i++)
    {
      let skill = baseSkills[i].skill;
      let abilityScore = this.monster.ability_scores[baseSkills[i].ability-1];
      let bonus = this.calculateBonus(abilityScore);
      this.monster.skills.forEach(s => {
        if(s.skill == skill.toLowerCase())
        { bonus = s.bonus }
      });
      this.skills.push({
        skill: skill,
        bonus: bonus
      });
    }

  }

  calculateBonus(abilityScore) {
    return Math.floor((abilityScore-10)/2);
  }

}
