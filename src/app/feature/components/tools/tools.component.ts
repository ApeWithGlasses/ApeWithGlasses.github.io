import { Component } from '@angular/core';
import { Tool } from '@shared/models/tool';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent {
  tools: Tool[] = [
    {
      img: 'https://i.imgur.com/HpuPfxj.png',
      title: 'Java',
    },
    {
      img: 'https://i.imgur.com/P86QzA1.png',
      title: 'Spring',
    },
    {
      img: 'https://i.imgur.com/hAkip04.png',
      title: 'Angular',
    },
    {
      img: 'https://i.imgur.com/hSEOLcB.png',
      title: 'Jenkins',
    },
    {
      img: 'https://i.imgur.com/cUkfOIF.png',
      title: 'GActions',
    },
    {
      img: 'https://i.imgur.com/KCZ5aPM.png',
      title: 'React',
    },
    {
      img: 'https://i.imgur.com/Jn6VKYf.png',
      title: 'Figma',
    },
    {
      img: 'https://i.imgur.com/x2xynWd.png',
      title: 'Wordpress',
    },
  ];
}
