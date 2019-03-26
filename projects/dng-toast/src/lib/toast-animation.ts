import {
    AnimationTriggerMetadata,
    trigger,
    state,
    transition,
    style,
    animate,
} from '@angular/animations';

export const toastAnimations: {
    readonly fadeToast: AnimationTriggerMetadata;
} = {
    fadeToast: trigger('fadeAnimation', [
        state('default', style({ opacity: 1,  right: '0px' })),
        transition('void => *', [style({ opacity: 0, right: '-350px'  }), animate('{{ fadeIn }}ms')]),
        transition(
            'default => closing',
            animate('{{ fadeOut }}ms', style({ opacity: 0, right: '-350px' })),
        ),
    ]),
};

export type ToastAnimationState = 'default' | 'closing';
