# Nietzsche Ipsum

> *"God is dead. Lorem Ipsum is dead. God remains dead. And we have killed him with the Übermensch of placeholder text."*

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://ipsum.hashgrid.net)
[![GitHub](https://img.shields.io/badge/github-enuno%2Fnietzsche--ipsum-blue)](https://github.com/enuno/nietzsche-ipsum)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

**Nietzsche Ipsum** is a philosophical lorem ipsum generator that produces placeholder text using the authentic vocabulary and concepts from Friedrich Nietzsche's works. Perfect for designers and developers who want their mockups to contemplate the abyss while the abyss contemplates back.

## 🎯 Features

- **Authentic Nietzsche Vocabulary**: 300+ terms from his actual philosophical works
- **Key Concepts Included**:
  - Übermensch (Overman/Superman)
  - Eternal Recurrence
  - Will to Power
  - Master-Slave Morality
  - Ressentiment
  - Dionysian vs Apollonian
  - Transvaluation of Values
  - And many more...
- **Modern ES6+ JavaScript**: Clean, maintainable code
- **Fully Responsive**: Works on all devices
- **Dark Mode Support**: Automatic theme switching
- **Accessible**: WCAG-compliant with ARIA labels and keyboard navigation
- **Customizable**: Generate 50-10,000 words of existential text

## 🚀 Live Demo

Visit [ipsum.hashgrid.net](https://ipsum.hashgrid.net) to try it out!

## 📦 Installation

### Using in Your Project

1. Clone the repository:
```bash
git clone https://github.com/enuno/nietzsche-ipsum.git
cd nietzsche-ipsum
```

2. Open `index.html` in your browser, or serve it locally:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve
```

3. Navigate to `http://localhost:8000`

### Using as a Component

You can import the ipsum generator class into your own project:

```javascript
import { IpsumGenerator, nietzscheWords } from './ipsum.js';

const generator = new IpsumGenerator();
const text = generator.generateIpsum(nietzscheWords, 500);
```

## 🎨 Usage

1. **Choose Word Count**: Enter desired number of words (50-10,000)
2. **Generate**: Click "Ecce Ipsum" or press Enter
3. **Copy**: Select and copy the generated philosophical text
4. **Share**: Use the Twitter button to share your existential mockups

### Keyboard Shortcuts

- `Enter` in word count field - Generate text
- `Tab` - Navigate between elements
- `Space/Enter` on button - Generate text

## 🏗️ Architecture

### File Structure

```
nietzsche-ipsum/
├── index.html          # Main HTML structure
├── ipsum.js            # ES6+ ipsum generator logic
├── style.css           # Modern CSS with custom properties
├── nietzsche.jpg       # Portrait image
├── CNAME              # Custom domain configuration
└── README.md          # This file
```

### Key Components

#### IpsumGenerator Class

```javascript
class IpsumGenerator {
  generateIpsum(words, wordCount)     // Main generation method
  generateWordlist(words, wordCount)  // Creates random word array
  generateSentencesFromWordlist()     // Splits into sentences (5-18 words)
  generateParagraphsFromSentences()   // Groups into paragraphs (3-7 sentences)
}
```

#### Vocabulary Categories

The word list is organized into thematic categories:

1. **Core Concepts & German Terms**: Übermensch, eternal recurrence, amor fati, perspectivism
2. **Master-Slave Morality**: Nobility, herd mentality, autonomy, sovereignty
3. **Existential Terms**: Abyss, void, becoming, suffering, authenticity
4. **Critique & Opposition**: Asceticism, Christianity, decadence, nihilism
5. **Values & Virtues**: Power, strength, courage, excellence
6. **Emotional & Psychological**: Passion, ressentiment, cruelty, compassion
7. **Intellectual & Creative**: Genius, wisdom, creativity, transformation
8. **Zarathustra Imagery**: Mountain, solitude, noon, abyss, cave
9. **Religious Critique**: Death of God, sin, redemption, faith
10. **Social & Political**: Democracy, hierarchy, justice, authority

## ✨ Recent Improvements (2024)

### JavaScript Enhancements
- ✅ Modernized to ES6+ (classes, arrow functions, const/let, template literals)
- ✅ Expanded vocabulary from ~80 to 300+ authentic Nietzsche terms
- ✅ Added German philosophical terms (Übermensch, ressentiment)
- ✅ Improved sentence variety (5-18 words vs 5-15)
- ✅ Better paragraph structure (3-7 sentences vs 2-8)
- ✅ Input validation (50-10,000 word range)
- ✅ Keyboard support (Enter key to generate)
- ✅ Removed deprecated jQuery events

### HTML Enhancements
- ✅ Semantic HTML5 structure
- ✅ ARIA labels for accessibility
- ✅ Open Graph & Twitter Card meta tags
- ✅ Proper form elements with validation
- ✅ Updated to CDN jQuery (reduced repo size)
- ✅ Responsive meta tags

### CSS Enhancements
- ✅ CSS custom properties for easy theming
- ✅ Dark mode support (prefers-color-scheme)
- ✅ Improved responsive breakpoints
- ✅ Better focus states for accessibility
- ✅ Smooth transitions and animations
- ✅ Print stylesheet
- ✅ Reduced motion support
- ✅ High contrast mode support

## 🎓 About Nietzsche

Friedrich Nietzsche (1844-1900) was a German philosopher whose radical critique of traditional morality, religion, and metaphysics profoundly influenced modern thought. His key concepts include:

- **Übermensch (Overman)**: The ideal human who creates their own values
- **Will to Power**: The fundamental drive underlying all human behavior
- **Eternal Recurrence**: The thought experiment of living life infinitely
- **Master-Slave Morality**: Two fundamental types of moral systems
- **Death of God**: The decline of traditional religious authority
- **Amor Fati**: Love of one's fate, acceptance of existence

Major works: *Thus Spoke Zarathustra*, *Beyond Good and Evil*, *On the Genealogy of Morals*, *The Gay Science*, *Twilight of the Idols*

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions

- Add more authentic Nietzsche vocabulary
- Improve sentence structure algorithms
- Add export functionality (PDF, TXT, Markdown)
- Create API endpoint
- Add more philosophers (Kierkegaard Ipsum? Sartre Ipsum?)
- Improve mobile UX
- Add unit tests
- Internationalization (German, French, etc.)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **Original Concept**: Nathan Bashaw ([@nbashaw](https://twitter.com/nbashaw))
- **Enhanced Version**: Elvis Nuno ([@NunoElvis](https://twitter.com/NunoElvis))
- **Philosophy**: Friedrich Nietzsche (1844-1900)
- **Portrait**: Public domain image

## 🔗 Links

- [Live Demo](https://ipsum.hashgrid.net)
- [GitHub Repository](https://github.com/enuno/nietzsche-ipsum)
- [Report Issues](https://github.com/enuno/nietzsche-ipsum/issues)
- [Original Version](https://github.com/nbashaw/nietzsche-ipsum)

## 📚 Additional Resources

- [Stanford Encyclopedia: Nietzsche](https://plato.stanford.edu/entries/nietzsche/)
- [Internet Encyclopedia: Nietzsche](https://iep.utm.edu/nietzsch/)
- [Project Gutenberg: Nietzsche's Works](https://www.gutenberg.org/ebooks/author/779)

---

*"What does not kill your placeholder text makes it stronger."* — Nietzsche Ipsum

**Made with ❤️ by [Elvis Nuno](https://github.com/enuno)**
