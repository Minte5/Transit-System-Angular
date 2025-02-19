import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiveItemComponent } from '../receive-item/receive-item.component';
import { ReceivedItemsListComponent } from '../received-items-list/received-items-list.component';
import { InspectionItemsListComponent } from '../inspection-items-list/inspection-items-list.component';
import { NotificationComponent } from '../notification/notification.component';
import { ReceiveFromInspectionComponent } from '../receive-from-inspection/receive-from-inspection.component';
import { SendToStoreComponent } from '../send-to-store/send-to-store.component';

@Component({
  selector: 'app-main-transit',
  standalone: true,
  imports: [
    CommonModule,
    ReceiveItemComponent,
    ReceivedItemsListComponent,
    InspectionItemsListComponent,
    NotificationComponent,
    ReceiveFromInspectionComponent,
    SendToStoreComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainTransitComponent {}
