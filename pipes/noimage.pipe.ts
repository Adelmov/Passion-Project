import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any[] ): string {
    if ( !image) {
      return'assests/noimage.png'
    }
    if ( image.length > 0 ){
    return  image[0].url;}
    else {
      return 'assests/noimage.png'
    }


  }

}
