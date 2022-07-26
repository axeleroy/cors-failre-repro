import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html'
})
export class FirstPageComponent implements OnInit {
  public toDisplay = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<string>('http://localhost:4202/assets/example.json')
    .subscribe((result) => (this.toDisplay = result))
  }

}
