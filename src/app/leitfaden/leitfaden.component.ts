import { Component } from '@angular/core';

@Component({
  selector: 'app-leitfaden',
  templateUrl: './leitfaden.component.html',
  styleUrls: ['./leitfaden.component.css']
})
export class LeitfadenComponent {
  selectedContent: string = 'whatIsSelenium';

  showContent(content: string) {
    this.selectedContent = content;
  }
}
