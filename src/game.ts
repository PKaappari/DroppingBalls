import p5 from "p5";
import HitButton from "./objects/HitButton";
import { Note } from "./objects/Note";
import { getRandomInt } from "./utils";
import Score from "./state/score";

interface GameObjects {
    buttons: HitButton[];
    notes: Note[];
}

export const draw = (p: p5, elements: GameObjects) => () => {
    const { buttons, notes } = elements;
    p.background(55);
    buttons.forEach(button => button.draw());
    !p.keyIsPressed &&
        buttons.forEach(button => {
            button.buttonNotPressed()
        });
    notes.forEach(note => note.draw())
    notes.forEach(note => note.move())
    notes.forEach((note, index) => note._pos.y >= p.height && notes.splice(index, 1))
    Score.draw(p);
}
