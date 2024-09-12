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
      altText: 'Java Icon',
    },
    {
      img: 'https://i.imgur.com/P86QzA1.png',
      title: 'Spring',
      altText: 'Spring Icon',
    },
    {
      img: 'https://i.imgur.com/hAkip04.png',
      title: 'Angular',
      altText: 'Angular Icon',
    },
    {
      img: 'https://i.imgur.com/hSEOLcB.png',
      title: 'Jenkins',
      altText: 'Jenkins Icon',
    },
    {
      img: 'https://i.imgur.com/cUkfOIF.png',
      title: 'GhActions',
      altText: 'Github Actions Icon',
    },
    {
      img: 'https://i.imgur.com/KCZ5aPM.png',
      title: 'React',
      altText: 'React Icon',
    },
    {
      img: 'https://i.imgur.com/Jn6VKYf.png',
      title: 'Figma',
      altText: 'Figma Icon',
    },
    {
      img: 'https://i.imgur.com/idH5tn5.png',
      title: 'Wordpress',
      altText: 'Wordpress Icon',
    },
    {
      img: 'https://res.cloudinary.com/dtux0itp7/image/upload/v1726168578/Tailwind_CSS_Logo.svg-min_ebadpz.png',
      title: 'TailwindCSS',
      altText: 'Tailwind Icon',
    },
    {
      img: 'https://res.cloudinary.com/dtux0itp7/image/upload/v1726168646/nextjs-min_dxxjui.png',
      title: 'NextJS',
      altText: 'NextJS Icon',
    },
    {
      img: 'https://res.cloudinary.com/dtux0itp7/image/upload/v1726168705/vercel-logo-F748E39008-seeklogo.com_ifruw4.png',
      title: 'Vercel',
      altText: 'Vercel Icon',
    },
    {
      img: 'https://res.cloudinary.com/dtux0itp7/image/upload/v1726168793/azure-min_efgkab.png',
      title: 'AzureDevops',
      altText: 'Azure Icon',
    },
  ];
}
