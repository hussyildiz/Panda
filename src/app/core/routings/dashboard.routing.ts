import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";
import { DashboardComponent } from "src/app/features/dashboard/dashboard.component";

export const DashboardRoutes: Routes = [
    { 
        path: '', component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            // { path: 'dashboard', component: DashboardComponent, canActivate:[LoginGuard] },
            { path: 'dashboard', component: DashboardComponent },         
            { path: '**', redirectTo: 'dashboard' }
        ]
    }, 
    
];