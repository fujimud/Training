var titleArray = frameTitle;
var infoArray = data;

$(document).ready(function () {
  var vt;   // id for vault unit
  var sb1;  // id for substation 1 unit
  var sb2;   // id for substation 2 unit
  var singleQuote = String.fromCharCode(39);

  // Insert header and titles for each table that was read from js array
  $.each(titleArray, function (cnt, hdr) {
    if (hdr.type == 'label') {
      $('#GridTitle' + cnt + '').append(hdr.title);
    } else if (hdr.type == 'logo') {
      console.log($('#GridTitle' + cnt + '').append('<picture><img class="image-centered" srcset="' + hdr.link + '" alt="banner" style="width:50%;"></picture>'));
    }
  });

  // Insert the data information into each cell
  $.each(infoArray, function (index, contentInfo) {
    if (contentInfo.activityStatus != 'sleep') {
      if (contentInfo.table == 'main') {

        var vaultID = (contentInfo.unit).replace(' ', '') + 'VT' + index;
        var primaryID = (contentInfo.primary).replace(' ', '') + 'VT' + index;
        var secondaryID = (contentInfo.secondary).replace(' ', '') + 'VT' + index;
        var tieID = ('tie').replace(' ', '') + 'VT' + index;

        $('#content0' + '').append('<div class="border" id="' + vaultID + '" onclick="IdentifyAllAssociatedVaultsAndFeeds (' + singleQuote + contentInfo.unit + singleQuote + ')">' + contentInfo.id + '</div>');
        $('#content1' + '').append('<div class="border" id="' + primaryID + '"  onclick="IdentifyAllAssociatedVaultsAndFeeds (' + singleQuote + contentInfo.primary + singleQuote + ')">' + contentInfo.primary + '</div>');
        $('#content2' + '').append('<div class="border" id="' + secondaryID + '"  onclick="IdentifyAllAssociatedVaultsAndFeeds (' + singleQuote + contentInfo.secondary + singleQuote + ')">' + contentInfo.secondary + '</div>');
        if (contentInfo.tie == 'true') {
        // $('#content3' + '').append('<div class="border photo" style = "background-image: url(images/TiedKnot.GIF)" alt="Tied knot"></div>');
          $('#content3' + '').append('<div class="borderTied backgroundColorSkyblue" id="' + tieID + '" >' + contentInfo.tie + '</div>');
        } else {
          $('#content3' + '').append('<div class="borderTied" id="' + tieID + '" >' + contentInfo.tie + '</div>');
        }

      } else if (contentInfo.table == 'sub1') {
        var sbID = (contentInfo.unit).replace(' ', '') + 'SB' + index;
        $('#station1_position' + '').append('<div class="border" id="' + sbID + '" onclick="IdentifyAllAssociatedVaultsAndFeeds (' + singleQuote + contentInfo.unit + singleQuote + ')">' + contentInfo.unit + '</div>');
      } else if (contentInfo.table == 'sub2') {
        var sbID = (contentInfo.unit).replace(' ', '') + 'SB' + index;
        $('#station2_position' + '').append('<div class="border"' + sbID + '" onclick="IdentifyAllAssociatedVaultsAndFeeds (' + singleQuote + contentInfo.unit + singleQuote + ')">' + contentInfo.unit + '</h4>');
      } else {
        console.log('Data Error: Not able to find -> ' + contentInfo.unit);
      }; // if (content.table == 'vault')
    }; // if (content.activityStatus != 'sleep')
  }); // $.each(data, function (index, content)
}); // $(document).ready(function ()

}
