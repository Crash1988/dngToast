import { InjectionToken, TemplateRef } from '@angular/core';

export class ToastData {
  type: ToastType;
  text?: string;
  className?: string;
  iconName?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
}

export type ToastType = 'default' | 'info' | 'success'| 'warning'| 'primary'| 'secondary' | 'danger';

export interface ToastConfig {
    position?: {
        top: number;
        right: number;
    };
    animation?: {
        fadeOut: number;
        fadeIn: number;
    };
}

export const defaultToastConfig: ToastConfig = {
    position: {
        top: 10,
        right: 10,
    },
    animation: {
        fadeOut: 500,
        fadeIn: 300,
    },
};

export const TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');
