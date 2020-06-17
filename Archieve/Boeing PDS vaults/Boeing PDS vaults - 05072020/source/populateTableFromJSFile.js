/*
Project: Boeing PDS vaults
Purpose: Listing of all vaults and units found in Boeing Renton WA
Programmer: Dan Fujimura
Created Date: 05/07/2020
Modified Dates:
Dependant files:
  index.html
  populateTableFromJSFile.js
  Config.css
  dataSource.js
  Boeing.gif

Definitions
Cell: Pertain to unit, primary, and secondary 
Type: vault: pertain to those found under the 'Sub Unit'
Type: feed: pertains to those found under the PDS, Alt/3rd, Tied columns and those listed in Substation 1 & 2 grid
Identified: a duplicate vault/feed has been found and that cell will be identified, such as by coloring the background
*/

var titleArray = frameTitle;
var infoArray = data;
const singleQuote = String.fromCharCode(39);
const colorMatchIdentifier = 'yellow';

// Populating the grids with titles and data
$(document).ready(function () {
  // Inserting header and titles for each table
  $.each(titleArray, function (cnt, hdr) {
    if (hdr.type == 'label') {
      $('#GridHeader' + cnt + '').append(hdr.title);
    } else if (hdr.type == 'logo') {
      $('#GridHeader' + cnt + '').append('<img class="image-centered" src="' + hdr.link + '" alt="banner"></img>');
    };
  });

  // inserting all active data for each grid
  $.each(infoArray, function (index, content) {
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
        // Tied
        if (content.tied == 'true') {
          $('#content3' + '').append('<div class="border-tied colorTiedisTrue" id= ' + tieID + '>' + content.tied + '</div>');
        } else {
          $('#content3' + '').append('<div class="border-tied" id= ' + tieID + '>' + content.tied + '</div>');
        }

      } else if (content.table == 'sub1') { // substation 1
        subID = (content.unit).replace(' ', '') + 'VT' + index;
        $('#station1_position' + '').append('<div class="border" id= ' +
          subID + ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' +
          content.unit + '</div>');
      } else if (content.table == 'sub2') { // substation 2
        subID = (content.unit).replace(' ', '') + 'VT' + index;
        $('#station2_position' + '').append('<div class="border" styeDeactivatedStatus id= ' +
          subID + ' onclick="identifyAllTheSameUnitNames(' + singleQuote + content.unit + singleQuote + ')">' +
          content.unit + '</div>');
      }; // if (content.table == 'vault')
    }; // if (content.activityStatus != 'sleep')
  }); // $.each(data, function (index, content)

  // Identify all deactivated unitTitles
  // All deactivated units are identified under Substion 1 or 2 in the JSON file
  $.each(infoArray, function (deactivatedIndex, deactivatedFeed) {
    if (deactivatedFeed.activityStatus == 'deactivated') {
      var feed = deactivatedFeed.unit;
      $.each(infoArray, function (findIndex, findFeed) {
        if (findMatchFromJSArray(feed, findFeed)) document.getElementById(feed.replace(' ', '') +
          'VT' + findIndex).classList.add('deactivated-cell');
      }); // $.each
    }; // if (content.activityStatus == 'deactivated')
  }); //  $.each(infoArray, function(index, content)
}); // $(document).ready(function ()

