import { Injectable, Injector, Inject } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { ToastData, TOAST_CONFIG_TOKEN, ToastConfig, defaultToastConfig } from './toast-config';
import { ToastRef } from './toast-ref';

import { ToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root'
})
export class DngToastService {
  private lastToast: ToastRef;

  constructor(
    private overlay: Overlay,
    private parentInjector: Injector,
    @Inject(TOAST_CONFIG_TOKEN) private toastConfig: ToastConfig
  ) {

    if(!this.toastConfig.position || (this.toastConfig.position && this.toastConfig.position.right)){
      this.toastConfig.position = defaultToastConfig.position;
    }
    if(!this.toastConfig.position || (this.toastConfig.position && this.toastConfig.position.top)){
      this.toastConfig.position = defaultToastConfig.position;
    }
  }


  showToastDefault(text: string, icName: string = '' ) {
    this.show({ type: 'default', text, className: 'alert-default', iconName: icName });
  }
  showToastSuccess(text: string, icName: string = '' ) {
    this.show({ type: 'success', text, className: 'alert-success', iconName: icName ? icName : 'check_circle' });
  }
  showToastWarning(text: string, icName: string = '' ) {
    this.show({ type: 'warning', text, className: 'alert-warning', iconName: icName ? icName : 'warning'  });
  }
  showToastDanger(text: string, icName: string = '' ) {
    this.show({ type: 'danger', text, className: 'alert-danger', iconName: icName ? icName : 'cancel'  });
  }
  showToastInfo(text: string, icName: string = '' ) {
    this.show({ type: 'info', text, className: 'alert-info', iconName: icName  });
  }
  showToastPrimary(text: string, icName: string = '' ) {
    this.show({ type: 'primary', text, className: 'alert-primary', iconName: icName ? icName : 'feedback'  });
  }
  showToastSecondary(text: string, icName: string = '' ) {
    this.show({ type: 'secondary', text, className: 'alert-secondary', iconName: icName  });
  }


  show(data: ToastData) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef);
    this.lastToast = toastRef;

    const injector = this.getInjector(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);

    overlayRef.attach(toastPortal);
    return toastRef;
  }



  getPositionStrategy() {

    return this.overlay.position()
      .global()
      .top(this.getPosition())
      .right(this.toastConfig.position?this.toastConfig.position.right + 'px': '10px;');
  }

  getPosition() {
    // const position = lastToastIsVisible
    //   ? this.lastToast.getPosition().bottom
    //   : this.toastConfig.position.top;
    if(this.lastToast && this.lastToast.getPosition() ) {
        return  this.lastToast.getPosition().bottom + 'px';
    }
    else{
      return this.toastConfig.position? this.toastConfig.position.top + 'px': '10px';
    }
   // return position + 'px';
  }

  getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
    const tokens = new WeakMap();
    tokens.set(ToastData, data);
    tokens.set(ToastRef, toastRef);

    return new PortalInjector(parentInjector, tokens);
  }
}
