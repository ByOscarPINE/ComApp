import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonAvatar, IonChip, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [IonLabel, IonChip, IonAvatar, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
