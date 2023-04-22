import { Routes } from "@angular/router";
import { MainLayoutComponent } from "./main-layout.component";
import { DashboardComponent } from "src/app/features/main-pages/dashboard/dashboard.component";

export const MainRoutes: Routes = [
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