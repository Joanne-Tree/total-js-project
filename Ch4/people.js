function people() {
	var peopleList=[];
peopleList[0]="Chris Minnick";
peopleList[1]="Eve Holland";
peopleList[2]="Abraham Lincoln";
peopleList[99]="Tina Turner";
peopleList.length // returns 100
let count = 0;
	while (count<peopleList.length){
	document.getElementById("people").innerHTML+=
	peopleList[count]+"<br>";
	
	count++;
	}
}