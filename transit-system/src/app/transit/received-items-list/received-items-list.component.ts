import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-received-items-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './received-items-list.component.html',
  styleUrls: ['./received-items-list.component.css']
})
export class ReceivedItemsListComponent implements OnInit {
  receivedItems: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadReceivedItems();
  }

  loadReceivedItems(): void {
    this.itemService.getReceivedItems().subscribe({
      next: (data) => {
        this.receivedItems = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  sendForInspection(itemId: number): void {
    this.itemService.sendForInspection(itemId).subscribe({
      next: () => {
        alert('Item sent for inspection');
        this.loadReceivedItems(); // Refresh the list
      },
      error: (err) => {
        console.error(err);
        alert('Error sending item for inspection');
      }
    });
  }
}

