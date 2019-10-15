import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../explore/explore.module').then(m => m.ExplorePageModule)
          }
        ]
      },
      {
        path: 'live',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../live/live.module').then(m => m.LivePageModule)
          }
        ]
      },
      {
        path: 'saved',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../saved/saved.module').then(m => m.SavedPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'tabs',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
