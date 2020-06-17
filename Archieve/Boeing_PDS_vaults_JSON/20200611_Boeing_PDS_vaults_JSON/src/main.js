var infoArray = ''

$.getJSON("../Boeing_PDS_vaults_JSON/lib/JSON/dataSourceJson.json", function(titles) {
    
    infoArray = titles.contents
    populateHeaders(titles.titleFrames)
    populateContents(infoArray)
})

////////////////////////////////////
let populateHeaders= (labels) => {
    var cnt = 0;
    labels.forEach((labels) => {

        switch(labels.type) {
            case 'frame1':
            case 'frame2':
            case 'frame3':
                $('#GridHeader' + cnt++ + '').append(labels.title);
                break;
            case 'mainHeader':
                $('#GridHeader' + cnt++ + '').append(labels.title);
                break;
            case 'logo':
                $('#GridHeader' + cnt++ + '').append('<img class="image-centered" src="' + labels.link + '" alt="banner"></img>');
                break;
            default:
                console.log('ERROR: ' + label.title + ' and ' + label.type + 'are unknown')
        }
    })
}

////////////////////////////////////
let populateContents = (items) => {
    var index = 0;

    items.forEach((item) => {
        switch(item.table) {
            case 'main':
                let vaultID = (item.unit).replace(' ', '') + 'VT' + index;
                $('#content0' + '').append(`<div class="border" id="${vaultID}" onclick="changeTheColorOfTheCell('${item.unit}')">${item.unit}</div>`)
                let primaryID = (item.primary).replace(' ', '') + 'VT' + index;                
                $('#content1' + '').append(`<div class="border" id="${primaryID}" onclick="changeTheColorOfTheCell('${item.primary}')">${item.primary}</div>`)
                
                let altID = (item.secondary).replace(' ', '') + 'VT' + index;
                $('#content2' + '').append(`<div class="border" id="${altID}" onclick="changeTheColorOfTheCell('${item.secondary}')">${item.secondary}</div>`)
                
                let tieID = ('tie').replace(' ' + '') + 'VT' + index;
                $('#content3' + '').append(`<div class="border-tied" id="${tieID}" onclick="changeTheColorOfTheCell('${item.tied}')">${item.tied}</div>`)
                if (item.tied == 'true') document.getElementById(tieID).classList.add("colorTiedisTrue")
                break;
            case 'sub1':
                subID = (item.unit).replace(' ', '') + 'VT' + index;
                $('#station1_position' + '').append(`<div class="border" id="${subID}" onclick="changeTheColorOfTheCell('${item.unit}')">${item.unit}</div>`)
                break;
            case 'sub2':
                subID = (item.unit).replace(' ', '') + 'VT' + index;
                $('#station2_position' + '').append(`<div class="border" id="${subID}" onclick="changeTheColorOfTheCell('${item.unit}')">${item.unit}</div>`)
                break;
            default:
                console.log("ERROR: unidentified -> " + item)
        }
        index++
    })

    // Identify all deactivated unitTitles
    items.filter((deactivatedFeed) => {
        if (deactivatedFeed.activityStatus == 'deactivated') {
            let feed = deactivatedFeed.unit;            
            let findIndex = 0

            items.forEach((findFeed) => {
                if (findMatchFromJSArray(feed, findFeed)) document.getElementById(feed.replace(' ', '') +
                'VT' + findIndex).classList.add('deactivated-cell')
                findIndex++
            })
        }; // if (content.activityStatus == 'deactivated')
    }); //  items.filter((deactivatedFeed)
}
///////////////////////////////////////////////////////////////////////////

let findMatchFromJSArray = (search, jsArray) => {
    // Purpose: Search through a javascript array for matching data
    if (search == jsArray.unit || search == jsArray.primary || search == jsArray.secondary) return true;
    return false;
  }

