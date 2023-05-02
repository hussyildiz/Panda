import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";
import { BootstrapAccordionComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-accordion/bootstrap-accordion.component";
import { BootstrapAlertsComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-alerts/bootstrap-alerts.component";
import { BootstrapBreadcrumbComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-breadcrumb/bootstrap-breadcrumb.component";
import { BootstrapButtonsComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-buttons/bootstrap-buttons.component";
import { BootstrapButtonGroupComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-button-group/bootstrap-button-group.component";
import { BootstrapCardsComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-cards/bootstrap-cards.component";
import { BootstrapBadgesComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-badges/bootstrap-badges.component";

export const ComponentlerRoutes: Routes = [
    { 
        path: '', component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'sayfa-layout-1', pathMatch: 'full' },
            // { path: 'dashboard', component: DashboardComponent, canActivate:[LoginGuard] },
            { path: 'bootstrap/bootstrap-accordion', component: BootstrapAccordionComponent },
            { path: 'bootstrap/bootstrap-alerts', component: BootstrapAlertsComponent },   
            { path: 'bootstrap/bootstrap-badges', component: BootstrapBadgesComponent },   
            { path: 'bootstrap/bootstrap-breadcrumb', component: BootstrapBreadcrumbComponent },   
            { path: 'bootstrap/bootstrap-buttons', component: BootstrapButtonsComponent },   
            { path: 'bootstrap/bootstrap-button-group', component: BootstrapButtonGroupComponent },  
            { path: 'bootstrap/bootstrap-cards', component: BootstrapCardsComponent },   
        ]
    }, 
    
];