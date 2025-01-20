import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

interface pelicula {
 nombre: string,
 urlImage: string,
 sinopsis: string,
 color: string
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class CardsPage implements OnInit {

  peliculasList: pelicula[] = [
    {
      nombre: 'The monkey man',
      urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUslXqwlwWkZ9BLwBgLp4kXz2MImmzQbltQ&s',
      sinopsis: 'Un hombre que lucha por la corrupcion de su pais',
      color: 'success'
    },
    {
      nombre: 'The boys',
      urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUslXqwlwWkZ9BLwBgLp4kXz2MImmzQbltQ&s',
      sinopsis: 'Un grupo de supers que tratan de detener a una institucion corrupta',
      color: 'warning'
    },
    {
      nombre: 'Gen V',
      urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUslXqwlwWkZ9BLwBgLp4kXz2MImmzQbltQ&s',
      sinopsis: 'Un grupo de estuiantes supers que buscan misterios en su universidad',
      color: 'danger'
    },
    {
      nombre: 'Fallout',
      urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUslXqwlwWkZ9BLwBgLp4kXz2MImmzQbltQ&s',
      sinopsis: 'Una ciudad llena de radiacion y bunkers de experimentos',
      color: 'primary'
    },
    {
      nombre: 'Cien anhos de soledad',
      urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUslXqwlwWkZ9BLwBgLp4kXz2MImmzQbltQ&s',
      sinopsis: 'Una historia basada en los principios de una ciudad colombiana',
      color: 'tertiary'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
