import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";
import { PageLayoutOneComponent } from "src/app/features/layoutlar-pages/page-layout-one/page-layout-one.component";
import { PageLayoutTwoComponent } from "src/app/features/layoutlar-pages/page-layout-two/page-layout-two.component";
import { PageLayoutThreeComponent } from "src/app/features/layoutlar-pages/page-layout-three/page-layout-three.component";

export const LayoutlarRoutes: Routes = [
    { 
        path: '', component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'sayfa-layout-1', pathMatch: 'full' },
            // { path: 'dashboard', component: DashboardComponent, canActivate:[LoginGuard] },
            { path: 'sayfa-layout-1', component: PageLayoutOneComponent },   
            { path: 'sayfa-layout-2', component: PageLayoutTwoComponent },  
            { path: 'sayfa-layout-3', component: PageLayoutThreeComponent },  
        ]
    }, 
    
];