import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {

  productos: Producto[] = [];

  constructor(public productoService: ProductosService){
    
  }

  ngOnInit(){

  }
}
