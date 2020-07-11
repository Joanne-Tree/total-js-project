function album() {
	/* As well as delcaring you could also initilise here too by putting an array inside of an array*/
	var bestAlbumsByGenre=[];
	//Example
	let nestedArray=[
		[
			"Apple",
			"Banana",
			"Pears"
		],
		[
			"Sweetcorn",
			"Cabbage"
		]
	];
	//inspect on the console to see how the array is structured!
	console.log(nestedArray);

	//At index 0 assugn the value of an array, in this array are values
    bestAlbumsByGenre[0]=[
		"Country", 
		"Johnny Cash:Live at Folsom Prison", 
		"Patsy Cline:Sentimentally Yours", 
		"Hank Williams:I'm Blue Inside"
	];

    bestAlbumsByGenre[1]=[
		"Rock", 
		"T-Rex:Slider", 
		"Nirvana:Nevermind", 
		"Lou Reed:Tranformer"
	];

    bestAlbumsByGenre[2]=[
		"Punk", 
		"Flipper:Generic", 
		"The Dead Milkmen:Big Lizard in my Backyard", 
		"Patti Smith:Easter"
	];

	//you can see the structure is the same!
	console.log(bestAlbumsByGenre);

    //with array for each loop
    bestAlbumsByGenre.forEach(genre => {
        genre.forEach(album => {
            document.getElementById("album").innerHTML += album + "<br>";
        })
    });

    //with for loop
    for(i = 0; i < bestAlbumsByGenre.length; i++) {
        for(j = 0; j < bestAlbumsByGenre[i].length; j++) {
            document.getElementById("album2").innerHTML += bestAlbumsByGenre[i][j] + "<br>";
        }
    }
}