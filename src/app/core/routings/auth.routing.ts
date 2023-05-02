import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "../layouts/auth-layout/auth-layout.component";
import { LoginComponent } from "src/app/features/auth-pages/login/login.component";
import { RegisterComponent } from "src/app/features/auth-pages/register/register.component";

export const AuthRoutes: Routes = [
    { 
        path: '', component: AuthLayoutComponent,
        children: [
            { path: '', redirectTo:'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: '**', redirectTo: 'login' }
        ] 
    },
];