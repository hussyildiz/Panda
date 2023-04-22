import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxLoadingModule } from "ngx-loading";
import { AuthRoutes } from "../layouts/auth-layout/auth.routing";
import { LoginComponent } from "src/app/features/auth-pages/login/login.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgxLoadingModule.forRoot({}),
    ],
    declarations: [
        LoginComponent
    ]
})

export class AuthModule { }