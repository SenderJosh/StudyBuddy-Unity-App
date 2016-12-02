#pragma strict
//PlayerPrefs booleans are 0 for false, 1 for true

var style : GUIStyle;
var text : Texture;

var bgText : Texture;
var bgText1 : Texture;
var bgText2 : Texture;
var bgText3 : Texture;
var bgText4 : Texture;
var bgText5 : Texture;

var x1 : float;
var x2 : float;
var y1 : float;
var y2 : float;

function Start()
{
	Screen.orientation = ScreenOrientation.Portrait;
	text = textRndm();
}

function OnGUI()
{
	var screenx = Screen.width;
	var screenh = Screen.height;
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), text);
	GUI.Label(new Rect(screenx*x1, screenh*y1, screenx*x2, screenh*y2), PlayerPrefs.GetString("PlayerName"), style);
}

function textRndm()
{
	var texture = [bgText, bgText1, bgText2, bgText3, bgText4, bgText5];
	var rndm = Random.Range(1,6);
	return texture[rndm];
}