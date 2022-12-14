import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  ExperienciaLaboral : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let Experiencia1 = {
      Tecnologia: "HTML",
      Area: "Desarrollo Web",
      Nivel: [
        {},{},{},{},{}
      ]
    }

    let Experiencia2 = {
      Tecnologia: "CSS",
      Area: "Desarrollo Web",
      Nivel: [
        {},{},{},{},{}
      ]
    }

    let Experiencia3 = {
      Tecnologia: "JS",
      Area: "Desarrollo Web",
      Nivel: [
        {},{}
      ]
    }

    let Experiencia4 = {
      Tecnologia : "Node JS",
      Area: "Desarrollo Web",
      Nivel: [
        {},{},{}
      ]
    }

    let Experiencia5 = {
      Tecnologia: "REACT",
      Area: "Desarrollo Web",
      Nivel: [
        {},{},{}
      ]
    }

    let Experiencia6 = {
      Tecnologia: "SQL Server",
      Area: "Base de Datos",
      Nivel: [
        {},{},{},{},{}
      ]
    }

    let Experiencia7 = {
      Tecnologia: "MySQL",
      Area: "Base de Datos",
      Nivel: [
        {},{},{},{}
      ]
    }

    let Experiencia8 = {
      Tecnologia: "Draw.io",
      Area: "Diseño de Software",
      Nivel: [
        {},{},{},{}
      ]
    }

    this.ExperienciaLaboral.push(Experiencia1);
    this.ExperienciaLaboral.push(Experiencia2);
    this.ExperienciaLaboral.push(Experiencia3);
    this.ExperienciaLaboral.push(Experiencia4);
    this.ExperienciaLaboral.push(Experiencia5);
    this.ExperienciaLaboral.push(Experiencia6);
    this.ExperienciaLaboral.push(Experiencia7);
    this.ExperienciaLaboral.push(Experiencia8);

  }

}
