import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  email: string | undefined;

  constructor() { }

  //a really ineffective way to stop spammers, but I might as well try to weed out a good chunk of them
  ngOnInit(): void {

    // setTimeout(() => this.email = atob(atob('YldGcGJIUnZPbTFsYkdsclpXTm9iMk52UUdkdFlXbHNMbU52YlE9PQ==')), 1000);

    // setTimeout(() => {

    //   // Email obfuscator script 2.1 by Tim Williams, University of Arizona
    //   // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
    //   // This code is freeware provided these four comment lines remain intact
    //   // A wizard to generate this code is at http://www.jottings.com/obfuscator/

    //   const coded = "RSFciSPHbPb@5RVcF.PbR"
    //   const key = "MmjstTqyJkPg2d409eAFCuRoa67hXLiO5xwZnYSpr8G3bVWvH1zcNIEfUKBDlQ"
    //   const shift = coded.length
    //   let link = ""

    //   for (let i = 0; i < coded.length; i++) {

    //     if (key.indexOf(coded.charAt(i)) == -1) {

    //       const ltr = coded.charAt(i)
    //       link += (ltr)

    //     }
    //     else {

    //       const ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
    //       link += (key.charAt(ltr))

    //     }

    //   }

    //   this.email = 'mailto:' + link;

    // }, 1000);

    setTimeout(() => {
      this.email = 'mailto:&#x63;&#x68;&#x61;&#x6E;&#x67;&#x2E;&#x65;&#x64;&#x67;&#x61;&#x72;&#x31;&#x34;&#x37;&#x36;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;';
    }, 1000);

  }

}
