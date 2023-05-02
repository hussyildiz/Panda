import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxLoadingModule } from "ngx-loading";
import { ComponentsModule } from "../common/components.module";
import { LayoutlarRoutes } from "../../routings/layoutlar.routing";
import { PageLayoutOneComponent } from "src/app/features/layoutlar-pages/page-layout-one/page-layout-one.component";
import { PageLayoutTwoComponent } from "src/app/features/layoutlar-pages/page-layout-two/page-layout-two.component";
import { PageLayoutThreeComponent } from "src/app/features/layoutlar-pages/page-layout-three/page-layout-three.component";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild(LayoutlarRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgxLoadingModule.forRoot({}),
    ],
    declarations: [
        PageLayoutOneComponent,
        PageLayoutTwoComponent,
        PageLayoutThreeComponent
    ]
})

export class LayoutlarModule { }