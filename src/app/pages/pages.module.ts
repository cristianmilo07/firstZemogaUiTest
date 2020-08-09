import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../share/share.module';
import { SpeakOutComponent } from './speak-out/speak-out.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    SpeakOutComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ShareModule,
    ComponentsModule
  ]
})
export class PagesModule { }
