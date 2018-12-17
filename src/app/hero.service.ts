import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of, observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Console } from '@angular/core/src/console';
import { catchError, map, tap} from 'rxjs/operators';
import { HeroesComponent } from './heroes/heroes.component';
import { forEach } from '@angular/router/src/utils/collection';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _url: string="/assets/jobs.json";
  
  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this._url)
  }
 

  getHero(id: number) :Observable<Hero>{
    var hero;
    var heroes = this.getHeroes();
    for (var i = 0, len = 999; i < len; i++) {
      if(heroes[i].jobID == id)
      {
        hero = heroes[i];
        console.log(i);
      }
    }
    return hero;
    }

    

    
    
  
  

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    private log(message: string) {
      this.messageService.add('HeroService: ${message}');
    }
}
 