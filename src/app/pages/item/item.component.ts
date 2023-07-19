import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {



  constructor(private route: ActivatedRoute, private productoService: ProductosService){

  }

  ngOnInit() {
    this.route.params.subscribe
    (parametros => {
      this.productoService.getProducto(parametros['id'])
      .subscribe( producto => {
        
      })
    })
  }

}
