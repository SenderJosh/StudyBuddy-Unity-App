#pragma strict
//premsave# -- Name of study
//save#n
//prem# -- Identifier : 0 - Not bought | 1 - Bought
//save1-5 -- Identifier : 0 - Does not exist | 1 - Exists || 4 - 5 are premium saves, check first

var style : GUIStyle;
var text : Texture;

var theScript : GameObject;

var diaText : Texture2D;
var buty8 : float;
var butxx : float;

var confText : Texture2D;
var buty9 : float;
var butx : float;

var cancText : Texture2D;
var buty10 : float;
var butx1 : float;

var mainText : Texture2D;
var buty2 : float;
var buty3 : float;
var buty4 : float;
var buty5 : float;
var buty6 : float;
var buty7 : float;

var butty2 : float;

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

var style1 : GUIStyle;
var style2 : GUIStyle;
var style3 : GUIStyle;
var style4 : GUIStyle;
var style5 : GUIStyle;

var check1 = false;
var check2 = false;
var check3 = false;
var check4 = false;
var check5 = false;

var save1;
var save2;
var save3;
var premsave1;
var premsave2;

var arrayq : String[];
var arraya : String[];

function Start()
{
	Screen.orientation = ScreenOrientation.Portrait;
	text = textRndm();
	style1.name = "save1";
	style2.name = "save2";
	style3.name = "save3";
	style4.name = "save4";
	style5.name = "save5";
	save1 = PlayerPrefs.GetString("save1n", "No Study Found");
	save2 = PlayerPrefs.GetString("save2n", "No Study Found");
	save3 = PlayerPrefs.GetString("save3n", "No Study Found");
	if(PlayerPrefs.GetInt("prem1") == 0)
	{
		premsave1 = "Purchase This Slot for $0.99";
	}
	else
	{
		premsave1 = PlayerPrefs.GetString("save4n", "No Study Found");
	}
	if(PlayerPrefs.GetInt("prem2") == 0)
	{
		premsave2 = "Purchase This Slot for $0.99";
	}
	else
	{
		premsave2 = PlayerPrefs.GetString("save5n", "No Study Found");
	}
	
}

