import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'buttons',
    loadComponent: () => import('./pages/buttons/buttons.page').then( m => m.ButtonsPage)
  },
  {
    path: 'alerts',
    loadComponent: () => import('./pages/alerts/alerts.page').then( m => m.AlertsPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./pages/cards/cards.page').then( m => m.CardsPage)
  },
  {
    path: 'chips',
    loadComponent: () => import('./pages/chips/chips.page').then( m => m.ChipsPage)
  },
  {
    path: 'fab',
    loadComponent: () => import('./pages/fab/fab.page').then( m => m.FabPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./pages/grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'datetime',
    loadComponent: () => import('./pages/datetime/datetime.page').then( m => m.DatetimePage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./pages/toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'picker',
    loadComponent: () => import('./pages/picker/picker.page').then( m => m.PickerPage)
  },
  {
    path: 'spinner',
    loadComponent: () => import('./pages/spinner/spinner.page').then( m => m.SpinnerPage)
  },
  {
    path: 'item',
    loadComponent: () => import('./pages/item/item.page').then( m => m.ItemPage)
  },
  {
    path: 'item-sliding',
    loadComponent: () => import('./pages/item-sliding/item-sliding.page').then( m => m.ItemSlidingPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./pages/segment/segment.page').then( m => m.SegmentPage)
  }
];
