import {storiesOf, moduleMetadata} from '@storybook/angular';

import { BasicButtonComponent } from '../app/basic-button/basic-button.component';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { from } from 'rxjs';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


storiesOf( 'Base/Button', module)
.addDecorator(
  moduleMetadata({
      declarations: [
        BasicButtonComponent
      ],
      imports: [
          MatButtonModule,
          MatIconModule,
          MatBadgeModule
      ],
  }),
)
.add('default', () => ({
  component: BasicButtonComponent,
  props: {
    btText: 'Vimal',
    btColor: 'primary',
    btnType:'raisedButton'
  },
}))
.add('warn with flatButton', () => ({
  component: BasicButtonComponent,
  props: {
    btColor: 'warn',
    btText: 'Vimal',
    btnType:'flatButton'
  },
}))
.add('accent with strokedButton', () => ({
 component: BasicButtonComponent,
 props: {
  btColor: 'accent',
   btText: 'ART1',
   btnType:'strokedButton'
 },
}))
.add('warn with raisedButton', () => ({
 component: BasicButtonComponent,
 props: {
  btColor: 'warn',
   btText: 'Mohamed',
   btnType:'raisedButton'
 },
}))
.add('warn with raisedButton and disabled', () => ({
  component: BasicButtonComponent,
  props: {
   btColor: 'warn',
    btText: 'Mohamed',
    btnType:'raisedButton',
    isDisabled: true
  },
 }));
;
storiesOf('Button', module)