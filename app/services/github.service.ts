import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = 'e3ea960a16af0602f171';
  private client_secret = 'a2345eef1f8f176ac06dc78057f90fe28ca9eee4';

  constructor(private _http:Http) {
    console.log('Github Service Ready...');
    this.username = 'mhylle';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username
      + '?client_id=' + this.client_id + '&client_secret' + this.client_secret)
      .map(res => res.json());
  }
  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username
      + '/repos?client_id=' + this.client_id + '&client_secret' + this.client_secret)
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
