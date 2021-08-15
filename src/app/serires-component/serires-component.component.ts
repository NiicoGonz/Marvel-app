import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../service/servicio.service';
@Component({
  selector: 'app-serires-component',
  templateUrl: './serires-component.component.html',
  styleUrls: ['./serires-component.component.css'],
})
export class SeriresComponentComponent implements OnInit {
  constructor(private service: ServicioService) {}
  apikey = '4f56457f588f74e8bf5cf72d6bf62c77';
  numero = Math.floor(Math.random() * (1500 - 1)) + 1;
  nombre=[];
  load=false;
  ngOnInit(): void {
    this.getSeries();
  }
  async getSeries() {
    this.service
      .getRequest(
        `https://gateway.marvel.com:443/v1/public/series?limit=100&offset=${this.numero}&apikey=${this.apikey}`
      )
      .subscribe((response: any) => {
        this.load=true;
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
