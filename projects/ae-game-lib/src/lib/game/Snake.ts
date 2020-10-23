import { Circle } from './Circle';

export class Snake extends Circle {
    public positions$: { x: number, y: number }[] = [];
    public positions: { x: number, y: number }[] = [];
    constructor() {
        super(100, 100, 50);
    }

    feedSnake(): void { }

    updatePosition(x: number, y: number): void {

        this.positions$.unshift({ x, y });
        this.positions = this.positions$.slice(0, 50);
        if (this.positions$.length > 100) {
            this.positions$.pop();
        }

        for (let i = 0; i < this.positions.length - 1; i++) {
            if (i === 0) {
                this.positions[0] = { x: this.x, y: this.y };
                continue;
            }
            this.positions[i] = this.positions[i + 1];
        }
        this.setPosition(x, y);
    }

    render(context: CanvasRenderingContext2D): void {

        for (let i = this.positions.length - 1; i > -1; i--) {
            context.beginPath();
            context.arc(this.positions[i].x, this.positions[i].y, 50, 0, Math.PI * 2);
            context.shadowColor = 'orange';
            context.shadowOffsetX = 1;
            context.shadowOffsetY = 1;
            context.fill();
            context.closePath();
        }

        context.fillStyle = this.fillStyle;
        context.fill(this.toPath2D());

        setTimeout(() => {
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }, 0);

    }

}





