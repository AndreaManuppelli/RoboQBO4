import { Component } from '@angular/core';

@Component({
  selector: 'app-processing-table',
  templateUrl: './processing-table.component.html',
  styleUrl: './processing-table.component.scss'
})
export class ProcessingTableComponent {

  recipes = Array.from({length: 20}, (_, i) => ({
    id: i + 1,
    name: ["Cappuccino", "Latte", "Espresso"][i % 3],
    status: i === 0 ? "In attesa" : "Completato",
    date_send: new Date(),
    date_end: new Date(),
  }));
}
