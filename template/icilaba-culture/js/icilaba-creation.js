/* -------------------------------------------------------------- 
	
	icilaba-creation.js
	
-------------------------------------------------------------- */

if ( !$defined( ic ) )
{
	var ic = { };
	ic.effects = { };
	ic.widgets = { };
}

ic.effects.ImageRollOver = 
{
	init: function()
	{
		var images = $$( 'img' );
		//
		images.each( function( image )
		{
			if( image.getParent( ).get( 'tag' ) == 'a' )
			{
				image.addEvent( 'mouseover', function( event )
				{
					new Event( event ).stop( );
					this.fade( 0.75 );
				} );
				//
				image.addEvent( 'mouseout', function( event )
				{
					new Event( event ).stop( );
					this.fade( 1 );
				} );
			}
		} );
	}
};


window.addEvent( ic.effects.ImageRollOver.init );
