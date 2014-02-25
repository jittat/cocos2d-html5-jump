var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.createBlocks();

        this.jumper = new Jumper( 400, 160 );
        this.addChild( this.jumper );
        this.jumper.scheduleUpdate();
        this.jumper.setBlocks( this.blocks );
        
        this.setKeyboardEnabled( true );

        this.scheduleUpdate();
        
        return true;
    },

    createBlocks: function() {
        this.blocks = [];
        var groundBlock = new Block( 0, 0, 700, 160 );
        this.blocks.push( groundBlock );

        var topBlock = new Block( 0, 200, 400, 250 );
        this.blocks.push( topBlock );

        var topTopBlock = new Block( 600, 370, 800, 420 );
        this.blocks.push( topTopBlock );

        this.blocks.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },

    onKeyDown: function( e ) {
        this.jumper.handleKeyDown( e );
    },

    onKeyUp: function( e ) {
        this.jumper.handleKeyUp( e );
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

