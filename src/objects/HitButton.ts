import P5 from "p5";
import { Note } from "./Note";
class HitButton {
    _p: P5;
    _pos: P5.Vector;
    _size: number;
    _button: number;
    fill = "red";

    constructor(p: P5, position: P5.Vector, size: number, button: any) {
        this._p = p;
        this._pos = position;
        this._size = size;
        this._button = button;
    }
    draw = () => {
        const p = this._p;
        p.noStroke()
        p.fill(this.fill);
        p.ellipse(this._pos.x, this._pos.y, this._size);
    }

    buttonPressed = (button: number, note: Note) => {
        if (button === this._button) {
            this.fill = "green";
            return true;
        } else
            return false;
    }

    buttonNotPressed = () => {
        this.fill = "red";
    }

    hitNote = (note: Note) =>
        (note._pos.y <= this._pos.y + 30 && note._pos.y >= this._pos.y - 30) &&
        (note._pos.x === this._pos.x)
};
export default HitButton;
