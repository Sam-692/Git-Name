import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private accesstoken = "1ff49ff184ea00b3c487fcd9b2ab07d6357c6508";

  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = 'Sam-692';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.accesstoken)
    .map(res => res.json());
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.accesstoken)
    .map(res => res.json());
  }
  updateProfile(username:string){
    this.username = username;
  }
}
 