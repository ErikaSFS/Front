import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent {
  produtos?: Produtos[];
  currentProdutos: Produtos = {};
  currentIndex = -1;
  nome: '' = "";

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.retrieveProdutos();
  }

  retrieveProdutos(): void {
    this.produtosService.getAll().subscribe({
      next: (data) => {
        this.produtos = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveProdutos();
    this.currentProdutos= {};
    this.currentIndex = -1;
  }

  setActiveProdutos(produtos: Produtos, index: number): void {
    this.currentProdutos = produtos;
    this.currentIndex = index;
  }

  searchNome(): void {
    this.currentProdutos = {};
    this.currentIndex = -1;

    this.produtosService.findByNome(this.nome).subscribe({
      next: (data) => {
        this.produtos = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
