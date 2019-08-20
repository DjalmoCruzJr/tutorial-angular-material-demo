import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cards: any = [
    {
      title: 'Form Controls',
      subtittle: 'Controls that collect and validate user input.',
      items: [
        { route: '/autocomplete', title: 'Autocomplete' },
        { route: '/checkbox', title: 'Checkbox' },
        { route: '/datepicker', title: 'Datepicker' },
        { route: '/form-field', title: 'Form Field' },
        { route: '/input', title: 'Input' },
        { route: '/radio', title: 'Radio Buttons' },
        { route: '/select', title: 'Select' },
        { route: '/slider', title: 'Slider' },
        { route: '/slide-toggle', title: 'Slide Toggle' }
      ]
    },
    {
      title: 'Navigation',
      subtittle: 'Menus, sidenavs and toolbars that organise your content.',
      items: [
        { route: '/menu', title: 'Menu' },
        { route: '/sidenav', title: 'Sidenav' },
        { route: '/toolbar', title: 'Toolbar' }
      ]
    },
    {
      title: 'Layout',
      subtittle: 'Essential building blocks for preseting your content.',
      items: [
        { route: '/card', title: 'Card' },
        { route: '/divider', title: 'Divider' },
        { route: '/expansion-panel', title: 'Expansion Panel' },
        { route: '/grid-list', title: 'Grid List' },
        { route: '/list', title: 'List' },
        { route: '/stepper', title: 'Stepper' },
        { route: '/tabs', title: 'Tabs' },
        { route: '/tree', title: 'Tree' }
      ]
    },
    {
      title: 'Buttons & Indicators',
      subtittle: 'Buttons, togglesm sttaus and progress indicators.',
      items: [
        { route: '/button', title: 'Button' },
        { route: '/button-toggle', title: 'Button Toggle' },
        { route: '/badge', title: 'Badge' },
        { route: '/chips', title: 'Chips' },
        { route: '/icon', title: 'Icon' },
        { route: '/progress-spinner', title: 'Progress Spinner' },
        { route: '/progress-bar', title: 'Prograss Bar' },
        { route: '/ripples', title: 'Ripples' }
      ]
    },
    {
      title: 'Popups & Modals',
      subtittle: 'Floating components that can be dynamically shown or hidden.',
      items: [
        { route: '/bottom-sheet', title: 'Bottom Sheet' },
        { route: '/dialog', title: 'Dialog' },
        { route: '/snackbar', title: 'Sbackbar' },
        { route: '/tooltip', title: 'Tooltip' }
      ]
    },
    {
      title: 'Data Table',
      subtittle: 'Tools for displaying and interacting with tabular data.',
      items: [
        { route: '/paginator', title: 'Paginator' },
        { route: '/sort-header', title: 'Sort Header' },
        { route: '/table', title: 'Table' }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