///////////////////////////////////////////////////////////////////////////
function changeTheColorOfTheCell(feedName) {    
    // Search and identify all matching feedNames
    let cnt = 0

      infoArray.forEach((cellsData) => {
      // unit/primary/secondary had been selected, then it must mark all associated names
      if (feedName == cellsData.unit) {
        let cellIsIdentified = false;
        let getClass = document.getElementById(feedName.replace(' ', '') + 'VT' +
          cnt).getAttribute('class');
        console.log(getClass)
  
        if (getClass.includes('deactivated-cell')) { // deactivated unit/substations
          let message = ' had been deactivated. No action will be taken';
          alert(feedName + message);
        } else {
          cellIsIdentified = (!getClass.includes('identified-cell')) ? true : false

          if (cellsData.table == 'main') {
            infoArray.filter((tableContent) => {
              if (findMatchFromJSArray(feedName, tableContent)) {
                changeCellColorToYellow(tableContent.unit, cellIsIdentified);
                changeCellColorToYellow(tableContent.primary, cellIsIdentified);
                changeCellColorToYellow(tableContent.secondary, cellIsIdentified);
                if (cellIsIdentified) { // identifying multiple vaults when primary and secondary feeds are identified
                  checkAdjacentCellForBackgroundColor(tableContent.unit, cellIsIdentified);
                } else { // deselecting multiple vaults when the primary or secondary is no longer identified
                  //let index = 0
                  infoArray.forEach((searching4vaults) => {
                    if (findMatchFromJSArray(tableContent.primary, searching4vaults)) changeCellColorToYellow(searching4vaults.unit, cellIsIdentified)
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
      cnt++
    }); // infoArray.forEach((cellsData) => {
  }; // function changeTheColorOfTheCell(feedName)
  
  ///////////////////////////////////////////////////////////////////////////
  changeCellColorToYellow = (unitName, changeColor) => {
    //function changeCellColorToYellow(unitName, changeColor) {
    // Purpose: mark all unitNames as either identified as a match or put them in a neutral state
    //  if cell is neutral then mark it as an identified match
    //  if cell had been marked then change it back to a neutral state
    let cellId = '';
    let index = 0;

    infoArray.forEach((content) => {    
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
      index++   
    }); // $.each(infoArray, function(index, content)
  }; // funciton changeCellCollorToYellow()
  
  ///////////////////////////////////////////////////////////////////////////
  let checkAdjacentCellForBackgroundColor = (feedName, changeColor) => {
    // check for other cells that might need to be identified
    //$.each(infoArray, function (index, content) {
      let index = 0

      infoArray.forEach((content) => {
      // identify feedName is either a primary or secondary. Then 
      //  primary -> secondary data
      //  secondaary -> primary data 
      //  Unit must determine if its from the Main table or one of the two substation tables
        let getClass = ''; // retrieve the class data from the element
        
        if (feedName == content.primary) {
          getClass = document.getElementById((content.secondary).replace(' ', '') + 'VT' + index).getAttribute('class');
        } else if (feedName == content.secondary) {
          getClass = document.getElementById((content.primary).replace(' ', '') + 'VT' + index).getAttribute('class');
        } else if (feedName == content.unit) {
          getClass = document.getElementById((content.unit).replace(' ', '') + 'VT' + index).getAttribute('class');

          // compare the primary and secondary and if both has a color then the associated unit will match their behavior          
          if (content.table == 'main') {
            //console.log('here')
            let pId_class = document.getElementById((content.primary).replace(' ', '') + 'VT' + index).getAttribute('class');
            let sId_class = document.getElementById((content.secondary).replace(' ', '') + 'VT' + index).getAttribute('class');
            //let pId_class = document.getElementById((content.primary).replace(' ', '') + 'VT' + index)
            //let sId_class = document.getElementById((content.secondary).replace(' ', '') + 'VT' + index)
            //console.log(content)
            //console.log(pId_class)
            //console.log(sId_class)
            //if (!cellId.getAttribute('class').includes('deactivated-cell')) {
            if (pId_class.includes('identified-cell') && sId_class.includes('identified-cell')) {
            //  if (pId_class.getAttribute('class').includes('identified-cell') && sId_class.getAttribute('class').includes('identified-cell')) {
            //  console.log('here')
              checkAdjacentCellForBackgroundColor(content.primary, true);
            }
          }
        } 
        // changes the Unit status to neutral when selecting from one of the cells
        if (!getClass.includes('deactivated-cell') && getClass.includes('identified-cell')) changeCellColorToYellow(content.unit, changeColor);
        index++
      }); // $.eacch(infoArray, function(i, content)
    }; // function checkAdjacentCellForBackgroundColor (feedName)
  
