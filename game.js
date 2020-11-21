var Blocks; 
if (Blocks === undefined) {
    Blocks = {};
}


var Blocks
if ('Blocks' === undefined){
    Blocks = {};
}

Blocks.game = function (spec,element) {

    "use script";

    var game = BLOCKS.eventDispatcher(),
    clock = BLOCKS.clock(),
    gameContainer,
    gameCanvas,
    interactionContainer,
    paused = false,
    virtualKeyboard,
    motors = [],
    tickers = [],
    debugPressTimeout,
    lastUpdateTime,
    remainingUpdate,
    minWidth,
    minHeight,
    maxHeight,
    maxWidth,
    scaleLandscape,
    scalePortrait,
    debugLayer,
    gameTappedOnce,
    loaded,
    tickerIndex = 0,
    layerIndex = 0,
    maxLayers,
    prepared,
    wasMutedWhenPaused,
    loadStarted,

    handleTickers = function () {
        
    }
}