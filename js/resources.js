//game resources
game.resources = [
    /**
     * Graphics.
     */
    // our level tileset
    {name: "area01_level_tiles",  type:"image", src: "data/img/map/area01_level_tiles.png"},
       {name: "gripe_run_right", type:"image", src: "data/img/sprite/gripe_run_right.png"},
    /* 
     * Maps. 
     */
    {name: "area01_bkg0",         type:"image", src: "data/img/area01_bkg0.png"},
     {name: "spinning_coin_gold",  type:"image", src: "data/img/sprite/spinning_coin_gold.png"},
      {name: "wheelie_right",       type:"image", src: "data/img/sprite/wheelie_right.png"},
       {name: "32x32_font",          type:"image", src: "data/img/font/32x32_font.png"},
       {name: "title_screen",        type:"image",	src: "data/img/gui/title_screen.png"},
        {name: "death_screen",        type:"image",	src: "data/img/gui/death_screen.png"},
    {name: "area01", type: "tmx", src: "data/map/area01.tmx"},
    {name: "area02",              type: "tmx",	src: "data/map/area02.tmx"},
{name: "dst-inertexponent", type: "audio", src: "data/bgm/"},
	{name: "startup", type: "audio", src: "data/bgm/"},
	{name: "death", type: "audio", src: "data/bgm/"},
	/* 
	 * Sound effects. 
	 */
	{name: "cling", type: "audio", src: "data/sfx/"},
	{name: "stomp", type: "audio", src: "data/sfx/"},
	{name: "jump",  type: "audio", src: "data/sfx/"}

];