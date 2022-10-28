import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  pokemonName:string ='';

  mostrar: boolean = true

  constructor(private route: Router) {  }

  ngOnInit(): void {

  }

  pesquisar(){
    this.pokemonName = this.pokemonName.toLowerCase()
    if(this.pokemonName){
      this.route.navigateByUrl('/pokemon', { skipLocationChange: true}).then(()=> {
        this.route.navigate([`pokemon/${this.pokemonName}`])
      })
      return
    }
    this.route.navigate(['pokemon'])
  }

}
