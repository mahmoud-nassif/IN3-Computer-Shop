import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComputerService } from 'src/app/services/computer.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  computer;
  constructor(private computerService:ComputerService,private route:ActivatedRoute) { }

  ngOnInit() {
   this.route.queryParams.subscribe((param)=>{//listens for computer id in url
     let id=param.id;
     this.computerService.getOneComputer(id).subscribe((data)=>{//gets on computer by id
       this.computer=data;
     })
   })
  }

}
