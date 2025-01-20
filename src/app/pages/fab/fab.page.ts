import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonList, IonItem, IonFabList, IonNav, IonNavLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, eye, trash, beer } from 'ionicons/icons';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: true,
  imports: [IonFabList, IonItem, IonList, IonIcon, IonFabButton, IonFab, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class FabPage implements OnInit {

  constructor(private router: Router) {
    addIcons({add,eye,trash,beer});
   }


  ngOnInit() {
  }

  navigateTo(val: any) {
    this.router.navigateByUrl(`${val}`);
  }

}
