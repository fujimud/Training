var titleArray = frameTitle;
var infoArray = data;
var YELLOW = 'yellow';

//console.log('Frame: ' + frameTitle[1].title + '  ' + frameTitle[1].frame);
$(document).ready(function() {
  var singleQuote = String.fromCharCode(39);
  var styeDeactivatedStatus = '';

  // Insert header and titles for each table that was read from js array
  $.each(titleArray, function(cnt, hdr) {
    if (hdr.type == 'label') {
      $('#GridHeader' + cnt + '').append(hdr.title);
    } else if (hdr.type == 'logo') {
      // $('#GridHeader' + cnt + '').append('<picture><img class="image-centered" srcset="' + hdr.link + '" alt="banner"></picture>');
      $('#GridHeader' + cnt + '').append('<img class="image-centered" src="' + hdr.link + '" alt="banner"></img>');
    };
  });

  $.each(infoArray, function(index, content) {
    if (content.activityStatus != 'sleep') {
      if (content.table == 'main') {
        var vaultID = (content.unit).replace(' ', '') + 'VT' + index;
        var primaryID = (content.primary).replace(' ', '') + 'VT' + index;
        var altID = (content.secondary).replace(' ', '') + 'VT' + index;
        var tieID = ('tie').replace(' ' + '') + 'VT' + index;

        // vault information
        $('#content0' + '').append('<div class="border" id= ' + vaultID +
          ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' +
          content.unit + '</div>');
        // primary units
        $('#content1' + '').append('<div class="border" id= ' + primaryID +
          ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.primary + singleQuote + ')">' +
          content.primary + '</div>');
        // secondary units
        $('#content2' + '').append('<div class="border" id= ' + altID +
          ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.secondary + singleQuote + ')">' +
          content.secondary + '</div>');
        // Tie
        if (content.tie == 'true') {
          $('#content3' + '').append('<div class="border-tied backgroundColorSkyblue" id= ' + tieID + '>' + content.tie + '</div>');
        } else {
          $('#content3' + '').append('<div class="border-tied" id= ' + tieID + '>' + content.tie + '</div>');
        }

      } else if (content.table == 'sub1') { // substation 1
        subID = (content.unit).replace(' ', '') + 'VT' + index;
        if (content.activityStatus == 'active') {
          $('#station1_position' + '').append('<div class="border" id= ' + subID +
            ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' +
            content.unit + '</div>');
        } else {
          $('#station1_position' + '').append('<div class="border" style="background-color: red; color: white" id= ' +
            subID + ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' +
            content.unit + '</div>');
        }

      } else if (content.table == 'sub2') { // substation 2
        subID = (content.unit).replace(' ', '') + 'VT' + index;
        if (content.activityStatus == 'active') {
          $('#station2_position' + '').append('<div class="border" styeDeactivatedStatus id= ' + subID + ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' + content.unit + '</h4>');
        } else {
          $('#station2_position' + '').append('<div class="border" style="background-color: red; color: white" id= ' + subID + ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' + content.unit + '</div>');
        }
      } else {
        console.log('Data Error: Not able to find -> ' + content.unit);
      }; // if (content.table == 'vault')
    }; // if (content.activityStatus != 'sleep')
  }); // $.each(data, function (index, content)
}); // $(document).ready(function ()

///////////////////////////////////////////////////////////////////////////
function identifyAllTheSameUnitNames(feedName) {

  $.each(infoArray, function(colorIndex, colorContent) {
    if (feedName == colorContent.unit) {
      var temp = document.getElementById(feedName.replace(' ', '') + 'VT' +
        colorIndex).getAttribute('style');
      if (temp != null && temp.includes('red')) {
        console.log('this cell had been deactivated. No action will be taken');
        alert('this cell had been deactivated. No action will be taken');
      } else if (temp != null && temp.includes(YELLOW)) { // remove the yellow from the cell background
        //console.log(feedName + ' matched');
        if (feedName.toUpperCase().startsWith('VAULT')) { // Identify unit names that starts with Vault
          //  console.log('vault: ' + feedName);
          $.each(infoArray, function(vaultIndex, vaultContent) {
            if (feedName == vaultContent.unit || feedName == vaultContent.primary || feedName == vaultContent.secondary) {
              //console.log("ID: " + feedName + 'VT' + index);
              document.getElementById(feedName.replace(' ', '') + 'VT' + vaultIndex).style.backgroundColor = 'white';
              changeCellColorToYellow(vaultContent.primary, 'false');
              changeCellColorToYellow(vaultContent.secondary, 'false');
            }; // if (feedName == .unit || feedName == vaultContent.primary || feedName == vaultContent.secondary)
          }); //   $.each(infoArray, function(vaultIndex, vaultContent)7
        } else {
          // User selects a unit and all the same units are identified
          changeCellColorToYellow(feedName, 'false');
        }; // (feedName.toUpperCase().startsWith('VAULT'))
      } else {
        //console.log('no match');  // add yellow to the cell background
        if (feedName.toUpperCase().startsWith('VAULT')) { // Identify unit names that starts with Vault
          $.each(infoArray, function(vaultIndex, vaultContent) {
            if (feedName == vaultContent.unit || feedName == vaultContent.primary || feedName == vaultContent.secondary) {
              document.getElementById(feedName.replace(' ', '') + 'VT' + vaultIndex).style.backgroundColor = YELLOW;
              changeCellColorToYellow(vaultContent.primary, 'true');
              changeCellColorToYellow(vaultContent.secondary, 'true');
            }; // if (feedName == .unit || feedName == vaultContent.primary || feedName == vaultContent.secondary)
          }); //   $.each(infoArray, function(vaultIndex, vaultContent)7
        } else {
          // User selects a unit and all the same units are identified
          changeCellColorToYellow(feedName, 'true');
        }; // (feedName.toUpperCase().startsWith('VAULT'))
      } // if (document.getElementById
    }; //  if (feedName == colorContent.unit)
  });
}; // function identifyAllTheSameUnitNames(feedName)

///////////////////////////////////////////////////////////////////////////
function changeCellColorToYellow(unitName, changeColor) {
  // Purpose: Examine the cell, if it is white then identify all units
  //  if cell is yellow then clear all units to white
  //  if cell is red then take no action, this unit had been deactivated
  $.each(infoArray, function(index, content) {
    // if a single cell is colorless then identify all cells with the same name
    if (changeColor == 'true') {
      if (unitName == content.unit || unitName == content.primary || unitName == content.secondary) {
        //console.log("ID: " + feedName + 'VT' + index);
        document.getElementById(unitName.replace(' ', '') + 'VT' + index).style.backgroundColor = YELLOW;
      }; // if (unitName == content.unit || unitName == content.primary || unitName == content.secondary)
    } else {
      if (unitName == content.unit || unitName == content.primary || unitName == content.secondary) {
        //console.log("ID: " + feedName + 'VT' + index);
        document.getElementById(unitName.replace(' ', '') + 'VT' + index).removeAttribute('style');
      } // if (unitName == content.unit || unitName == content.primary || unitName == content.secondary)
    }; // if (changeColor == 'true')

  }); // $.each(infoArray, function(index, content)
}; // funciton changeCellCollorToYellow()
