#pragma strict
//PlayerPrefs booleans are 0 for false, 1 for true

function Start () {
	if(PlayerPrefs.GetInt("firstload") == 0)
	{
		PlayerPrefs.SetInt("firstload", 1);
		Application.LoadLevel("FirstLoad");
	}
	else
	{
		Application.LoadLevel("StudyBuddy");
	}
}