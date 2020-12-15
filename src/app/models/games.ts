export class Games{
    id: any;
    constructor(
      public name: string,
      public image: string,
      public releaseOn: string,// do it an array of releaseOn platform
      public releaseDate: string,
      public genre: string,// do it an array of genres
      public rating: number,
   

    ){}
  }
  