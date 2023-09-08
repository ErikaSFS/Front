import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProdutosComponent } from './components/add-produtos/add-produtos.component';
import { ProdutosDetailsComponent } from './components/produtos-details/produtos-details.component';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddProdutosComponent,
    ProdutosDetailsComponent,
    ProdutosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
