import { Component } from '@angular/core';

interface Player {
  dorsal: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string;
  dorsal: number;
  team: Player[]=[];

  constructor() {}

  addPlayer() {
    
  }
}
