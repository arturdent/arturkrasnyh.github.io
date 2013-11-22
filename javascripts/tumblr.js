/*
 * LOAD TUMBLR POSTS
 *
 * This script uses Tumblrs's API
 * to fetch the latest posts
 * from a speficied Tumblr user
 */

// What user are we using?
var tumblrUsername = 'artur88';

// Variable to hold the HTML we'll generate
var html = '';

// Load the shots via Tumblr's API
var url = "http://api.tumblr.com/v2/blog/" + tumblrUsername + ".tumblr.com/posts/text?api_key=xrbaNN856hoLtBtEXHRr3h9JpEYGSTfoejT23KF4LJxrtTT4zy";
$.getJSON(url, function(data) {

    // how many shots we're displaying on the page
    var numberOfShots = 10;

    // Loop over the results, generating the HTML for each <li> item
    for (i=0; i<numberOfShots; i++) {
        var title = data.posts[i].title;
        title = (title != null) ? title : '';

        html += '<li>';
        html += '<a href="'+ data.posts[i].title +'">';
        html += '<p>' + data.posts[i].body + '</p>';
        html += '</a>';
        html += '</li>';
    }

    // Insert the generated HTML to the DOM
    $('.posts').html(html);

    // Set the scroll position of the carousel
    //var _scrollContainer = $('.shots-container');
    //var scrollWidth = _scrollContainer.width();
    //_scrollContainer.scrollLeft(scrollWidth);
});