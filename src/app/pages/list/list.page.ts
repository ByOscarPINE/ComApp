import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, IonItem, IonList, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class ListPage implements OnInit {

  listGames = ['Call of Duty', 'FIFA', 'PES', 'GTA', 'Minecraft', 'Fortnite', 'Among Us', 'Valorant', 'League of Legends', 'Apex Legends'];

  listMovies = ['The Godfather', 'The Shawshank Redemption', 'The Dark Knight', 'The Lord of the Rings', 'Pulp Fiction', 'Fight Club', 'Forrest Gump', 'Inception', 'The Matrix', 'The Silence of the Lambs'];

  constructor() {
    addIcons({heart});
   }

  ngOnInit() {
  }

}
