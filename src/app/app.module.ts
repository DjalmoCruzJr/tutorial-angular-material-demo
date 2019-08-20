import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { InputComponent } from './components/input/input.component';
import { RadioComponent } from './components/radio/radio.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { IndexComponent } from './components/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { DividerComponent } from './components/divider/divider.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TreeComponent } from './components/tree/tree.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ChipsComponent } from './components/chips/chips.component';
import { IconComponent } from './components/icon/icon.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { RipplesComponent } from './components/ripples/ripples.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SortHeaderComponent } from './components/sort-header/sort-header.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';

@NgModule(
  {
    declarations: [
      AppComponent,
      AutocompleteComponent,
      CheckboxComponent,
      DatepickerComponent,
      FormFieldComponent,
      InputComponent,
      RadioComponent,
      SelectComponent,
      SliderComponent,
      SlideToggleComponent,
      IndexComponent,
      MenuComponent,
      SidenavComponent,
      ToolbarComponent,
      CardComponent,
      DividerComponent,
      ExpansionPanelComponent,
      GridListComponent,
      StepperComponent,
      TabsComponent,
      TreeComponent,
      ButtonComponent,
      ButtonToggleComponent,
      BadgeComponent,
      ChipsComponent,
      IconComponent,
      ProgressSpinnerComponent,
      ProgressBarComponent,
      RipplesComponent,
      BottomSheetComponent,
      DialogComponent,
      SnackbarComponent,
      TooltipComponent,
      PaginatorComponent,
      SortHeaderComponent,
      TableComponent,
      ListComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [
      AppComponent
    ]
  }
)
export class AppModule {}
