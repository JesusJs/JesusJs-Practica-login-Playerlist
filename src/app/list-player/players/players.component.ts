import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { map, catchError } from 'rxjs/operators';
import { data } from 'jquery';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = [];
  data: any;

  constructor( private playerlist: PlayersService) { }


  ngOnInit(): void {

     this.playerlist.getPlayers().subscribe( (res: any) =>{

      console.log(res.data)
      this.players = res.data;

    });
  }



}
