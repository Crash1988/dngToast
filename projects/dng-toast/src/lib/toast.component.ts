import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { ToastData, TOAST_CONFIG_TOKEN, ToastConfig } from './toast-config';
import { ToastRef } from './toast-ref';
import { toastAnimations, ToastAnimationState } from './toast-animation';

@Component({
  selector: 'dng-toast1',
  templateUrl: './toast.component.html',
  styleUrls: ['toast.component.css'],
  animations: [toastAnimations.fadeToast],
})
export class ToastComponent implements OnInit, OnDestroy {
  animationState: ToastAnimationState = 'default';
  iconType: string;

  private intervalId: any;
  toastType = '';

  constructor(
    readonly data: ToastData,
    readonly ref: ToastRef,
    @Inject(TOAST_CONFIG_TOKEN) public toastConfig: ToastConfig
    ) {
     }

  ngOnInit() {
    this.intervalId = setTimeout(() => this.animationState = 'closing', this.toastConfig.close);
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  close() {
    this.animationState = 'closing';
    this.intervalId = setTimeout(() => this.ref.close(), 500);
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.ref.close();
    }
  }
}
