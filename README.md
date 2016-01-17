# Guild Wars 2 World Events API

![Build Status](https://travis-ci.org/jrbeeman/gw2-events.svg?branch=master)

This project is a node module to provide Guild Wars world event listings along with relevant metadata.

[Source data in Google Docs](https://docs.google.com/spreadsheets/d/1293rkGwL4uJ0CsDCiq_FaVE2A6-pxTJ_FCgEIVojM7I/)

**Rebuilding bosses.json and events.json**

Use the npm [google-spreadsheet-to-json](https://www.npmjs.com/package/google-spreadsheet-to-json) package:

```
gsjson 1293rkGwL4uJ0CsDCiq_FaVE2A6-pxTJ_FCgEIVojM7I -b -w 1 ./src/bosses.json
gsjson 1293rkGwL4uJ0CsDCiq_FaVE2A6-pxTJ_FCgEIVojM7I -b -w 0 ./src/events.json
```
