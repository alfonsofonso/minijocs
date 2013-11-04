/**
 User: alfonso
 Data: 2/11/13 , 10:33
 */

Utils=new function(){


    this.pon=function(obj,ix,ig,centered,r){// objeto, x, y, centered, scale

        obj.scaleX = r;
        obj.scaleY = r;
        centered = centered || false;
        r=r||1;


    if(centered){
        obj.x=ix-obj.getTransformedBounds().width/2;
        obj.y=ig-obj.getTransformedBounds().width/2;
    }else{
        obj.x=ix;
        obj.y=ig;
    }
        obj.cache(0, 0,amp,alt);

        stage.addChild(obj);


    };

};