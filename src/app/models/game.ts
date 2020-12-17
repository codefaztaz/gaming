export class Game{
  id: any;
  constructor(
    public name: string,
    public image: string,
    public releaseOn: Array<ReleaseOn>,// do it an array of releaseOn platform
    public releaseDate: string,
    public genre: Array<Genres>,// do it an array of genres
    public rating: number,
  ){}
}

export class Genres {
  genre: string
}

export class ReleaseOn {
  releaseOn: string
}
