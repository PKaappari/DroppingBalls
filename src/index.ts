import p5 from "p5";
import HitButton from "./objects/HitButton";
import { width, height, buttonMap } from "./settings";
import { draw } from "./game";
import { getRandomInt } from "./utils";
import { Note } from "./objects/Note";
import Score from "./state/score";

const initialScore = 0;
const score = (oldScore: number = 0, newScore: number) => oldScore + newScore;

const createGame = (p: p5) => {
    let notes: Note[] = [];
    const buttons: HitButton[] = [...Array(6)].map((_item, index) => {
        const position = p.createVector(width / 7 * (index + 1), height - 100);
        return new HitButton(p, position, 80, buttonMap[index]);
    });

    const createNotes = () => setInterval(() => {
        const position = p.createVector(p.width / 7 * (getRandomInt(6) + 1), 0);
        const note = new Note(p, position, 60);
        notes.push(note);
    }, 1000)

    p.setup = () => {
        p.createCanvas(width, height);
        createNotes();
    }

    p.draw = draw(p, { buttons, notes });

    p.keyPressed = () =>
        buttons.forEach(button =>
            notes.forEach((note, index) => {
                if (button.buttonPressed(p.keyCode, note) && button.hitNote(note)) {
                    notes.splice(index, 1);
                    Score.increase();
                }
            })
        );
}

const container = document.getElementById("container");
if (container)
    new p5(createGame, container);
