const generatedSentence = document.getElementById('generated-sentence');
const generateBtn = document.getElementById('generate-btn');

const nouns = ['heart', 'rainbow', 'ocean', 'flower', 'sun'];
const adjectives = ['beautiful', 'bold', 'graceful', 'shining', 'excited'];
const verbs = ['see', 'discover', 'notice', 'admire', 'observe'];

function generateRandomSentence() {
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];

    const sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`;
    return sentence;
}

generateBtn.addEventListener('click', () => {
    generatedSentence.textContent = generateRandomSentence();
});

generatedSentence.textContent = generateRandomSentence();

// Theme park ride recommendations
const age = 25;
const height = 5;

console.log("Age:", age);
console.log("Height:", height);

if (age < 8) {
    console.log("Check out the Merry-Go-Round. You'll love it!");
} else if (age > 8 && age < 65 && height > 4.5) {
    console.log("Check out the Roller Coaster. It's awesome!");
} else {
    console.log('Why not enjoy a float down the Lazy River?');
}