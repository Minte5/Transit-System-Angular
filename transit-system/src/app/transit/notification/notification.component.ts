import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  newInspectedItems: any[] = [];
  showNotification = false;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.checkForNewItems();
  }

  checkForNewItems(): void {
    this.itemService.getNewInspectedItems().subscribe({
      next: (data) => {
        this.newInspectedItems = data;
        this.showNotification = this.newInspectedItems.length > 0;
      },
      error: (err) => console.error(err)
    });
  }

  openNotifications(): void {
    this.showNotification = false;
  }

  receiveItem(itemId: number): void {
    this.itemService.receiveItem(itemId).subscribe({
      next: () => {
        alert('Item received from Inspection Unit');
        this.checkForNewItems(); // Refresh the list after receiving
      },
      error: (err) => console.error(err)
    });
  }
}
