// Power Distributon datasource
// Purpose: List each vault and breaker being displayed in the Power Distribution table and site map
//
// Author: Dan Fujimura
// Created date: 07/09/2018
// Language: Javascript for a Json data

////console.log("this is console running")
//console.log("\n" + "JS world");

// List of titles to identify each column displayed in the PDtable.html
var frameTitle = [
{ "title": "Unit Substation,
 "frame":"frame1"},
 {"title":"PDS",
 "frame":"frame2"},
 {"title":"Alt/3rd",
 "frame":"frame3"},
 {"title":"Substation 1",
 "frame":"frame4"},
 {"title":"Substation 2",
 "frame":"frame5"}
];


var unitData = [{
    "unit": "Vault 01",
    "type": "vault",
    "table": "main",
    "primary": "1B13B",
    "secondary": "2B13B",
    "tie": "false",
    "latched":"false",
    "activityStatus": "active",
    "building": "",
    "timestamp": "20180713",
    "userid": "dan.fujimura"
},
    {
        "unit": "Vault 02",
        "type": "vault",
        "table": "main",
        "primary": "2B13B",
        "secondary": "1B13B",
        "tie": "false",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 14A",
        "type": "vault",
        "table": "main",
        "primary": "2A7B",
        "secondary": "1A5A",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 14B",
        "type": "vault",
        "table": "main",
        "primary": "1A5B",
        "secondary": "2B12A",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 21",
        "type": "vault",
        "table": "main",
        "primary": "1B12B",
        "secondary": "2B14B",
        "tie": "false",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 22",
        "type": "vault",
        "table": "main",
        "primary": "2B14B",
        "secondary": "1B12B",
        "tie": "false",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 23A",
        "type": "vault",
        "table": "main",
        "primary": "1B14B",
        "secondary": "2B12A",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 23B",
        "type": "vault",
        "table": "main",
        "primary": "2B14A",
        "secondary": "1A7B",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 24A",
        "type": "vault",
        "table": "main",
        "primary": "1B14B",
        "secondary": "2A8A",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 24B",
        "type": "vault",
        "table": "main",
        "primary": "2A8A",
        "secondary": "1A7B",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 25A",
        "type": "vault",
        "table": "main",
        "primary": "2A8A",
        "secondary": "1A7B",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 25B",
        "type": "vault",
        "table": "main",
        "primary": "1B14b",
        "secondary": "2A8A",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 26a",
        "type": "vault",
        "table": "main",
        "primary": "1B14b",
        "secondary": "2A8A",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 26B",
        "type": "vault",
        "table": "main",
        "primary": "2A8A",
        "secondary": "1A7B",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "Vault 27A",
        "type": "vault",
        "table": "main",
        "primary": "2B14A",
        "secondary": "1B14B",
        "tie": "true",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1A5A",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1A5B",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1A6A",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1A6B",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1A7A",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1A7B",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1A8A",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1A8B",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "deactivated",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1B11A",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1B11B",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "deactivated",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1B12A",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1B12B",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1B13A",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "deactivated",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1B13B",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "114A",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "1B14B",
        "type": "feed",
        "table": "sub1",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2A5A",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2A5B",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2AA",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2A6B",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2A7A",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2A7B",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2A8A",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2A8B",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "deactivated",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2B11A",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2B11B",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "deactivated",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2B12A",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2B12B",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2B13A",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "deactivated",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2B13B",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2B14A",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    },
    {
        "unit": "2B14B",
        "type": "feed",
        "table": "sub2",
        "latched": "false",
        "activityStatus": "active",
        "building": "",
        "timestamp": "20180713",
        "userid": "dan.fujimura"
    }
];
