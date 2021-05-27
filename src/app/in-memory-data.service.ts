import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const activities = [
      {
        id: 1,
        user: 'John Stainor',
        status: 'commented',
        description: 'Well i am liking how it captures the auditor',
        date: '2 seconds ago',
        icon: 'fas fa-comment',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/SirJohnStainer.JPG'
      },
      {
        id: 2,
        user: 'John Stainor',
        status: 'added a new video',
        description: 'Creative people must follow these guidelines',
        date: '5 minute ago',
        icon: 'fas fa-video',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/SirJohnStainer.JPG'
      },
      {
        id: 3,
        user: 'John Stainor',
        status: 'connected',
        description: 'How to become an expert',
        date: '1 day ago',
        icon: 'far fa-sticky-note',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/SirJohnStainer.JPG'
      },
      {
        id: 4,
        user: 'Arjun',
        status: 'unlocked the badge',
        description: 'Social Guru',
        date: '44 minute ago',
        icon: 'fas fa-unlock-alt',
        imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        id: 5,
        user: 'Micheal',
        status: 'uploaded a new video',
        description: 'How do i start a website design project',
        date: '1 hour ago',
        icon: 'fas fa-video',
        imageUrl: 'https://lh3.googleusercontent.com/proxy/2v-ocgZr8EsmPL2tTPxXaJlDxD8PnzJR3bJfnRQVnGoNPNW9TxvHrM1Zj3R9ayP__tAlr4HeQxJMhAnXWXRw3hPbhjbHgVtlgcFsN6jf8a2tjlrdKQ'
      },
      {
        id: 6,
        user: 'John Stainor',
        status: 'liked a video',
        description: 'Some marketing tricks',
        date: '19 minute ago',
        icon: 'fas fa-heart',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/SirJohnStainer.JPG'
      }
    ];
    const channels = [
      {
        id: 1,
        name: 'Google',
        imageUrl: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
      },
      {
        id: 2,
        name: 'Dribbble',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png'
      },
      {
        id: 3,
        name: 'Microsoft',
        imageUrl: 'https://pngimg.com/uploads/microsoft/microsoft_PNG4.png'
      },
      {
        id: 4,
        name: 'Behance',
        imageUrl: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/77-behance-512.png'
      },
      {
        id: 5,
        name: 'Weather Channel',
        imageUrl: 'https://variety.com/wp-content/uploads/2014/01/weather_channel2.jpg'
      },
      {
        id: 6,
        name: 'Gurus',
        imageUrl: 'https://freepikpsd.com/wp-content/uploads/2019/10/guru-png-4-Transparent-Images.png'
      },
      {
        id: 7,
        name: 'iMedia',
        imageUrl: 'https://lh3.googleusercontent.com/proxy/NC-PHdA4eCnp-QyPHqsb2ykpWG1FQuiZI8bHD1tmhqrSpVBjlrZd0AkQuOCnvO8N2BZovhJxuNCl8M6K3QQos1QCDKdIHEp_DnuftUTXmZ6VV45gcEsOm-ciAe9y3oo'
      },
      {
        id: 8,
        name: 'Creativeye',
        imageUrl: 'https://images.squarespace-cdn.com/content/5e0e5f0b0299617d3cb41c0e/1594029206765-1ARP5QPKYUWP4F1E0KAP/creativeye+logo-01.png?content-type=image%2Fpng'
      },
      {
        id: 9,
        name: 'Khan Studios',
        imageUrl: 'https://pbs.twimg.com/profile_images/2650781950/d9692a51c454610f3c94855a571a188b.png'
      },
      {
        id: 10,
        name: 'Yahoo',
        imageUrl: 'https://download.logo.wine/logo/Yahoo!_Search/Yahoo!_Search-Logo.wine.png'
      }
    ];
    const documents = [
      {
        id: 1,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://pngimage.net/wp-content/uploads/2018/06/icono-documentos-png-3.png'
      },
      {
        id: 2,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://pngimage.net/wp-content/uploads/2018/06/icono-documentos-png-3.png'
      },
      {
        id: 3,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://pngimage.net/wp-content/uploads/2018/06/icono-documentos-png-3.png'
      },
      {
        id: 4,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://pngimage.net/wp-content/uploads/2018/06/icono-documentos-png-3.png'
      },
      {
        id: 5,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://pngimage.net/wp-content/uploads/2018/06/icono-documentos-png-3.png'
      }
    ];
    const peoples = [
      {
        id: 1,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://img.icons8.com/bubbles/2x/user-male.png'
      },
      {
        id: 2,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://img.icons8.com/bubbles/2x/user-male.png'
      },
      {
        id: 3,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://img.icons8.com/bubbles/2x/user-male.png'
      },
      {
        id: 4,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://img.icons8.com/bubbles/2x/user-male.png'
      },
      {
        id: 5,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://img.icons8.com/bubbles/2x/user-male.png'
      }
    ];
    const videos = [
      {
        id: 1,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://www.youtube.com/watch?v=3uueAit_XGA'
      },
      {
        id: 2,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://www.youtube.com/watch?v=3uueAit_XGA'
      },
      {
        id: 3,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://www.youtube.com/watch?v=3uueAit_XGA'
      },
      {
        id: 4,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://www.youtube.com/watch?v=3uueAit_XGA'
      },
      {
        id: 5,
        title: 'How to improve your skills',
        author: 'Waseem Arshad',
        views: 100550,
        url: 'https://www.youtube.com/watch?v=3uueAit_XGA'
      }
    ];

    return { activities, channels, documents, peoples, videos };
  }
}
