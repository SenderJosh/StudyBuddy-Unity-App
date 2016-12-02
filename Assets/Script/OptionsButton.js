#pragma strict

var optionsText : Texture2D;
var butx : float;
var buty : float;

function OnGUI()
{
	var screenx = Screen.width;
	var screenh = Screen.height;
	var studybutton = GUI.Button(new Rect(screenx*butx, screenh*buty, optionsText.width, optionsText.height), optionsText);
	if(studybutton)
	{
		Application.LoadLevel("Options");
	}
}