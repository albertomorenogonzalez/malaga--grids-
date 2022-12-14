import { Component } from '@angular/core';

interface Player {
  dorsal:number;
  name:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string;
  dorsal:number;
  team:Player[]=[];

  constructor() {}

  addPlayer(n:string, d:number) {
    this.team.push({dorsal:d,name:n});
    this.name="";
    this.dorsal=null;
  }

  removePlayer(d:number){
    var index = this.team.findIndex((p=>p.dorsal==d));

    if(index>=0){
      this.team.splice(index,1);
    }
  }
}
