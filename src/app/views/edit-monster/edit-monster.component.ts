import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-monster',
  templateUrl: './edit-monster.component.html',
  styleUrls: ['./edit-monster.component.scss']
})
export class EditMonsterComponent implements OnInit {
monster;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.monster = this.route.snapshot.data.monster.body;
  }

}
