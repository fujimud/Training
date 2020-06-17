/*
    unit: '2B14A',
    type: 'feed',
    table: 'sub2',
    latched: 'false',
    activityStatus: 'active',
    building: '',
    timestamp: '20180713',
    userid: 'dan.fujimura',

    unit: 'Vault 26A',
    type: 'vault',
    table: 'main',
    primary: '1B14B',
    secondary: '2A8A',
    tied: 'true',
    latched: 'false',
    activityStatus: 'active',
    building: '',
    timestamp: '20180713',
    userid: 'dan.fujimura',
*/

let vaultOptions = () => {
    console.log('YEAH1')
    primaryLabel = document.createElement('label')
    primaryLabel.setAttribute('for', 'primaryUnit')
    primaryLabel.innerHTML = 'Primary unit: '

    primaryInput = document.createElement('input')
    primaryInput.setAttribute('type', 'text')
    primaryInput.setAttribute('id', 'primaryUnit')
    primaryInput.setAttribute('name', 'primaryUnit')
    primaryInput.setAttribute('placeHolder', 'will appears under the header  PDS')

    document.getElementById('unitTypeOption1').appendChild(primaryLabel).appendChild(primaryInput)
    /////////////////////////////////////////////////////////
    secondaryDiv = document.createElement('div')
    secondaryLabel = document.createElement('label')
    secondaryLabel.setAttribute('for', 'secondaryUnit')
    secondaryLabel.innerHTML = 'Secondary unit: '

    secondaryInput = document.createElement('input')
    secondaryInput.setAttribute('type', 'text')
    secondaryInput.setAttribute('id', 'secondaryUnit')
    secondaryInput.setAttribute('name', 'secondaryUnit')
    secondaryInput.setAttribute('placeHolder', 'will appears under the header  Alt/3rd')

    document.getElementById('unitTypeOption1').appendChild(secondaryDiv).appendChild(secondaryLabel).appendChild(secondaryInput)
    /////////////////////////////////////////////////////////
    tiedDivLabel = document.createElement('div')
    tiedDivLabel.innerHTML = '<b>Select Tied condition</b>'
    //document.getElementById('unitTypeOption1').appendChild(tiedDivLabel)

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

    document.getElementById('unitTypeOption1').appendChild(tiedDivLabel).appendChild(tiedDivTrue).appendChild(tiedLabelTrue).appendChild(tiedRadioTrue)

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
    
    document.getElementById('unitTypeOption1').appendChild(tiedDivLabel).appendChild(tiedDivFalse).appendChild(tiedLabelFalse).appendChild(tiedRadioFalse)
}

let feedOptions = () => {
    console.log('YEAH2')
    let result = document.getElementById('unitTypeOption1')
    let numberElements = result.childElementCount
    if (result.childElementCount > 0) {
        console.log('yep')
    } else {
        console.log('0')
    }
    console.log('cnt: ' + numberElements)
    for (var i = 0; i < numberElements; i++) {
        //result.removeChild(i)
    }


}
