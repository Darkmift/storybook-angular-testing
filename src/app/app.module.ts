import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponentsModule } from './modules/base-components/base-components.module';
import { LayoutModule } from './shared/Layout/layout.module';
import { MainContentComponent } from './main-content/main-content.component';
import { MaterialUiModule } from './modules/material-ui/material-ui.module';

@NgModule({
  declarations: [AppComponent, MainContentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    BaseComponentsModule,
    MaterialUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
