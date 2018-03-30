export default class Api {

    private readonly _searchUrl: string;

    constructor() {
        this._searchUrl = 'https://itunes.apple.com/search?term=';
    }

    public getTracks(term: string): Promise<{}> {
        return fetch(this._searchUrl + term);
    }
}