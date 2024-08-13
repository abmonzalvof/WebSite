import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card2 } from '../Models/card.model';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private httpClient: HttpClient) { }

  public getCareers(): Observable<Array<Card2>> {
    return this.httpClient.get<Array<Card2>>('assets/jsons/careers.json')
  }
}
