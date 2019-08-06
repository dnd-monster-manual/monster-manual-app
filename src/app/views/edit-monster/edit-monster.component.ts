import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from '../../models';
import { ApiService } from '../../services';

@Component({
  selector: 'app-edit-monster',
  templateUrl: './edit-monster.component.html',
  styleUrls: ['./edit-monster.component.scss']
})
export class EditMonsterComponent implements OnInit {
monster: Monster;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.monster = this.route.snapshot.data.monster.body;
  }

  updateMonster(monster: Monster) {
    this.apiService.updateMonster(monster).subscribe();
  }
}
