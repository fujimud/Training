const {
    performance
} = require('perf_hooks')
var startTime, endTime;
var maxTime = 1;
var numberOfAttempts = 10;

///////////////////////////////////    
start = () => startTime = performance.now()


end = () => {
    //endTime = performance.now()
    let timeDiff = performance.now() - startTime; // in ms
    // strip the ms
    //timeDiff /= 1000;

    // get seconds
    //let seconds = Math.round(timeDiff)
    //return seconds + " seconds"
    return timeDiff + " ms"
    //console.log(seconds + " seconds")
}
///////////////////////////////////    

for (let x = 0; x < numberOfAttempts; x++) {

    start()
    let d = new Date()

    for (let i = 0; i < maxTime; i++) {
        let d = new Date()
        let date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate()
        let month = (d.getMonth() < 10) ? '0' + d.getMonth() : d.getMonth()
        let hour = (d.getHours() < 10) ? '0' + d.getHours() : d.getHours()
        let min = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes()
        let sec = (d.getSeconds() < 10) ? '0' + d.getSeconds() : d.getSeconds()
        //console.log(date)
        let currentDate = d.getFullYear() + month + date + hour + min + sec + 'L'
        //console.log(currentDate)
    }
    console.log('test#1 => ' + end())

    start()
    for (let i = 0; i < maxTime; i++) {     
        let d = new Date()   
        let year = d.getFullYear()
        let date = d.getDate();
        let month = d.getMonth();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();

        if (month < 10) month = '0' + month;
        if (hour < 10) hour = '0' + hour;
        if (min < 10) min = '0' + min;
        if (sec < 10) sec = '0' + sec;

        let currentDate = year + month + date + hour + min + sec + 'L'
        //console.log(currentDate)
    }
    console.log('test#2 => ' + end())

    start()
    for (let i = 0; i < maxTime; i++) {   
        let d = new Date()     
        let year = d.getFullYear()
        let date = d.getDate();
        let month = d.getMonth();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();

        month = (month < 10) ? '0' + month : month
        date = (date < 10) ? '0' + date : date
        hour = (hour < 10) ? '0' + hour : hour
        min = (min < 10) ? '0' + min : min
        sec = (sec < 10) ? '0' + sec : sec

        let currentDate = year + month + date + hour + min + sec + 'L'
        //console.log(currentDate)
    }
    console.log('test#3 => ' + end())
    console.log("attempt#: " + x)
}

/*
    //let year = d.getFullYear()
    //let date = d.getDate();
    //let month = d.getMonth();
    //let hour = d.getHours();
    //let min = d.getMinutes();
    //let sec = d.getSeconds();
    //console.log(min)

    let date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate()
    let month = (d.getMonth() < 10) ? '0' + d.getMonth() : d.getMonth()
    let hour = (d.getHours() < 10) ? '0' + d.getHours() : d.getHours()
    let min = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes()
    let sec = (d.getSeconds() < 10) ? '0' + d.getSeconds() : d.getSeconds()
    if (month < 10) month = '0' + month;
    if (hour < 10) hour = '0' + hour;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    //console.log(date)

    let currentDate = d.getFullYear() + month + date + hour + min + sec + 'L'
    //console.log(currentDate)

    end()
*/