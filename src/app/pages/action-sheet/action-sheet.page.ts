import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { ActionSheetController } from '@ionic/angular'
import { addIcons } from 'ionicons';
import { balloon, close, trash } from 'ionicons/icons';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ActionSheetPage implements OnInit {

  private actionSheetCtrl = inject(ActionSheetController);

  constructor() {
    addIcons({
      balloon,
      trash,
      close
    })
   }

  ngOnInit() {
  }

  async verOpciones(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      mode: 'ios',
      buttons: [{
        text: 'Editar',
        icon: 'balloon',
        handler: () => console.log('Editado')
      }, {
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => console.log('Eliminado')
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => console.log('Cancelado')
      }]
    });
    await actionSheet.present();
  }

  async verMas(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      mode: 'ios',
      cssClass: 'my-action-sheet',
      buttons: [{
        text: 'Editar',
        icon: 'balloon',
        handler: () => console.log('Editado')
      }, {
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => console.log('Eliminado')
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => console.log('Cancelado')
      }]
    });
    await actionSheet.present();
  }

}
