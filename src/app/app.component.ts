import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private sidebarOpened: boolean = false;
  ButtonText: String;
  constructor() {
    this.ButtonText = "Save and Continue"
  }
  private _toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
    this.ButtonText = (this.ButtonText === "Save and Continue") ? "Back" : "Save and Continue"
  }
}
