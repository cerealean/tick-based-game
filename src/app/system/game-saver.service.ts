import { Injectable } from '@angular/core';
import { MainControllerService } from '../main-controller.service';
import { GameObject } from '../game-objects/game-object';
import { SaveSnapshot } from './save-snapshot';

@Injectable({
  providedIn: 'root'
})
export class GameSaverService {
  constructor(private readonly mainController: MainControllerService) {
    this.mainController.gameObjects$.subscribe(gos => this.saveGame(gos));
  }

  private saveGame(gameObjects: GameObject[]) {
    const snapshot = new SaveSnapshot(gameObjects);
    // ... do storage
  }

  private loadGame() {
    
  }
}
