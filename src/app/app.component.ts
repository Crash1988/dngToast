import { Component } from '@angular/core';

//import {  } from 'DngToastService';
import {DngToastService} from 'dng-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dngToastSamples';
  constructor(private toastService: DngToastService) {
  }

  showToastPrimary() {
    this.toastService.showToastPrimary (`There are many variations of passages of Lorem Ipsum available, but the majority have suffered
      alteration in some form`);
  }
  showToastSuccess() {
    this.toastService.showToastSuccess ('If you are going to use a passage of Lorem Ipsum, you need to be sure');
  }
  showToastDanger() {
    this.toastService.showToastDanger ('combined with a handful of model sentence ');
  }
  showToastWarning() {
    this.toastService.showToastWarning ('to generate Lorem Ipsum which looks reasonable.');
  }
  showToastInfo() {
    this.toastService.showToastInfo (`It is a long established fact that a reader will be distracted by the readable content
      of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
      of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
      many web sites still in their infancy`);
  }
}
