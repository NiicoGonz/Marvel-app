import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../service/servicio.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor(private activatedRouted: ActivatedRoute,  private service: ServicioService) {
    this.activatedRouted.params.subscribe(params =>{
      this.obtenerHeroe(params);
    });

  }
  nombre=[];
  ngOnInit(): void {

  }
  async obtenerHeroe (heroe: any) {
    console.log(heroe);
    this.service
      .getRequest(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroe.nombre}&apikey=4f56457f588f74e8bf5cf72d6bf62c77`
      )
      .subscribe((response: any) => {
        const {data}=response;
        const {results}=data;
        this.nombre=results;
        console.log(results);
      }),
      (error: any) => {
        console.log(error);
      };
  }
}
