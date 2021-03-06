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
  playerInfo = { id: '', abbreviation: '', city: '', conference: '', division: ''}
  data: any;
  expanded = '';
  constructor( private playerlist: PlayersService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  mostrar: boolean = false;



  viewDetail(id: string){
    this.playerlist.getInfoPlayers(id).subscribe( (res: any) => {
      this.expanded = id;
      this.playerInfo = res;

    });
  }


  ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 25
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
