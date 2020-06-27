function Album() {
	var bestAlbumsByGenre=[]
bestAlbumsByGenre[0]="Country";
bestAlbumsByGenre[0][0]="Johnny Cash:Live at Folsom Prison";
bestAlbumsByGenre[0][1]="Patsy Cline:Sentimentally Yours";
bestAlbumsByGenre[0][2]="Hank Williams:I'm Blue Inside";
bestAlbumsByGenre[1]="Rock";
bestAlbumsByGenre[1][0]="T-Rex:Slider";
bestAlbumsByGenre[1][1]="Nirvana:Nevermind";
bestAlbumsByGenre[1][2]="Lou Reed:Tranformer";
bestAlbumsByGenre[2]="Punk"
bestAlbumsByGenre[2][0]="Flipper:Generic";
bestAlbumsByGenre[2][1]="The Dead Milkmen:Big Lizard in my Backyard";
bestAlbumsByGenre[2][2]="Patti Smith:Easter";
bestAlbumsByGenre.length
 // returns 100
let count = 0;
	while (count<bestAlbumsByGenre.length){
	document.getElementById("Album").innerHTML+=
	bestAlbumsByGenre[count]+"<br>";
	console.log("test");
	for (let i=0; i<bestAlbumsByGenre[count].length;i++){
		document.getElementById("Album").innerHTML+=
		bestAlbumsByGenre[count][i];
		console.log(bestAlbumsByGenre[count].length);
	}count++;
	}console.log("test2)");
}