const messages = [
    'mark',
    'pelusa',
    'nary',
    'dyon',
    'raptor',
    'ghoul',    
];

const randomMessage = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message)
};

module.exports = {randomMessage}