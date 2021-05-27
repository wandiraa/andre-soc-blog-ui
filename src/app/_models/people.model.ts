export class PeopleModel {
  id: number;
  title: string;
  author: string;
  views: number;
  url: string;

  constructor(people) {
    this.id = people.id;
    this.title = people.title;
    this.author = people.author;
    this.views = people.views;
    this.url = people.url;
  }
}

export interface PeopleInterface {
  id: number;
  title: string;
  author: string;
  views: string;
  url: string;
}
