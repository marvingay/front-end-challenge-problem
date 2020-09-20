import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-item',
  templateUrl: './equipment-item.component.html',
  styleUrls: ['./equipment-item.component.css']
})
export class EquipmentItemComponent implements OnInit {
  @Input() equipmentItem;
  
  constructor() { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      card: true,
      warning: (!this.equipmentItem.equipment_type && this.equipmentItem.manufacturer) || (!this.equipmentItem.manufacturer && this.equipmentItem.equipment_type),
    };

    return classes;
  }
}
