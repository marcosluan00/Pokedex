import { Component, OnInit } from '@angular/core';
import { Event, RouterEvent, Router} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exibir: boolean = true;

  constructor(private route: Router) { 
    route.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      if(e.url == '/pokemon'){
        return this.exibir = true
      } 
      return this.exibir = false
    })
  }

  ngOnInit(): void {
    
  }

}
