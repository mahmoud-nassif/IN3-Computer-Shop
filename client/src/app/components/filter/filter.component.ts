import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  computers=[];
  filteredComputers=[];
  CPU=[];
  RAM=[];
  OpSys=[];
  Inches=[];
  cpuValue=""
  ramValue=""
  opsValue=""
  inchValue=""

  constructor(private computerService:ComputerService) { }

  ngOnInit() {
    this.getAllComputers()
  }

  
  getAllComputers(){//gets all documents and divide them and
    // remove reapted items to fill select options at render phase

    this.computerService.getAll().subscribe((computersData)=>{
     this.computers=computersData;
     this.filteredComputers=computersData;
     this.computers.forEach((computer)=>{
         this.CPU.push(computer.CPU)
         this.RAM.push(computer.RAM)
         this.OpSys.push(computer.OpSys)
         this.Inches.push(computer.Inches)
     })
     this.CPU=this.unreapeatedArray(this.CPU)
     this.RAM=this.unreapeatedArray(this.RAM)
     this.OpSys=this.unreapeatedArray(this.OpSys)
     this.Inches=this.unreapeatedArray(this.Inches)
    })

  }

  unreapeatedArray(arr){//remove reapted items
    var newArr=[];
    arr.forEach((e)=>{
      if(newArr.lastIndexOf(e)==-1)newArr.push(e)
    })
    return newArr;
   }

   onSelectChange(obj){//get selected value from any select input and filter by it
     if(obj.target.length==119){
       this.cpuValue=obj.target.value
       this.filterByCpu(this.cpuValue)
      }
     if(obj.target.length==10){
       this.ramValue=obj.target.value
       this.filterByRam(this.ramValue)
      }
     if(obj.target.length==11){
       this.opsValue=obj.target.value
       this.filterByOps(this.opsValue)
      }
     if(obj.target.length==19){
       this.inchValue=obj.target.value
       this.filterByInch(this.inchValue)
      }
   }

  filterByCpu(cpu){
    this.computerService.filterByCpu(cpu)
    .subscribe((data)=>{
      this.filteredComputers=data;
    })
  }

  filterByRam(ram){
    this.computerService.filterByRam(ram)
    .subscribe((data)=>{
      this.filteredComputers=data;
    })
  }

  filterByOps(ops){
    this.computerService.filterByOps(ops)
    .subscribe((data)=>{
      this.filteredComputers=data;
    })
  }

  filterByInch(inch){
    this.computerService.filterByInch(inch)
    .subscribe((data)=>{
      this.filteredComputers=data;
    })
  }

}