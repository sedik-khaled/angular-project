import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-notfound',
  imports: [ BrowserAnimationsModule],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss',

  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-50px)' }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)' }))
      ])
    ]),
    trigger('pulse', [
      state('default', style({ transform: 'scale(1)' })),
      state('pulse', style({ transform: 'scale(1.05)' })),
      transition('default <=> pulse', animate('500ms ease-in-out'))
    ])
  ]
})

export class NotfoundComponent {
  pulseState = 'default';

  togglePulse() {
    this.pulseState = this.pulseState === 'default' ? 'pulse' : 'default';
  }
}
