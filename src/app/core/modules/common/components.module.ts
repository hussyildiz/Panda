import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/common/components/card/card.component';
import { BreadcrumbComponent } from 'src/app/common/components/breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,    
  ],
  declarations: [
    CardComponent,
    BreadcrumbComponent
  ],
  exports: [
    CardComponent,
    BreadcrumbComponent
  ]
})
export class ComponentsModule { }
