import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MATERIAL_MODULES = [
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  exports: MATERIAL_MODULES
})
export class SharedModule { }
