import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  users: any[] = [];
  usersForm: FormGroup;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDataFromApi().subscribe(
      (data) => {
        this.users = data;
        const formDataObj = {};
        for (const user of this.users) {
          formDataObj[user.name] = new FormControl(user.name);
        }

        // populate form here
        this.usersForm = new FormGroup(formDataObj);
      },
      (error) => console.log(error)
    );
  }

  submitForm() {
    console.log(this.usersForm);
  }
}
