export interface ItemView<Coordinate> {
    path2d: Path2D;
    coordinate: Coordinate;
    context: CanvasRenderingContext2D;
    render(): void;
    destroy(): void;
}

