# Daily Habits Check-in

A one-page survey about health-tracking habits. It collects a respondent's name and age, then 12 questions answered on a 1–5 scale (5 = highest).

The survey is presented as a general habits check-in. The underlying research goals are:
- whether people measure their health goals at all
- manual vs. automatic tracking
- how much hydration matters to them, and whether they keep the same water bottle through the day

Questions are ordered broad-to-specific so the hydration items (Q8–Q11) sit inside a general "food and drink" block.

## Questions

| # | Column | Question | 1 | 5 |
|---|---|---|---|---|
| 1 | `q1_device_tracking_freq` | How often do you use a smart device to track your activity? | Never | Every day |
| 2 | `q2_device` | Which smart device do you mainly use? | Apple Watch · Fitbit · Garmin · Samsung Galaxy Watch · WHOOP · Oura Ring · I don't use one | |
| 3 | `q3_workout_regimen_importance` | How important is having a regular workout regimen to you? | Not important | Extremely important |
| 4 | `q4_routine_satisfaction` | How satisfied are you with your current daily routine? | Very unsatisfied | Very satisfied |
| 5 | `q5_food_tracking` | How often do you track your food or follow a meal plan? | Never | Always |
| 6 | `q6_meal_packing` | How often do you plan or pack your meals when commuting or at class? | Never | Always |
| 7 | `q7_alcohol_moderation_conscious` | How conscious are you about moderating your alcohol intake? | Not at all conscious | Very conscious |
| 8 | `q8_hydration_tracking` | How often do you track how much water you drink? | Never | Always |
| 9 | `q9_wish_more_water` | "I wish I drank more water during the day." | Strongly disagree | Strongly agree |
| 10 | `q10_carry_bottle` | How often do you carry a reusable water bottle with you? | Never | All day, every day |
| 11 | `q11_bottle_age` | How long have you had the water bottle you use most? | 1 = <1 month · 2 = 1–6 months · 3 = 6–12 months · 4 = 1–2 years · 5 = over 2 years | |
| 12 | `q12_automatic_tracking_interest` | If tracking what you eat and drink happened automatically, how likely would you be to use it? | Very unlikely | Very likely |

## Collect responses (Google Sheet, ~3 minutes)

1. Create a new Google Sheet.
2. Open **Extensions → Apps Script**, replace the editor contents with [`apps-script/Code.gs`](apps-script/Code.gs), and save.
3. **Deploy → New deployment →** type **Web app**. Set *Execute as*: **Me**, *Who has access*: **Anyone**. Authorize when asked.
4. Copy the Web App URL (ends in `/exec`) into `config.js`:
   ```js
   window.SURVEY_ENDPOINT = "https://script.google.com/macros/s/XXXX/exec";
   ```
5. Commit and push. Each submission becomes one row in the sheet, with a header row created on the first response.

Until an endpoint is set, the page runs in preview mode and keeps answers only in the visitor's browser.

## Publish the link (GitHub Pages)

**Settings → Pages →** *Source*: **Deploy from a branch**, pick this branch and `/ (root)`, then save. The survey will be live at `https://hisha1.github.io/wellness-survey/` within a minute or two.
