import { Component } from '@angular/core';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-add-produtos',
  templateUrl: './add-produtos.component.html',
  styleUrls: ['./add-produtos.component.css']
})
export class AddProdutosComponent {
  produtos: Produtos = {
    nome: '',
    preco: '',
    
  };

  submitted = false;

  constructor(private produtosService: ProdutosService) {}

  saveProdutos(): void {
    const data = {
      nome: this.produtos.nome,
      preco: this.produtos.preco
    };

    this.produtosService.create(data).subscribe({
        next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
    }
  

    newProdutos(): void {
      this.submitted = false;
      this.produtos = {
        nome: '',
        preco: '', 
      };
    }
  }
