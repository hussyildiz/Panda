import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { NgxLoadingModule } from "ngx-loading";
import { MainRoutes } from "../layouts/main-layout/main.routing";
import { DashboardComponent } from "src/app/features/main-pages/dashboard/dashboard.component";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(MainRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgbModule,       
        SweetAlert2Module.forRoot(),
        NgxLoadingModule.forRoot({}),
    ]
})

export class MainModule { }