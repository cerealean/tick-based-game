import { Injectable, computed, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { filter, interval } from 'rxjs';
import { GameObject } from './game-objects/game-object';
import { Building } from './game-objects/buildings/building';

@Injectable({
  providedIn: 'root'
})
export class MainControllerService {
  private readonly timerLengthInMs = 60000;
  private readonly _ticker = interval(this.timerLengthInMs).pipe(takeUntilDestroyed());
  private readonly currency = signal(0);
  private readonly gameObjects = signal([] as GameObject[]);

  public readonly currency$ = toObservable(this.currency).pipe(takeUntilDestroyed());
  public readonly gameObjects$ = toObservable(this.gameObjects).pipe(takeUntilDestroyed());
  public readonly buildings$ = this.gameObjects$.pipe(filter(go => go instanceof Building));

  constructor() {
    this._ticker.subscribe(() => this.onTick());
  }

  private onTick() {

  }
}
