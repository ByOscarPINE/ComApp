import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, balloon, rocket, fastFood, trash, star, globe, americanFootballOutline, baseballOutline, basketOutline, basketballOutline } from 'ionicons/icons';

interface menuItem {
  title: string;
  icon: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, RouterLink],
})

export class HomePage {
  menuList: menuItem[] =[
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'heart',
      color: 'danger'
    },
    {
      title: 'Alerts',
      url: '/alerts',
      icon: 'balloon',
      color: 'primary'
    },
    {
      title: 'Action Sheet',
      url: '/action-sheet',
      icon: 'rocket',
      color: 'success'
    },
    {
      title: 'Cards',
      url: '/cards',
      icon: 'star',
      color: 'warning'
    },
    {
      title: 'Chips',
      url: '/chips',
      icon: 'trash',
      color: 'secondary'
    },
    {
      title: 'Fab',
      url: '/fab',
      icon: 'globe',
      color: 'dark'
    },
    {
      title: 'Grid',
      url: '/grid',
      icon: 'american-football-outline',
      color: 'tertiary'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'baseball-outline',
      color: 'danger'
    },
    {
      title: 'Datetime',
      url: '/datetime',
      icon: 'basketball-outline',
      color: 'primary'
    },

  ];
  constructor() {
    addIcons({
      heart,
      balloon,
      rocket,
      globe,
      trash,
      star,
      americanFootballOutline,
      baseballOutline,
      basketballOutline
    })
  }
}
