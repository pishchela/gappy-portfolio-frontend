import { NgModule } from '@angular/core';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { SeparatorComponent } from './separator/separator.component';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ChangeThemeComponent, SeparatorComponent, ContactMeComponent],
  exports: [ChangeThemeComponent, SeparatorComponent, ContactMeComponent]
})
export class SharedModule {}
