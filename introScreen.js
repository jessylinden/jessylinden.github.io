var spec = {
    bg: {
        src: 'background.jpg'
    }    
};
game.addEventlistener('loaded', function () {
    game.introScreen = BLOCKS.introScreen(spec, game);
});
game.load()
