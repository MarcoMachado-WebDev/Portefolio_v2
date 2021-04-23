import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('AboutPage => HomePage', [
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          left: 0,
        })
      ]),
      query(':enter', [
        style({ top: '-100%' })
      ]),
      group([
        query(':leave', [
          animate('500ms linear', style({ top: '50%' }))
        ]),
        query(':enter', [
          animate('500ms linear', style({ top: '-50%' }))
        ])
      ]),
    ]),
    transition('HomePage => AboutPage', [
        query(':enter, :leave', [
          style({
            position: 'relative',
            top: 0,
            left:'auto'
          })
        ]),
        query(':enter', [
          style({ top: '0%' })
        ]),
        group([
          query(':leave', [
            animate('500ms linear', style({ top: '-57%' }))
          ]),
          query(':enter', [
            animate('500ms linear', style({ top: '-57%' }))
          ])
        ]),
      ]),
      transition('AboutPage => ProjectsPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('500ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),transition('ProjectsPage => SkillsPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('500ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),transition('AboutPage => SkillsPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ left: '-100%' }))
          ]),
          query(':enter', [
            animate('500ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),transition('SkillsPage => ProjectsPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ left: '-100%' }))
          ]),
          query(':enter', [
            animate('500ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),transition('ProjectsPage => AboutPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ left: '-100%' }))
          ]),
          query(':enter', [
            animate('500ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('SkillsPage => AboutPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('500ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
  ]);