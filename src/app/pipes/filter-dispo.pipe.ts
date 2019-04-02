import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDispo'
})
export class FilterDispoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === false) {
      return value;
    }
    const resultadoPost = [];
    for (const producto of value) {
      if (producto.available === true) {
        resultadoPost.push(producto);
      }
    }
    return resultadoPost;
  }

}
