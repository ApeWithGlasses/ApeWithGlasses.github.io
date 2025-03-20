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
      url: 'https://apewithglasses.github.io/ModernArtDotCom/',
      desc: 'AI generated modern art.',
      img: 'https://i.imgur.com/jkjyTEG.png',
      imgId: 'modernartdotcom',
      altText: 'ModernArtDotCom Banner',
      technologies: ['React', 'CSS'],
    },
    {
      title: 'CodeToImage',
      url: 'https://codetoimage.netlify.app/',
      desc: 'Convert your code into beautiful images.',
      img: 'https://i.imgur.com/xYUfAmq.png',
      imgId: 'codetoimage',
      altText: 'CodeToImage Banner',
      technologies: ['React', 'CSS'],
    },
    {
      title: 'FoodMe',
      url: 'https://foodme-platzi-three.vercel.app/',
      desc: 'Improved food delivery app.',
      img: 'https://res.cloudinary.com/dtux0itp7/image/upload/v1726168302/mqa%20portfolio/1ac3dbc9-afe3-468e-afba-9978af53f4b4.png',
      imgId: 'foodme',
      altText: 'FoodMe Banner',
      technologies: ['Angular', 'NodeJS', 'FakeDB', 'CSS'],
    }
  ];
}
