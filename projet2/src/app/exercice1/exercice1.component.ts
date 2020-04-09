import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  fruit = 'Pomme';
  lien = 'https://www.icone-png.com/png/13/13144.png';
  constructor() { }

  ngOnInit(): void {
  }

  toggleFruit(): void{
    if(this.fruit === 'Pomme'){
      this.fruit = 'Poire';
      this.lien = 'https://www.icone-png.com/png/13/13294.png';
    } else {
      this.fruit = 'Pomme';
      this.lien = 'https://www.icone-png.com/png/13/13144.png';
    }


  }

}
