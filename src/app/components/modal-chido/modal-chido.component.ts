import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, 
  ModalController, IonIcon, IonList, IonInput, IonItem, IonLabel, IonToast } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-modal-chido',
  templateUrl: './modal-chido.component.html',
  styleUrls: ['./modal-chido.component.scss'],
  standalone: true,
  imports: [IonToast, IonLabel, HeaderComponent, IonContent, IonHeader, 
    IonTitle, IonToolbar, IonButton, IonIcon, IonItem, IonList, IonInput],
})
export class ModalChidoComponent  implements OnInit {

  private modalCtrl = inject(ModalController);

  constructor() {
    addIcons({close});
   }

  async closeModal(){
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
