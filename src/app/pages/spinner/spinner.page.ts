import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonSpinner } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.page.html',
  styleUrls: ['./spinner.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class SpinnerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
