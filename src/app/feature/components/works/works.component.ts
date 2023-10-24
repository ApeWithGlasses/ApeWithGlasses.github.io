import { Component } from '@angular/core';
import { Works } from '@shared/models/works';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  works: Works[] = [
    {
      title: 'ModernArtDotCom',
      url: 'https://apewithglasses.me/ModernArtDotCom/',
      desc: 'AI generated modern art.',
      img: 'https://i.imgur.com/jkjyTEG.png',
      imgId: 'modernartdotcom',
      altText: 'ModernArtDotCom Banner',
    },
    {
      title: 'CodeToImage',
      url: 'https://codetoimage.netlify.app/',
      desc: 'Convert your code into beautiful images.',
      img: 'https://i.imgur.com/xYUfAmq.png',
      imgId: 'codetoimage',
      altText: 'CodeToImage Banner',
    },
  ];
}
