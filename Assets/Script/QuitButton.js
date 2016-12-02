#pragma strict

var quitText : Texture2D;
var butx : float;
var buty : float;

function OnGUI()
{
	var screenx = Screen.width;
	var screenh = Screen.height;
	var studybutton = GUI.Button(new Rect(screenx*butx, screenh*buty, quitText.width, quitText.height), quitText);
	if(studybutton)
	{
		PlayerPrefs.Save();
		Application.Quit();
	}
}