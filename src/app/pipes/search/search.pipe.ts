import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';


@Pipe({
  name: 'search'
})


export class SearchPipe implements PipeTransform {

  transform(value: any, keys: string, term: string) {
    // console.log('value', value,'keys', keys, 'term', term)
    if (!term) {
      return value;
    }
    return (value.filteredData || []).filter((item:any) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }

}
