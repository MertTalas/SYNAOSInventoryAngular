import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ReplacePipe } from '../../pipes/replace.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatDividerModule,
    MatButtonModule,
    ReplacePipe,
  ],
})
export class SidebarComponent {
  constructor(public inventoryService: InventoryService) {}
}
