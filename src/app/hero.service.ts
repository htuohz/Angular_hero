import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  HEROES : Observable<Hero[]>;
  private _url: string="/assets/jobs.json";
  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this._url);
  }
 

  getHero(jobUrl: any):Observable<Hero> {
      const url2 = '${this._url}/${jobUrl}';
      return this.http.get<Hero>(url2);

  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    private log(message: string) {
      this.messageService.add('HeroService: ${message}');
    }
}
 