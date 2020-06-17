var titleArray = frameTitle;
var infoArray = data;

//console.log('Frame: ' + frameTitle[1].title + '  ' + frameTitle[1].frame);
$(document).ready(function() {
  var singleQuote = String.fromCharCode(39);
  var vaultID = '';
  var tieID = '';
  var subID = '';
  var su2ID = '';
  var styeDeactivatedStatus = '';

  // Insert header and titles for each table that was read from js array
  $.each(titleArray, function(cnt, hdr) {
    $('#GridTitle' + cnt + '').append(hdr.title);
  });

  $.each(infoArray, function(index, content) {
    if (content.activityStatus != 'sleep') {
      if (content.table == 'main') {
        vaultID = (content.unit).replace(' ', '') + 'VT' + index;
        primaryID = (content.primary).replace(' ', '') + 'VT' + index;
        altID = (content.secondary).replace(' ', '') + 'VT' + index;
        tieID = ('tie').replace(' ' + '') + 'VT' + index;

        $('#content0' + '').append('<div class="border" id= ' + vaultID +
        ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' +
        content.unit + '</div>');
        $('#content1' + '').append('<div class="border" id= ' + primaryID +
        ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.primary + singleQuote + ')">' +
        content.primary + '</div>');
        $('#content2' + '').append('<div class="border" id= ' + altID +
        ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.secondary + singleQuote + ')">' +
        content.secondary + '</div>');
        if (content.tie == 'true') {
          $('#content3' + '').append('<div class="border backgroundColorSkyblue" id= ' + tieID + '>' + content.tie + '</div>');
        } else {
          $('#content3' + '').append('<div class="border" id= ' + tieID + '>' + content.tie + '</div>');
        }
      } else if (content.table == 'sub1') {
        subID = (content.unit).replace(' ', '') + 'SB' + index;
        if (content.activityStatus == 'active') {
          $('#station1_position' + '').append('<div class="border" id= ' + subID +
          ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' +
          content.unit + '</div>');
        } else {
          $('#station1_position' + '').append('<div class="border" style="background-color: red; color: white" id= ' +
          subID + ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' +
          content.unit + '</div>');
        }

      } else if (content.table == 'sub2') {
        subID = (content.unit).replace(' ', '') + 'SB' + index;
        if (content.activityStatus == 'active') {
          $('#station2_position' + '').append('<div class="border" styeDeactivatedStatus id= ' + content.unit + ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' + content.unit + '</h4>');
        } else {
          $('#station2_position' + '').append('<div class="border" style="background-color: red; color: white" id= ' + content.unit + ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' + content.unit + '</div>');
        }
      } else {
        console.log('Data Error: Not able to find -> ' + content.unit);
      }; // if (content.table == 'vault')
    }; // if (content.activityStatus != 'sleep')
  }); // $.each(data, function (index, content)
 }); // $(document).ready(function ()

function identifyAllTheSameUnitNames(feedName) {
  var count = 0;
  var feedID = '';

  console.log(feedName);
  $.each(infoArray, function(index, content) {
    if (feedName == content.unit) {
      if (content.type == 'vault') {
        feedID = feedName + 'VT' + index;
        console.log('vault = ' + feedName);
      } else if (content.type == 'feed') {
        feedID = feedName + 'SB' + index;
        console.log('feed = ' + feedID);
      };
      count++;
    } else if (feedName == content.primary) {
      if (content.type == 'vault') {
        feedID = feedName + 'VT' + index;
      //  document.getElementById(feedID).style.background-color = "skyblue";
      //  document.getElementById(feedID).style.color = "black";
        console.log('vault = ' + feedID);
      } else if (content.type == 'feed') {
        feedID = feedName + 'SB' + index;
        console.log('feed = ' + feedID);
      };
      count++;
    } else if (feedName == content.secondary) {
      if (content.type == 'vault') {
        feedID = feedName + 'VT' + index;
        console.log('vault = ' + feedID);
      } else if (content.type == 'feed') {
        feedID = feedName + 'SB' + index;
        console.log('feed = ' + feedID);
      };
      count++;
    }

/*
    if ((feedName == content.unit) || (feedName == content.primary) || (feedName == content.secondary) ) {
      console.log('unit: ' + index);
      console.log('primary: ' + index);
      console.log('secondary: ' + index);
      count++;
    }
      */
  })

  console.log("total match found: " + count);
};
