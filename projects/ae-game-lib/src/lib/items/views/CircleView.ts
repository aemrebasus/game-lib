import { Coordinate } from './Coordinate';
import { ItemView } from './ItemView';

export class CircleView implements ItemView<Coordinate> {

    public path2d: Path2D;
    public coordinate: Coordinate;
    public context: CanvasRenderingContext2D;
    
    constructor() {

    }
    render(): void {
        throw new Error('Method not implemented.');
    }
    destroy(): void {
        throw new Error('Method not implemented.');
    }

}

