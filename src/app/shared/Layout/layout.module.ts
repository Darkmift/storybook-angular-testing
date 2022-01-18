import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent as AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  declarations: [AppHeaderComponent],
  imports: [CommonModule],
  exports: [AppHeaderComponent],
})
export class LayoutModule {}
