#pragma strict

//multchoice : GameType to be used on Open
//PlayerPrefs.GetString("creating")+"gametype" grabs the save the user is creating from

var mainText : Texture;
var mainButText : Texture;
var subAnsText : Texture;

var theScript : GameObject;

var style : GUIStyle;
var b1style : GUIStyle;
var b2style : GUIStyle;
var b3style : GUIStyle;
var b4style : GUIStyle;
var scroll : Vector2;

var s1 : float;
var s2 : float;
var s3 : float;
var s4 : float;

var diaText : Texture2D;
var buty5 : float;
var butxx : float;

var diaFin : Texture2D;
var dfxx : float;
var dfy : float;

var contText : Texture2D;
var ctx : float;
var cty : float;

var confText : Texture2D;
var buty6 : float;
var butx : float;

var cancText : Texture2D;
var buty7 : float;
var butx1 : float;

//Q AND A
var answers : String[];
var questions : String[];

var dispDiag = false;
var finishGame = false;

var selectedA : String;

var right = 0;
private var total : int;

var l1 : float;
var l2 : float;
var n1 : float;
var n2 : float;

//var for fin label
var s11 : float;
var s21 : float;
var s31 : float;
var s41 : float;

//var for timer label
var t1 : float;
var t2 : float;
var t3 : float;
var t4 : float;

//var for abcd
var a = false;
var b = false;
var c = false;
var d = false;

//var for location a
var ax : float;
var ay : float;
var axx : float;
var ayy : float;

var bx : float;
var by : float;
var bxx : float;
var byy : float;

var cx : float;
var cy : float;
var cxx : float;
var cyy : float;

var dx : float;
var dy : float;
var dxx : float;
var dyy : float;

var togSt : GUIStyle;

var scrollPosition : Vector2 = Vector2.zero;

var scrollStyle : GUIStyle;

var scrollA : Vector2 = Vector2.zero;
var sax : float;
var sayx : float;
var saxx : float;
var sayxx : float;

var scrollB : Vector2 = Vector2.zero;
var sbx : float;
var sbyx : float;
var sbxx : float;
var sbyxx : float;

var scrollC : Vector2 = Vector2.zero;
var scx : float;
var scyx : float;
var scxx : float;
var scyxx : float;

var scrollD : Vector2 = Vector2.zero;
var sdx : float;
var sdyx : float;
var sdxx : float;
var sdyxx : float;

//Question Number & Mult Choice Bools
var i = 0;
var mult3 = false;
var mult2 = false;
var mult1 = false;

//Answer Temp
var atemp : String;
var btemp : String;
var ctemp : String;
var dtemp : String;

var s1z : float;
var s2z : float;
var s3z : float;
var s4z : float;

var style0 : GUIStyle;
var gradeSt: GUIStyle;
private var startTime : float;
var textTime : String;

var ansTextx1 : float;
var ansTextx2 : float;
var ansTexty1 : float;
var ansTexty2 : float;

function Start ()
{
	Time.timeScale = 1;
	Screen.orientation = ScreenOrientation.Portrait;
	questions = new String[i];
	questions = theScript.GetComponent(PlayerPrefsX).GetStringArray("questions" + PlayerPrefs.GetString("creating"));
	answers = new String[i];
	answers = theScript.GetComponent(PlayerPrefsX).GetStringArray("answers"+PlayerPrefs.GetString("creating"));
	//Debug.Log(questions[i]);
	//Debug.Log(questions.Length);
	startTime = Time.time;
	total = questions.Length;
	if(total==1)
	{
		mult1 = true;
	}
	if(total==2)
	{
		mult2 = true;
	}
	if(total==3)
	{
		mult3 = true;
	}
	realAnswer();
	
}

function setMeOnly():boolean
{
	a = b = c = d = false;
	return true;
}

var subAnswerButx1 : float;
var subAnswerButx2 : float;
var subAnswerButy1 : float;
var subAnswerButy2 : float;

