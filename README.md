[Source data in Google Docs](https://docs.google.com/spreadsheets/d/1293rkGwL4uJ0CsDCiq_FaVE2A6-pxTJ_FCgEIVojM7I/)

**Rebuilding bosses.json and events.json**

Use the npm [google-spreadsheet-to-json](https://www.npmjs.com/package/google-spreadsheet-to-json) package:

```
gsjson 1293rkGwL4uJ0CsDCiq_FaVE2A6-pxTJ_FCgEIVojM7I -b -w 1 ./src/bosses.json
gsjson 1293rkGwL4uJ0CsDCiq_FaVE2A6-pxTJ_FCgEIVojM7I -b -w 0 ./src/events.json
```
