import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.scss'
})
export class HouseListComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);

public ngOnInit(): void {
  this.httpClient.get('http://localhost:4200/api/house-list')
  .subscribe(response => {
    console.log(response);
  });
}
}
