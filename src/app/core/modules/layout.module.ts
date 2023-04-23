import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../layouts/main-layout/footer/footer.component';
import { HeaderComponent } from '../layouts/main-layout/header/header.component';
import { HeaderLogoComponent } from '../layouts/main-layout/header/header-logo/header-logo.component';
import { HeaderSearchComponent } from '../layouts/main-layout/header/header-search/header-search.component';
import { HeaderMenuComponent } from '../layouts/main-layout/header/header-menu/header-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,    
  ],
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderSearchComponent,
    HeaderMenuComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderSearchComponent,
    HeaderMenuComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
