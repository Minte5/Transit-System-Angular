import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-send-to-store',
  standalone: true,
  imports: [CommonModule,
    BrowserModule,

    FormsModule,],
  templateUrl: './send-to-store.component.html',
  styleUrls: ['./send-to-store.component.css']
})
export class SendToStoreComponent implements OnInit {
  receivedItems: any[] = [];
  stores = ['Store A', 'Store B', 'Store C', 'Store D'];
  selectedStore = '';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadReceivedItems();
  }

  loadReceivedItems(): void {
    this.itemService.getReceivedItems().subscribe({
      next: (data) => this.receivedItems = data,
      error: (err) => console.error(err)
    });
  }

  sendToStore(itemId: number): void {
    if (!this.selectedStore) {
      alert('Please select a store');
      return;
    }
    this.itemService.sendToStore({ itemId, store: this.selectedStore }).subscribe({
      next: () => {
        alert('Item sent to store');
        this.loadReceivedItems();
      },
      error: (err) => console.error(err)
    });
  }
}
