import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-ae-game-lib',
  templateUrl: './ae-game-lib.component.html',
  styleUrls: ['./ae-game-lib.component.scss']
})
export class AeGameLibComponent implements OnInit, AfterViewInit {

  @ViewChild('gameContainer') gameContainerElement: ElementRef<HTMLDivElement>;
  @ViewChild('canvas') canvasElement: ElementRef<HTMLCanvasElement>;

  public context2d: CanvasRenderingContext2D;

  private canvasOptions: { width: number, height: number };

  ngOnInit(): void {
    this.initCanvasOptions();
  }

  ngAfterViewInit(): void {
    this.initCanvas2d();
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




}
