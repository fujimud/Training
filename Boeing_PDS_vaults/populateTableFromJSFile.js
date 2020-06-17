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


//const fs = require('fs')    NOTE: require() lives on the server side and not on the browser. 

const titleArray = frameTitle;
const infoArray = data;
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
        $('#content0' + '').append(`<div class="border" id="${vaultID}" onclick="identifyAllTheSameUnitNames('${content.unit}')">${content.unit}</div>`)
        // primary units
        $('#content1' + '').append(`<div class="border" id="${primaryID}" onclick="identifyAllTheSameUnitNames('${content.primary}')">${content.primary}</div>`)
        // secondary units
        $('#content2' + '').append(`<div class="border" id="${altID}" onclick="identifyAllTheSameUnitNames('${content.secondary}')">${content.secondary}</div>`)
        // Tied
        $('#content3' + '').append(`<div class="border-tied" id="${tieID}">${content.tied}</div>`)
        if (content.tied == 'true') document.getElementById(tieID).classList.add("colorTiedisTrue")
      } else if ((content.type = 'feed') && (content.table == 'sub1' || content.table == 'sub2')) {
        var substation = '';
        if (content.table == 'sub1') { // substation 1
          substation = '#station1_position';
          subID = (content.unit).replace(' ', '') + 'VT' + index;
        } else { // substion 2
          substation = '#station2_position'
          subID = (content.unit).replace(' ', '') + 'VT' + index;
        }
        $(`${substation}`).append(`<div class="border" id="${subID}" onclick="identifyAllTheSameUnitNames('${content.unit}')">${content.unit}</div>`)
      };
    }; // if (content.activityStatus != 'sleep')
  }); // $.each(data, function (index, content)

  // Identify all deactivated unitTitles
  // All deactivated units are identified under Substion 1 or 2 in the JSON file   
  infoArray.filter((deactivatedFeed) => {
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
          infoArray.filter((tableContent) => {
            if (findMatchFromJSArray(feedName, tableContent)) {
              changeCellColorToYellow(tableContent.unit, cellIsIdentified);
              changeCellColorToYellow(tableContent.primary, cellIsIdentified);
              changeCellColorToYellow(tableContent.secondary, cellIsIdentified);
              if (cellIsIdentified) { // identifying multiple vaults when primary and secondary feeds are identified
                checkAdjacentCellForBackgroundColor(tableContent.unit, cellIsIdentified);
              } else { // deselecting multiple vaults when the primary or secondary is no longer identified
                $.each(infoArray, function (index, searching4vaults) {
                  if (findMatchFromJSArray(tableContent.primary, searching4vaults)) changeCellColorToYellow(searching4vaults.unit, cellIsIdentified);
                });
              };
            };
          });
        } else { // When a feed has been selected, the function searches for other feeds with the same name
          infoArray.filter(searching4Feeds => {
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
changeCellColorToYellow = (unitName, changeColor) => {
  //function changeCellColorToYellow(unitName, changeColor) {
  // Purpose: mark all unitNames as either identified as a match or put them in a neutral state
  //  if cell is neutral then mark it as an identified match
  //  if cell had been marked then change it back to a neutral state
  var cellId = '';
  $.each(infoArray, function (index, content) {
    if (findMatchFromJSArray(unitName, content)) {
      cellId = document.getElementById(unitName.replace(' ', '') + 'VT' + index);
      if (!cellId.getAttribute('class').includes('deactivated-cell')) {
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
let checkAdjacentCellForBackgroundColor = (feedName, changeColor) => {
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
let findMatchFromJSArray = (search, jsArray) => {
  // Purpose: Search through a javascript array for matching data
  if (search == jsArray.unit || search == jsArray.primary || search == jsArray.secondary) return true;
  return false;
}

///////////////////////////////////////////////////////////////////////////
openModal = () => {
  var modal = document.getElementById('addModal');
  var btn = document.getElementById('openModal');
  var span = document.getElementsByClassName('close')[0];

  modal.style.display = 'block'
  span.onclick = () => {
    modal.style.display = 'none'
    window.location.reload()
  }

  /*  Took this out for the time being.
    Purpose: Close the modal window when clicked outside of its box

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none'
      window.location.reload()
    }
  }
  */
}

///////////////////////////////////////////////////////////////////////////
feedOptions = () => {
  let result = document.getElementById('vaultOptions')
  let numberElements = result.childElementCount
  if (result.childElementCount > 0) {
    document.getElementById('unit_primary').remove();
    document.getElementById('unit_secondary').remove();
    document.getElementById('unit_tied').remove();
  }
}

///////////////////////////////////////////////////////////////////////////
cancelModalAction = () => {
  window.location.reload()
  document.getElementById("addModal").style.display = "none"

}

///////////////////////////////////////////////////////////////////////////
saveNewInformation = () => {  
  const items = document.getElementsByTagName('input');
  var name = '';
  var table = '';
  var primary = '';
  var secondary = '';
  var status = '';
  var type = '';
  var tied = '';
  var creationDate = '';
  var newDataFeed = '';


  for (i = 0; i < items.length; i++) {
    if (items[i].type == 'text' || (items[i].type == 'radio'  && items[i].checked)) {
      switch (items[i].id) {
        case 'unitName':
          name = items[i].value;
          break;
        case 'unitSub':
          type = 'vault' 
          table = items[i].value;
          break;         
        case 'sub1':
        case 'sub2':
          type = 'feed'
          table = items[i].value;
          break;
        case 'primaryUnit':
          primary = items[i].value;
          break;
        case 'secondaryUnit': 
        secondary = items[i].value;
          break;
        case 'activeStatus':
        case 'sleepStatus':
          status = items[i].value;
          break;
        case 'tiedTrue':
        case 'tiedFalse':
          tied = items[i].value;
          break;
        default:
          console.log(`ERROR - Unknown ID: ${items[i].id}`)
      }        
    } 
  }

  // get current yyyymmdd 
  let d = new Date()
  let date = d.getDate()
  let month = d.getMonth();
  if (date < 10) date = '0' + date
  if (month < 10) month = '0' + month
  creationDate = `${d.getFullYear()}${month}${date}`

  if (primary != '') {
    newDataFeed = {unit: name, type: type, table: table, primary: primary, secondary: secondary, tied: tied, latched: 'false', activityStatus: status, creationDate: creationDate, userid: 'TODO'}
  } else {
    newDataFeed = {unit: name, type: type, table: table, latched: 'false', activityStatus: status, creationDate: creationDate, userid: 'TODO'}
  }
  //console.log(newDataFeed)
  infoArray.push(newDataFeed)
  console.log(infoArray)

  // save to file
  let saving = JSON.stringify('var data = ' + infoArray)
  //fs.writeFileSync('test.js', saving)   // will only work when on the actual server or in Terminal
  console.log(saving)

}

/////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////
let vaultOptions = () => {
  primaryDiv = document.createElement('div')
  primaryDiv.setAttribute('id', 'unit_primary')
  primaryLabel = document.createElement('label')
  primaryLabel.setAttribute('for', 'primaryUnit')
  primaryLabel.innerHTML = 'Primary unit: '

  primaryInput = document.createElement('input')
  primaryInput.setAttribute('type', 'text')
  primaryInput.setAttribute('id', 'primaryUnit')
  primaryInput.setAttribute('name', 'primaryUnit')
  primaryInput.setAttribute('placeHolder', 'required')
  primaryInput.setAttribute('required', '')

  document.getElementById('vaultOptions').appendChild(primaryDiv).appendChild(primaryLabel).appendChild(primaryInput)
  /////////////////////////////////////////////////////////
  secondaryDiv = document.createElement('div')
  secondaryDiv.setAttribute('id', 'unit_secondary')
  secondaryLabel = document.createElement('label')
  secondaryLabel.setAttribute('for', 'secondaryUnit')
  secondaryLabel.innerHTML = 'Secondary unit: '

  secondaryInput = document.createElement('input')
  secondaryInput.setAttribute('type', 'text')
  secondaryInput.setAttribute('id', 'secondaryUnit')
  secondaryInput.setAttribute('name', 'secondaryUnit')
  secondaryInput.setAttribute('placeHolder', 'required')
  secondaryInput.setAttribute('required', '')

  document.getElementById('vaultOptions').appendChild(secondaryDiv).appendChild(secondaryLabel).appendChild(secondaryInput)
  /////////////////////////////////////////////////////////
  tiedDivLabel = document.createElement('div')
  tiedDivLabel.setAttribute('id', 'unit_tied')
  tiedDivLabel.innerHTML = '<b>Select Tied condition</b>'

  /////////////////////////////////////////////////////////
  tiedDivTrue = document.createElement('div')
  tiedLabelTrue = document.createElement('label')
  tiedLabelTrue.setAttribute('for', 'Tied')
  tiedLabelTrue.innerHTML = 'True'

  tiedRadioTrue = document.createElement('input')
  tiedRadioTrue.setAttribute('type', 'radio')
  tiedRadioTrue.setAttribute('id', 'tiedTrue')
  tiedRadioTrue.setAttribute('name', 'Tied')
  tiedRadioTrue.setAttribute('value', 'true')


  document.getElementById('vaultOptions').appendChild(tiedDivLabel).appendChild(tiedDivTrue).appendChild(tiedLabelTrue).appendChild(tiedRadioTrue)

  /////////////////////////////////////////////////////////
  tiedDivFalse = document.createElement('div')
  tiedLabelFalse = document.createElement('label')
  tiedLabelFalse.setAttribute('for', 'tiedFalse')
  tiedLabelFalse.innerHTML = 'False'

  tiedRadioFalse = document.createElement('input')
  tiedRadioFalse.setAttribute('type', 'radio')
  tiedRadioFalse.setAttribute('id', 'tiedFalse')
  tiedRadioFalse.setAttribute('name', 'Tied')
  tiedRadioFalse.setAttribute('value', 'false')
  tiedRadioFalse.setAttribute('checked', "")

  document.getElementById('vaultOptions').appendChild(tiedDivLabel).appendChild(tiedDivFalse).appendChild(tiedLabelFalse).appendChild(tiedRadioFalse)
  //readWriteTextFile()
}