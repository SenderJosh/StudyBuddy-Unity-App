#pragma strict

//multchoice : GameType to be used on Open
//PlayerPrefs.GetString("creating")+"gametype" grabs the save the user is creating from

var text : Texture;

var mainText : Texture2D;
var buty2 : float;

var multChoice : Texture2D;
var buty3 : float;

function Start () {
	Screen.orientation = ScreenOrientation.Portrait;
	PlayerPrefs.SetString(PlayerPrefs.GetString("creating"), "multchoice");
	Application.LoadLevel("StudySetup");
}

function OnGUI () {
	var screenx = Screen.width;
	var screenh = Screen.height;
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), text);
	var mainmenu = GUI.Button(new Rect(screenx/4, screenh*buty2, mainText.width, mainText.height), mainText);
	if(mainmenu)
	{
		Application.LoadLevel("StudyBuddy");
	}
	if(GUI.Button(new Rect(screenx/8, screenh*buty3, multChoice.width, multChoice.height), multChoice))
	{
		PlayerPrefs.SetString(PlayerPrefs.GetString("creating"), "multchoice");
		Application.LoadLevel("StudySetup");
	}
}