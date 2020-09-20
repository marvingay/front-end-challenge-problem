import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../equipment.service';
import { EquipmentData } from '../backend-interceptor/EquipmentData';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: Array<object>;

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentService.getEquipment().subscribe((equipment) => {
      this.equipment = EquipmentData.array;
      console.log(this.equipment);
    })
  }



}
