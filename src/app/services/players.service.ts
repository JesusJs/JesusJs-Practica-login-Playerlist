import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private url = 'https://free-nba.p.rapidapi.com/players';
  private apikey = '665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093';


  // https://free-nba.p.rapidapi.com/players

  // "665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093"


  constructor(private httpClient: HttpClient) { }


  getPlayers(){

    const httpHeaders = new HttpHeaders({
      'x-rapidapi-key': `${this.apikey}`

    });



    return this.httpClient.get(`${this.url}`, {headers: httpHeaders});

  }

}
