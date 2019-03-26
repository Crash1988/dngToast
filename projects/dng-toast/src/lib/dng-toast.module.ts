import { NgModule, ModuleWithProviders } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';

import { DngToastComponent } from './dng-toast.component';
import {defaultToastConfig, TOAST_CONFIG_TOKEN} from './toast-config';

import {ToastComponent} from './toast.component';
@NgModule({

  imports: [OverlayModule, MatIconModule],
  declarations: [DngToastComponent, ToastComponent],
  entryComponents: [ToastComponent],

  exports: [DngToastComponent]
})
export class DngToastModule {
  public static forRoot(config = defaultToastConfig): ModuleWithProviders {
    return {
      ngModule: DngToastModule,
      providers: [
        {
          provide: TOAST_CONFIG_TOKEN,
          useValue: { ...defaultToastConfig, ...config },
        },
      ],
    };
  }
}
