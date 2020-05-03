$(document).ready(function () {

   $("#myform").submit(function () {

      var search = $("#bookSearch").val();
      if (search == "") {
         alert("Enter a book name or title")
      } else {

         var url = "";
         var img = "";
         var title = "";
         var author = "";

         $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

            for (i = 0; i < response.items.length; i++) {
               title = $('<h4 class="book_title">' + response.items[i].volumeInfo.title + '</h4>');
               author = $('<h5 class="book_author">Author: ' + response.items[i].volumeInfo.authors + '</h5>');
               img = $('<img class="book_image"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button>Read More</button><br></a><hr>');
               url = response.items[i].volumeInfo.imageLinks.thumbnail;
               img.attr('src', url);
               title.appendTo('.single_book');
               author.appendTo('.single_book');
               img.appendTo('.single_book');
            }
         });

      }
      return false;
   });

   $(".search_button").click(addShadowMonster);

   function addShadowMonster() {
      $("#result").addClass("theShadowMonster").delay(1000).queue(function () {
         $("#result").addClass("theSubtleShadow").dequeue();
      });
   }

});