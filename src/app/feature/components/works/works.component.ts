import { Component } from '@angular/core';
import { Works } from '@shared/models/works';
import { NgIf } from '@angular/common';

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
    },
    {
      title: 'Mariana Quintero Portfolio',
      url: 'https://mqa-portfolio.vercel.app/',
      desc: "Mariana Quintero's portfolio replicated from her",
      altDescText: 'Figma design. ↗',
      altLink:
        'https://www.figma.com/proto/xKOChr6IyiBmMJKcV5jyF5/P%C3%81GINA-WEB-MARIANA-QUINTERO-AGUDELO?node-id=3-171&node-type=FRAME&t=VP4hqU8a6yrrUWil-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=244%3A833&show-proto-sidebar=1',
      img: 'https://res.cloudinary.com/dtux0itp7/image/upload/v1726168090/mqa%20portfolio/121e3b37-cfa0-4ecd-8f37-f79700dcd8ac.png',
      imgId: 'mqa-portfolio',
      altText: 'Mariana Quintero Portfolio Banner',
      technologies: ['Angular', 'TailwindCSS'],
    },
  ];
}
