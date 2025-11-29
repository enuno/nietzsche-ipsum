// Nietzsche Ipsum Generator - Enhanced Edition
// ES6+ modernized with expanded authentic Nietzsche vocabulary

class IpsumGenerator {
  constructor() {
    this.wordList = [];
    this.sentences = [];
    this.paragraphs = [];
  }

  // Master method that generates ipsum based on words and desired word count
  generateIpsum(words, wordCount) {
    this.wordList = [];
    this.sentences = [];
    this.paragraphs = [];
    
    // Validate input
    const count = Math.max(50, Math.min(10000, parseInt(wordCount) || 150));
    
    this.generateWordlist(words, count);
    this.generateSentencesFromWordlist();
    this.generateParagraphsFromSentences();

    // Return the Nietzsche Ipsum
    return this.paragraphs
      .map(paragraph => paragraph.join(' '))
      .join('<br><br>');
  }

  // Creates an array of random words from the vocabulary
  generateWordlist(words, wordCount) {
    const wordArray = words.trim().split(/\s+/);
    for (let i = 0; i < wordCount; i++) {
      const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
      this.wordList.push(randomWord);
    }
  }

  // Split the wordList into sentences (5-18 words for better variety)
  generateSentencesFromWordlist() {
    let cursor = 0;
    while (cursor < this.wordList.length) {
      const sentence = [];
      const sentenceLength = Math.floor(Math.random() * 14) + 5; // 5-18 words
      
      for (let i = 0; i < sentenceLength && cursor + i < this.wordList.length; i++) {
        sentence.push(this.wordList[cursor + i]);
      }
      
      if (sentence.length > 0) {
        this.sentences.push(sentence);
      }
      cursor += sentenceLength;
    }
  }

  // Split sentences into paragraphs (3-7 sentences) with proper formatting
  generateParagraphsFromSentences() {
    let cursor = 0;
    while (cursor < this.sentences.length) {
      const paragraph = [];
      const paragraphLength = Math.floor(Math.random() * 5) + 3; // 3-7 sentences
      
      for (let i = 0; i < paragraphLength && cursor + i < this.sentences.length; i++) {
        let sentence = this.sentences[cursor + i].join(' ');
        // Capitalize first letter and add period
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
        paragraph.push(sentence);
      }
      
      if (paragraph.length > 0) {
        this.paragraphs.push(paragraph);
      }
      cursor += paragraphLength;
    }
  }
}

// Instantiate the ipsum generator
const ipsumGen = new IpsumGenerator();

// Massively expanded Nietzsche vocabulary with authentic philosophical terms
// Organized by thematic categories for better representation of his philosophy

