const COMPLETIONS = {
  // --- This week (today = Sat Jul 04) ---
  "2026-07-03": [], // yesterday — missed reading
  "2026-07-02": [1, 2, 3, 4], // perfect day
  "2026-07-01": [2, 3],
  "2026-06-30": [1, 3, 4],
  "2026-06-29": [3], // rough Monday — only made the bed

  // --- Last week ---
  "2026-06-28": [1, 2, 3, 4], // perfect Sunday
  "2026-06-27": [2, 3, 4],
  "2026-06-26": [1, 3],
  "2026-06-25": [1, 2, 3],
  "2026-06-24": [3, 4],
  "2026-06-23": [1, 2, 3, 4], // perfect day
  "2026-06-22": [2],

  // --- Week before ---
  "2026-06-21": [1, 3],
  "2026-06-20": [1, 2, 3, 4],
  "2026-06-19": [3, 4],
  "2026-06-18": [1, 2, 3],
  "2026-06-17": [], // completely missed day (empty, not absent — both should render the same)
  "2026-06-16": [2, 3, 4],
  "2026-06-15": [1, 3],
};

export default COMPLETIONS;
