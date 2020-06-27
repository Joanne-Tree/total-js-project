function printArray() {
	item=new Array();
	//New keyword array declaration
	//array literal notation
	var dogNames=["Shaggy", "Tennesee", "Dr.Spock", "Wuffles"];
	item[0]="apple";
		item[1]=4+8;
		item[2]=3;
		item[3]=item[2]*item[1];
		var count = 0;
	while (count<item.length){
	document.getElementById("arrays").innerHTML+=
	item[count]+"<br>";
	document.getElementById("dogNames").innerHTML+=
	dogNames[count]+"<br>";
	count++;
	}
}