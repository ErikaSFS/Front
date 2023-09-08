import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';
import { ProdutosDetailsComponent } from './components/produtos-details/produtos-details.component';
import { AddProdutosComponent } from './components/add-produtos/add-produtos.component';


const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full'},
  { path: 'produtos', component: ProdutosListComponent},
  { path: 'produtos/:id', component: ProdutosDetailsComponent},
  { path: 'add', component: AddProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
