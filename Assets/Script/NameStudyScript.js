#pragma strict

//premsave# -- Name of study
//save#n -- Name of study

//save1-5 -- Identifies : checks if exist 0: no exist 1: exist

/* ***Example for save1***
save name: save1n
get save name: PlayerPrefs.GetString("creating") -- ('creating' is a temporary save), if looking for specific saves without that: PlayerPrefs.GetString("save1")
get game type: PlayerPrefs.GetString("save1") (returns gametype)

*/

var bgText : Texture;

var finText : Texture;
var buty : float;

var style : GUIStyle;

var x2 : float;
var y1 : float;
var y2 : float;

var textField = "Name of Study";

function Start () {
	Screen.orientation = ScreenOrientation.Portrait;
}

function OnGUI()
{
	var screenx = Screen.width;
	var screenh = Screen.height;
	style = GUI.skin.textField;
	style.fontSize = 48;
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), bgText);
	textField = GUI.TextField(new Rect(screenx/4, screenh*y1, screenx/2, screenh*y2), textField, 15, style);
	if(GUI.Button(new Rect(screenx/4, screenh*buty, finText.width, finText.height), finText))
	{
		if(textField.Length != 0)
		{
			//name of save
			PlayerPrefs.SetString(PlayerPrefs.GetString("creating")+"n",textField);
			//save now exists			
			PlayerPrefs.SetInt(PlayerPrefs.GetString("creating"), 1);
			PlayerPrefs.Save();
			Application.LoadLevel("StudyBuddy");
		}
		else
		{
			textField = "INSERT NAME";
		}
	}
}