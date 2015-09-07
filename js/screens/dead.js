/**
 * A title screen 
 **/
game.DeathScreen = me.ScreenObject.extend({
 
    /**    
     *  action to perform on state change
     */
    onResetEvent : function() {
    	       me.audio.stopTrack();
    	       me.audio.playTrack("death");
   
        // title screen
        me.game.world.addChild(
            new me.SpriteObject (
                0,0, 
                me.loader.getImage('death_screen')
                
            ),
            1
        );
     
        
        // change to title state on press Enter or click/tap
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.input.bindPointer(me.input.mouse.LEFT, me.input.KEY.ENTER);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "enter") {
                // play something on tap / enter
                // this will unlock audio on mobile devices
                me.audio.play("cling");
                me.state.change(me.state.MENU);
            }
        });
    },
 
    /**    
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.input.unbindPointer(me.input.mouse.LEFT);
        me.event.unsubscribe(this.handler);
   }
});