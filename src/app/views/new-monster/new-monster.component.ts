import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models';
import { ApiService } from '../../services';

@Component({
  selector: 'app-new-monster',
  templateUrl: './new-monster.component.html',
  styleUrls: ['./new-monster.component.scss']
})
export class NewMonsterComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

  createMonster(monster: Monster) {
    this.apiService.createMonster(monster).subscribe();
  }
}
