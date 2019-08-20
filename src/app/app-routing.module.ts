import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { DividerComponent } from './components/divider/divider.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SelectComponent } from './components/select/select.component';
import { RadioComponent } from './components/radio/radio.component';
import { InputComponent } from './components/input/input.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ListComponent } from './components/list/list.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { SortHeaderComponent } from './components/sort-header/sort-header.component';
import { TableComponent } from './components/table/table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { RipplesComponent } from './components/ripples/ripples.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { IconComponent } from './components/icon/icon.component';
import { ChipsComponent } from './components/chips/chips.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { ButtonComponent } from './components/button/button.component';
import { TreeComponent } from './components/tree/tree.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { StepperComponent } from './components/stepper/stepper.component';

const ROUTES: Routes = [
  //Index route
  { path: 'index', component: IndexComponent },

  //Form Control
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'input', component: InputComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'select', component: SelectComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'slide-toggle', component: SlideToggleComponent },

  //Navigation
  { path: 'menu', component: MenuComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'toolbar', component: ToolbarComponent },

  //Layout
  { path: 'card', component: CardComponent },
  { path: 'divider', component: DividerComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'grid-list', component: GridListComponent },
  { path: 'list', component: ListComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tree', component: TreeComponent },

  //Buttons & Indicators
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'icon', component: IconComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'prograss-bar', component: ProgressBarComponent },
  { path: 'ripples', component: RipplesComponent },

  //Popups & Modals
  { path: 'bottom-sheet', component: BottomSheetComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'tooltip', component: TooltipComponent },

  //Data Table
  { path: 'paginator', component: PaginatorComponent },
  { path: 'sort-header"', component: SortHeaderComponent },
  { path: 'table', component: TableComponent },

  //Other route
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
