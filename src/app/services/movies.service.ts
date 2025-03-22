import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API = signal('https://mocki.io/v1/72e5ee70-4b07-4939-aa4b-3f5573e80f81');
  data!: Observable<any>;
  constructor(private http:HttpClient) { 
    this.getDate();
    console.log("work");
    
  }
  getDate(){ 
    this.data = this.http.get(this.API()).pipe(shareReplay());
  }
  getCommingSoonImage(){
    return this.data.pipe(map((res:any) => res['ComingSoonBanner']));
  }
  getCategories():Observable<any>{
    return this.data.pipe(map((res:any) => res['Categories']));
  }
  getBranches(): Observable<any>{
    return this.data.pipe(map((res:any) => res['Cinemas']));
  }
  
}
