import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, ModalController, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { ModalChidoComponent } from 'src/app/components/modal-chido/modal-chido.component';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonIcon]
})
export class ModalPage implements OnInit {

  private modalCtrl = inject(ModalController);

  constructor() {
   }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ModalChidoComponent,
      initialBreakpoint: 0.8,
    });
    await modal.present();
  }

  ngOnInit() {
  }

}
