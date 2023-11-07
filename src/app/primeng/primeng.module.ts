import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
@NgModule({
  exports: [ButtonModule, MenubarModule, ImageModule, PanelModule, CardModule],
})
export class PrimengModule {}
