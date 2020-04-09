import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  status = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.status);

  }

  toggleStatus(): void{
    if(this.status){
      this.status = false;
    } else {
      this.status = true;
    }
  }

}
