import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private itemsLink: string = 'https://angular-html-cb669-default-rtdb.firebaseio.com/productos_idx.json';
  public cargado = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(private http:HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise((resolve, reject) =>
    {
      this.http.get<Producto[]>(this.itemsLink).subscribe(
        (resp: Producto[]) => {
          this.cargado = false;
          this.productos = resp;
          resolve;
        });
    }
    
    )
  
  }

  public getProducto(id: String){
    return this.http.get(`https://angular-html-cb669-default-rtdb.firebaseio.com/productos/${id}.json`);
  }


  buscarProducto(termino: string){

    if (this.productosFiltrados.length === 0){
      this.cargarProductos().then(() => {
        this.filtarProductos(termino);
        return;
      });
    }
    this.filtarProductos(termino);
    
  }

  filtarProductos(termino: string){
    this.productosFiltrados = [];
    
    this.productos.forEach(prod => {
      
      if ((prod.categoria && prod.categoria.indexOf(termino) >= 0) ||(prod.titulo && prod.titulo.indexOf(termino) >= 0)
      ) {
        this.productosFiltrados.push(prod);
      }
    });
  }


}
