import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "./auth-layout.component";
import { LoginComponent } from "src/app/features/auth-pages/login/login.component";

export const AuthRoutes: Routes = [
    { 
        path: '', component: AuthLayoutComponent,
        children: [
            { path: '', redirectTo:'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'login' }
        ] 
    },
];