function OnGUI ()
{
	style = GUI.skin.textArea;
	style.fontSize = 48;
	style0.normal.textColor = Color.cyan;
	scrollStyle.normal.textColor = Color.black;
	togSt.normal.textColor = Color.red;
	togSt.onNormal.textColor = Color.green;
	var screenx = Screen.width;
	var screeny = Screen.height;
	GUI.DrawTexture(new Rect(0,0,screenx,screeny),mainText);
	var guiTime = Time.time - startTime; 
	//The gui-Time is the difference between the actual time and the start time.
	var minutes : int = guiTime / 60; //Divide the guiTime by sixty to get the minutes.
	var seconds : int = guiTime % 60;//Use the euclidean division for the seconds.
	var fraction : int = (guiTime * 100) % 100;
	
	var m1 : boolean = false;
	var m2 : boolean = false;
	var m3 : boolean = false;
	var m4 : boolean = false;
	
	if(!dispDiag && !finishGame)
	{
		//Everything
		togSt = GUI.skin.toggle;
		togSt.fontSize = 48;
		scrollStyle = GUI.skin.label;
		scrollStyle.fontSize = 48;
		
		scrollPosition = GUI.BeginScrollView (new Rect (screenx/10,screeny*s2,screenx*s1,screeny*s3),
		scrollPosition, new Rect (0, 0, 800, 1000));
		// by the last parameter to BeginScrollView.
		GUI.Label(new Rect(0,0,screenx*s1,screeny*s3), questions[i], scrollStyle);
 
		// End the ScrollView
		GUI.EndScrollView();
		textTime = String.Format ("{0:00}:{1:00}:{2:00}", minutes, seconds, fraction); 
		//text.Time is the time that will be displayed.
		GUI.Label(new Rect(screenx*l1, screeny*l2, screenx*n1, screeny*n2),textTime,style0);
		
		if(GUI.Toggle(new Rect(screenx*ax, screeny*ay, screenx*axx, screeny*ayy),a, "Option A", togSt)){m1 = true; m2 = false; m3 = false; m4 = false; a = setMeOnly(); selectedA = atemp;
		if(m1){GUI.Label(new Rect(screenx*ansTextx1,screeny*ansTexty1,screenx*ansTextx2,screeny*0.79), atemp, scrollStyle);}}
		if(!mult1)
		{
			if(GUI.Toggle(new Rect(screenx*bx, screeny*by, screenx*bxx, screeny*byy),b, "Option B", togSt)){m1 = false; m2 = true; m3 = false; m4 = false; b = setMeOnly();selectedA = btemp;
			if(m2){GUI.Label(new Rect(screenx*ansTextx1,screeny*ansTexty1,screenx*ansTextx2,screeny*0.79), btemp, scrollStyle);}}
			if(!mult2)
			{
				if(GUI.Toggle(new Rect(screenx*cx, screeny*cy, screenx*cxx, screeny*cyy),c, "Option C", togSt)){m1 = false; m2 = false; m3 = true; m4 = false; c = setMeOnly();selectedA = ctemp;
				if(m3){GUI.Label(new Rect(screenx*ansTextx1,screeny*ansTexty1,screenx*ansTextx2,screeny*0.79), ctemp, scrollStyle);}}
				if(!mult3)
				{
					if(GUI.Toggle(new Rect(screenx*dx, screeny*dy, screenx*dxx, screeny*dyy),d, "Option D", togSt)){m1 = false; m2 = false; m3 = false; m4 = true; d = setMeOnly();selectedA = dtemp;
					if(m4){GUI.Label(new Rect(screenx*ansTextx1,screeny*ansTexty1,screenx*ansTextx2,screeny*0.79), dtemp, scrollStyle);}}
				}
			}
		}
		if(GUI.Button(new Rect(screenx/4, screeny*0.9, mainButText.width, mainButText.height), mainButText))
		{
			dispDiag = true;
		}
		if(GUI.Button(new Rect(screenx/4, screeny*0.8, subAnsText.width, subAnsText.height), subAnsText))
		{
			submitAnswer();
		}
	}
	if(dispDiag)
	{
		GUI.Box(new Rect(screenx*butxx, screeny*buty5, diaText.width, diaText.height), diaText);
		if(GUI.Button(new Rect(screenx*butx, screeny*buty6, confText.width, confText.height), confText))
		{
			Application.LoadLevel("StudyBuddy");
			
		}
		if(GUI.Button(new Rect(screenx*butx1, screeny*buty7, cancText.width, cancText.height), cancText))
		{
			dispDiag = false;
		}
	}
	
	if(finishGame)
	{
		//do stuff when finishgame
		//temp
		
		GUI.Box(new Rect(screenx*dfxx, screeny*dfy, diaFin.width, diaFin.height), diaFin);
		if(GUI.Button(new Rect(screenx*ctx, screeny*cty, contText.width, contText.height), contText))
		{
			Application.LoadLevel("StudyBuddy");
		}
		GUI.Label(new Rect(screenx*s11, screeny*s21, screenx*s31, screeny*s41), right+"/"+total, style0);
		GUI.Label(new Rect(screenx*t1, screeny*t2, screenx*t3, screenx*t4), textTime, style0);
		var grade = String;
		if(total == right)
		{
			GUI.Label(new Rect(screenx*s1z, screeny*s2z, screenx*s3z, screeny*s4z),"A",gradeSt);
		}
		else
		{
			var perc : float;
			var f : float = right;
			var sz : float = total;
			perc = ((f/sz)*100);
			if(perc>=90)
			{
				GUI.Label(new Rect(screenx*s1z, screeny*s2z, screenx*s3z, screeny*s4z),"A",gradeSt);
			}
			else
			{
				if(perc>=80)
				{
					GUI.Label(new Rect(screenx*s1z, screeny*s2z, screenx*s3z, screeny*s4z),"B",gradeSt);
				}
				else
				{
					if(perc>=70)
					{
						GUI.Label(new Rect(screenx*s1z, screeny*s2z, screenx*s3z, screeny*s4z),"C",gradeSt);
					}
					else
					{
						if(perc>=60)
						{
							GUI.Label(new Rect(screenx*s1z, screeny*s2z, screenx*s3z, screeny*s4z),"D",gradeSt);
						}
						else
						{
							if(perc<60)
							{
								GUI.Label(new Rect(screenx*s1z, screeny*s2z, screenx*s3z, screeny*s4z),"F",gradeSt);
							}
						}
					}
				}
			}
		}
	}
	
}

