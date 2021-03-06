import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.local';
import { Monster } from '../models'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get ApiBaseUrl(): string {
    return environment.api_url;
  }

  getMonsters(): Observable<HttpResponse<Monster[]>> {
    return this.http.get<Monster[]>(this.ApiBaseUrl+'monsters', {observe: 'response'});
  }

  getMonsterById(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ApiBaseUrl+'monsters/' + id, {observe: 'response'});
  }

  getMonsterByName(url: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ApiBaseUrl+'monsters/' + url, {observe: 'response'});
  }

  createMonster(monster: Monster): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.ApiBaseUrl+'monsters', monster, {observe: 'response'});
  }

  updateMonster(monster: Monster): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.ApiBaseUrl+'monsters/' + monster.url, monster, {observe: 'response'});
  }
}
