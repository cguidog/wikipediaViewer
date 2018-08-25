$(document).ready(function(){
//Gets response from Wikipedia according to user input.  
  var search = () => {
    var searchTerm = $('#searchTerm').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm +     "&format=json&callback=?";
    $('#results').html('');
    $.getJSON(url, (data) => {
      for (i = 0; i <= data.length; i++) {
        $('#results').append('<li><a href=' + data[3][i]+ '>' + data[1][i] + '</a>' +"<br>" + data[2][i] + "<br></li>");
      }
    })
};
  
  //User starts search() function by hitting 'return' key.
  $('#searchTerm').keypress((e) => {
                     if (e.keyCode == 13) {
                       search();
}});  
  
  //User starts search() function by clicking 'Search' button. 
  $('#searchButton').click(() => {
 search();
});
});