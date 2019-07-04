import { Component, OnInit, HostListener } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  computersPage=[];
  computersSize=0;
  limit=9;
  offset=0;

  constructor(private computerService:ComputerService) {
  
   }

  ngOnInit() {
    this.getCount()
    this.getPage(this.offset,this.limit);
  }

  getCount(){//call function that returns all computers count
    this.computerService.getCount().subscribe((count)=>{
       this.computersSize=count.count;
    })
  }
  getPage(offset,limit){//call function that returns 9 documents per time
   this.computerService.getPage(offset,limit).subscribe((computersPage)=>{
     this.computersPage=computersPage;
   })
  }

  onPageChange(newOffset)//listner for pageChange event in pagination component
  {
    this.offset=newOffset;
    this.getPage(this.offset,this.limit)
  }

}
