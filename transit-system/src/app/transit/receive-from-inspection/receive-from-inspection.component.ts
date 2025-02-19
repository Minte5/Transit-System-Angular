import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-receive-from-inspection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receive-from-inspection.component.html',
  styleUrls: ['./receive-from-inspection.component.css']
})
export class ReceiveFromInspectionComponent implements OnInit {
  inspectedItems: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadInspectedItems();
  }

  loadInspectedItems(): void {
    this.itemService.getNewInspectedItems().subscribe({
      next: (data) => this.inspectedItems = data,
      error: (err) => console.error(err)
    });
  }

  confirmReceipt(itemId: number): void {
    this.itemService.confirmReceipt(itemId).subscribe({
      next: () => {
        alert('Item received successfully');
        this.loadInspectedItems();
      },
      error: (err) => console.error(err)
    });
  }
}
