import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Object2D } from './Object2D';




export class Circle implements Object2D {


    public velocityX: number;
    public velocityY: number;
    public renderType: 'fill' | 'stroke';
    public fillStyle: string;
    public width: number;
    public strokeStyle: string;
    public height: number;
    public src: number;

    constructor(
        public x: number,
        public y: number,
        public radius: number
    ) {

    }

    getPosition(): { x: number, y: number } { return { x: this.x, y: this.y }; }
    setPosition(x: number, y: number): void { this.x = x; this.y = y; }
    getVelocity(): { velocityX: number, velocityY: number } { return { velocityX: this.velocityX, velocityY: this.velocityY }; }
    setVelocity(velocityX: number, velocityY: number): void { this.velocityX = velocityX; this.velocityY = velocityY; }

    toPath2D(): Path2D {
        const path2D = new Path2D();

        path2D.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        path2D.closePath();
        return path2D;
    }



}

