import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../service/servicio.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  constructor(private servicio : ServicioService) {}
  apikey= 'a7c8869708fbdd8bcb872041697e0020';
  nombre :any=[];
  load=false;
  numero =  Math.floor(Math.random() * (1500 - 1)) + 1;;
  ngOnInit(): void {
    this.getComics();
    console.log(this.numero);
  }


 async getComics()  {
    this.servicio
      .getRequest(
      `https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=${this.numero}&apikey=${this.apikey}`
      )
      .subscribe((response: any) => {
        this.load=true;
        const {data}=response;
        const {results}=data;
        this.nombre=results;
        console.log(response);

      }),
      // tslint:disable-next-line: no-unused-expression
      (error:any) => {
        console.log(error.status);
      };
  }
}
