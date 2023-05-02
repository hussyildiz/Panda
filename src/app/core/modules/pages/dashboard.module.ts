import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxLoadingModule } from "ngx-loading";
import { DashboardComponent } from "src/app/features/dashboard/dashboard.component";
import { ComponentsModule } from "../common/components.module";
import { DashboardRoutes } from "../../routings/dashboard.routing";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgxLoadingModule.forRoot({}),
    ],
    declarations: [
        DashboardComponent
    ]
})

export class DashboardModule { }