///////////////////////////////////////////////////////////////////////////
function identifyAllTheSameUnitNames(feedName) {
  // Search and identify all matching feedNames
  $.each(infoArray, function (cnt, cellsData) {
    // unit/primary/secondary had been selected, then it must mark all associated names
    if (feedName == cellsData.unit) {
      var cellIsIdentified = false;
      var getClass = document.getElementById(feedName.replace(' ', '') + 'VT' +
        cnt).getAttribute('class');

      if (getClass.includes('deactivated-cell')) { // deactivated unit/substations
        let message = ' had been deactivated. No action will be taken';
        alert(feedName + message);
      } else {
        if (!getClass.includes('identified-cell')) { // mark the cell as identified
          cellIsIdentified = true;
        } else { // clear the background color of the cell
          cellIsIdentified = false;
        }

        if (cellsData.type == 'vault') {
          $.each(infoArray, function (s_index, tableContent) {
            if (findMatchFromJSArray(feedName, tableContent)) {
              changeCellColorToYellow(tableContent.unit, cellIsIdentified);
              changeCellColorToYellow(tableContent.primary, cellIsIdentified);
              changeCellColorToYellow(tableContent.secondary, cellIsIdentified);
              if (cellIsIdentified) {   // identifying multiple vaults when primary and secondary feeds are identified
                checkAdjacentCellForBackgroundColor(tableContent.unit, cellIsIdentified);
              } else {  // deselecting multiple vaults when the primary or secondary is no longer identified
                $.each(infoArray, function (index, searching4vaults) {
                  if (findMatchFromJSArray(tableContent.primary, searching4vaults)) changeCellColorToYellow(searching4vaults.unit, cellIsIdentified);
                });
              };
            };
          });
        } else {    // When a feed has been selected, the function searches for other feeds with the same name
          $.each(infoArray, function (index, searching4Feeds) {
            if (findMatchFromJSArray(feedName, searching4Feeds)) {
              changeCellColorToYellow(feedName, cellIsIdentified);
              checkAdjacentCellForBackgroundColor(feedName, cellIsIdentified);
            };
          });
        };
      };
    }; //  if (feedName == colorContent.unit)
  }); // $.each(infoArray, function(colorIndex, colorContent)
}; // function identifyAllTheSameUnitNames(feedName)

///////////////////////////////////////////////////////////////////////////
function changeCellColorToYellow(unitName, changeColor) {
  // Purpose: mark all unitNames as either identified as a match or put them in a neutral state
  //  if cell is neutral then mark it as an identified match
  //  if cell had been marked then change it back to a neutral state
  var cellId = '';
  $.each(infoArray, function (index, content) {
    if (findMatchFromJSArray(unitName, content)) {
      cellId = document.getElementById(unitName.replace(' ', '') + 'VT' + index);
      if(!cellId.getAttribute('class').includes('deactivated-cell')) {
        if (changeColor) {
          cellId.classList.add('identified-cell');
        } else {
          cellId.classList.remove('identified-cell');
        };
      };      
    };
  }); // $.each(infoArray, function(index, content)
}; // funciton changeCellCollorToYellow()

///////////////////////////////////////////////////////////////////////////
function checkAdjacentCellForBackgroundColor(feedName, changeColor) {
  // check for other cells that might need to be identified
  $.each(infoArray, function (index, content) {
    // identify feedName is either a primary or secondary. Then 
    //  primary -> secondary data
    //  secondaary -> primary data 
    //  Unit must determine if its from the Main table or one of the two substation tables
    var getClass = ''; // retrieve the class data from the element

    if (feedName == content.primary) {
      getClass = document.getElementById((content.secondary).replace(' ', '') + 'VT' + index).getAttribute('class');
    } else if (feedName == content.secondary) {
      getClass = document.getElementById((content.primary).replace(' ', '') + 'VT' + index).getAttribute('class');
    } else if (feedName == content.unit) {
      getClass = document.getElementById((content.unit).replace(' ', '') + 'VT' + index).getAttribute('class');

      // compare the primary and secondary and if both has a color then the associated unit will match their behavior
      if (content.type == 'vault') {
        var pId_class = document.getElementById((content.primary).replace(' ', '') + 'VT' + index).getAttribute('class');
        var sId_class = document.getElementById((content.secondary).replace(' ', '') + 'VT' + index).getAttribute('class');

        if (pId_class.includes('identified-cell') && sId_class.includes('identified-cell')) {
          checkAdjacentCellForBackgroundColor(content.primary, true);
        };       
      };
    };
    // changes the Unit status to neutral when selecting from one of the cells
    if (!getClass.includes('deactivated-cell') && getClass.includes('identified-cell')) changeCellColorToYellow(content.unit, changeColor);
  }); // $.eacch(infoArray, function(i, content)
}; // function checkAdjacentCellForBackgroundColor (feedName)

///////////////////////////////////////////////////////////////////////////
function findMatchFromJSArray(search, jsArray) {
  // Purpose: Search through a javascript array for matching data
  if (search == jsArray.unit || search == jsArray.primary || search == jsArray.secondary) return true;
  return false;
}