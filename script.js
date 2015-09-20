var apikey = '0bbc834126e6e992965d8cdbd1c4247c:9:73001032'; // Put your API key here

var movieData;

function searchCallback(results) {
    console.log(results);	
}
$(document).ready(function() {
	// search('String');
	$('#search-movies').on('click', function(){
		var movies = $('#movies').val();
		console.log('Movie Pick: ', movies);
		search(movies);
	})
});
function search(query){
	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    json: 'json_callback',
	   	url: 'http://api.nytimes.com/svc/movies/v2/reviews/search.jsonp?query=' 
	   	+ encodeURI(query) +'&api-key=' + apikey
	}).done(function(data){
		searchCallback(data);
		movieData = data;

		// while (var = i <= movieData.results.length) {
		//     i++;
		// }

		// 		for (var i = 0; i < movieData.results.length; i++) {
		//     console.log( movieData.results[i].display_title);
		// }

			var $title = $('<p>' + "Movie Title: " + movieData.results[0].display_title + '</p>');
			var getTitle = movieData.results[0].display_title;	
				if(getTitle != ""){
			$("#results").append($title);
			}else{
				($title).remove();
			}

			
				
			var $sum = $('<p>' + "Summary: " + movieData.results[0].summary_short + '</p>');
			var getSum = movieData.results[0].summary_short;
				if(getSum != ""){
			$("#results").append($sum);
			}else{
				($sum).remove();	
			}

			var $link = $('<p>' + '<a href = "' + movieData.results[0].link.url + '"> ' + movieData.results[0].link.suggested_link_text + '</a>' + '</p>');
			var getlink = movieData.results[0].link.url;
				if(getlink != "" ){
			$("#results").append($link);
			}else{
				($link).remove();
			}
			
			var $image = $('<p>' + '<img src= "' + movieData.results[0].multimedia.resource.src + '">' + '</p>');
			var getPhoto = movieData.results[0].multimedia.resource.src;
				if(getPhoto != "" ){
			$("#photoDiv").append($image);
			}else{
				($image).remove();
			}
		
		});

}
