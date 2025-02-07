import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { balloon, heart, person, pin, star, add } from 'ionicons/icons';


@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonLabel, IonSegmentButton, IonSegment, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class SegmentPage implements OnInit {
  categorias = ['Hogar', 'Electronica','Belleza', 'Calzado', 'Mascotas', 'Entretenimiento', 'Salud'];
  iconos = ['heart', 'pin','star', 'balloon', 'person'];
  
  constructor() {
    addIcons({add,heart,pin,star,balloon,person});
   }

  ngOnInit() {
  }

}
