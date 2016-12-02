#pragma strict
//PlayerPrefs booleans are 0 for false, 1 for true

var bgText : Texture;

var x1 : float;
var x2 : float;
var y1 : float;
var y2 : float;
var butx : float;
var butx1 : float;
var buty : float;
var buty1 : float;

var textField = "Your Name";

function Start()
{
	Screen.orientation = ScreenOrientation.Portrait;
}

function OnGUI()
{
	var screenx = Screen.width;
	var screenh = Screen.height;
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), bgText);
	textField = GUI.TextField(new Rect(screenx*x1, screenh*y1, screenx*x2, screenh*y2), textField, 15);
	if(GUI.Button(new Rect(screenx*butx, screenh*buty, screenx*butx1, screenh*buty1), "Confirm"))
	{
		if(textField.Length != 0)
		{
			Application.LoadLevel("StudyBuddy");
			PlayerPrefs.SetString("PlayerName",textField);
			PlayerPrefs.Save();
		}
		else
		{
			textField = "INSERT NAME";
		}
	}
}

