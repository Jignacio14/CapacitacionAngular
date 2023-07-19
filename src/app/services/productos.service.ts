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

  constructor(private http:HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get<Producto[]>(this.itemsLink).subscribe(
      (resp: Producto[]) => {
        this.cargado = false;
        this.productos = resp;
      });
  
  }

  public getProducto(id: String){
    return this.http.get(`https://angular-html-cb669-default-rtdb.firebaseio.com/productos/${id}.json`);
  }


}
