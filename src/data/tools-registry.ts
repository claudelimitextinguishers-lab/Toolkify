export type Category =
  | 'audio' | 'developer' | 'display' | 'finance'
  | 'fun' | 'general' | 'health' | 'mobile' | 'standalone';

export type Tool = {
  slug: string;       // must exactly match the .astro filename in src/pages/tools/{category}/, no extension
  title: string;      // human-readable display name
  category: Category;
  tags: string[];     // 2-4 lowercase keywords for related-tool matching
};

export const tools: Tool[] = [
  // ── audio ─────────────────────────────────────────────
  { slug: 'tuning-fork',          title: 'Tuning Fork',            category: 'audio',  tags: ['audio', 'frequency', 'tone', 'music'] },
  { slug: 'speaker-phase',        title: 'Speaker Phase Test',     category: 'audio',  tags: ['audio', 'speaker', 'stereo', 'test'] },
  { slug: 'microphone-frequency', title: 'Microphone Frequency',   category: 'audio',  tags: ['audio', 'microphone', 'frequency', 'test'] },
  { slug: 'headphone-test',       title: 'Headphone Test',         category: 'audio',  tags: ['audio', 'headphone', 'stereo', 'test'] },
  { slug: 'white-noise',          title: 'White Noise Generator',  category: 'audio',  tags: ['audio', 'noise', 'sleep', 'focus'] },
  { slug: 'brown-noise',          title: 'Brown Noise Generator',  category: 'audio',  tags: ['audio', 'noise', 'sleep', 'focus'] },

  // ── developer ─────────────────────────────────────────
  { slug: 'word-character-counter', title: 'Word & Character Counter', category: 'developer', tags: ['text', 'count', 'writing'] },
  { slug: 'readability-score',      title: 'Readability Score',        category: 'developer', tags: ['text', 'writing', 'analysis'] },
  { slug: 'randomizer-wheel',       title: 'Randomizer Wheel',         category: 'developer', tags: ['random', 'picker', 'decision'] },
  { slug: 'password-generator',     title: 'Password Generator',       category: 'developer', tags: ['security', 'random', 'password'] },
  { slug: 'name-generator',         title: 'Name Generator',           category: 'developer', tags: ['random', 'generator', 'name'] },
  { slug: 'diff-checker',           title: 'Diff Checker',             category: 'developer', tags: ['text', 'compare', 'code'] },
  { slug: 'code-formatter',         title: 'Code Formatter',           category: 'developer', tags: ['code', 'format', 'developer'] },
  { slug: 'case-converter',         title: 'Case Converter',           category: 'developer', tags: ['text', 'case', 'convert'] },

  // ── display ───────────────────────────────────────────
  { slug: 'scroll-wheel',      title: 'Scroll Wheel Test',    category: 'display', tags: ['input', 'mouse', 'test'] },
  { slug: 'refresh-rate',      title: 'Refresh Rate Test',    category: 'display', tags: ['screen', 'monitor', 'test'] },
  { slug: 'polling-rate',      title: 'Polling Rate Test',    category: 'display', tags: ['input', 'mouse', 'test'] },
  { slug: 'keyboard-latency',  title: 'Keyboard Latency Test',category: 'display', tags: ['input', 'keyboard', 'test'] },
  { slug: 'key-repeat',        title: 'Key Repeat Test',      category: 'display', tags: ['input', 'keyboard', 'test'] },
  { slug: 'double-click',      title: 'Double Click Test',    category: 'display', tags: ['input', 'mouse', 'test'] },
  { slug: 'caps-lock',         title: 'Caps Lock Indicator',  category: 'display', tags: ['input', 'keyboard', 'test'] },
  { slug: 'aspect-ratio',      title: 'Aspect Ratio Calculator', category: 'display', tags: ['screen', 'monitor', 'calculator'] },

  // ── finance ───────────────────────────────────────────
  { slug: 'tip-calculator',     title: 'Tip Calculator',            category: 'finance', tags: ['money', 'calculator', 'tip'] },
  { slug: 'student-loan-payoff',title: 'Student Loan Payoff',       category: 'finance', tags: ['money', 'loan', 'debt', 'calculator'] },
  { slug: 'sip-return',         title: 'SIP Return Calculator',     category: 'finance', tags: ['money', 'investment', 'calculator'] },
  { slug: 'retirement-401k',    title: '401(k) Retirement Calculator', category: 'finance', tags: ['money', 'retirement', 'investment', 'calculator'] },
  { slug: 'paycheck-calculator',title: 'Paycheck Calculator',       category: 'finance', tags: ['money', 'salary', 'tax', 'calculator'] },
  { slug: 'mortgage-payment',   title: 'Mortgage Payment Calculator', category: 'finance', tags: ['money', 'loan', 'mortgage', 'calculator'] },
  { slug: 'federal-tax-bracket',title: 'Federal Tax Bracket',       category: 'finance', tags: ['money', 'tax', 'calculator'] },
  { slug: 'currency-converter', title: 'Currency Converter',        category: 'finance', tags: ['money', 'currency', 'convert'] },
  { slug: 'compound-interest',  title: 'Compound Interest Calculator', category: 'finance', tags: ['money', 'investment', 'interest', 'calculator'] },
  { slug: 'capital-gains-tax',  title: 'Capital Gains Tax',         category: 'finance', tags: ['money', 'tax', 'investment', 'calculator'] },
  { slug: 'auto-loan',          title: 'Auto Loan Calculator',      category: 'finance', tags: ['money', 'loan', 'calculator'] },

  // ── fun ───────────────────────────────────────────────
  { slug: 'chronological-age', title: 'Chronological Age Calculator', category: 'fun', tags: ['time', 'age', 'calculator'] },
  { slug: 'spacebar-counter',  title: 'Spacebar Counter',          category: 'fun', tags: ['game', 'speed', 'keyboard'] },
  { slug: 'reaction-time',     title: 'Reaction Time Test',        category: 'fun', tags: ['game', 'speed', 'test'] },
  { slug: 'pomodoro-timer',    title: 'Pomodoro Timer',            category: 'fun', tags: ['time', 'timer', 'focus', 'productivity'] },
  { slug: 'clicks-per-second', title: 'Clicks Per Second',         category: 'fun', tags: ['game', 'speed', 'mouse'] },
  { slug: 'typing-test',       title: 'Typing Test',               category: 'fun', tags: ['game', 'speed', 'keyboard', 'typing'] },

  // ── general ───────────────────────────────────────────
  { slug: 'time-zone-converter', title: 'Time Zone Converter',    category: 'general', tags: ['time', 'timezone', 'convert'] },
  { slug: 'screen-dead-pixel',   title: 'Dead Pixel Test',        category: 'general', tags: ['screen', 'monitor', 'test'] },
  { slug: 'color-picker',        title: 'Color Picker',           category: 'general', tags: ['color', 'design', 'picker'] },

  // ── health ────────────────────────────────────────────
  { slug: 'water-intake',       title: 'Water Intake Calculator',   category: 'health', tags: ['health', 'hydration', 'calculator'] },
  { slug: 'sleep-cycle',        title: 'Sleep Cycle Calculator',    category: 'health', tags: ['health', 'sleep', 'calculator'] },
  { slug: 'pregnancy-due-date', title: 'Pregnancy Due Date',        category: 'health', tags: ['health', 'pregnancy', 'calculator'] },
  { slug: 'macro-calculator',   title: 'Macro Calculator',          category: 'health', tags: ['health', 'nutrition', 'diet', 'calculator'] },
  { slug: 'calorie-deficit',    title: 'Calorie Deficit Calculator',category: 'health', tags: ['health', 'diet', 'calorie', 'calculator'] },
  { slug: 'calorie-burn',       title: 'Calorie Burn Calculator',   category: 'health', tags: ['health', 'fitness', 'calorie', 'calculator'] },
  { slug: 'bmi-calculator',     title: 'BMI Calculator',            category: 'health', tags: ['health', 'fitness', 'weight', 'calculator'] },

  // ── mobile ────────────────────────────────────────────
  { slug: 'spirit-level',         title: 'Spirit Level',            category: 'mobile', tags: ['sensor', 'mobile', 'measure'] },
  { slug: 'speedometer',          title: 'Speedometer',             category: 'mobile', tags: ['sensor', 'mobile', 'gps', 'speed'] },
  { slug: 'orientation-lock',     title: 'Orientation Lock',        category: 'mobile', tags: ['sensor', 'mobile', 'screen'] },
  { slug: 'light-meter',          title: 'Light Meter',             category: 'mobile', tags: ['sensor', 'mobile', 'light'] },
  { slug: 'compass-rose',         title: 'Compass Rose',            category: 'mobile', tags: ['sensor', 'mobile', 'compass', 'direction'] },
  { slug: 'accelerometer-viewer', title: 'Accelerometer Viewer',    category: 'mobile', tags: ['sensor', 'mobile', 'motion'] },
  { slug: 'battery-health',       title: 'Battery Health Test',     category: 'mobile', tags: ['sensor', 'mobile', 'battery', 'health', 'diagnostics'] },

  // ── standalone ────────────────────────────────────────
  { slug: 'json-formatter',   title: 'JSON Formatter',      category: 'standalone', tags: ['code', 'json', 'format', 'developer'] },
  { slug: 'uuid-hash',        title: 'UUID & Hash Generator', category: 'standalone', tags: ['code', 'generator', 'security', 'developer'] },
  { slug: 'base64-url',       title: 'Base64 & URL Encoder', category: 'standalone', tags: ['code', 'encode', 'convert', 'developer'] },
  { slug: 'contrast-checker', title: 'Contrast Checker',    category: 'standalone', tags: ['color', 'design', 'accessibility'] },
  { slug: 'svg-previewer',    title: 'SVG Previewer',       category: 'standalone', tags: ['code', 'svg', 'design', 'developer'] },
  { slug: 'whiteboard',       title: 'Whiteboard',          category: 'standalone', tags: ['design', 'draw', 'canvas'] },
];

export const bySlug = (slug: string): Tool => {
  const found = tools.find(t => t.slug === slug);
  if (!found) throw new Error(`tools-registry.ts: no tool found with slug "${slug}"`);
  return found;
};
