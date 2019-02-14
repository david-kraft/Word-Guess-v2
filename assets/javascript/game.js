var gameEngine = {

    // Array of puzzle solutions
    characters: [
        {
            name: "Revan",
            class: "Jedi",
            temperment: "Player’s Choice",
            quote: "“I don’t know your name—but I take up your cause. I will not remove your mask until there is justice—until the Mandalorians have been defeated once and for all. So swears… Revan!”"
        },
        {
            name: "Bastilla Shan",
            class: "Jedi Sentinel",
            temperment: "Light-side",
            quote: "“The Force fights with me!”"
        },
        {
            name: "Jolee Bindo",
            class: "Jedi Consular",
            temperment: "Neutral",
            quote: "“What’s there to say? Jolee Bindo is the crazy old man who lives in the dangerous woods. I am content with the impression I give.”"
        },
        {
            name: "Juhani",
            class: "Jedi Guardian",
            temperment: "Light-side",
            quote: "“From that moment on I knew that I would have to try to become a Jedi. To lift myself out of the rut I had been living in for years and to make a real difference, as the Jedi were. The foolish delusions of a child. But THIS child made it happen!”"
        },
        {
            name: "Canderous Ordo",
            class: "Soldier",
            temperment: "Dark-side",
            quote: "“I’m someone you don’t want to get on the bad side of.”"
        },
        {
            name: "Carth Onasi",
            class: "Soldier",
            temperment: "Light-side",
            quote: "“I’m not a warrior, I’m a soldier. There’s a difference. Warriors attack and conquer, they prey on the weak. Soldiers defend and protect the innocent—usually from warriors.”"

        },
        // {
        //     name: "T3-M4",
        //     class: "Expert droid",
        //     temperment: "Neutral",
        //     quote: "*Beep beep blip!*"
        // },
        // {
        //     name: "HK-47",
        //     class: "Assassin droid",
        //     temperment: "Dark-side",
        //     quote: "“Statement: I see you have purchased me, master. I find this a satisfactory arrangement. Am I to accompany you now? Shall I kill something for you?”"
        // },
        {
            name: "Darth Malak",
            class: "Sith Lord",
            temperment: "Dark-side",
            quote: "“You made a mistake coming here, Revan. The Star Forge fuels my command of the dark side. You are no match for me here. And this time you will not escape!”"
        },
        {
            name: "Mission Vao",
            class: "Scoundrel",
            temperment: "Light-side",
            quote: "“He showed me how to slice into a computer’s security system; how to get inside a locked building without the entrance codes, and how to spot a wealthy mark for a quick shell game.”"
        },
        {
            name: "Zaalbar",
            class: "Scout",
            temperment: "Light-side",
            quote: "[Our claws are tools, not weapons. To use them in battle is to become an animal. It is madness without honor.]"
        },
        {
            name: "Calo Nord",
            class: "Bounty Hunter",
            temperment: "Dark-side",
            quote: "“I have to give you credit. You’ve led me on quite a chase. But nobody gets away from Calo Nord in the end.”"
        },
        {
            name: "Saul Karath",
            class: "Admiral",
            temperment: "Dark-side",
            quote: "“War's a funny thing. It makes you do things you never thought you'd do.”"
        },
    ],

    // Global variables
    solution: {},
    nameRef: "",
    remaining: "",
    puzzle: "",
    indexArray: [],
    pool: [],
    input: "",
    winCount: 0,
    wrongCount: 0,
    lossCount: 0,

    // Events
    startEvent: function () {
        console.log("startEvent() triggered")

        // Start listening for keyup event

        // Replace value of solution obj with randomly selected array value
        var solutionIndex = Math.floor(this.characters.length * Math.random());
        this.solution = this.characters[solutionIndex];
        console.log(this.solution)

        // replace this.nameRef with this.solution.name.toUpperCase()
        this.nameRef = this.solution.name.toUpperCase();

        // remove " " and "-" from remaining string

        // Reveal variables after event
        console.log(this.nameRef)

    },
    keyUpEvent: function () {
        console.log("keyUpEvent() triggered")
        // redefine this.input to the lowercase version of .key of the onKeyUp event
        this.input = document.onkeyup().key

        // call this.guessEvent(this.input)
        this.guessEvent(this.input)
    },
    guessEvent: function (p) {
        console.log("guessEvent() triggered")
        if (condition) /* call rightEvent if puzzle includes p */ {
            this.rightEvent(p);
        } else if (condition) /* call wrongEvent if pool includes p */ {
            this.wrongEvent(p);
        } else /* Key pressed is neither in pool nor puzzle */ {
            alert("Please press a key in the guessing pool.")
        }
    },
    rightEvent: function (p) {
        console.log("rightEvent() triggered.");
        // remove letter from pool
        // use for/while loop within if statement
        // condition: remaining contains the key
        // find the indices of each instance of the key
        // replace underscores in puzzle string that match indicies
    },
    fillSpacesWithKey: function (key, indexArray) {
        console.log("fillSpacesWithKey() triggered.");
        // overwrite charaqcte3rs at the indices in array with key. Values should be in params.
    },
    wrongEvent: function (p) {
        console.log("wrongEvent() triggered.");

    },

    // Tasks
    winCheck: function () {
        console.log("winCheck() triggered.");
        // Check to see if remaining string === emptyString
        if (this.remaining === "") {
            gameWin()
        }

    },
    lossCheck: function () {
        console.log("lossCheck() triggered.");
        // Check to see if number of guesses is greater than 5
        // Run at end of wrongEvent() 
    },
    generateBlankPuzzle: function () {
        console.log("generateBlankPuzzle() triggered.");

    },
    gameWin: function () {
        console.log("gameWin() triggered.");

    },
    gameLoss: function () {
        console.log("gameLoss() triggered.");

    }
}

gameEngine.startEvent();