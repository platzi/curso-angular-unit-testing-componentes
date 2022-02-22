import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { PicoPreviewComponent } from './components/pico-preview/pico-preview.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { PersonComponent } from './components/person/person.component';
import { PeopleComponent } from './components/people/people.component';
import { ProductComponent } from './components/product/product.component';
import { OthersComponent } from './components/others/others.component';
import { HighligthDirective } from './directives/highligth.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PicoPreviewComponent,
    PersonComponent,
    PeopleComponent,
    ProductComponent,
    OthersComponent,
    HighligthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
