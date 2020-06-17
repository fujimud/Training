//console.log('Frame: ' + frameTitle[1].title + '  ' + frameTitle[1].frame);
$(document).ready(function() {
var sub1Cnt = 4;
var sub2Cnt = 5;
  // Insert header and titles for each table that was read from js array
  $.each(frameTitle, function (cnt, hdr) {
    $('#GridTitle' + cnt + '').append(hdr.title);

  });

  $.each(data, function(index, content) {
    if (content.activityStatus != 'sleep') {
      if (content.table == 'main') {
        $('#content0' + '').append('<div class="border">' + content.unit + '</div>');
        $('#content1' + '').append('<div class="border">' + content.primary + '</div>');
        $('#content2' + '').append('<div class="border">' + content.secondary + '</div>');
        if (content.tie == 'true') {
          // $('#content3' + '').append('<div class="border photo" style = "background-image: url(images/TiedKnot.GIF)" alt="Tied knot"></div>');
          $('#content3' + '').append('<div class="border backgroundColorSkyblue">' + content.tie + '</div>');
        } else {
          $('#content3' + '').append('<div class="border">'  + content.tie + '</div>');
        }
      } else if (content.table == 'sub1') {
        $('#station1_position' + '').append('<div class="border">' + content.unit + '</div>');
      //  console.log(sub1Cnt++);

      } else if (content.table == 'sub2') {
        $('#station2_position' + '').append('<div class="border">' + content.unit + '</h4>');
        sub1Cnt++;
      } else {
        //console.log('Data Error: Not able to find -> ' + content.unit);
      }; // if (content.table == 'vault')
    }; // if (content.activityStatus != 'sleep')
  }); // $.each(data, function (index, content)
}); // $(document).ready(function ()
