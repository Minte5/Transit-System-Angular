import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-inspection-items-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inspection-items-list.component.html',
  styleUrls: ['./inspection-items-list.component.css']
})
export class InspectionItemsListComponent implements OnInit {
  inspectionItems: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadInspectionItems();
  }

  loadInspectionItems(): void {
    this.itemService.getInspectionItems().subscribe({
      next: (data) => {
        this.inspectionItems = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}

