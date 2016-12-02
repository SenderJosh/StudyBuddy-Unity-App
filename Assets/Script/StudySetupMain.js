#pragma strict
import System.Collections.Generic;

var answerAmount : int = 0;

var theScript : GameObject;

var text : Texture;
var finishText : Texture;

var mainText : Texture2D;
var buty2 : float;

var addText : Texture2D;
var buty3 : float;

var finText : Texture2D;
var buty4 : float;

var diaText : Texture2D;
var buty5 : float;
var butxx : float;

var confText : Texture2D;
var buty6 : float;
var butx : float;

var cancText : Texture2D;
var buty7 : float;
var butx1 : float;

var x1 : float;
var x2 : float;
var y1 : float;
var y2 : float;

var x11 : float;
var x21 : float;
var y11 : float;
var y21 : float;

var question = "Question";
var answer = "Answer";

var QuestionsTemp = new Array();
var Questions : String[];

var AnswersTemp = new Array();
var Answers : String[];
var i = 0;
var put1 = false;

var dispDialogue = false;
var dispDialogue1 = false;

function Start () {
	Screen.orientation = ScreenOrientation.Portrait;
}

function OnGUI ()
{
	var screenx = Screen.width;
	var screenh = Screen.height;
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), text);
	if(!dispDialogue && !dispDialogue1)
	{
		var mainmenu = GUI.Button(new Rect(screenx/4, screenh*buty2, mainText.width, mainText.height), mainText);
		if(mainmenu)
		{
			dispDialogue = true;
		}
	}
	if(dispDialogue)
	{
		GUI.Box(new Rect(screenx*butxx, screenh*buty5, diaText.width, diaText.height), diaText);
		if(GUI.Button(new Rect(screenx*butx, screenh*buty6, confText.width, confText.height), confText))
		{
			Application.LoadLevel("StudyBuddy");
		}
		if(GUI.Button(new Rect(screenx*butx1, screenh*buty7, cancText.width, cancText.height), cancText))
		{
			dispDialogue = false;
		}
	}
	if(!dispDialogue && !dispDialogue1)
	{
		question = GUI.TextArea(new Rect(screenx*x1, screenh*y1, screenx*x2, screenh*y2), question, 255);
		answer = GUI.TextArea(new Rect(screenx*x11, screenh*y11, screenx*x21, screenh*y21), answer, 255);
		if(GUI.Button(new Rect(screenx/4, screenh*buty3, addText.width, addText.height), addText))
		{	
			put1 = true;
			Answers = new String[1+i];
			Questions = new String[1+i];
			AnswersTemp.Add(answer);
			QuestionsTemp.Add(question);
			question = "";
			answer = "";
			/*if(i==1)
			{
				Debug.Log(AnswersTemp[0]);
				Debug.Log(AnswersTemp[i]);
			}
			if(i==2)
			{
				Debug.Log(AnswersTemp[0]);
				Debug.Log(AnswersTemp[1]);
				Debug.Log(AnswersTemp[i]);
			}*/
			i++;
			answerAmount++;
			Debug.Log(answerAmount);
		}
		if(GUI.Button(new Rect(screenx/4, screenh*buty4, finText.width, finText.height), finText))
		{
			if(answerAmount >= 4)
			{
				dispDialogue1 = true;
			}
		}
	}
	if(dispDialogue1)
	{
		GUI.Box(new Rect(screenx*butxx, screenh*buty5, finishText.width, finishText.height), finishText);
		if(GUI.Button(new Rect(screenx*butx, screenh*buty6, confText.width, confText.height), confText) && put1)
		{
			Answers = AnswersTemp;
			Questions = QuestionsTemp;
			/*Debug.Log(AnswersTemp);
			for(var z = 0; z<Answers.Length; z++)
			{
				Debug.Log(Answers[z]);
			}*/
			
			//array is saved as: questionssave#
			theScript.GetComponent(PlayerPrefsX).SetStringArray("questions"+PlayerPrefs.GetString("creating"), Questions);
			theScript.GetComponent(PlayerPrefsX).SetStringArray("answers"+PlayerPrefs.GetString("creating"), Answers);
			//var s = theScript.GetComponent(EditorPrefsX).GetStringArray("answers");
			//Debug.Log(s[0] + "" + s[1]);
			Application.LoadLevel("NameStudy");
		}
		if(GUI.Button(new Rect(screenx*butx1, screenh*buty7, cancText.width, cancText.height), cancText))
		{
			dispDialogue1 = false;
		}
	}
}