function OnGUI()
{
	var screenx = Screen.width;
	var screenh = Screen.height;
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), text);
	GUI.Label(new Rect(screenx*x1, screenh*y1, screenx*x2, screenh*y2), PlayerPrefs.GetString("PlayerName"), style);
	if(!check1 && !check2 && !check3 && !check4 && !check5)
	{
	var mainmenu = GUI.Button(new Rect(screenx/4, screenh*buty2, mainText.width, mainText.height), mainText);
	style1 = GUI.skin.button;
	style2 = GUI.skin.button;
	style3 = GUI.skin.button;
	style4 = GUI.skin.button;
	style5 = GUI.skin.button;
	style1.fontSize = 48;
	style2.fontSize = 48;
	style3.fontSize = 48;
	style4.fontSize = 48;
	style5.fontSize = 48;
	if(mainmenu)
	{
		Application.LoadLevel("StudyBuddy");
	}
	//save1
	if(GUI.Button(new Rect(0, screenh*buty3, screenx, screenh*butty2), save1 + "", style1))
	{
		if(PlayerPrefs.GetInt("save1") == 1)
		{
			check1 = true;
		}
		else
		{
			PlayerPrefs.DeleteKey("save1n");
			PlayerPrefs.DeleteKey("save1");
			theScript.GetComponent(PlayerPrefsX).SetStringArray("questions1", arrayq);
			theScript.GetComponent(PlayerPrefsX).SetStringArray("answers1", arraya);
			Application.LoadLevel("Study");
		}
	}
	//save2
	if(GUI.Button(new Rect(0, screenh*buty4, screenx, screenh*butty2), save2 + "", style2))
	{
		if(PlayerPrefs.GetInt("save2") == 1)
		{
			check2 = true;
		}
		else
		{
			PlayerPrefs.DeleteKey("save2n");
			PlayerPrefs.DeleteKey("save2");
			theScript.GetComponent(PlayerPrefsX).SetStringArray("questions2", arrayq);
			theScript.GetComponent(PlayerPrefsX).SetStringArray("answers2", arraya);
			Application.LoadLevel("Study");
		}
	}
	//save3
	if(GUI.Button(new Rect(0, screenh*buty5, screenx, screenh*butty2), save3 + "", style3))
	{
		if(PlayerPrefs.GetInt("save3") == 1)
		{
			check3 = true;
		}
		else
		{
			PlayerPrefs.DeleteKey("save3n");
			PlayerPrefs.DeleteKey("save3");
			theScript.GetComponent(PlayerPrefsX).SetStringArray("questions3", arrayq);
			theScript.GetComponent(PlayerPrefsX).SetStringArray("answers3", arraya);
			Application.LoadLevel("Study");
		}
	}/*
	//prem1
	if(GUI.Button(new Rect(0, screenh*buty6, screenx, screenh*butty2), premsave1 + "", style4))
	{
		if(PlayerPrefs.GetInt("prem1") == 1)
		{
			if(PlayerPrefs.GetInt("save4") == 1)
			{
					-- Delete Save Check
					-- If yes, go to actually change it
					-- If not, go back here
				check4 = true;
			}
			else
			{
				PlayerPrefs.DeleteKey("save4n");
				PlayerPrefs.DeleteKey("save4");
				theScript.GetComponent(PlayerPrefsX).SetStringArray("questions4", arrayq);
				theScript.GetComponent(PlayerPrefsX).SetStringArray("answers4", arraya);
				Application.LoadLevel("Study");
			}
		}
	}
	//prem2
	if(GUI.Button(new Rect(0, screenh*buty7, screenx, screenh*butty2), premsave2 + "", style5))
	{
		if(PlayerPrefs.GetInt("prem2") == 1)
		{
			if(PlayerPrefs.GetInt("save4") == 1)
			{
					-- Delete Save Check
					-- If yes, go to actually change it
					-- If not, go back here
				check5 = true;
			}
			else
			{
				PlayerPrefs.DeleteKey("save5n");
				PlayerPrefs.DeleteKey("save5");
				theScript.GetComponent(PlayerPrefsX).SetStringArray("questions5", arrayq);
				theScript.GetComponent(PlayerPrefsX).SetStringArray("answers5", arraya);
				Application.LoadLevel("Study");
			}
		}
	}*/
	}
	if(check1)
	{
		GUI.Box(new Rect(screenx*butxx, screenh*buty5, diaText.width, diaText.height), diaText);
		if(GUI.Button(new Rect(screenx*butx, screenh*buty9, confText.width, confText.height), confText))
		{
			PlayerPrefs.DeleteKey("save1n");
			PlayerPrefs.DeleteKey("save1");
			theScript.GetComponent(PlayerPrefsX).SetStringArray("questions1", arrayq);
			theScript.GetComponent(PlayerPrefsX).SetStringArray("answers1", arraya);
			check1 = false;
			Application.LoadLevel("Study");
		}
		if(GUI.Button(new Rect(screenx*butx1, screenh*buty7, cancText.width, cancText.height), cancText))
		{
			check1 = false;
		}
	}
	if(check2)
	{
		GUI.Box(new Rect(screenx*butxx, screenh*buty5, diaText.width, diaText.height), diaText);
		if(GUI.Button(new Rect(screenx*butx, screenh*buty9, confText.width, confText.height), confText))
		{
			PlayerPrefs.DeleteKey("save2n");
			PlayerPrefs.DeleteKey("save2");
			theScript.GetComponent(PlayerPrefsX).SetStringArray("questions2", arrayq);
			theScript.GetComponent(PlayerPrefsX).SetStringArray("answers2", arraya);
			check2 = false;
			Application.LoadLevel("Study");
		}
		if(GUI.Button(new Rect(screenx*butx1, screenh*buty7, cancText.width, cancText.height), cancText))
		{
			check2 = false;
		}
	}
	if(check3)
	{
		GUI.Box(new Rect(screenx*butxx, screenh*buty5, diaText.width, diaText.height), diaText);
		if(GUI.Button(new Rect(screenx*butx, screenh*buty9, confText.width, confText.height), confText))
		{
			PlayerPrefs.DeleteKey("save3n");
			PlayerPrefs.DeleteKey("save3");
			theScript.GetComponent(PlayerPrefsX).SetStringArray("questions3", arrayq);
			theScript.GetComponent(PlayerPrefsX).SetStringArray("answers3", arraya);
			check3 = false;
			Application.LoadLevel("Study");
		}
		if(GUI.Button(new Rect(screenx*butx1, screenh*buty7, cancText.width, cancText.height), cancText))
		{
			check3 = false;
		}
	}
	if(check4)
	{
		GUI.Box(new Rect(screenx*butxx, screenh*buty5, diaText.width, diaText.height), diaText);
		if(GUI.Button(new Rect(screenx*butx, screenh*buty9, confText.width, confText.height), confText))
		{
			PlayerPrefs.DeleteKey("save4n");
			PlayerPrefs.DeleteKey("save4");
			theScript.GetComponent(PlayerPrefsX).SetStringArray("questions4", arrayq);
			theScript.GetComponent(PlayerPrefsX).SetStringArray("answers4", arraya);
			check4 = false;
			Application.LoadLevel("Study");
			
		}
		if(GUI.Button(new Rect(screenx*butx1, screenh*buty7, cancText.width, cancText.height), cancText))
		{
			check4 = false;
		}
	}
	if(check5)
	{
		GUI.Box(new Rect(screenx*butxx, screenh*buty5, diaText.width, diaText.height), diaText);
		if(GUI.Button(new Rect(screenx*butx, screenh*buty9, confText.width, confText.height), confText))
		{
			PlayerPrefs.DeleteKey("save5n");
			PlayerPrefs.DeleteKey("save5");
			theScript.GetComponent(PlayerPrefsX).SetStringArray("questions5", arrayq);
			theScript.GetComponent(PlayerPrefsX).SetStringArray("answers5", arraya);
			check5 = false;
			Application.LoadLevel("Study");
			
		}
		if(GUI.Button(new Rect(screenx*butx1, screenh*buty7, cancText.width, cancText.height), cancText))
		{
			check5 = false;
		}
	}
}

function textRndm()
{
	var texture = [bgText, bgText1, bgText2, bgText3, bgText4, bgText5];
	var rndm = Random.Range(1,6);
	return texture[rndm];
}