import { SalaService } from './services/sala.service';
import { Sala } from './models/sala';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  salas:Sala[] = [];

  constructor(private salaService:SalaService) { }

  ngOnInit(): void {
    this.getSalas();
  }

  getSalas(){
    this.salaService.getSalas().subscribe(data => {
      this.salas = data;
    });
  }
  onSubmit(sala: Sala): void{
    console.log(sala);
    //Consumir el API de creacion
    this.salaService.createSala(sala).subscribe(data=>{

      this.getSalas();

    });
  }

}
