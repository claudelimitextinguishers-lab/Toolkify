const fs = require('fs');
const path = require('path');

const toolCategories = {
  finance: {
    icon: '💰',
    colorName: 'yellow',
    badgeClass: 'badge-tag-yellow bg-yellow-light text-yellow-dark',
    cardClass: 'card-feature-yellow',
    tier: 'Tier 1 — Finance & Tax',
    tools: [
      { name: 'Mortgage Payment Calculator', path: 'mortgage-payment', desc: 'Calculate your monthly mortgage payments including principal, interest, taxes, and insurance.' },
      { name: 'Take-Home Pay / Paycheck Calculator', path: 'take-home-pay', desc: 'Estimate your net take-home salary after federal, state, and local tax deductions.' },
      { name: 'Tip Calculator', path: 'tip-calculator', desc: 'Quickly calculate tips and split bill payments among multiple friends or colleagues.' },
      { name: 'Auto Loan Calculator', path: 'auto-loan', desc: 'Determine monthly payments, total interest, and overall cost of a new or used car loan.' },
      { name: 'Compound Interest Calculator', path: 'compound-interest', desc: 'Calculate the future value of your savings or investments using compound interest formulas.' },
      { name: 'Student Loan Payoff Calculator', path: 'student-loan-payoff', desc: 'Analyze debt payoff timelines and estimate total interest savings under various payment plans.' },
      { name: '401(k) / Retirement Savings Calculator', path: 'retirement-401k', desc: 'Project your retirement savings balance and future income based on annual contributions.' },
      { name: 'Capital Gains Tax Estimator', path: 'capital-gains-tax', desc: 'Estimate federal capital gains taxes on profits from stocks, crypto, or real estate sales.' },
      { name: 'Federal Tax Bracket Calculator', path: 'federal-tax-bracket', desc: 'Determine your federal marginal income tax brackets and effective tax rate calculations.' },
      { name: 'SIP Return Calculator', path: 'sip-return', desc: 'Calculate prospective maturity returns on systematic investment plans over selected periods.' }
    ]
  },
  health: {
    icon: '🏥',
    colorName: 'teal',
    badgeClass: 'badge-tag-yellow bg-teal-light text-moss-dark',
    cardClass: 'card-feature-teal',
    tier: 'Tier 2 — Health & Fitness',
    tools: [
      { name: 'BMI Calculator (imperial)', path: 'bmi-calculator', desc: 'Calculate Body Mass Index based on imperial units and evaluate healthy weight classifications.' },
      { name: 'Calorie Deficit Calculator', path: 'calorie-deficit', desc: 'Determine daily calorie targets needed to achieve sustainable weight goals based on activity.' },
      { name: 'Macro Calculator', path: 'macro-calculator', desc: 'Calculate dynamic daily macronutrient targets (protein, carbs, fats) for physical fitness.' },
      { name: 'Water Intake Calculator', path: 'water-intake', desc: 'Determine recommended daily water intake volume targets based on weight and activity levels.' },
      { name: 'Due Date / Pregnancy Calculator', path: 'pregnancy-due-date', desc: 'Estimate gestation progress, key trimester milestones, and pregnancy due dates.' },
      { name: 'Sleep Cycle Calculator', path: 'sleep-cycle', desc: 'Optimize wake times and sleep windows based on standard human sleep cycles.' },
      { name: 'Calorie Burn Estimator', path: 'calorie-burn', desc: 'Estimate total calories burned during physical exercises and everyday activities.' }
    ]
  },
  engagement: {
    icon: '⌨️',
    colorName: 'rose',
    badgeClass: 'badge-tag-purple bg-rose-light text-primary',
    cardClass: 'card-feature-rose',
    tier: 'Tier 3 — Engagement Tools',
    tools: [
      { name: 'Premium Typing Test', path: 'typing-test', desc: 'Test and measure typing speed, words per minute (WPM), and character accuracy errors.' },
      { name: 'Reaction Time Test', path: 'reaction-time', desc: 'Measure visual click latency and compare cognitive reaction time against averages.' },
      { name: 'Clicks Per Second', path: 'clicks-per-second', desc: 'Test mouse clicking speed and track clicks per second (CPS) in a speed window.' },
      { name: 'Pomodoro / Focus Timer', path: 'pomodoro-timer', desc: 'Boost work session efficiency using standard Pomodoro time management methods.' },
      { name: 'Chronological Age Calculator', path: 'chronological-age', desc: 'Calculate precise age in years, months, weeks, days, and hours from birthdates.' },
      { name: 'Spacebar Counter', path: 'spacebar-counter', desc: 'Test and record spacebar keystroke frequencies within designated time limits.' }
    ]
  },
  developer: {
    icon: '🔧',
    colorName: 'teal',
    badgeClass: 'badge-tag-purple bg-teal-light text-moss-dark',
    cardClass: 'card-feature-teal',
    tier: 'Tier 4 — Developer & Text Utilities',
    tools: [
      { name: 'Password Generator', path: 'password-generator', desc: 'Generate strong, secure, and customizable passwords with configurable complexity.' },
      { name: 'UUID / GUID Generator', path: 'uuid-guid-generator', desc: 'Generate unique cryptographic UUID v4 tokens or GUID codes locally in bulk.' },
      { name: 'Diff Checker', path: 'diff-checker', desc: 'Highlight text insertions, deletions, and differences between two text strings side-by-side.' },
      { name: 'Case Converter', path: 'case-converter', desc: 'Transform text blocks to UPPERCASE, lowercase, Title Case, camelCase, or sentence formats.' },
      { name: 'Word / Character Counter', path: 'word-character-counter', desc: 'Count words, characters, sentences, paragraphs, and reading times for any input text.' },
      { name: 'Readability Score Checker', path: 'readability-score', desc: 'Analyze text reading levels using standard Flesch-Kincaid and Gunning Fog score engines.' },
      { name: 'Code Formatter', path: 'code-formatter', desc: 'Beautify, format, and structure code inputs for JSON, HTML, CSS, or Javascript syntax.' },
      { name: 'Name Generator', path: 'name-generator', desc: 'Generate fictional character names, business brands, or user profile names randomly.' },
      { name: 'Randomizer Wheel', path: 'randomizer-wheel', desc: 'Input choice sets, spin the interactive decision wheel, and select random choices.' }
    ]
  },
  audio: {
    icon: '🎵',
    colorName: 'coral',
    badgeClass: 'badge-tag-coral bg-coral-light text-coral-dark',
    cardClass: 'card-feature-coral',
    tier: 'Tier 5 — Audio Utilities',
    tools: [
      { name: 'White Noise Generator', path: 'white-noise', desc: 'Generate customizable continuous white noise frequencies for study focus or sleep.' },
      { name: 'Brown Noise Generator', path: 'brown-noise', desc: 'Play deeper, lower-frequency brown noise tracks for relaxation and sound masking.' },
      { name: 'Tuning Fork', path: 'tuning-fork', desc: 'Emit stable audio tuning pitches at standard standard frequencies like A440.' },
      { name: 'Headphone Test Suite', path: 'headphone-test', desc: 'Test headphone stereo balance, bass response ranges, and dynamic sound levels.' },
      { name: 'Microphone Frequency Response', path: 'microphone-frequency', desc: 'Visualize real-time microphone audio frequency feedback peaks via Web Audio APIs.' },
      { name: 'Speaker Phase Tool', path: 'speaker-phase', desc: 'Play matched in-phase and out-of-phase frequency sounds to check speaker polarity.' }
    ]
  },
  mobile: {
    icon: '📱',
    colorName: 'rose',
    badgeClass: 'badge-tag-purple bg-rose-light text-primary',
    cardClass: 'card-feature-rose',
    tier: 'Tier 6 — Mobile Sensor Tools',
    tools: [
      { name: 'Spirit Level / Bubble Level', path: 'spirit-level', desc: 'Turn mobile devices into digital spirit levels using device orientation angles.' },
      { name: 'Compass Rose', path: 'compass-rose', desc: 'Display heading orientations and compass rose markers using magnetic sensors.' },
      { name: 'Accelerometer Viewer', path: 'accelerometer-viewer', desc: 'Track real-time acceleration shifts, gravitational forces, and movements.' },
      { name: 'Light Meter', path: 'light-meter', desc: 'Audit ambient light values in Lux using client-side camera sensory feeds.' },
      { name: 'Orientation Lock Check', path: 'orientation-lock', desc: 'Verify screen rotation responses, lock alignments, and display geometry.' }
    ]
  },
  display: {
    icon: '🖥️',
    colorName: 'yellow',
    badgeClass: 'badge-tag-yellow bg-yellow-light text-yellow-dark',
    cardClass: 'card-feature-yellow',
    tier: 'Tier 7 — Display & Input Diagnostics',
    tools: [
      { name: 'Refresh Rate Test', path: 'refresh-rate', desc: 'Measure browser monitor display refresh rates and detect visual frame pacing drops.' },
      { name: 'Aspect Ratio Checker', path: 'aspect-ratio', desc: 'Calculate screen aspect ratios, viewport pixel geometries, and scaling grids.' },
      { name: 'Scroll Wheel Test', path: 'scroll-wheel', desc: 'Verify scroll wheel ticks, direction velocities, and scroll track sensitivity.' },
      { name: 'Polling Rate Test', path: 'polling-rate', desc: 'Track mouse report polling frequencies and verify data coordinate throughput rates.' },
      { name: 'Double Click Test', path: 'double-click', desc: 'Audit and detect mechanical mouse switch double-click issues on primary inputs.' },
      { name: 'Key Repeat Test', path: 'key-repeat', desc: 'Test keyboard repeat rates, input bounce delays, and keystroke logs.' },
      { name: 'Caps Lock Test', path: 'caps-lock', desc: 'Check Caps Lock activation states, keystroke indicators, and warnings.' },
      { name: 'Keyboard Latency Test', path: 'keyboard-latency', desc: 'Test keyboard press latencies and measure input-to-screen response times.' }
    ]
  },
  general: {
    icon: '🌍',
    colorName: 'teal',
    badgeClass: 'badge-tag-yellow bg-teal-light text-moss-dark',
    cardClass: 'card-feature-teal',
    tier: 'Tier 8 — General Everyday Utilities',
    tools: [
      { name: 'Time Zone Converter', path: 'time-zone-converter', desc: 'Convert and compare calendar dates and times across global time zones.' },
      { name: 'Currency Converter', path: 'currency-converter', desc: 'Convert standard currencies using localized static conversion rates.' },
      { name: 'Speedometer', path: 'speedometer', desc: 'Calculate real-time geographic velocities using browser GPS location updates.' },
      { name: 'Screen Dead Pixel Checker', path: 'screen-dead-pixel', desc: 'Scan and identify dead pixels on your monitor screen using solid backgrounds.' },
      { name: 'Color Picker', path: 'color-picker', desc: 'Extract HSL, hex, and RGB values from canvas coordinates or input ranges.' }
    ]
  }
};

