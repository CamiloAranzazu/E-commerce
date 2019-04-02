import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') {
      return value;
    }
    const resultadoPost = [];
    for (const producto of value) {
      if (producto.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoPost.push(producto);
      }
    }
    return resultadoPost;
  }
}
