import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InventoryItem } from '../interfaces/inventory.interface';
import inventoryData from '../../assets/data/example_items.json';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private selectedItemSubject = new BehaviorSubject<InventoryItem | null>(null);
  selectedItem$ = this.selectedItemSubject.asObservable();

  constructor() {}

  getAllItems(): InventoryItem[] {
    return Object.values(inventoryData).map((item) => ({
      ...item,
      fleetState: item.fleetState as 'IN_FLEET' | 'OUT_OF_FLEET',
    })) as InventoryItem[];
  }

  getItemById(id: string): InventoryItem | null {
    const item = inventoryData[id as keyof typeof inventoryData];
    if (item) {
      return {
        ...item,
        fleetState: item.fleetState as 'IN_FLEET' | 'OUT_OF_FLEET',
      } as InventoryItem;
    }
    return null;
  }

  setSelectedItem(item: InventoryItem | null): void {
    this.selectedItemSubject.next(item);
  }
}
