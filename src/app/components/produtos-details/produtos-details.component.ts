import { Component, Input, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/models/produtos.model';


@Component({
  selector: 'app-produtos-details',
  templateUrl: './produtos-details.component.html',
  styleUrls: ['./produtos-details.component.css']
})
export class ProdutosDetailsComponent {
  @Input() viewMode = false;

  @Input() currentProdutos: Produtos= {
    nome: '',
    preco: '',
  };

  message = '';



  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProdutos(this.route.snapshot.params['codigo']);
    }
  }

  getProdutos(codigo: string): void {
    this.produtosService.get(codigo).subscribe({
      next: (data) => {
        this.currentProdutos = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateProdutos(): void {
    this.message = '';

    this.produtosService
      .update(this.currentProdutos.codigo, this.currentProdutos)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'Esse produto foi atualizado com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteProdutos(): void {
    this.produtosService.delete(this.currentProdutos.codigo).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/produtos']);
      },
      error: (e) => console.error(e)
    });
  }
}


