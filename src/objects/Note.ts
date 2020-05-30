import p5 from "p5";

export class Note {
    _p: p5;
    _pos: p5.Vector;
    _size: number;
    constructor(p: p5, position: p5.Vector, size: number) {
        this._p = p;
        this._pos = position;
        this._size = size;
    }


    draw = () => {
        const p = this._p;
        p.noStroke()
        p.fill("yellow");
        p.ellipse(this._pos.x, this._pos.y, this._size);
    }

    move = () => {
        this._pos.y += 5;
    }
}
