

type RenderType = 'fill' | 'stroke';

/**
 * @field x: number;
 * @field y: number;
 * @field velocityX: number;
 * @field velocityY: number;
 * @field renderType: RenderTy
 * @field fillStyle: string;
 * @field strokeStyle: string;
 * @field radius: number;
 * @field width: number;
 * @field height: number;
 * @field src: number;
 */
export interface Object2D {
    x: number;
    y: number;
    velocityX: number;
    velocityY: number;
    renderType: RenderType;
    fillStyle: string;
    strokeStyle: string;
    radius: number;
    width: number;
    height: number;
    src: number;

    toPath2D(): Path2D;
}



