import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-monsters',
  templateUrl: './all-monsters.component.html',
  styleUrls: ['./all-monsters.component.scss']
})
export class AllMonstersComponent implements OnInit {
monsters;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.monsters = this.route.snapshot.data.monsterList.body;
  }

}
