var spec = {
    bg: {
        src: 'background.jpg'
    }    
};
game.addEventlistener('loaded', function () {
    game.introScreen = BLOCKS.introScreen(spec, game);
});
game.load()

(function(){
    "use strict";
    /* start */

    function greetMe(yourName) {
      alert('Hello ' + yourName);
    }
    
    greetMe('World');
    /*end*/ 
  })();