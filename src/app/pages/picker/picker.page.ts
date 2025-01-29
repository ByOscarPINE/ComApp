import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPicker, IonPickerColumnOption, IonPickerColumn } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
  standalone: true,
  imports: [IonPicker, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonPickerColumnOption, IonPickerColumn, HeaderComponent]
})
export class PickerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
