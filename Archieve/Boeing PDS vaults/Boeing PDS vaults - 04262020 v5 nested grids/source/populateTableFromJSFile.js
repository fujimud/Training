//console.log('Frame: ' + frameTitle[1].title + '  ' + frameTitle[1].frame);
$(document).ready(function() {
  var frame = 'frame';
  for (i = 0; i <= frameTitle.length; i++) {
    var frameNumber = frame + i;
    $.each(frameTitle, function (cnt, hdr) {
      if (hdr.frame == frameNumber) $('#GridHeader' + cnt +
        '').append('<h2>' + hdr.title + '</h2>');
    }); //$.each(frameTitle, function (x, hdr)
  }; // for (i = 1; i <= frameTitle.length; i++)

  $.each(data, function (index, content) {
    if (content.activityStatus != 'sleep') {
      if (content.type == 'vault') {
        $('#content0' + '').append('<h3 class="border">' + content.unit + '</h3>');
        $('#content1' + '').append('<h3 class="border">' + content.primary + '</h3>');
        $('#content2' + '').append('<h3 class="border">' + content.secondary + '</h3>');
      } else {
        console.log('Error: Not able to find -> ' + content.unit);
      } // if (content.type == 'vault')

    } // if(content.activityStatus != 'sleep')
  }); // $.each(data, function (index, content)
}); // $(document).ready(function ()
