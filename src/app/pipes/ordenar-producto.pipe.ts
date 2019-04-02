import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarProducto'
})
export class OrdenarProductoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
      if (arg === '') {
        return value;
      }
      const resultadoPost = [];
      for (const producto of value) {
        if (1 === 1) {
          producto.name.soft();
          resultadoPost.push(producto);
        }
      }
      return resultadoPost;
    }
  }


