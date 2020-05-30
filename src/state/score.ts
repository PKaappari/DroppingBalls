import p5 from "p5";

const state = {
    score: 0
};

export default {
    increase: () => state.score++,
    draw: (p: p5) => {
        p.fill(255);
        p.textSize(32)
        p.text(`Score: ${state.score}`, 10, 60);
    }
};
