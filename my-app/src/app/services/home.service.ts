import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}

  // 1️⃣ Categories (mock via JSONPlaceholder - replace later with backend)
  getCategories(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums'); 
    // You’ll get an array -> treat as categories
  }

  // 2️⃣ Fonts (Google Fonts API)
  getFonts(): Observable<any> {
    const apiKey = 'AIzaSyC7Oe...'; // replace with your Google API key
    return this.http.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${apiKey}`
    );
  }

  // 3️⃣ Resource Links (mock)
  getResourceLinks(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=5'); 
    // fake resource links
  }

  // 4️⃣ Featured App (Product Hunt or mock with GitHub repo)
  getFeaturedApp(): Observable<any> {
    return this.http.get('https://api.github.com/repos/angular/angular');
    // Returns Angular repo info → you can map name, description, stars as featured
  }

  // 5️⃣ Installed Apps (simulate with npm registry search)
  getInstalledApps(): Observable<any> {
    return this.http.get('https://registry.npmjs.org/-/v1/search?text=angular');
  }

  // 6️⃣ Apps in Plan (mock with posts)
  getAppsInPlan(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
  }

  // 7️⃣ Trending Apps (GitHub trending)
  getTrendingApps(): Observable<any> {
    return this.http.get(
      'https://api.github.com/search/repositories?q=stars:%3E20000&sort=stars&order=desc'
    );
  }
}
