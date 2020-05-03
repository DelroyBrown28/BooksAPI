$(document).ready(function () {

   $("#myform").submit(function () {

      var search = $("#books").val();
      if (search == "") {
         alert("Enter a book title or author");
      } else {
         var url = "";
         var img = "";
         var title = "";
         var author = "";

         $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

            for (i = 0; i < response.items.length; i++) {
               title = $('<h4 class="book_title">' + response.items[i].volumeInfo.title + '</h4>');
               author = $('<h5 class="book_author">Author: ' + response.items[i].volumeInfo.authors + '</h5>');
               img = $('<img><br><a href=' + response.items[i].volumeInfo.infoLink + '><button>Read More</button><br></a>');
               url = response.items[i].volumeInfo.imageLinks.thumbnail;
               img.attr('src', url);
               title.appendTo('#result');
               author.appendTo('#result');
               img.appendTo('#result');
            }
         });

      }
      return false;
   });

});