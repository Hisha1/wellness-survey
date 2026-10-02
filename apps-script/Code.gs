/**
 * Daily Habits Check-in — response collector.
 *
 * Paste this into Extensions > Apps Script on a new Google Sheet, then
 * Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 * Copy the Web App URL into config.js.
 */

var COLUMNS = [
  "submitted_at",
  "name",
  "age",
  "q1_device_tracking_freq",
  "q2_device",
  "q3_workout_regimen_importance",
  "q4_routine_satisfaction",
  "q5_food_tracking",
  "q6_meal_packing",
  "q7_alcohol_moderation_conscious",
  "q8_hydration_tracking",
  "q9_wish_more_water",
  "q10_carry_bottle",
  "q11_bottle_age",
  "q12_automatic_tracking_interest"
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);

    var data = JSON.parse(e.postData.contents);
    var row = COLUMNS.map(function (key) {
      if (key === "submitted_at") return new Date();
      var value = data[key];
      return value === undefined || value === null ? "" : String(value).slice(0, 200);
    });
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
