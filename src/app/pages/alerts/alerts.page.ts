import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class AlertsPage implements OnInit {

  alertCtrl = inject(AlertController);
  constructor() { }

  ngOnInit() {
  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      message: 'Hola mundo!'
    });
    await alert.present();
  }

  async openAlert2() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      backdropDismiss: false,
      subHeader: 'Terminos y condiciones',
      message: 'Acepta los terminos y condiciones',
      buttons: [{
        text: 'Aceptar',
        handler: () => console.log('Aceptar')
      }, {
        text: 'Cancelar',
        handler: () => console.log('Cancelar')
      }]
    });
    await alert.present();
  }

  async login() {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      subHeader: 'Ingresa tu email y password',
      buttons: [{
        text: 'Ingresar', handler: () => console.log('Logeado!')
      }],
      inputs: [{
        name: 'email',
        type: 'email',
        placeholder: 'Email'
      }, {
        name: 'password',
        type: 'password',
        placeholder: 'Password'
      }]
    });
    await alert.present();
  }

  async alertMusic() {
    const alert = await this.alertCtrl.create({
      header: 'Selecciona tu musica favorita',
      buttons: [{
        text: 'Aceptar', handler: () => console.log('Aceptado!')
      }],
      inputs: [{
        label: 'Metal',
        type: 'radio',
        value: 'Metal',
      }, {
        label: 'Rock',
        type: 'radio',
        value: 'Rock',
      }, {
        label: 'Pop',
        type: 'radio',
        value: 'Pop',
      }]
    });
    await alert.present();
  }

  async register() {
    const alert = await this.alertCtrl.create({
      header: 'Registro',
      subHeader: 'Ingresa tus datos',
      buttons: [{
      text: 'Crear', handler: () => console.log('Logeado!')
      }, {
      text: 'Cancelar', handler: () => console.log('Cancelado!')
      }],
      inputs: [{
      name: 'nombre',
      type: 'text',
      placeholder: 'Nombre'
      }, {
      name: 'email',
      type: 'email',
      placeholder: 'Email'
      }, {
      name: 'password',
      type: 'password',
      placeholder: 'Password'
      }, {
      name: 'edad',
      type: 'number',
      placeholder: 'Edad'
      }, {
      name: 'telefono',
      type: 'tel',
      placeholder: 'Telefono'
      }]
    });
    await alert.present();
  }

}
