import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardComponent } from './agile/asdImplementation/dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AsdComponent } from './agile/asd/asd.component'; // Import the ASD component
import { AsdImpComponent } from './agile/asdImplementation/asd-imp/asd-imp.component';
import { StatisticsComponent } from './agile/asdImplementation/statistics/statistics.component';
import { CreateProjectDialogComponent } from './agile/asdImplementation/create-project-dialog/create-project-dialog.component';
import { ArchivedItemsComponent } from './agile/asdImplementation/archived-items/archived-items.component';



const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: 'agile/asd', // Add the route for ASD
      component: AsdComponent,
    },
    {
      path: 'agile/asd-imp', 
      component: AsdImpComponent,
    },
    {
      path: 'agile/dashASD',
      component: DashboardComponent,
    },
    {
      path: 'agile/dashASD/stat', 
      component: StatisticsComponent,
    },
    { path: 'agile/dashASD/archived-items', component: ArchivedItemsComponent },
    
    {

      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
