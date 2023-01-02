import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataFormModule } from './data-form/data-form.module';
import { TemplateFormModule } from './template-form/template-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TemplateFormModule,
    DataFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
