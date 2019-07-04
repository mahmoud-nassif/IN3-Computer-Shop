import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  url="http://localhost:3000/computer/";
  constructor(private http:HttpClient) { }

  getAll(){//returns observable of all computers documents
    return this.http.get<any>(this.url+"all")
  }

  getCount(){//returns observable of computers count
    return this.http.get<any>(this.url+"count")
  }

  getPage(offset,limit){//returns observable of  9 documents per time
   return this.http.get<any>(this.url+"page",{params:{offset:offset,limit:limit}});
  }

  search(string,offset,limit){//return observable of 9 documents based on string's value passed
   return this.http.get<any>(this.url+"search",{params:{value:string,offset:offset,limit:limit}})
  }

  getCountOfSearch(string){//return observable of search's count
    return this.http.get<any>(this.url+"search/count",{params:{value:string}})
  }

  // filter(cpu,ram,ops,inch){//return observable of documents based on filter's criteria passed
  //    return this.http.get<any>(this.url+"filter",{params:{cpu:cpu,ram:ram,ops:ops,inch:inch}})
  // }

  filterByCpu(cpu){
    return this.http.get<any>(this.url+"filter/cpu",{params:{cpu:cpu}})
  }

  filterByRam(ram){
    return this.http.get<any>(this.url+"filter/ram",{params:{ram:ram}})
  }

  filterByOps(ops){
    return this.http.get<any>(this.url+"filter/ops",{params:{ops:ops}})
  }

  filterByInch(inch){
    return this.http.get<any>(this.url+"filter/inch",{params:{inch:inch}})
  }

  getOneComputer(id){//return observable of one document by id passed
    return this.http.get<any>(this.url+"one",{params:{id:id}})
  }
}
