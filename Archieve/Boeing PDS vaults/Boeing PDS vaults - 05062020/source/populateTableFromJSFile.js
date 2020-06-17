/*
Project: Boeing PDS vaults
Purpose: Listing of all vaults and units found in Boeing Renton WA
Programmer: Dan Fujimura
Created Date: 05/06/2020
Modified Dates:
Dependant files:
  index.html
  populateTableFromJSFile.js
  Config.css
  dataSource.js
  Boeing.gif

*/

var titleArray = frameTitle;
var infoArray = data;
var YELLOW = 'yellow';

//console.log('Frame: ' + frameTitle[1].title + '  ' + frameTitle[1].frame);
$(document).ready(function () {
  var singleQuote = String.fromCharCode(39);
  var styeDeactivatedStatus = '';

  // Insert header and titles for each table that was read from js array
  $.each(titleArray, function (cnt, hdr) {
    if (hdr.type == 'label') {
      $('#GridHeader' + cnt + '').append(hdr.title);
    } else if (hdr.type == 'logo') {
      // $('#GridHeader' + cnt + '').append('<picture><img class="image-centered" srcset="' + hdr.link + '" alt="banner"></picture>');
      $('#GridHeader' + cnt + '').append('<img class="image-centered" src="' + hdr.link + '" alt="banner"></img>');
    };
  });

  // insert all active data for each grid
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
        // Tie
        if (content.tied == 'true') {
          $('#content3' + '').append('<div class="border-tied backgroundColorSkyblue" id= ' + tieID + '>' + content.tied + '</div>');
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
  $.each(infoArray, function (deactivatedIndex, deactivatedUnit) {
    if (deactivatedUnit.activityStatus == 'deactivated') {
      var unit = deactivatedUnit.unit;
      //console.log('unit: ' + unit);
      $.each(infoArray, function (findIndex, findUnit) {
        if (unit == findUnit.unit || unit == findUnit.primary || unit == findUnit.secondary) {
          //console.log("ID: " + feedName + 'VT' + index);
          document.getElementById(unit.replace(' ', '') + 'VT' + findIndex).classList.add('deactivated-cell');
        }; // if (unitName == content.unit || unitName == content.primary || unitName == content.secondary)
      }); // $.each
    }; // if (content.activityStatus == 'deactivated')
  }); //  $.each(infoArray, function(index, content)
}); // $(document).ready(function ()

///////////////////////////////////////////////////////////////////////////
function identifyAllTheSameUnitNames(feedName) {
  // Search and identify all matching feedNames
  $.each(infoArray, function (colorIndex, colorContent) {
    // unit/primary/secondary had been selected, then it must mark all associated names
    if (feedName == colorContent.unit) {
      var getClass = document.getElementById(feedName.replace(' ', '') + 'VT' +
        colorIndex).getAttribute('class');
      var getStyle = document.getElementById(feedName.replace(' ', '') + 'VT' +
        colorIndex).getAttribute('style');

      if (getClass.includes('deactivated-cell')) { // deactivated unit/substations
        console.log(feedName + ' had been deactivated. No action will be taken');
        alert(feedName + ' had been deactivated. No action will be taken');
      } else if (getStyle != null && getStyle.includes(YELLOW)) { // feedName had been marked and will be changed to a neutral state
        //if (feedName.toUpperCase().startsWith('VAULT')) { // Unit from the unit table will change it's associated primary and secondary to a neutral status
        if (colorContent.type == 'vault') { // Unit from the unit table will change it's associated primary and secondary to a neutral status
          $.each(infoArray, function (vaultIndex, vaultContent) {
            // search for all matching cells with the associated feedName
            if (feedName == vaultContent.unit || feedName == vaultContent.primary || feedName == vaultContent.secondary) {
              changeCellColorToYellow(vaultContent.unit, 'false');
              changeCellColorToYellow(vaultContent.primary, 'false');
              changeCellColorToYellow(vaultContent.secondary, 'false');
              // change status for all units when primary and secondary both in a neutral status
              $.each(infoArray, function (x, searching4vaults) {
                if (vaultContent.primary == searching4vaults.primary || vaultContent.primary == searching4vaults.secondary) {
                  console.log('Match found - Vault : ' + searching4vaults.unit);
                  changeCellColorToYellow(searching4vaults.unit, false);
                };  
              });
            }; // if (feedName == .unit || feedName == vaultContent.primary || feedName == vaultContent.secondary)
          }); //   $.each(infoArray, function(vaultIndex, vaultContent)7
        } else {
          // Primary or secondary or substation unit had been selected and will be changed to a neutral state
          changeCellColorToYellow(feedName, 'false');
          checkAdjacentCellForBackgroundColor(feedName, 'false')
        }; // (feedName.toUpperCase().startsWith('VAULT'))
      } else { // feedName is in a neutral state and will be marked as identified
        //if (feedName.toUpperCase().startsWith('VAULT')) { // Identify unit names that starts with Vault
        if (colorContent.type == 'vault') { // Identify unit names that starts with Vault
          $.each(infoArray, function (vaultIndex, vaultContent) {
            // search for all matching cells with the associated feedName
            if (feedName == vaultContent.unit || feedName == vaultContent.primary || feedName == vaultContent.secondary) {
              changeCellColorToYellow(vaultContent.unit, 'true');
              changeCellColorToYellow(vaultContent.primary, 'true');
              changeCellColorToYellow(vaultContent.secondary, 'true');
              checkAdjacentCellForBackgroundColor(vaultContent.unit, 'true')
            }; // if (feedName == .unit || feedName == vaultContent.primary || feedName == vaultContent.secondary)
          }); //   $.each(infoArray, function(vaultIndex, vaultContent)
        } else {
          // Primary or secondary or substation unit had been selected and will be marked as a match
          changeCellColorToYellow(feedName, 'true');
          checkAdjacentCellForBackgroundColor(feedName, 'true');
        }; // (feedName.toUpperCase().startsWith('VAULT'))
      } // if (document.getElementById
    }; //  if (feedName == colorContent.unit)
  }); // $.each(infoArray, function(colorIndex, colorContent)
}; // function identifyAllTheSameUnitNames(feedName)

///////////////////////////////////////////////////////////////////////////
function changeCellColorToYellow(unitName, changeColor) {
  // Purpose: mark all unitNames as either identified as a match or put them in a neutral state
  //  if cell is neutral then mark it as an identified match
  //  if cell had been marked then change it back to a neutral state
  $.each(infoArray, function (index, content) {
    if (changeColor == 'true') {
      if (unitName == content.unit || unitName == content.primary || unitName == content.secondary) {
        // if cell is neutral then mark it as an identified match
        var unit = document.getElementById(unitName.replace(' ', '') + 'VT' + index);
        if (!unit.getAttribute('class').includes('deactivated-cell')) unit.style.backgroundColor = YELLOW;
        unit = '';
      }; // if (unitName == content.unit || unitName == content.primary || unitName == content.secondary)
    } else {
      // if cell had been marked then change it back to a neutral state
      if (unitName == content.unit || unitName == content.primary || unitName == content.secondary) +
        document.getElementById(unitName.replace(' ', '') + 'VT' + index).removeAttribute('style');
    }; // if (changeColor == 'true')
  }); // $.each(infoArray, function(index, content)
}; // funciton changeCellCollorToYellow()

///////////////////////////////////////////////////////////////////////////
function checkAdjacentCellForBackgroundColor(feedName, changeColor) {
  // check for other cells that might need to be identified
  $.each(infoArray, function (index, content) {
    var getClass = '';
    var getStyle = '';

    //console.log('CHK-FEEDNAME ' + feedName);
    // identify feedName is either a primary or secondary. Then 
    //  primary -> secondary data
    //  secondaary -> primary data 
    //  Unit must determine if its from the Main table or one of the two substation tables
    if (feedName == content.primary) {
      getClass = document.getElementById((content.secondary).replace(' ', '') + 'VT' + index).getAttribute('class');
      getStyle = document.getElementById((content.secondary).replace(' ', '') + 'VT' + index).getAttribute('style');
    } else if (feedName == content.secondary) {
        getClass = document.getElementById((content.primary).replace(' ', '') + 'VT' + index).getAttribute('class');
        getStyle = document.getElementById((content.primary).replace(' ', '') + 'VT' + index).getAttribute('style');
    } else if (feedName == content.unit) {
        getClass = document.getElementById((content.unit).replace(' ', '') + 'VT' + index).getAttribute('class');
        getStyle = document.getElementById((content.unit).replace(' ', '') + 'VT' + index).getAttribute('style');

      // Unit is from the vault table
      if (content.type == 'vault') {
        var p_Style = document.getElementById((content.primary).replace(' ', '') + 'VT' + index).getAttribute('style');;
        var s_Style = document.getElementById((content.secondary).replace(' ', '') + 'VT' + index).getAttribute('style');;

        // User select a Unit, it changes all vaults where the primary and secondary cells are yellow
        if ((p_Style != null && p_Style.includes(YELLOW)) && (s_Style != null && s_Style.includes(YELLOW))) {
          checkAdjacentCellForBackgroundColor(content.primary, 'true');
        }
      }
    }

    // changes the Unit status to neutral when selecting from a primary, secondary, and or substation unit
    if (!getClass.includes('deactivated-cell')) {
      if (getStyle != null && getStyle.includes(YELLOW)) {
        changeCellColorToYellow(content.unit, changeColor);
      };
    };
  }); // $.eacch(infoArray, function(i, content)
}; // function checkAdjacentCellForBackgroundColor (feedName)