import React, { useState } from 'react';
import { 
  Flame, Heart, Sparkles, Brain, Zap, Shield, 
  Clock, ChevronRight, AlertCircle, Timer,
  ChevronDown, ChevronUp, Info, Lightbulb, X,
  Sunrise, Moon, Coffee, Activity
} from 'lucide-react';
import './App.css';

const MorningRoutineFlowChart = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [timeConstraint, setTimeConstraint] = useState('standard');
  const [expandedItems, setExpandedItems] = useState({});
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const categories = [
    {
      id: 'fatLoss',
      name: 'Fat Loss',
      icon: <Flame className="w-8 h-8" />,
      emoji: '🔥',
      color: 'orange',
      gradient: 'from-orange-400 to-red-500',
      description: 'Maximum metabolic activation & fat burning',
      keyPoints: ['Fasted cardio', 'Cold exposure', 'High protein', 'Zone 2 focus']
    },
    {
      id: 'longevity',
      name: 'Longevity',
      icon: <Heart className="w-8 h-8" />,
      emoji: '❤️',
      color: 'purple',
      gradient: 'from-purple-400 to-pink-500',
      description: 'Cellular health & anti-aging optimization',
      keyPoints: ['Autophagy', 'Mitochondrial health', 'Stress reduction', 'Supplements']
    },
    {
      id: 'detox',
      name: 'Detoxification',
      icon: <Sparkles className="w-8 h-8" />,
      emoji: '✨',
      color: 'green',
      gradient: 'from-green-400 to-teal-500',
      description: 'Deep cleansing & gut health reset',
      keyPoints: ['Clay protocol', 'Lymphatic drainage', 'Liver support', 'Hydration']
    },
    {
      id: 'mentalPerformance',
      name: 'Mental Performance',
      icon: <Brain className="w-8 h-8" />,
      emoji: '🧠',
      color: 'blue',
      gradient: 'from-blue-400 to-indigo-500',
      description: 'Cognitive enhancement & focus',
      keyPoints: ['Nootropics', 'Breathwork', 'Cold therapy', 'Journaling']
    },
    {
      id: 'energy',
      name: 'Energy & Vitality',
      icon: <Zap className="w-8 h-8" />,
      emoji: '⚡',
      color: 'yellow',
      gradient: 'from-yellow-400 to-orange-500',
      description: 'All-day energy without crashes',
      keyPoints: ['Wim Hof', 'Light exposure', 'Balanced nutrition', 'Movement']
    },
    {
      id: 'immune',
      name: 'Immune Fortress',
      icon: <Shield className="w-8 h-8" />,
      emoji: '🛡️',
      color: 'teal',
      gradient: 'from-teal-400 to-cyan-500',
      description: 'Build resilient immune system',
      keyPoints: ['Cold exposure', 'Mushrooms', 'Vitamin D', 'Gut health']
    }
  ];

  // [Previous detailedSteps object remains the same - keeping all the detailed content]
  const detailedSteps = {
    'Hydrate': {
      steps: [
        'Drink room temperature or warm water',
        'Add 1/4 tsp pink Himalayan salt',
        'Optional: squeeze half a lemon',
        'Drink within 5 minutes of waking'
      ],
      alternatives: [
        'Use Celtic sea salt instead of pink salt',
        'Add trace minerals drops',
        'Try sole water (saturated salt solution)'
      ],
      tips: [
        'Prepare water bottle night before',
        'Room temp absorbs faster than cold',
        'Salt helps with adrenal function'
      ]
    },
    'Hydrate + Minerals': {
      steps: [
        'Fill 32oz glass with filtered water',
        'Add 1/4 tsp pink salt + trace minerals',
        'Optional: Add 1 tsp apple cider vinegar',
        'Drink half immediately, sip rest over 10 min'
      ],
      alternatives: [
        'Shilajit water (mineral pitch)',
        'Fulvic acid drops',
        'Concentrace mineral drops'
      ],
      tips: [
        'Minerals improve cellular hydration',
        'ACV helps with blood sugar control',
        'Can add chlorophyll for extra detox'
      ]
    },
    'Lemon Water': {
      steps: [
        'Heat 16oz water to warm (not boiling)',
        'Squeeze juice from 1/2 fresh lemon',
        'Add pinch of cayenne pepper',
        'Optional: Add 1 tsp raw honey',
        'Sip slowly over 5 minutes'
      ],
      alternatives: [
        'Lime instead of lemon',
        'Add fresh ginger slices',
        'Green tea with lemon'
      ],
      tips: [
        'Stimulates digestive enzymes',
        'Cayenne boosts metabolism',
        'Use organic lemons to avoid pesticides'
      ]
    },
    'Wim Hof Breathing': {
      steps: [
        '30-40 deep breaths (in through nose, out through mouth)',
        'On last exhale, hold with empty lungs',
        'Hold as long as comfortable (aim for 1-2 min)',
        'Inhale deeply, hold 15 seconds',
        'Repeat 3-4 rounds'
      ],
      alternatives: [
        'Box breathing (4-4-4-4)',
        'Bellows breath for quick energy',
        'Cyclic sighing (double inhale, long exhale)'
      ],
      tips: [
        'Do on empty stomach',
        'Lie down or sit (never standing)',
        'Tingling is normal',
        'Build up hold times gradually'
      ]
    },
    '3-6-9 Breathing': {
      steps: [
        'Sit comfortably with straight spine',
        'Inhale through nose for 3 seconds',
        'Hold breath for 6 seconds',
        'Exhale through mouth for 9 seconds',
        'Repeat for 5-10 cycles'
      ],
      alternatives: [
        '4-7-8 breathing (Dr. Weil method)',
        'Coherent breathing (5-5)',
        'Vagal breathing (4-8)'
      ],
      tips: [
        'Longer exhale activates parasympathetic',
        'Count with heartbeats for consistency',
        'Can do lying down before sleep'
      ]
    },
    'Lymphatic Breathing': {
      steps: [
        'Lie on back, knees bent',
        'Place hands on lower ribs',
        'Inhale deeply into belly for 4 counts',
        'Hold and pump belly 6 times',
        'Exhale completely for 6 counts'
      ],
      alternatives: [
        'Diaphragmatic breathing standing',
        'Breath of fire (rapid belly pumps)',
        'Kapalabhati breathing'
      ],
      tips: [
        'Moves 15x more lymph than normal breathing',
        'Best done before movement',
        'Can cause lightheadedness initially'
      ]
    },
    'Cold Shower': {
      steps: [
        'Start with normal warm shower',
        'Turn to coldest setting',
        'Focus on neck, chest, and back',
        'Breathe slowly through nose',
        'Stay for 2-3 minutes'
      ],
      alternatives: [
        'Face dunking in ice water',
        'Cold plunge tub',
        'Cryotherapy chamber',
        'Ice vest while working'
      ],
      tips: [
        'End on cold for best benefits',
        'Humming helps with cold tolerance',
        'Move around to distribute cold',
        'Never force beyond comfort'
      ]
    },
    'Ice Bath': {
      steps: [
        'Fill tub with cold water',
        'Add 40-80 lbs of ice',
        'Water temp should be 50-59°F',
        'Enter slowly, control breathing',
        'Stay for 3-10 minutes max'
      ],
      alternatives: [
        'Chest freezer conversion',
        'Natural cold water swimming',
        'Cold shower progression'
      ],
      tips: [
        'Keep hands and feet out initially',
        'Focus on slow exhales',
        'Have timer visible',
        'Warm up naturally after (no hot shower)'
      ]
    },
    'Cold Rinse': {
      steps: [
        'After regular shower, turn to cold',
        'Start with legs and arms',
        'Progress to torso',
        'Finish with head and face',
        'Total time: 30-60 seconds'
      ],
      alternatives: [
        'Cold water face plunge',
        'Ice pack on neck/wrists',
        'Cold wet towel wrap'
      ],
      tips: [
        'Even 30 seconds has benefits',
        'Breathe out on initial shock',
        'Gets easier after 1 week'
      ]
    },
    'Clay Protocol': {
      steps: [
        'Mix 1 tsp bentonite clay in 8oz water',
        'Use wooden or plastic spoon (no metal)',
        'Stir well and let sit 2 minutes',
        'Drink on empty stomach',
        'Wait 20-30 min before psyllium'
      ],
      alternatives: [
        'Activated charcoal (1-2 capsules)',
        'Zeolite clay',
        'Chlorella tablets',
        'Modified citrus pectin'
      ],
      tips: [
        'Start with 1/2 tsp if new',
        'Drink extra water throughout day',
        'May cause constipation initially',
        'Take 2 hours away from medications'
      ]
    },
    'Full Detox Protocol': {
      steps: [
        'Bentonite clay in water first',
        'Wait 30 minutes',
        'Activated charcoal (2 capsules)',
        'Wait 20 minutes',
        'Psyllium husk in water',
        'Follow with 16oz pure water'
      ],
      alternatives: [
        'Diatomaceous earth protocol',
        'Chlorella + spirulina combo',
        'Master cleanse variation'
      ],
      tips: [
        'Do for maximum 14 days',
        'May experience detox symptoms',
        'Increase water to 1 gallon daily',
        'Add liver support supplements'
      ]
    },
    'Oil Pulling': {
      steps: [
        'Take 1 tbsp coconut oil (solid is fine)',
        'Swish in mouth as it melts',
        'Pull through teeth repeatedly',
        'Continue for 10-20 minutes',
        'Spit in trash (not sink)',
        'Rinse with warm salt water'
      ],
      alternatives: [
        'Sesame oil (traditional)',
        'Sunflower oil',
        'MCT oil for shorter time'
      ],
      tips: [
        'Start with 5 minutes, build up',
        'Do while showering to save time',
        'Never swallow the oil',
        'Whitens teeth as bonus'
      ]
    },
    'Fasted Zone 2': {
      steps: [
        'Check heart rate (should be under 135 bpm)',
        'Incline treadmill: 3-4 mph, 5-10% grade',
        'Maintain nasal breathing only',
        'Can hold conversation',
        'Continue for 30-45 minutes'
      ],
      alternatives: [
        'Brisk outdoor walk',
        'Stationary bike',
        'Rowing machine',
        'Swimming laps'
      ],
      tips: [
        'Take 10g EAAs if going over 45 min',
        'Listen to podcasts or audiobooks',
        'Track with heart rate monitor',
        'Build duration gradually'
      ]
    },
    'HIIT Circuit': {
      steps: [
        'Warm up with jumping jacks (1 min)',
        '30 sec burpees, 30 sec rest',
        '30 sec mountain climbers, 30 sec rest',
        '30 sec squat jumps, 30 sec rest',
        'Repeat circuit 3-4 times',
        'Cool down walk (2 min)'
      ],
      alternatives: [
        'Tabata protocol (20 on, 10 off)',
        'Sprint intervals',
        'Kettlebell swings EMOM'
      ],
      tips: [
        'Focus on form over speed',
        'Can modify moves as needed',
        'Heart rate will spike - this is normal',
        'Not ideal if cortisol is high'
      ]
    },
    'Rebounding': {
      steps: [
        'Start with gentle bounce (2 min)',
        'Progress to higher bounces',
        'Add arm movements',
        'Try jogging in place on trampoline',
        'Finish with gentle bounce cool down'
      ],
      alternatives: [
        'Jump rope',
        'Jumping jacks',
        'Box step-ups'
      ],
      tips: [
        'Barefoot is best for foot strength',
        'Hold furniture if balance issues',
        'Even gentle bouncing moves lymph',
        'NASA studied this for astronauts'
      ]
    },
    'Protein Load': {
      steps: [
        'Aim for 30-40g complete protein',
        'Options: 6 eggs, protein shake, Greek yogurt',
        'Add healthy fats (avocado, nuts)',
        'No sugar or refined carbs',
        'Eat slowly and mindfully'
      ],
      alternatives: [
        'Bone broth protein',
        'Cottage cheese bowl',
        'Smoked salmon and eggs',
        'Protein pancakes (no syrup)'
      ],
      tips: [
        'Prep breakfast night before',
        'Leucine content matters most',
        'Whole foods > powders when possible',
        'Time it 30 min after waking'
      ]
    },
    'Protein Shake': {
      steps: [
        'Add 1-2 scoops protein powder to shaker',
        'Pour 8-12oz water or nut milk',
        'Optional: Add ice cubes',
        'Shake vigorously for 30 seconds',
        'Drink within 5 minutes'
      ],
      alternatives: [
        'Blend with banana for thickness',
        'Use collagen + whey combo',
        'Plant protein blend (pea + rice)'
      ],
      tips: [
        'Cold liquid reduces clumping',
        'Add liquid first, then powder',
        'Can prep dry ingredients night before',
        'Add MCT oil for satiety'
      ]
    },
    'Green Juice': {
      steps: [
        'Juice 1 cucumber, 4 celery stalks',
        'Add handful of spinach or kale',
        'Add 1/2 lemon, 1 inch ginger',
        'Optional: 1/2 green apple for taste',
        'Drink immediately for max nutrients'
      ],
      alternatives: [
        'Green smoothie (if no juicer)',
        'Chlorella/spirulina in water',
        'Wheatgrass shots'
      ],
      tips: [
        'Prep vegetables night before',
        'Drink on empty stomach',
        'Chase with water if too strong',
        'Rotate greens to avoid oxalates'
      ]
    },
    'Fat Burn Stack': {
      steps: [
        'Take L-carnitine (500-2000mg)',
        'Green tea extract (300mg EGCG)',
        'CLA (3-6g) with fats',
        'Optional: Yohimbine if fully fasted',
        'Take 30 min before cardio'
      ],
      alternatives: [
        'Black coffee + MCT oil',
        'Matcha tea',
        'Forskolin supplement'
      ],
      tips: [
        'Start with half doses',
        'Yohimbine only works fasted',
        'Can cause jitters if sensitive',
        'Cycle off every 4-6 weeks'
      ]
    },
    'Longevity Stack': {
      steps: [
        'NMN or NR (250-500mg)',
        'Resveratrol (500mg) with fat',
        'Quercetin (500mg)',
        'Glycine (3g)',
        'Optional: Metformin or berberine'
      ],
      alternatives: [
        'NAD+ IV therapy',
        'Fisetin instead of quercetin',
        'TMG instead of glycine'
      ],
      tips: [
        'Take NMN early (affects sleep)',
        'Resveratrol needs fat to absorb',
        'Can split doses AM/PM',
        'Get bloodwork to track'
      ]
    },
    'Sun + Movement': {
      steps: [
        'Step outside within 10 min of waking',
        'Face east toward sunrise',
        'Walk at comfortable pace',
        'Keep eyes soft, no sunglasses',
        'Minimum 10 minutes exposure'
      ],
      alternatives: [
        '10,000 lux light therapy',
        'Walking meditation',
        'Tai chi in sunlight'
      ],
      tips: [
        'Even cloudy days work',
        'Barefoot on grass = grounding bonus',
        'Sets circadian rhythm',
        'Suppresses melatonin naturally'
      ]
    },
    'Red Light Therapy': {
      steps: [
        'Position light 6-12 inches from skin',
        'Expose target area (bare skin best)',
        'Set timer for 10-20 minutes',
        'Can do other activities during',
        'Use daily or every other day'
      ],
      alternatives: [
        'Infrared sauna',
        'Sunrise/sunset gazing',
        'Near-infrared bulbs'
      ],
      tips: [
        'Morning use won\'t disrupt sleep',
        'Can use on face for collagen',
        'Helps with muscle recovery',
        'Eye protection usually not needed'
      ]
    },
    'Dry Brushing + Cold': {
      steps: [
        'Start at feet with firm bristle brush',
        'Brush upward toward heart',
        'Use circular motions on joints',
        'Brush each area 5-10 strokes',
        'Follow immediately with cold shower'
      ],
      alternatives: [
        'Gua sha tools',
        'Lymphatic massage',
        'Contrast hydrotherapy'
      ],
      tips: [
        'Always brush toward heart',
        'Skin should be pink, not red',
        'Clean brush weekly',
        'Best on dry skin before shower'
      ]
    },
    'Meditation': {
      steps: [
        'Sit comfortably, spine straight',
        'Close eyes or soft gaze down',
        'Focus on breath at nostrils',
        'When mind wanders, return to breath',
        'Start with 10 min, build to 20+'
      ],
      alternatives: [
        'Guided meditation apps',
        'Walking meditation',
        'Transcendental meditation',
        'Body scan practice'
      ],
      tips: [
        'Same time daily builds habit',
        'Use timer so not checking clock',
        'Thoughts are normal - just notice',
        'Consistency > duration'
      ]
    },
    'Journal + Plan': {
      steps: [
        'Write 3 things grateful for',
        'List top 3 priorities for day',
        'Write one paragraph of thoughts',
        'Review yesterday\'s wins',
        'Set one clear intention'
      ],
      alternatives: [
        'Voice recording journal',
        'Bullet journaling',
        'Digital apps like Day One'
      ],
      tips: [
        'Keep journal by bedside',
        'Don\'t overthink - just write',
        'Review weekly for patterns',
        'Include how you feel physically'
      ]
    },
    'Adaptogen Smoothie': {
      steps: [
        'Base: 1 cup nut milk + 1/2 banana',
        'Add 1 tsp maca powder',
        'Add 1/2 tsp ashwagandha',
        'Add 1 serving protein powder',
        'Blend with ice until smooth'
      ],
      alternatives: [
        'Golden milk with adaptogens',
        'Adaptogen coffee blend',
        'Herbal adaptogen tea'
      ],
      tips: [
        'Start with small doses',
        'Rotate adaptogens monthly',
        'Take breaks every 6-8 weeks',
        'May take 2 weeks to feel effects'
      ]
    },
    'Mushroom Complex': {
      steps: [
        'Take mushroom supplements with warm water',
        'Lion\'s Mane: 1-2g for brain',
        'Reishi: 1-2g for calm/immune',
        'Cordyceps: 1-2g for energy',
        'Can mix in coffee or tea'
      ],
      alternatives: [
        'Fresh mushroom tea',
        'Mushroom coffee blends',
        'Host Defense formulas'
      ],
      tips: [
        'Take Lion\'s Mane morning',
        'Reishi better evening',
        'Dual extraction best quality',
        'Can cook with mushroom powders'
      ]
    }
  };

  // [Previous routines object remains the same]
  const routines = {
    fatLoss: {
      standard: [
        { name: 'Hydrate', time: 5, details: '1L water + pink salt + lemon', icon: '💧' },
        { name: 'Fat Burn Stack', time: 2, details: 'L-carnitine, green tea extract, CLA', icon: '💊' },
        { name: 'Wim Hof Breathing', time: 15, details: '3 rounds for metabolic boost', icon: '🌬️' },
        { name: 'Fasted Zone 2', time: 45, details: 'Incline walk, HR <135, with EAAs', icon: '🏃' },
        { name: 'Cold Shower', time: 3, details: '2-3 min for brown fat activation', icon: '❄️' },
        { name: 'Protein Load', time: 10, details: '40g protein, no carbs', icon: '🥚' }
      ],
      minimal: [
        { name: 'Hydrate', time: 3, details: '1L water + salt', icon: '💧' },
        { name: 'HIIT Circuit', time: 15, details: 'Burpees, squats, pushups', icon: '⚡' },
        { name: 'Cold Rinse', time: 1, details: '30-60 seconds', icon: '❄️' },
        { name: 'Protein Shake', time: 5, details: '30g whey isolate', icon: '🥤' }
      ],
      extended: [
        { name: 'Hydrate + Detox', time: 35, details: 'Water + bentonite clay + psyllium', icon: '🧪' },
        { name: 'Red Light Therapy', time: 15, details: 'Full body exposure', icon: '🔴' },
        { name: 'Wim Hof Breathing', time: 20, details: '4 rounds + meditation', icon: '🌬️' },
        { name: 'Fasted Zone 2', time: 60, details: 'Long walk/bike with podcasts', icon: '🚴' },
        { name: 'Ice Bath', time: 10, details: '3-5 min immersion', icon: '🧊' },
        { name: 'Protein Feast', time: 20, details: 'Eggs, Greek yogurt, berries', icon: '🍳' }
      ]
    },
    longevity: {
      standard: [
        { name: 'Hydrate + Minerals', time: 5, details: '1L water + trace minerals', icon: '💧' },
        { name: 'Longevity Stack', time: 3, details: 'Resveratrol, NMN, quercetin, glycine', icon: '💊' },
        { name: '3-6-9 Breathing', time: 10, details: 'Parasympathetic activation', icon: '🧘' },
        { name: 'Sun + Movement', time: 20, details: 'Walk in sunlight, grounding optional', icon: '☀️' },
        { name: 'Protein + Polyphenols', time: 15, details: 'Smoothie with berries, greens, collagen', icon: '🥤' },
        { name: 'Cold Hormesis', time: 5, details: 'Cold shower with breathwork', icon: '❄️' }
      ],
      minimal: [
        { name: 'Hydrate', time: 3, details: 'Water + electrolytes', icon: '💧' },
        { name: 'Core Supplements', time: 2, details: 'D3+K2, omega-3, magnesium', icon: '💊' },
        { name: 'Sun Walk', time: 15, details: 'Brisk walk outside', icon: '🚶' },
        { name: 'Protein', time: 5, details: 'Quick shake or yogurt', icon: '🥛' }
      ],
      extended: [
        { name: 'Hydrate + Autophagy', time: 10, details: 'Water + ACV + coffee (black)', icon: '☕' },
        { name: 'Full Supplement Protocol', time: 5, details: '15+ targeted supplements', icon: '💊' },
        { name: 'Meditation', time: 20, details: 'Mindfulness or TM practice', icon: '🧘' },
        { name: 'Zone 2 + Nasal Breathing', time: 45, details: 'Optimize mitochondria', icon: '🏃' },
        { name: 'Contrast Therapy', time: 15, details: 'Sauna → cold → repeat', icon: '🔥❄️' },
        { name: 'Time-Restricted Feeding', time: 20, details: 'High-quality protein + fats', icon: '🍽️' }
      ]
    },
    detox: {
      standard: [
        { name: 'Lemon Water', time: 5, details: '1L warm water + lemon + cayenne', icon: '🍋' },
        { name: 'Clay Protocol', time: 35, details: 'Bentonite clay → wait → psyllium husk', icon: '🧪' },
        { name: 'Lymphatic Breathing', time: 10, details: 'Deep diaphragmatic breathing', icon: '🌬️' },
        { name: 'Rebounding', time: 15, details: 'Trampoline or jumping jacks', icon: '🦘' },
        { name: 'Dry Brushing + Cold', time: 10, details: 'Skin brushing → cold shower', icon: '🧹' },
        { name: 'Green Juice', time: 10, details: 'Celery, cucumber, spinach, ginger', icon: '🥬' }
      ],
      minimal: [
        { name: 'Detox Water', time: 3, details: 'Water + lemon + ACV', icon: '💧' },
        { name: 'Quick Clay', time: 10, details: 'Bentonite only (no psyllium)', icon: '🧪' },
        { name: 'Movement', time: 10, details: 'Walk or stretch', icon: '🚶' },
        { name: 'Green Smoothie', time: 5, details: 'Quick detox blend', icon: '🥤' }
      ],
      extended: [
        { name: 'Oil Pulling', time: 15, details: 'Coconut oil swishing', icon: '🥥' },
        { name: 'Full Detox Protocol', time: 40, details: 'Clay + charcoal + fiber', icon: '🧪' },
        { name: 'Infrared Sauna', time: 30, details: 'Deep sweat session', icon: '🔥' },
        { name: 'Yoga Flow', time: 30, details: 'Twisting poses for organs', icon: '🧘' },
        { name: 'Hydrotherapy', time: 10, details: 'Hot/cold shower cycles', icon: '🚿' },
        { name: 'Juice Fast', time: 15, details: 'Multiple fresh juices', icon: '🥤' }
      ]
    },
    mentalPerformance: {
      standard: [
        { name: 'Hydrate + Nootropics', time: 5, details: 'Water + L-theanine + caffeine', icon: '🧠' },
        { name: 'Wim Hof Breathing', time: 15, details: 'Oxygenate brain, increase focus', icon: '🌬️' },
        { name: 'Cold Exposure', time: 5, details: 'Dopamine boost via cold', icon: '❄️' },
        { name: 'Lion\'s Mane Coffee', time: 10, details: 'Coffee + MCT + mushrooms', icon: '☕' },
        { name: 'Movement + Learning', time: 20, details: 'Walk while listening to audiobook', icon: '🎧' },
        { name: 'Journal + Plan', time: 10, details: '3 priorities + gratitude', icon: '📝' }
      ],
      minimal: [
        { name: 'Smart Stack', time: 3, details: 'Caffeine + L-theanine', icon: '💊' },
        { name: 'Power Breathing', time: 5, details: 'Quick Wim Hof', icon: '🌬️' },
        { name: 'Cold Face Dunk', time: 2, details: 'Wake up the brain', icon: '❄️' },
        { name: 'Brain Fuel', time: 10, details: 'Bulletproof coffee', icon: '☕' }
      ],
      extended: [
        { name: 'Full Nootropic Stack', time: 5, details: 'Modafinil, racetams, noopept', icon: '💊' },
        { name: 'Meditation + Breathwork', time: 30, details: 'Deep focus practice', icon: '🧘' },
        { name: 'Cold + Heat Contrast', time: 20, details: 'Sauna → ice bath', icon: '🔥❄️' },
        { name: 'Brain Training', time: 20, details: 'Dual N-back or similar', icon: '🎮' },
        { name: 'Creative Movement', time: 30, details: 'Dance, martial arts flow', icon: '🥋' },
        { name: 'Deep Work Prep', time: 15, details: 'Plan + environment setup', icon: '💻' }
      ]
    },
    energy: {
      standard: [
        { name: 'Hydrate + B-Complex', time: 5, details: 'Water + B vitamins + electrolytes', icon: '💧' },
        { name: 'Wim Hof Power', time: 15, details: '3 rounds for energy surge', icon: '⚡' },
        { name: 'Sun Gazing', time: 5, details: 'Direct sunlight exposure', icon: '☀️' },
        { name: 'Dynamic Movement', time: 20, details: 'Jumping, dancing, shaking', icon: '🕺' },
        { name: 'Adaptogen Smoothie', time: 10, details: 'Maca, cordyceps, ashwagandha', icon: '🥤' },
        { name: 'Power Shower', time: 5, details: 'Hot → cold → hot → cold', icon: '🚿' }
      ],
      minimal: [
        { name: 'Quick Hydrate', time: 2, details: 'Water + salt + lemon', icon: '💧' },
        { name: 'Energy Breathing', time: 5, details: 'Bellows breath', icon: '🌬️' },
        { name: 'Sun + Movement', time: 10, details: 'Quick outdoor burst', icon: '☀️' },
        { name: 'Power Breakfast', time: 8, details: 'Eggs + fruit + coffee', icon: '🍳' }
      ],
      extended: [
        { name: 'Cellular Hydration', time: 10, details: 'Structured water + minerals', icon: '💧' },
        { name: 'Kundalini Activation', time: 25, details: 'Energy-raising practice', icon: '🔥' },
        { name: 'Grounding + Sun', time: 20, details: 'Barefoot earth connection', icon: '🦶' },
        { name: 'HIIT + Weights', time: 30, details: 'Full body activation', icon: '💪' },
        { name: 'Superfoods Feast', time: 20, details: 'Multiple energy foods', icon: '🥗' },
        { name: 'Energy Medicine', time: 15, details: 'Tapping, qi gong', icon: '🙏' }
      ]
    },
    immune: {
      standard: [
        { name: 'Immune Water', time: 5, details: 'Water + ginger + turmeric + lemon', icon: '🍵' },
        { name: 'Mushroom Complex', time: 3, details: 'Reishi, turkey tail, chaga', icon: '🍄' },
        { name: '3-6-9 Breathing', time: 10, details: 'Stress reduction for immunity', icon: '🌬️' },
        { name: 'Cold Therapy', time: 5, details: 'Controlled cold exposure', icon: '❄️' },
        { name: 'Probiotic Meal', time: 15, details: 'Kefir, sauerkraut, yogurt', icon: '🥛' },
        { name: 'Gentle Movement', time: 20, details: 'Tai chi or yoga flow', icon: '🥋' }
      ],
      minimal: [
        { name: 'Vitamin Bomb', time: 3, details: 'C, D3, zinc water', icon: '💊' },
        { name: 'Quick Cold', time: 2, details: '60 second cold shower', icon: '❄️' },
        { name: 'Immune Smoothie', time: 5, details: 'Berries + greens + ginger', icon: '🥤' },
        { name: 'Walk Outside', time: 10, details: 'Fresh air + movement', icon: '🚶' }
      ],
      extended: [
        { name: 'Oil Pulling', time: 15, details: 'Remove oral bacteria', icon: '🦷' },
        { name: 'Full Mushroom Protocol', time: 5, details: '7+ medicinal mushrooms', icon: '🍄' },
        { name: 'Breathwork + Meditation', time: 25, details: 'Deep immune activation', icon: '🧘' },
        { name: 'Infrared Therapy', time: 30, details: 'Deep tissue healing', icon: '🔴' },
        { name: 'Lymphatic Massage', time: 20, details: 'Manual drainage technique', icon: '💆' },
        { name: 'Fermented Feast', time: 20, details: 'Multiple probiotic foods', icon: '🥗' }
      ]
    }
  };

  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getColorClasses = (color, isSelected) => {
    const colors = {
      orange: isSelected ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg shadow-orange-500/25' : 'bg-white hover:shadow-xl',
      purple: isSelected ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg shadow-purple-500/25' : 'bg-white hover:shadow-xl',
      green: isSelected ? 'bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg shadow-green-500/25' : 'bg-white hover:shadow-xl',
      blue: isSelected ? 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg shadow-blue-500/25' : 'bg-white hover:shadow-xl',
      yellow: isSelected ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-500/25' : 'bg-white hover:shadow-xl',
      teal: isSelected ? 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg shadow-teal-500/25' : 'bg-white hover:shadow-xl'
    };
    return colors[color] || colors.blue;
  };

  const getTotalTime = (routine) => {
    return routine.reduce((total, step) => total + step.time, 0);
  };

  const currentRoutine = selectedCategory ? routines[selectedCategory][timeConstraint] : [];
  const totalTime = getTotalTime(currentRoutine);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-6xl mx-auto px-4 py-12 sm:py-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Sunrise className="w-16 h-16 animate-pulse" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                Morning Routine Builder
              </h1>
              <p className="text-xl sm:text-2xl opacity-90 max-w-2xl mx-auto">
                Design your perfect morning based on your goals and available time
              </p>
              
              {totalTime > 0 && (
                <div className="mt-8 inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                  <Timer className="w-6 h-6" />
                  <span className="text-2xl font-bold">{totalTime} minutes</span>
                  <span className="text-lg">total routine</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Wave decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-24">
              <path fill="#F9FAFB" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-4 sm:p-6">
          {/* Category Selection */}
          <div className="mb-8 -mt-8 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
                What's Your Primary Goal?
              </h2>
              
              {/* Mobile dropdown */}
              <div className="sm:hidden mb-4">
                <button
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="w-full p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl flex items-center justify-between shadow-sm"
                >
                  <span className="font-medium text-gray-700">
                    {selectedCategory ? 
                      <span className="flex items-center gap-2">
                        <span className="text-2xl">{categories.find(c => c.id === selectedCategory).emoji}</span>
                        {categories.find(c => c.id === selectedCategory).name}
                      </span>
                      : 'Select a goal'
                    }
                  </span>
                  {showMobileMenu ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                </button>
                
                {showMobileMenu && (
                  <div className="mt-3 space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setShowMobileMenu(false);
                          setExpandedItems({});
                        }}
                        className={`w-full p-4 rounded-xl text-left transition-all transform hover:scale-[1.02] ${
                          getColorClasses(category.color, selectedCategory === category.id)
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{category.emoji}</span>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{category.name}</h3>
                            <p className="text-sm opacity-80">{category.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop grid */}
              <div className="hidden sm:grid md:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setExpandedItems({});
                    }}
                    className={`group relative p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      getColorClasses(category.color, selectedCategory === category.id)
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{category.emoji}</div>
                      <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                      <p className="text-sm mb-4 opacity-80">{category.description}</p>
                      <div className="text-xs space-y-1">
                        {category.keyPoints.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    {!selectedCategory || selectedCategory !== category.id ? (
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Time Constraint Selection */}
          {selectedCategory && (
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fadeIn">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
                How much time do you have?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
                {[
                  { value: 'minimal', label: 'Minimal', time: '20-30 min', icon: <Moon className="w-5 h-5" /> },
                  { value: 'standard', label: 'Standard', time: '45-75 min', icon: <Clock className="w-5 h-5" /> },
                  { value: 'extended', label: 'Extended', time: '90-120 min', icon: <Sunrise className="w-5 h-5" /> }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTimeConstraint(option.value)}
                    className={`px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                      timeConstraint === option.value 
                        ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg transform scale-105' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.icon}
                    <div className="text-left">
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-sm opacity-80">{option.time}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Routine Display */}
          {selectedCategory && (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    Your {categories.find(c => c.id === selectedCategory).name} Routine
                  </h2>
                  <p className="text-gray-600">
                    {timeConstraint === 'minimal' ? 'Quick & effective' : 
                     timeConstraint === 'standard' ? 'Balanced approach' : 
                     'Complete protocol'}
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-xl">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <div>
                    <span className="text-2xl font-bold text-gray-800">{totalTime}</span>
                    <span className="text-gray-600 ml-1">minutes</span>
                  </div>
                </div>
              </div>

              {selectedCategory === 'detox' && timeConstraint === 'standard' && (
                <div className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-800">
                      <strong>Important:</strong> The clay detox protocol should only be used for 2 weeks maximum, 
                      then take a break. After 2 weeks, switch to the "minimal" version or another goal category.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {currentRoutine.map((step, index) => (
                  <div key={index} className="routine-item border-2 border-gray-100 rounded-xl overflow-hidden hover:border-gray-200">
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="w-full p-5 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 text-3xl bg-white p-3 rounded-xl shadow-sm">
                          {step.icon}
                        </div>
                        <div className="flex-grow text-left">
                          <h4 className="font-bold text-lg text-gray-800">{step.name}</h4>
                          <p className="text-gray-600">{step.details}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-700">{step.time}</span>
                            <span className="text-sm text-gray-500 block">min</span>
                          </div>
                          {detailedSteps[step.name] && (
                            <div className={`transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : ''}`}>
                              <ChevronDown className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {expandedItems[index] && detailedSteps[step.name] && (
                      <div className="p-6 bg-gradient-to-b from-gray-50 to-white border-t-2 border-gray-100 animate-slideDown">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-3">
                            <h5 className="font-bold text-gray-800 flex items-center gap-2">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Info className="w-5 h-5 text-blue-600" />
                              </div>
                              Step-by-Step
                            </h5>
                            <ol className="space-y-2 text-sm text-gray-700">
                              {detailedSteps[step.name].steps.map((s, i) => (
                                <li key={i} className="flex gap-3">
                                  <span className="font-bold text-blue-600 flex-shrink-0">{i + 1}.</span>
                                  <span>{s}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                          
                          <div className="space-y-3">
                            <h5 className="font-bold text-gray-800 flex items-center gap-2">
                              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                <ChevronRight className="w-5 h-5 text-purple-600" />
                              </div>
                              Alternatives
                            </h5>
                            <ul className="space-y-2 text-sm text-gray-700">
                              {detailedSteps[step.name].alternatives.map((alt, i) => (
                                <li key={i} className="flex gap-3">
                                  <span className="text-purple-600 flex-shrink-0">•</span>
                                  <span>{alt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="space-y-3">
                            <h5 className="font-bold text-gray-800 flex items-center gap-2">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <Lightbulb className="w-5 h-5 text-green-600" />
                              </div>
                              Pro Tips
                            </h5>
                            <ul className="space-y-2 text-sm text-gray-700">
                              {detailedSteps[step.name].tips.map((tip, i) => (
                                <li key={i} className="flex gap-3">
                                  <span className="text-green-600 flex-shrink-0">💡</span>
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Supplement Recommendations */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-blue-600" />
                  Recommended Supplements
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {selectedCategory === 'fatLoss' && (
                    <>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Core Stack</h4>
                        <p className="text-sm text-gray-600">L-carnitine, Green tea extract, CLA, Chromium</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Advanced</h4>
                        <p className="text-sm text-gray-600">Yohimbine (fasted), Forskolin, Berberine</p>
                      </div>
                    </>
                  )}
                  {selectedCategory === 'longevity' && (
                    <>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Core Stack</h4>
                        <p className="text-sm text-gray-600">NMN/NAD+, Resveratrol, Quercetin, Glycine</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Advanced</h4>
                        <p className="text-sm text-gray-600">Rapamycin, Metformin, Spermidine</p>
                      </div>
                    </>
                  )}
                  {selectedCategory === 'detox' && (
                    <>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Core Stack</h4>
                        <p className="text-sm text-gray-600">Milk thistle, NAC, Activated charcoal, Chlorella</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Advanced</h4>
                        <p className="text-sm text-gray-600">Glutathione, Alpha lipoic acid, Zeolite</p>
                      </div>
                    </>
                  )}
                  {selectedCategory === 'mentalPerformance' && (
                    <>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Core Stack</h4>
                        <p className="text-sm text-gray-600">Lion's Mane, L-theanine, Rhodiola, Bacopa</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Advanced</h4>
                        <p className="text-sm text-gray-600">Noopept, Modafinil, Racetams, Nicotine</p>
                      </div>
                    </>
                  )}
                  {selectedCategory === 'energy' && (
                    <>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Core Stack</h4>
                        <p className="text-sm text-gray-600">B-complex, CoQ10, Cordyceps, Maca</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Advanced</h4>
                        <p className="text-sm text-gray-600">PQQ, Shilajit, D-ribose, Methylene blue</p>
                      </div>
                    </>
                  )}
                  {selectedCategory === 'immune' && (
                    <>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Core Stack</h4>
                        <p className="text-sm text-gray-600">Vitamin D3, Zinc, Vitamin C, Elderberry</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">Advanced</h4>
                        <p className="text-sm text-gray-600">Beta-glucans, Astragalus, Echinacea, Colostrum</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  );
};

export default MorningRoutineFlowChart;