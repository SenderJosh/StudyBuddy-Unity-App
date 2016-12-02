#pragma strict

var studyText : Texture2D;
var butx : float;
var buty : float;

function OnGUI()
{
	var screenx = Screen.width;
	var screenh = Screen.height;
	var studybutton = GUI.Button(new Rect(screenx*butx, screenh*buty, studyText.width, studyText.height), studyText);
	if(studybutton)
	{
		Application.LoadLevel("Study");
	}
}