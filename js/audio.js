/**
 * Created with JetBrains WebStorm.
 * User: Jordi Borrell
 * Date: 18/09/13
 * Time: 12:45
 * To change this template use File | Settings | File Templates.
 */

var piloteja=true;
Audio = new  function()
{
    this.sonaMEC =function ()
    {
        createjs.Sound.play('mec', createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    }
    this.sonaA1 =function ()
    {
        createjs.Sound.play('a1', createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    }
    this.sonaA2 =function ()
    {
        createjs.Sound.play('a2', createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    }
    this.sonaBIRI =function ()
    {
        createjs.Sound.play('biri', createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    }
    this.sonaDUTXA =function ()
    {
        createjs.Sound.play('dutxa', createjs.Sound.INTERRUPT_EARLY, 0, 0, true, 1);
    }

    this.sonaPILOTA =function ()
    {
        createjs.Sound.play('pilota', createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);

    }
    this.sonaRIU =function ()
    {
        createjs.Sound.play('riu', createjs.Sound.INTERRUPT_EARLY, 0, 0, true, 1);
    }
    this.stopAudio =function ()
    {
        createjs.Sound.stop('');
    }
    this.sonaSONALL =function ()
    {
        createjs.Sound.play('sonall', createjs.Sound.INTERRUPT_EARLY, 0, 0, true, 1);
    }
    this.sonaXUMET =function ()
    {
        createjs.Sound.play('xumet', createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    }
    this.sonaJOC =function ()
    {
        createjs.Sound.play('minijoc', createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    }
    this.sonaENTORN =function ()
    {
        createjs.Sound.play('entorn', createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    }
    this.sonaOBJ =function ()
    {
        createjs.Sound.play('objecte', createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    }
    this.sonaTOUCH =function ()
    {
        createjs.Sound.play('touch', createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    }
    this.sonaXILOFON =function (num)
    {
        createjs.Sound.play('sound'+num, createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    }
}