const pagesDir = path.join(__dirname, '..', 'src', 'pages', 'tools');

// Function to generate the skeleton astro code content
function getSkeletonContent(name, category, tier, description, icon, badgeClass, cardClass) {
  let themeColorText = 'text-primary';
  if (cardClass === 'card-feature-yellow') themeColorText = 'text-yellow-dark';
  else if (cardClass === 'card-feature-teal') themeColorText = 'text-moss-dark';
  else if (cardClass === 'card-feature-coral') themeColorText = 'text-coral-dark';
  else if (cardClass === 'card-feature-rose') themeColorText = 'text-primary';

  return `---
import Layout from '../../../layouts/Layout.astro';

// Tool metadata
const name = "${name}";
const category = "${category}";
const tier = "${tier}";
const description = "${description}";
---

<Layout 
  title={\`\${name} - TOOLKIFY\`}
  description={description}
  toolName={name}
  toolCategory={category}
>
  <section class="max-w-[1280px] w-full mx-auto px-4 md:px-8 py-12 flex flex-col gap-8 animate-fade-in-up">
    <!-- Breadcrumb & Header -->
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2 text-xs font-semibold text-slate uppercase">
        <a href="/" class="hover:text-primary">Home</a>
        <span>/</span>
        <a href="/" class="hover:text-primary">Tools</a>
        <span>/</span>
        <span class="text-brand-blue capitalize">{category}</span>
      </div>
      <div class="flex flex-wrap items-center gap-3 mt-1">
        <h1 class="font-display font-medium text-4xl sm:text-5xl tracking-tight text-primary">
          {name}
        </h1>
        <span class="badge-tag-purple bg-surface-pricing-featured text-brand-blue text-xs py-1 px-3 self-center rounded-full font-semibold uppercase">{tier}</span>
      </div>
      <p class="text-base text-slate max-w-xl">
        {description}
      </p>
    </div>

    <!-- Main Workspace Area -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <!-- Left: Interactive Form / Control Panel -->
      <div class="lg:col-span-8 card-base flex flex-col gap-6">
        <h2 class="font-display font-semibold text-xl text-primary flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
          Calculator Workspace
        </h2>

        <!-- Placeholder UI Container -->
        <div class="p-8 border border-dashed border-hairline-strong rounded-xl bg-surface/50 text-center flex flex-col items-center justify-center gap-4 min-h-[300px]">
          <div class="text-4xl">${icon}</div>
          <div class="flex flex-col gap-2">
            <h3 class="font-display font-medium text-lg text-primary">{name} Shell</h3>
            <p class="text-xs text-slate max-w-sm leading-relaxed">
              This interactive tool is structured and ready for client-side development. Inputs, calculations, and local persistence structures can be developed here.
            </p>
          </div>
          <button class="button-primary text-xs py-2 px-5 !rounded-full opacity-60 cursor-not-allowed" disabled>
            Interactive Workspace Under Development
          </button>
        </div>
      </div>

      <!-- Right: Documentation / Details Sidebar -->
      <div class="lg:col-span-4 flex flex-col gap-6">
        <!-- How it works -->
        <div class="card-base bg-surface-soft flex flex-col gap-4">
          <h3 class="font-display font-semibold text-base text-primary">How to Use</h3>
          <p class="text-xs text-slate leading-relaxed">
            Enter the details required in the inputs panel on the left. The calculator processes formula valuations in your local browser sandbox and renders outputs in real-time.
          </p>
          <div class="h-[1px] bg-hairline my-1"></div>
          <h4 class="text-xs font-bold text-slate uppercase tracking-wider">Features</h4>
          <ul class="list-disc pl-4 text-xs text-slate flex flex-col gap-1.5">
            <li>100% Client-Side calculation</li>
            <li>No data sent to external servers</li>
            <li>Local state persistence in browser</li>
          </ul>
        </div>

        <!-- Privacy Guard (Pastel Accent) -->
        <div class="card-feature-${category === 'finance' ? 'yellow' : category === 'audio' ? 'coral' : category === 'engagement' || category === 'mobile' ? 'rose' : 'teal'} flex flex-col gap-3">
          <span class="${badgeClass} self-start">SECURITY GUARANTEE</span>
          <h3 class="font-display font-semibold text-base text-primary">Private Execution</h3>
          <p class="text-xs ${themeColorText} leading-relaxed">
            All variables, calculations, and output values remain inside your browser sandbox. None of your inputs or diagnostics data is ever transmitted or logged.
          </p>
        </div>
      </div>
    </div>
  </section>
</Layout>
`;
}

// Generate the directories and files
Object.keys(toolCategories).forEach((category) => {
  const catData = toolCategories[category];
  const catDir = path.join(pagesDir, category);

  // Ensure directory exists
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
    console.log(`Created directory: ${catDir}`);
  }

  // Create files
  catData.tools.forEach((tool) => {
    const filePath = path.join(catDir, `${tool.path}.astro`);
    const fileContent = getSkeletonContent(
      tool.name,
      category,
      catData.tier,
      tool.desc,
      catData.icon,
      catData.badgeClass,
      catData.cardClass
    );

    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`Generated skeleton: ${filePath}`);
  });
});

console.log('Skeleton generation completed successfully!');
