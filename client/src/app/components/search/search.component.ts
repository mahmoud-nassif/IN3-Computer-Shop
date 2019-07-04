import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  computersPage=[];
  computersSize=0;
  limit=9;
  offset=0;

 searchValue="";

  constructor(private computerService:ComputerService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((param)=>{
     this.offset=0;
     this.searchValue=param.value;
     this.search(param.value,this.offset,this.limit);//gets 9 of documents searched
     this.getCount(param.value);//gets the number of all documents searched
    })

   
  }

  onPageChange(newOffset)//listner for pageChange event in pagination component
  {
    this.offset=newOffset;
    this.search(this.searchValue,this.offset,this.limit);
  }

  search(string,offset,limit){//calls function that returns 9 documents based on string's value passed
    this.computerService.search(string,offset,limit).subscribe((computersSearch)=>{
       this.computersPage=computersSearch;
    })
  }
 
  getCount(string){//calls function that returns all documents count of string's value
   this.computerService.getCountOfSearch(string).subscribe((count)=>{
     this.computersSize=count.count;
   });
  }
}
