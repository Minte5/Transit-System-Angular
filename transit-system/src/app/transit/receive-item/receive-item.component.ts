import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-receive-item',
  standalone: true,
  imports: [BrowserModule,
      FormsModule,],
  templateUrl: './receive-item.component.html',
  styleUrls: ['./receive-item.component.css']
})
export class ReceiveItemComponent {
  item = {
    itemName: '',
    supplier: '',
    quantity: 0
  };

  constructor(private itemService: ItemService, private router: Router) { }

  receiveItem() {
    this.itemService.receiveItem(this.item).subscribe({
      next: () => {
        alert('Item received successfully');
        this.router.navigate(['/transit/received-items']);
      },
      error: (err) => {
        console.error(err);
        alert('Error receiving item');
      }
    });
  }
}

