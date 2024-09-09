import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRPageRoutingModule } from './qr-routing.module';

import { QRPage } from './qr.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRPageRoutingModule,
    RouterLink
  ],
  declarations: [QRPage]
})
export class QRPageModule {}
