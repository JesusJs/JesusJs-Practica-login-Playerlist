import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = [];
  data: any;

  constructor( private playerlist: PlayersService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5
      };

      this.playerlist.getPlayers().subscribe( (res: any) =>{

       console.log(res.data)
       this.players = res.data;
       this.dtTrigger.next();
    });



    }

    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
    }



}
