import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models';

@Component({
  selector: 'app-new-monster',
  templateUrl: './new-monster.component.html',
  styleUrls: ['./new-monster.component.scss']
})
export class NewMonsterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  createMonster(monster: Monster) {
    console.log(monster);
    //this.apiService.createMonster(monster);
  }
}
