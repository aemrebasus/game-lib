import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Snake } from './game/Snake';

const PLAYER_SPEED = 4;


function calculateVelocity(x1, y1, x2, y2, multiplier: number = 1): { velocityX: number, velocityY: number } {

  const dist = Math.hypot(x1 - x2, y1 - y2);
  const velocityX = ((x1 - x2) / dist) * multiplier;
  const velocityY = ((y1 - y2) / dist) * multiplier;

  return { velocityX, velocityY };
}


@Component({
  selector: 'lib-ae-game-lib',
  templateUrl: './ae-game-lib.component.html',
  styleUrls: ['./ae-game-lib.component.scss']
})
export class AeGameLibComponent implements OnInit, AfterViewInit {

  @ViewChild('gameContainer') gameContainerElement: ElementRef<HTMLDivElement>;
  @ViewChild('canvas') canvasElement: ElementRef<HTMLCanvasElement>;
  @ViewChild('bg') bgImg: ElementRef<HTMLImageElement>;
  @Input() backgroundSrc = '/assets/bgImg.jpg';

  public context2d: CanvasRenderingContext2D;
  public canvasOptions: { width: number, height: number };

  snake = new Snake();


  ngOnInit(): void {
    this.initCanvasOptions();
  }

  ngAfterViewInit(): void {
    this.initCanvas2d();
    this.startGame();
  }

  startGame(): void {

    this.snake.fillStyle = 'rgb(250, 100, 100)';
    this.snake.setVelocity(1, 1);

    document.addEventListener('mousemove', (event) => {
      const { velocityX, velocityY } = calculateVelocity(event.clientX, event.clientY, this.snake.x, this.snake.y, PLAYER_SPEED);
      this.snake.setVelocity(velocityX, velocityY);
    });


    const animation = () => {

      this.snake.updatePosition(this.snake.x + this.snake.velocityX, this.snake.y + this.snake.velocityY);

      this.snake.render(this.context2d);


      requestAnimationFrame(animation);

    };

    requestAnimationFrame(animation);

  }

  private initCanvas2d(): void {
    this.context2d = this.canvasElement.nativeElement.getContext('2d');
  }

  private initCanvasOptions(): void {
    this.canvasOptions = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  private renderBackgroundImage(): void {
    this.context2d.drawImage(this.bgImg.nativeElement, 0, 0, this.canvasOptions.width, this.canvasOptions.height);
    this.context2d.fill();
  }




}
