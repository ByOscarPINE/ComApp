import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonGrid, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { beer, heart } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonGrid, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class GridPage implements OnInit {
    alertCtrl = inject(AlertController);

  constructor() {
    addIcons({heart,beer});
   }

  ngOnInit() {
  }

  async alert() {
    const alert = await this.alertCtrl.create({
      message: 'Le diste click'
    });
    await alert.present()
  }

}
