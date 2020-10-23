
export interface Weapon {
    damage: number;
    speed: number;
    range: number;
    ammo: number;
    shootAt(aim: Coordinates): void;
}