private var firstNumber : int;
private var secondNumber : int;
private var thirdNumber : int;
private var origInd : int;

function realAnswer()
{
	var x = Random.Range(1,5);
	origInd = i;
	nonRepeat();
	if(x == 1)
	{
		atemp=answers[i];	
		btemp=answers[firstNumber];
		ctemp=answers[secondNumber];
		dtemp=answers[thirdNumber];
	}
	if(x == 2)
	{
		origInd = 2;
		btemp=answers[i];
		atemp=answers[firstNumber];
		ctemp=answers[secondNumber];
		dtemp=answers[thirdNumber];
	}
	if(x == 3)
	{
		origInd = 3;
		ctemp=answers[i];
		btemp=answers[firstNumber];
		atemp=answers[secondNumber];
		dtemp=answers[thirdNumber];
	}
	if(x == 4)
	{
		origInd = 4;
		dtemp=answers[i];
		btemp=answers[firstNumber];
		ctemp=answers[secondNumber];
		atemp=answers[thirdNumber];
	}
}

function submitAnswer()
{
	var leng = questions.Length;
	leng = leng-2;
	if(i<=leng)
	{
		if(answers[i].Equals(selectedA))
		{
			right++;
		}
		i++;
		realAnswer();
	}
	else
	{
		if(answers[i].Equals(selectedA))
		{
			right++;
		}
		Time.timeScale = 0;
		finishGame = true;
	}
}

private var differentNumber : boolean = false;
function nonRepeat()
{
		var indexes:Array;
		var i:int = answers.Length;
		indexes = new Array();
      while (--i >= 0)
      {
          // add all available indexes to an array
          if (i != origInd)
              indexes.Add(i);
      }
      
      var rnd:int;
      
      // take a random index number from the array and remove it to avoid duplicates
      rnd = Random.Range(0, indexes.Count);
      firstNumber = indexes[rnd];
      indexes.RemoveAt(rnd);
      
      rnd = Random.Range(0, indexes.Count);
      secondNumber = indexes[rnd];
      indexes.RemoveAt(rnd);
      
      rnd = Random.Range(0, indexes.Count);
      thirdNumber = indexes[rnd];
      indexes.RemoveAt(rnd);
}