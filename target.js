const red = "rgba(240, 67, 84, 0.24)"
const green = "rgba(105, 245, 119, 0.16)"
// const orange = "rgba(247, 167, 121, 0.24)"
const grey = "rgba(130, 138, 121, 0.4)"
const blue = "rgba(102, 237, 237, 0.2)"
const yellow = "rgba(255, 215, 10, 0.24)"
const violet = "rgba(172, 102, 237, 0.31)"

const firstWordsOfEachLetter = [
    "0% Milk",
    "Anjou",
    "Banana",
    "Cabbage",
    "Fat Milk",
    "Galia Melon",
    "Kaiser",
    "Leek",
    "Mandarin Juice",
    "Nectarine",
    "Oat Milk",
    "Papaya",
    "Red Beet",
    "Satsumas",
    "Tomato",
    "Vanilla Yoghurt",
    "Watermelon",
    "Yellow Onion",
    "Zucchini",
]


function decideColor(label) {
    switch (label[0]) {
        case '0':
        case 'K':
        case 'R':
        case 'Z':
            return red;

        case 'A':
        case 'L':
        case 'S':
            return green;

        case 'B':
        case 'M':
        case 'T':
            return grey;

        case 'C':
        case 'N':
        case 'V':
            return blue;

        case 'F':
        case 'O':
        case 'W':
            return yellow;

        case 'G':
        case 'P':
        case 'Y':
            return violet;
    }
}

function drawFirstLetter(label) {
    return firstWordsOfEachLetter.some(x => x == label)
}

// Target class (position and width)
class Target {
    constructor(x, y, w, l, id) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.label = l;
        this.id = id;
        this.color = decideColor(l);
    }

    // Checks if a mouse click took place
    // within the target
    clicked(mouse_x, mouse_y) {
        return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
    }

    // Draws the target (i.e., a circle)
    // and its label
    draw() {
        // Draw target
        fill(color(this.color));
        stroke(255, 255, 255, 125);
        strokeWeight(1);
        circle(this.x, this.y, this.width);

        if (drawFirstLetter(this.label)) {
            noStroke();
            textFont("Arial", 22);
            textStyle(BOLD);
            fill(color(9, 255, 5));
            textAlign(CENTER);
            text(this.label[0], this.x, this.y - this.width/2 + 40);
            textStyle(NORMAL);
        }

        // Draw label
        noStroke();
        textFont("Arial", 12);
        textStyle(BOLD);
        fill(color(255, 255, 255));
        textAlign(CENTER);
        text(this.label, this.x, this.y);
        textStyle(NORMAL);
    }
}
