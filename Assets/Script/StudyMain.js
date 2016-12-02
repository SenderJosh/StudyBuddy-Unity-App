#pragma strict
//PlayerPrefs booleans are 0 for false, 1 for true

var style : GUIStyle;
var text : Texture;

var createText : Texture2D;
var buty1 : float;

var openText : Texture2D;
var buty : float;

var deleteText : Texture;
var buty2 : float;

var mainText : Texture2D;
var buty3 : float;

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
	var openbutton = GUI.Button(new Rect(screenx/4, screenh*buty, openText.width, openText.height), openText);
	if(openbutton)
	{
		Application.LoadLevel("OpenStudy");
	}
	var mainmenu = GUI.Button(new Rect(screenx/4, screenh*buty3, mainText.width, mainText.height), mainText);
	if(mainmenu)
	{
		Application.LoadLevel("StudyBuddy");
	}
	var createstudy = GUI.Button(new Rect(screenx/4, screenh*buty1, createText.width, createText.height), createText);
	if(createstudy)
	{
		Application.LoadLevel("CreateStudy");
	}
	var studybutton = GUI.Button(new Rect(screenx/4, screenh*buty2, deleteText.width, deleteText.height), deleteText);
	if(studybutton)
	{
		Application.LoadLevel("DeleteStudy");
	}
}

function textRndm()
{
	var texture = [bgText, bgText1, bgText2, bgText3, bgText4, bgText5];
	var rndm = Random.Range(1,6);
	return texture[rndm];
}