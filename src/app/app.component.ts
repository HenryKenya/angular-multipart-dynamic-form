import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  users: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDataFromApi().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => console.log(error)
    );
  }
}
