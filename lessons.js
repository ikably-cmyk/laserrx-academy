/* =====================================================================
   LaserRx Academy — Lesson Manifest
   ---------------------------------------------------------------------
   ONE lesson.html renders every lesson by reading ?lesson=<id> and
   pulling its entry from here. To add/edit a lesson you edit DATA only,
   never the template.

   Each lesson:
     id           unique key (must match the ?lesson= value and artifact)
     track        'foundations' | 'clinical' | 'library'
     trackLabel   human label shown in the header
     index        position within its track (1-based)
     trackTotal   how many lessons that track will hold
     tier         minimum plan to unlock: 'free' | 'pro' | 'elite'
     title        lesson title
     subtitle     one-line teaser
     artifact     path to the interactive HTML (untouched), or null
     interaction  { selector, event } — the element inside the artifact
                  whose use unlocks "Mark complete". Optional.
     video        embed URL (YouTube/MP4) or null → placeholder shown
     cards        [{ title, body, svg }]  teaching cards (graphic)
     prev / next  lesson ids for navigation, or null
   ===================================================================== */

window.LESSONS = {

  /* ===================================================================
     1 · THE ROPE  —  PILOT (free hook lesson, fully built)
     =================================================================== */
  the_rope: {
    id: 'the_rope',
    track: 'foundations',
    trackLabel: 'Foundations',
    index: 1,
    trackTotal: 6,
    tier: 'free',
    title: 'The Rope',
    subtitle: 'Pulse width &amp; peak power — same energy, different bend',
    artifact: 'artifacts/the_rope.html',
    interaction: { selector: '#pwSlider', event: 'input' },
    video: 'https://www.youtube-nocookie.com/embed/QgcJWTt-_4w?rel=0&modestbranding=1',
    prev: null,
    next: 'hertz_bouncing_ball',
    cards: [

      /* ---- CARD 1 — What is pulse width ---- */
      {
        title: 'What is pulse width?',
        body: 'Pulse width is how long a single pulse lasts, measured in microseconds (µs). It is not <em>how much</em> energy you deliver — it is <em>how quickly</em> you deliver it.',
        svg: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A single pulse on a time axis with its width marked">
          <line x1="20" y1="115" x2="300" y2="115" stroke="var(--steel)" stroke-width="1.5"/>
          <text x="300" y="134" text-anchor="end" class="svg-cap">time →</text>
          <path d="M20 115 L120 115 Q160 18 200 115 L300 115" fill="none" stroke="var(--amber)" stroke-width="4" stroke-linecap="round"/>
          <path d="M120 115 Q160 18 200 115" fill="rgba(224,164,88,0.16)" stroke="none"/>
          <line x1="120" y1="128" x2="200" y2="128" stroke="var(--hot)" stroke-width="1.5"/>
          <path d="M120 124 L120 132 M200 124 L200 132" stroke="var(--hot)" stroke-width="1.5"/>
          <text x="160" y="146" text-anchor="middle" class="svg-lbl" fill="var(--hot)">width = duration (µs)</text>
        </svg>`
      },

      /* ---- CARD 2 — The rope is one pulse ---- */
      {
        title: 'The rope is one pulse',
        body: 'Picture a pulse as a rope draped over a line. The area under the rope is the energy of the pulse. Here that energy is fixed at 200 mJ — the rope always holds the same amount. Only its shape changes.',
        svg: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rope arc over a baseline with the area beneath it shaded as energy">
          <line x1="20" y1="115" x2="300" y2="115" stroke="var(--steel)" stroke-width="1.5" stroke-dasharray="3 5"/>
          <path d="M90 115 Q160 25 230 115 Z" fill="rgba(224,164,88,0.18)" stroke="none"/>
          <path d="M20 115 L90 115 Q160 25 230 115 L300 115" fill="none" stroke="url(#ropeGrad2)" stroke-width="5" stroke-linecap="round"/>
          <defs><linearGradient id="ropeGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FFD86B"/><stop offset="100%" stop-color="#8C5C2E"/>
          </linearGradient></defs>
          <text x="160" y="88" text-anchor="middle" class="svg-lbl" fill="var(--navy)">area = energy</text>
          <text x="160" y="104" text-anchor="middle" class="svg-cap" fill="var(--steel)">200 mJ (constant)</text>
        </svg>`
      },

      /* ---- CARD 3 — Same energy, different shape ---- */
      {
        title: 'Same energy, different shape',
        body: 'Compress the rope into a short pulse and, to keep the same area, it must shoot upward — tall and narrow. Stretch it into a long pulse and it flattens into a low, wide hump. Same energy, two very different shapes.',
        svg: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two ropes with equal shaded area, one tall and narrow, one low and wide">
          <line x1="14" y1="120" x2="150" y2="120" stroke="var(--steel)" stroke-width="1.5" stroke-dasharray="3 5"/>
          <path d="M68 120 Q82 22 96 120 Z" fill="rgba(224,122,95,0.20)"/>
          <path d="M14 120 L68 120 Q82 22 96 120 L150 120" fill="none" stroke="var(--hot)" stroke-width="4.5" stroke-linecap="round"/>
          <text x="82" y="140" text-anchor="middle" class="svg-cap" fill="var(--hot)">short → tall peak</text>
          <line x1="170" y1="120" x2="306" y2="120" stroke="var(--steel)" stroke-width="1.5" stroke-dasharray="3 5"/>
          <path d="M196 120 Q238 78 280 120 Z" fill="rgba(119,141,169,0.22)"/>
          <path d="M170 120 L196 120 Q238 78 280 120 L306 120" fill="none" stroke="var(--yale)" stroke-width="4.5" stroke-linecap="round"/>
          <text x="238" y="140" text-anchor="middle" class="svg-cap" fill="var(--yale)">long → low peak</text>
          <text x="160" y="152" text-anchor="middle" class="svg-lbl" fill="var(--navy)">same shaded area = same energy</text>
        </svg>`
      },

      /* ---- CARD 4 — That peak is peak power ---- */
      {
        title: 'That peak is peak power',
        body: 'The height of the rope at its apex is the peak power. Peak power = energy ÷ pulse width. Shorten the pulse and the peak climbs; stretch it and the peak falls.',
        svg: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rope with its apex highlighted as peak power, with the dividing formula">
          <line x1="20" y1="120" x2="300" y2="120" stroke="var(--steel)" stroke-width="1.5" stroke-dasharray="3 5"/>
          <path d="M20 120 L110 120 Q160 26 210 120 L300 120" fill="none" stroke="url(#ropeGrad4)" stroke-width="5" stroke-linecap="round"/>
          <defs><linearGradient id="ropeGrad4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FFD86B"/><stop offset="100%" stop-color="#8C5C2E"/>
          </linearGradient></defs>
          <line x1="160" y1="33" x2="160" y2="120" stroke="var(--hot)" stroke-width="1.2" stroke-dasharray="2 4"/>
          <circle cx="160" cy="33" r="6" fill="var(--hot)" stroke="#fff" stroke-width="2"/>
          <text x="160" y="22" text-anchor="middle" class="svg-lbl" fill="var(--hot)">PEAK</text>
          <text x="160" y="142" text-anchor="middle" class="svg-formula" fill="var(--navy)">peak power = 200 mJ ÷ pulse width</text>
        </svg>`
      },

      /* ---- CARD 5 — Where real devices sit (the ladder) ---- */
      {
        title: 'Where real devices sit',
        body: 'Different pulse modes are just points on this same axis. Holding energy constant, watch peak power rise as the pulse gets shorter. The two values you just explored — <strong>60 µs</strong> and <strong>700 µs</strong> — bracket most of this range.',
        svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of peak power at a constant energy across pulse widths from 1000 to 50 microseconds, with 60 and 700 highlighted">
          <line x1="16" y1="170" x2="312" y2="170" stroke="var(--steel)" stroke-width="1.5"/>
          <!-- bars: longest→shortest pulse, peak power rises L→R. height = 20 + 130*sqrt(peak/4000) -->
          <!-- 1000µs · 200W -->
          <rect x="26" y="121" width="24" height="49" rx="3" fill="var(--steel)"/>
          <text x="38" y="113" text-anchor="middle" class="svg-w">200</text>
          <text x="38" y="186" text-anchor="middle" class="svg-us">1000</text>
          <!-- 700µs · 286W  (HIGHLIGHT) -->
          <rect x="66" y="115" width="24" height="55" rx="3" fill="var(--amber)"/>
          <text x="78" y="107" text-anchor="middle" class="svg-w" fill="var(--navy)">286</text>
          <text x="78" y="186" text-anchor="middle" class="svg-us" fill="var(--navy)" font-weight="700">700</text>
          <!-- 600µs · 333W -->
          <rect x="106" y="112" width="24" height="58" rx="3" fill="var(--steel)"/>
          <text x="118" y="104" text-anchor="middle" class="svg-w">333</text>
          <text x="118" y="186" text-anchor="middle" class="svg-us">600</text>
          <!-- 300µs · 667W -->
          <rect x="146" y="97" width="24" height="73" rx="3" fill="var(--steel)"/>
          <text x="158" y="89" text-anchor="middle" class="svg-w">667</text>
          <text x="158" y="186" text-anchor="middle" class="svg-us">300</text>
          <!-- 100µs · 2000W -->
          <rect x="186" y="58" width="24" height="112" rx="3" fill="var(--steel)"/>
          <text x="198" y="50" text-anchor="middle" class="svg-w">2000</text>
          <text x="198" y="186" text-anchor="middle" class="svg-us">100</text>
          <!-- 60µs · 3333W  (HIGHLIGHT) -->
          <rect x="226" y="31" width="24" height="139" rx="3" fill="var(--amber)"/>
          <text x="238" y="23" text-anchor="middle" class="svg-w" fill="var(--navy)">3333</text>
          <text x="238" y="186" text-anchor="middle" class="svg-us" fill="var(--navy)" font-weight="700">60</text>
          <!-- 50µs · 4000W -->
          <rect x="266" y="20" width="24" height="150" rx="3" fill="var(--hot)"/>
          <text x="278" y="14" text-anchor="middle" class="svg-w" fill="var(--hot)">4000</text>
          <text x="278" y="186" text-anchor="middle" class="svg-us">50</text>
          <text x="164" y="199" text-anchor="middle" class="svg-cap" fill="var(--steel)">pulse width (µs) · peak power in W at constant energy</text>
        </svg>`
      },

      /* ---- CARD 6 — Why it matters (clinical, neutral) ---- */
      {
        title: 'Why it matters',
        body: 'A long, low pulse leans toward gentle thermal heating. A short, towering peak drives photomechanical effects — shock waves and cavitation — moving fluid rather than simply warming tissue. Which you want depends on the clinical goal, the case, and the operator\u2019s judgment.',
        svg: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two panels: diffuse thermal heating on the left, sharp photomechanical shock and cavitation on the right">
          <!-- left: thermal -->
          <rect x="14" y="16" width="135" height="118" rx="10" fill="rgba(119,141,169,0.10)" stroke="var(--hair-d)"/>
          <path d="M30 110 Q81 78 132 110" fill="none" stroke="var(--yale)" stroke-width="4" stroke-linecap="round"/>
          <g stroke="var(--steel)" stroke-width="1.4" fill="none" opacity="0.7">
            <path d="M55 64 q6 -8 12 0 q6 8 12 0"/>
            <path d="M55 50 q6 -8 12 0 q6 8 12 0"/>
            <path d="M83 64 q6 -8 12 0 q6 8 12 0"/>
          </g>
          <text x="81" y="128" text-anchor="middle" class="svg-lbl" fill="var(--yale)">thermal · warming</text>
          <!-- right: photomechanical -->
          <rect x="171" y="16" width="135" height="118" rx="10" fill="rgba(224,122,95,0.10)" stroke="var(--hair-d)"/>
          <line x1="186" y1="110" x2="291" y2="110" stroke="var(--steel)" stroke-width="1.2" stroke-dasharray="3 5"/>
          <path d="M186 110 L232 110 Q238 34 244 110 L291 110" fill="none" stroke="var(--hot)" stroke-width="4" stroke-linecap="round"/>
          <g stroke="var(--hot)" fill="none" opacity="0.55">
            <circle cx="238" cy="70" r="16" stroke-width="1.6"/>
            <circle cx="238" cy="70" r="26" stroke-width="1.2"/>
            <circle cx="238" cy="70" r="36" stroke-width="0.9"/>
          </g>
          <text x="238" y="128" text-anchor="middle" class="svg-lbl" fill="var(--hot)">photomechanical · cavitation</text>
        </svg>`
      }

    ]
  },

  /* ===================================================================
     FOUNDATIONS — remaining stubs (cards/artifact filled in later phases)
     =================================================================== */
  hertz_bouncing_ball: {
    id: 'hertz_bouncing_ball', track: 'foundations', trackLabel: 'Foundations',
    index: 2, trackTotal: 6, tier: 'pro',
    title: 'Hertz', subtitle: 'Frequency, made visible',
    artifact: 'artifacts/hertz_bouncing_ball.html',
    interaction: null, video: null,
    prev: 'the_rope', next: 'laser_energy_live_demo', cards: []
  },
  laser_energy_live_demo: {
    id: 'laser_energy_live_demo', track: 'foundations', trackLabel: 'Foundations',
    index: 3, trackTotal: 6, tier: 'pro',
    title: 'Laser Energy — Live', subtitle: 'Fluence, peak power, average power in real time',
    artifact: 'artifacts/laser_energy_live_demo.html',
    interaction: null, video: null,
    prev: 'hertz_bouncing_ball', next: 'slower_is_faster', cards: []
  },
  slower_is_faster: {
    id: 'slower_is_faster', track: 'foundations', trackLabel: 'Foundations',
    index: 4, trackTotal: 6, tier: 'pro',
    title: 'Slower Is Faster', subtitle: 'Sweep speed vs energy deposited',
    artifact: 'artifacts/slower_is_faster.html',
    interaction: null, video: null,
    prev: 'laser_energy_live_demo', next: 'peak_power_live', cards: []
  },
  peak_power_live: {
    id: 'peak_power_live', track: 'foundations', trackLabel: 'Foundations',
    index: 5, trackTotal: 6, tier: 'pro',
    title: 'Peak Power — Live', subtitle: 'Four bidirectional sliders',
    artifact: 'artifacts/peak_power_live.html',
    interaction: null, video: null,
    prev: 'slower_is_faster', next: 'laser_performance_panel', cards: []
  },
  laser_performance_panel: {
    id: 'laser_performance_panel', track: 'foundations', trackLabel: 'Foundations',
    index: 6, trackTotal: 6, tier: 'pro',
    title: 'Performance Panel', subtitle: 'The integrated dashboard',
    artifact: 'artifacts/laser_performance_panel.html',
    interaction: null, video: null,
    prev: 'peak_power_live', next: null, cards: []
  },

  /* ===================================================================
     CLINICAL TRACKS — stubs
     =================================================================== */
  fiber_emission_comparator: {
    id: 'fiber_emission_comparator', track: 'clinical', trackLabel: 'Clinical Tracks',
    index: 1, trackTotal: 3, tier: 'pro',
    title: 'Fiber Emission Comparator', subtitle: 'RFT / RFPT / MZ with auto-sweep',
    artifact: 'artifacts/fiber_emission_comparator.html',
    interaction: null, video: null,
    prev: null, next: 'ion_exchange_live_demo', cards: []
  },
  ion_exchange_live_demo: {
    id: 'ion_exchange_live_demo', track: 'clinical', trackLabel: 'Clinical Tracks',
    index: 2, trackTotal: 3, tier: 'pro',
    title: 'Ion Exchange — Live', subtitle: 'Membrane ion exchange (electric / chemical / light + CCO)',
    artifact: 'artifacts/ion_exchange_live_demo.html',
    interaction: null, video: null,
    prev: 'fiber_emission_comparator', next: 'bubble_dynamics_live_demo', cards: []
  },
  bubble_dynamics_live_demo: {
    id: 'bubble_dynamics_live_demo', track: 'clinical', trackLabel: 'Clinical Tracks',
    index: 3, trackTotal: 3, tier: 'pro',
    title: 'Bubble Dynamics — Live', subtitle: 'Ultrasound vs laser, fluid velocity, draggable fiber',
    artifact: 'artifacts/bubble_dynamics_live_demo.html',
    interaction: null, video: null,
    prev: 'ion_exchange_live_demo', next: null, cards: []
  },

  /* ===================================================================
     LIBRARY — stub (downloadable deck)
     =================================================================== */
  laser_energy_dynamics: {
    id: 'laser_energy_dynamics', track: 'library', trackLabel: 'Library',
    index: 1, trackTotal: 1, tier: 'elite',
    title: 'Laser Energy Dynamics', subtitle: 'Downloadable deck',
    artifact: null, download: 'library/Laser_Energy_Dynamics.pptx',
    interaction: null, video: null,
    prev: null, next: null, cards: []
  }

};
