import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showNavbar:boolean=false;
  // showCpuDropdown:boolean=false;
  // showRamDropdown:boolean=false;
  // showOpSysDropdown:boolean=false;
  // showInchesDropdown:boolean=false;
 


  searchValue="";
  constructor(private computerService:ComputerService) { }

  ngOnInit() {
    
  }

  onKeyUp(event){
    this.searchValue=event.target.value;
  }




// toggle(e)
// {
//   if(e==1){
//     this.showCpuDropdown=!this.showCpuDropdown
//     this.showRamDropdown=false;
//     this.showOpSysDropdown=false;
//     this.showInchesDropdown=false;
//   }
//   if(e==2){
//     this.showCpuDropdown=false;
//     this.showRamDropdown=!this.showRamDropdown;
//     this.showOpSysDropdown=false;
//     this.showInchesDropdown=false;
//   }
//   if(e==3){
//     this.showCpuDropdown=false;
//     this.showRamDropdown=false;;
//     this.showOpSysDropdown=!this.showOpSysDropdown;
//     this.showInchesDropdown=false;
//   }
//   if(e==4){
//     this.showCpuDropdown=false;
//     this.showRamDropdown=false;
//     this.showOpSysDropdown=false;
//     this.showInchesDropdown=!this.showInchesDropdown;
//   }
// }

}
