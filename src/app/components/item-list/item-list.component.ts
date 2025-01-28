import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../interfaces/inventory.interface';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplacePipe } from '../../pipes/replace.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    ReplacePipe,
  ],
})
export class ItemListComponent implements OnInit {
  items: InventoryItem[] = [];
  selectedItemId: string | null = null;

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.items = this.inventoryService.getAllItems();

    // URL'den item ID'sini al
    this.route.queryParams.subscribe((params) => {
      if (params['itemId']) {
        const item = this.inventoryService.getItemById(params['itemId']);
        if (item) {
          this.selectItem(item);
          this.selectedItemId = item.id;
        }
      }
    });
  }

  selectItem(item: InventoryItem): void {
    this.selectedItemId = item.id;
    this.inventoryService.setSelectedItem(item);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { itemId: item.id },
      queryParamsHandling: 'merge',
    });
  }
}
