import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, ...args: any): SafeResourceUrl {

    return this.sanitizer.bypassSecurityTrustResourceUrl(value);

  }

}
