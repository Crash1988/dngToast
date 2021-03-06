import { OverlayRef } from '@angular/cdk/overlay';

export class ToastRef {
  constructor(private readonly overlay: OverlayRef) { }

  close() {
    this.overlay.dispose();
  }

  isVisible() {
    return this.overlay && this.overlay.overlayElement;
  }

  getPosition() {
    if( this.overlay && this.overlay.overlayElement) {

    return this.overlay.overlayElement.getBoundingClientRect();
    }
    return null;
  }
}

