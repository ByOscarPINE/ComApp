import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonToast } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonToast, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ToastPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
