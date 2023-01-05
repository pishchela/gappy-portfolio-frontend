import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { THEME_ARRAY } from '../../../core/app.constants';

const THEME_INDEX_KEY = 'THEME_INDEX';

enum ANIMATION_SPINNING_STATE {
  RUNNING = 'running',
  PAUSED = 'paused'
}

@Component({
  selector: 'happi-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeThemeComponent implements OnInit {
  private _themeWrapper = document.querySelector('body');
  private _themeIndex: number = 0;

  public animationState: ANIMATION_SPINNING_STATE =
    ANIMATION_SPINNING_STATE.RUNNING;

  public ngOnInit(): void {
    this._setSerializedTheme();
    this.changeTheme();
  }

  public setPausedAnimationState(): void {
    this.animationState = ANIMATION_SPINNING_STATE.PAUSED;
  }

  public setRunningAnimationState(): void {
    this.animationState = ANIMATION_SPINNING_STATE.RUNNING;
  }

  public changeTheme(): void {
    this._serializeTheme();
    this._themeWrapper?.style.setProperty(
      '--bodyBackground',
      THEME_ARRAY[this._themeIndex].bgColor
    );
    this._themeWrapper?.style.setProperty(
      '--color',
      THEME_ARRAY[this._themeIndex].color
    );
    if (++this._themeIndex === THEME_ARRAY.length) {
      this._themeIndex = 0;
    }
  }

  private _setSerializedTheme(): void {
    const savedTheme = localStorage.getItem(THEME_INDEX_KEY);
    if (this._themeIndex === 0 && savedTheme) {
      this._themeIndex = JSON.parse(savedTheme);
    }
  }

  private _serializeTheme(): void {
    localStorage.setItem(THEME_INDEX_KEY, JSON.stringify(this._themeIndex));
  }
}
