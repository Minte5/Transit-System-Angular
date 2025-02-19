import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiveItemComponent } from './receive-item/receive-item.component';
import { ReceivedItemsListComponent } from './received-items-list/received-items-list.component';
import { InspectionItemsListComponent } from './inspection-items-list/inspection-items-list.component';
import { SendToStoreComponent } from './send-to-store/send-to-store.component';
import { SentToStoreListComponent } from './sent-to-store-list/sent-to-store-list.component';

const routes: Routes = [
  { path: 'receive-item', component: ReceiveItemComponent },
  { path: 'received-items', component: ReceivedItemsListComponent },
  { path: 'inspection-items', component: InspectionItemsListComponent },
  { path: 'send-to-store', component: SendToStoreComponent },
  { path: 'sent-to-store', component: SentToStoreListComponent },
  { path: '', redirectTo: 'received-items', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransitRoutingModule { }
