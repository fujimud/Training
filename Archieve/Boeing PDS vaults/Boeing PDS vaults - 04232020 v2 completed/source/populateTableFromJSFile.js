//console.log('Frame: ' + frameTitle[1].title + '  ' + frameTitle[1].frame);
$(document).ready(function() {
var sub1Cnt = 0;
var sub2Cnt = 0;
  // Insert header and titles for each table that was read from js array
  $.each(frameTitle, function(cnt, hdr) {
    $('#GridHeader' + cnt + '').append('<h2>' + hdr.title + '</h2>');
  });

  $.each(data, function(index, content) {
    if (content.activityStatus != 'sleep') {
      if (content.table == 'main') {
        $('#content0' + '').append('<h3 class="border">' + content.unit + '</h3>');
        $('#content1' + '').append('<h3 class="border">' + content.primary + '</h3>');
        $('#content2' + '').append('<h3 class="border">' + content.secondary + '</h3>');
        if (content.tie == 'true') {
          // $('#content3' + '').append('<div class="border photo" style = "background-image: url(images/TiedKnot.GIF)" alt="Tied knot"></div>');
          $('#content3' + '').append('<h3 class="border fontColorBlue">' + content.tie + '</h3>');
        } else {
          $('#content3' + '').append('<h3 class="border">'  + content.tie + '</h3>');
        }
      } else if (content.table == 'sub1') {
        console.log(index + ':  ' + content.unit);
        $('#subStation' + '').append('<h3 class="border">' + content.unit + '</h3>');
      } else if (content.table == 'sub2') {
        $('#subStation' + '').append('<h3 class="border">' + content.unit + '</h3>');
      } else {
        console.log('Data Error: Not able to find -> ' + content.unit);
      }; // if (content.table == 'vault')
    }; // if (content.activityStatus != 'sleep')
  }); // $.each(data, function (index, content)

}); // $(document).ready(function ()
