var xhttp = new XMLHttpRequest();
//var people = ''
xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText)
        //console.log(response.people)
        // people = response.people
        populateHeaders(response.titleFrames)
    }
    
}
xhttp.open("GET", "../Boeing_PDS_vaults_JSON/lib/JSON/dataSourceJson.json", true) 
xhttp.send()

let populateHeaders = (placements) => {
    // populate the page with logo, title and sub titles
    placements.forEach((item) => {
    //console.log(item)
    //console.log(item.title)
    //console.log(item.type)
    
    if (item.type == 'frame1') {
        console.log(item.title)
        //document.getElementById('vaultHeader').innHTML = item.title
    } else if (item.type == 'frame2') {
        console.log(item.title)
    } else if (item.type == 'frame3') {
        console.log(item.title)
    } else if (item.type == 'mainHeader') {
        console.log(item.title)
        document.getElementById('mainHeader').innHTML = item.title
    } else if (item.type == 'logo') {
        console.log(item.link)
    } else {
        console.log("ERROR: name> " + item.name + " and type> " + item.type + ' could not be found')
    }    
   })
}