const nietzscheWords = [
  // Core Concepts & German Terms
  'Übermensch', 'Ubermensch', 'overman', 'superman', 'will-to-power', 'eternal-recurrence',
  'eternal-return', 'amor-fati', 'Dionysian', 'Apollonian', 'ressentiment', 
  'perspectivism', 'nihilism', 'transvaluation', 'revaluation', 'genealogy',
  
  // Master-Slave Morality
  'master-morality', 'slave-morality', 'nobility', 'noble', 'aristocratic', 'herd',
  'herd-mentality', 'master', 'slave', 'sovereign', 'autonomous', 'self-overcoming',
  
  // Existential & Philosophical Terms
  'abyss', 'void', 'chaos', 'becoming', 'being', 'existence', 'essence', 'suffering',
  'tragic', 'tragedy', 'affirmation', 'negation', 'life-affirmation', 'self-creation',
  'authenticity', 'autonomy', 'freedom', 'liberation', 'emancipation',
  
  // Critique & Opposition
  'ascetic', 'asceticism', 'priesthood', 'Christianity', 'Christian', 'morality',
  'conventional', 'tradition', 'dogma', 'metaphysics', 'transcendence', 'otherworldly',
  'decadence', 'degeneration', 'corruption', 'weakness', 'sickness', 'illness',
  
  // Values & Virtues
  'power', 'strength', 'courage', 'pride', 'honor', 'excellence', 'nobility',
  'dignity', 'self-respect', 'self-worth', 'greatness', 'magnificence', 'grandeur',
  'virtue', 'virtues', 'valor', 'fortitude', 'sovereignty', 'supremacy',
  
  // Emotional & Psychological
  'passion', 'desire', 'instinct', 'drive', 'impulse', 'cruelty', 'violence',
  'resentment', 'revenge', 'envy', 'jealousy', 'pity', 'compassion', 'sympathy',
  'guilt', 'shame', 'bad-conscience', 'self-contempt', 'self-denial',
  
  // Intellectual & Creative
  'genius', 'artist', 'creator', 'philosopher', 'thinker', 'spirit', 'intellectual',
  'wisdom', 'knowledge', 'truth', 'illusion', 'perspective', 'interpretation',
  'creativity', 'imagination', 'originality', 'innovation', 'transformation',
  
  // Opposition & Conflict
  'war', 'battle', 'struggle', 'conflict', 'strife', 'resistance', 'opposition',
  'contradiction', 'paradox', 'tension', 'duality', 'dialectic', 'overcoming',
  'conquest', 'victory', 'triumph', 'defeat', 'destruction', 'annihilation',
  
  // Life & Nature
  'life', 'vitality', 'vigor', 'health', 'sickness', 'nature', 'natural',
  'organic', 'biological', 'animal', 'beast', 'predator', 'instinctive',
  'barbaric', 'savage', 'wild', 'untamed', 'primal', 'primitive',
  
  // Metaphysical & Cosmological
  'cosmos', 'universe', 'world', 'earth', 'heavens', 'stars', 'infinity',
  'eternity', 'time', 'temporality', 'moment', 'present', 'destiny', 'fate',
  'necessity', 'contingency', 'chance', 'accident', 'causality',
  
  // Religious Critique
  'God', 'dead-God', 'death-of-God', 'divine', 'sacred', 'holy', 'profane',
  'sin', 'redemption', 'salvation', 'damnation', 'heaven', 'hell', 'afterlife',
  'soul', 'spirit', 'faith', 'belief', 'piety', 'prayer', 'worship',
  
  // Social & Political
  'society', 'culture', 'civilization', 'democracy', 'equality', 'justice',
  'law', 'order', 'authority', 'power-structure', 'hierarchy', 'rank',
  'caste', 'class', 'masses', 'multitude', 'crowd', 'mob',
  
  // Zarathustra Imagery
  'Zarathustra', 'mountain', 'mountains', 'peak', 'summit', 'height', 'depth',
  'cave', 'solitude', 'loneliness', 'desert', 'wilderness', 'abyss', 'precipice',
  'sun', 'light', 'darkness', 'shadow', 'noon', 'midnight', 'twilight',
  
  // Key Verbs & Actions
  'overcome', 'transcend', 'surpass', 'exceed', 'create', 'destroy', 'transform',
  'become', 'grow', 'evolve', 'ascend', 'descend', 'leap', 'dance', 'laugh',
  'affirm', 'negate', 'reject', 'embrace', 'love', 'hate', 'despise', 'admire',
  
  // Philosophical Adjectives
  'authentic', 'genuine', 'false', 'deceptive', 'illusory', 'profound', 'deep',
  'shallow', 'superficial', 'complex', 'simple', 'noble', 'base', 'high', 'low',
  'strong', 'weak', 'powerful', 'impotent', 'active', 'passive', 'reactive',
  
  // From Specific Works
  'beyond-good-and-evil', 'good-and-evil', 'genealogy-of-morals', 'twilight-of-idols',
  'antichrist', 'ecce-homo', 'gay-science', 'joyful-wisdom', 'birth-of-tragedy',
  'untimely-meditations', 'human-all-too-human', 'dawn', 'daybreak',
  
  // Last Man vs Übermensch
  'last-man', 'higher-man', 'bridge', 'rope', 'tightrope', 'chasm', 'transition',
  'metamorphosis', 'camel', 'lion', 'child', 'innocence', 'playfulness',
  
  // Additional Concepts
  'eternal-yes', 'sacred-yes', 'pessimism', 'optimism', 'value', 'valuation',
  'measure', 'judgment', 'evaluation', 'critique', 'criticism', 'philosophy',
  'philology', 'psychology', 'physiology', 'conscience', 'consciousness',
  'unconscious', 'subconscious', 'hidden', 'revealed', 'manifest', 'latent'
].join(' ');

// Generate the ipsum on click
$(() => {
  const generateIpsum = () => {
    const wordCount = $('#num').val();
    const ipsum = ipsumGen.generateIpsum(nietzscheWords, wordCount);
    const ipsumWithDropcap = `<span class="dropcap">${ipsum.charAt(0)}</span>${ipsum.slice(1)}`;
    
    $('.ipsum-container')
      .html(ipsumWithDropcap)
      .addClass('show');
    
    $('html, body').animate({
      scrollTop: $('.ipsum-container').offset().top
    }, 600);
    
    $('body').addClass('show-social-buttons');
  };

  // Modern event binding (click works for touch devices too)
  $('#generate').on('click', generateIpsum);
  
  // Allow Enter key to generate
  $('#num').on('keypress', (e) => {
    if (e.which === 13) {
      generateIpsum();
    }
  });
});
