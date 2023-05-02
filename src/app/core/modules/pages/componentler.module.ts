import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxLoadingModule } from "ngx-loading";
import { ComponentsModule } from "../common/components.module";
import { ComponentlerRoutes } from "../../routings/componentler.routing";
import { BootstrapAccordionComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-accordion/bootstrap-accordion.component";
import { BootstrapAlertsComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-alerts/bootstrap-alerts.component";
import { BootstrapBadgesComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-badges/bootstrap-badges.component";
import { BootstrapBreadcrumbComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-breadcrumb/bootstrap-breadcrumb.component";
import { BootstrapButtonsComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-buttons/bootstrap-buttons.component";
import { BootstrapButtonGroupComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-button-group/bootstrap-button-group.component";
import { BootstrapCardsComponent } from "src/app/features/component-pages/bootstrap-components/bootstrap-cards/bootstrap-cards.component";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild(ComponentlerRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgxLoadingModule.forRoot({}),
    ],
    declarations: [       
        BootstrapAccordionComponent,
        BootstrapAlertsComponent,
        BootstrapBadgesComponent,
        BootstrapBreadcrumbComponent,
        BootstrapButtonsComponent,
        BootstrapButtonGroupComponent,
        BootstrapCardsComponent,
    ]
})

export class ComponentlerModule { }