import { Routes } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';

export const routes: Routes = [
    {path: 'house-list', component: HouseListComponent},
    {path: '**', redirectTo: 'house-list'}
];
