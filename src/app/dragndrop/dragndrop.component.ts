import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
declare var $:any;
@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {
  open: any = []; wip: any= []; ready: any=[]; paymentdue: any= [];
 
  constructor() { }

  ngOnInit(): void {
    
    this.open=[
      {
        no: "#871",
        Name: "Ahmed",
        Car_details: "Auris TR345",
        Invoice: "GP-LCVUZK-683",
        Createdby: "VIDYUT",
        completiondate: "28 FEB 2021 02:54 PM",
        Total: "AED 799.05",
        due: "AED 299"
      },
      {
        no: "#870",
        Name: "Nader",
        Car_details: "Abarth Others Petrol 1234ASDVVIUY",
        Invoice: "GP-LCVUZK-683",
        Createdby: "VIDYUT",
        completiondate: "28 FEB 2021  02:54 PM",
        Total: "AED 799.05",
        due: "142.49"
      }
    ];
    this.wip=[
      {
        no: "#868",
        Name: "Ahmed",
        Car_details: "Auris TR345",
        Invoice: "GP-LCVUZK-683",
        Createdby: "VIDYUT",
        completiondate: "28 FEB 2021 02:54 PM",
        Total: "AED 799.05",
        due: "AED 299"
      }
    ];
    this.ready=[
      {
        no: "#867",
        Name: "Nader",
        Car_details: "Abarth Others Petrol 1234ASDVVIUY",
        Invoice: "GP-LCVUZK-683",
        Createdby: "VIDYUT",
        completiondate: "28 FEB 2021  02:54 PM",
        Total: "AED 799.05",
        due: "142.49"
      },
      {
        no: "#866",
        Name: "Ahmed",
        Car_details: "Auris TR345",
        Invoice: "GP-LCVUZK-683",
        Createdby: "VIDYUT",
        completiondate: "28 FEB 2021 02:54 PM",
        Total: "AED 799.05",
        due: "AED 299"
      }
    ];
    this.paymentdue=[
      {
        no: "#865",
        Name: "Ahmed",
        Car_details: "Auris TR345",
        Invoice: "GP-LCVUZK-683",
        Createdby: "VIDYUT",
        completiondate: "28 FEB 2021 02:54 PM",
        Total: "AED 799.05",
        due: "AED 299"
      },
      {
        no: "#864",
        Name: "Nader",
        Car_details: "Abarth Others Petrol 1234ASDVVIUY",
        Invoice: "GP-LCVUZK-683",
        Createdby: "VIDYUT",
        completiondate: "28 FEB 2021  02:54 PM",
        Total: "AED 799.05",
        due: "142.49"
      }
    ];
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
    
  
}
