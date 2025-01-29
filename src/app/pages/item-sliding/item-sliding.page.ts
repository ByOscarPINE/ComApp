import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItemSliding, IonList, IonLabel, IonItem, IonItemOption, IonItemOptions } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-item-sliding',
  templateUrl: './item-sliding.page.html',
  styleUrls: ['./item-sliding.page.scss'],
  standalone: true,
  imports: [IonItemOptions, IonItemOption, IonItem, IonLabel, IonList, IonItemSliding, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ItemSlidingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
