export class DocumentModel {
  id: string;
  title: string;
  author: string;
  views: number;
  url: string;

  constructor(document) {
    if (document._id) {
      this.id = document._id;
    }
    this.title = document.title;
    this.author = document.author;
    this.views = document.views;
    this.url = document.url;
  }
}

export interface DocumentInterface {
  id: string;
  title: string;
  author: string;
  views: string;
  url: string;
}
