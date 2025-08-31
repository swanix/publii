/*
 * Custom function used to generate the output of the theme variables
 */

var generateThemeVariables = function (params) {
  let fontParams = {
    'system-ui': {
      name: 'SystemUI',
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      hasItalic: false
    },
    'adventpro': {
      name: 'Advent Pro',
      family: '\'Advent Pro\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'aleo': {
      name: 'Aleo',
      family: '\'Aleo\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'andadapro': {
      name: 'Andada Pro',
      family: '\'Andada Pro\', serif',
      weight: '400 840',
      hasItalic: true
    },
    'antonio': {
      name: 'Antonio',
      family: '\'Antonio\', sans-serif',
      weight: '100 700',
      hasItalic: false
    },
    'archivonarrow': {
      name: 'Archivo Narrow',
      family: '\'Archivo Narrow\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'asap': {
      name: 'Asap',
      family: '\'Asap\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'assistant': {
      name: 'Assistant',
      family: '\'Assistant\', sans-serif',
      weight: '200 800',
      hasItalic: false
    },
    'besley': {
      name: 'Besley',
      family: '\'Besley\', serif',
      weight: '400 900',
      hasItalic: true
    },
    'bitter': {
      name: 'Bitter',
      family: '\'Bitter\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'brygada1918': {
      name: 'Brygada 1918',
      family: '\'Brygada 1918\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'cabin': {
      name: 'Cabin',
      family: '\'Cabin\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'cairo': {
      name: 'Cairo',
      family: '\'Cairo\', sans-serif',
      weight: '200 1000',
      hasItalic: false
    },
    'comfortaa': {
      name: 'Comfortaa',
      family: '\'Comfortaa\', cursive',
      weight: '300 700',
      hasItalic: false
    },
    'dancingscript': {
      name: 'Dancing Script',
      family: '\'Dancing Script\', cursive',
      weight: '400 700',
      hasItalic: false
    },
    'dosis': {
      name: 'Dosis',
      family: '\'Dosis\', sans-serif',
      weight: '200 800',
      hasItalic: false
    },
    'domine': {
      name: 'Domine',
      family: '\'Domine\', serif',
      weight: '400 700',
      hasItalic: false
    },
    'exo': {
      name: 'Exo',
      family: '\'Exo\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'faustina': {
      name: 'Faustina',
      family: '\'Faustina\', serif',
      weight: '300 800',
      hasItalic: true
    },
    'figtree': {
      name: 'Figtree',
      family: '\'Figtree\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'frankruhllibre': {
      name: 'Frank Ruhl Libre',
      family: '\'Frank Ruhl Libre\', serif',
      weight: '300 900',
      hasItalic: false
    },
    'glory': {
      name: 'Glory',
      family: '\'Glory\', sans-serif',
      weight: '100 800',
      hasItalic: true
    },
    'gluten': {
      name: 'Gluten',
      family: '\'Gluten\', cursive',
      weight: '100 900',
      hasItalic: false
    },
    'heebo': {
      name: 'Heebo',
      family: '\'Heebo\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'imbue': {
      name: 'Imbue',
      family: '\'Imbue\', serif',
      weight: '100 900',
      hasItalic: false
    },
    'instrumentsans': {
      name: 'Instrument Sans',
      family: '\'Instrument Sans\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'jetbrainsmono': {
      name: 'JetBrains Mono',
      family: '\'JetBrains Mono\', monospace',
      weight: '100 800',
      hasItalic: true
    },
    'jura': {
      name: 'Jura',
      family: '\'Jura\', sans-serif',
      weight: '300 700',
      hasItalic: false
    },
    'karla': {
      name: 'Karla',
      family: '\'Karla\', sans-serif',
      weight: '200 800',
      hasItalic: true
    },
    'kreon': {
      name: 'Kreon',
      family: '\'Kreon\', serif',
      weight: '300 700',
      hasItalic: false
    },
    'labrada': {
      name: 'Labrada',
      family: '\'Labrada\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'lemonada': {
      name: 'Lemonada',
      family: '\'Lemonada\', cursive',
      weight: '300 700',
      hasItalic: false
    },
    'lexend': {
      name: 'Lexend',
      family: '\'Lexend\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'librefranklin': {
      name: 'Libre Franklin',
      family: '\'Libre Franklin\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'lora': {
      name: 'Lora',
      family: '\'Lora\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'manuale': {
      name: 'Manuale',
      family: '\'Manuale\', serif',
      weight: '300 800',
      hasItalic: true
    },
    'manrope': {
      name: 'Manrope',
      family: '\'Manrope\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'mavenpro': {
      name: 'Maven Pro',
      family: '\'Maven Pro\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'merriweathersans': {
      name: 'Merriweather Sans',
      family: '\'Merriweather Sans\', sans-serif',
      weight: '300 800',
      hasItalic: true
    },
    'montserrat': {
      name: 'Montserrat',
      family: '\'Montserrat\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'nunito': {
      name: 'Nunito',
      family: '\'Nunito\', sans-serif',
      weight: '200 1000',
      hasItalic: true
    },
    'orbitron': {
      name: 'Orbitron',
      family: '\'Orbitron\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'oswald': {
      name: 'Oswald',
      family: '\'Oswald\', sans-serif',
      weight: '200 700',
      hasItalic: false
    },
    'petrona': {
      name: 'Petrona',
      family: '\'Petrona\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'playfairdisplay': {
      name: 'Playfair Display',
      family: '\'Playfair Display\', serif',
      weight: '400 900',
      hasItalic: true
    },
    'plusjakartasans': {
      name: 'Plus Jakarta Sans',
      family: '\'Plus Jakarta Sans\', sans-serif',
      weight: '200 800',
      hasItalic: true
    },
    'publicsans': {
      name: 'Public Sans',
      family: '\'Public Sans\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'quicksand': {
      name: 'Quicksand',
      family: '\'Quicksand\', sans-serif',
      weight: '300 700',
      hasItalic: false
    },
    'raleway': {
      name: 'Raleway',
      family: '\'Raleway\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'redhatdisplay': {
      name: 'Red Hat Display',
      family: '\'Red Hat Display\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'redhatmono': {
      name: 'Red Hat Mono',
      family: '\'Red Hat Mono\', monospace',
      weight: '300 700',
      hasItalic: true
    },
    'robotoflex': {
      name: 'Roboto Flex',
      family: '\'Roboto Flex\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'robotoslab': {
      name: 'Roboto Slab',
      family: '\'Roboto Slab\', serif',
      weight: '100 900',
      hasItalic: false
    },
    'rokkitt': {
      name: 'Rokkitt',
      family: '\'Rokkitt\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'rubik': {
      name: 'Rubik',
      family: '\'Rubik\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'ruda': {
      name: 'Ruda',
      family: '\'Ruda\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'smoochsans': {
      name: 'Smooch Sans',
      family: '\'Smooch Sans\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'sourcecodepro': {
      name: 'Source Code Pro',
      family: '\'Source Code Pro\', monospace',
      weight: '200 900',
      hasItalic: true
    },
    'spartan': {
      name: 'Spartan',
      family: '\'Spartan\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'urbanist': {
      name: 'Urbanist',
      family: '\'Urbanist\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'worksans': {
      name: 'Work Sans',
      family: '\'Work Sans\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'yanonekaffeesatz': {
      name: 'Yanone Kaffeesatz',
      family: '\'Yanone Kaffeesatz\', sans-serif',
      weight: '200 700',
      hasItalic: false
    },
    'yrsa': {
      name: 'Yrsa',
      family: '\'Yrsa\', serif',
      weight: '300 700',
      hasItalic: true
    }
  };

  let fontBodyName = fontParams[params.fontBody]?.name;
  let fontBodyFamily = fontParams[params.fontBody]?.family;
  let fontBodyWeight = fontParams[params.fontBody]?.weight;
  let fontBodyHasItalic = fontParams[params.fontBody]?.hasItalic;

  let fontHeadingsName = fontParams[params.fontHeadings]?.name;
  let fontHeadingsFamily = fontParams[params.fontHeadings]?.family;
  let fontHeadingsWeight = fontParams[params.fontHeadings]?.weight;
  let fontHeadingsHasItalic = fontParams[params.fontHeadings]?.hasItalic;

  let output = '';
  let loadedFonts = new Set();

  const addFontFace = (key, name, weight, hasItalic) => {
    if (!loadedFonts.has(name)) {
      output += `             
        @font-face {
          font-family: '${name}';
          src: url('../dynamic/fonts/${key}/${key}.woff2') format('woff2');
          font-weight: ${weight};
          font-display: swap;
          font-style: normal;
        }
      `;
      loadedFonts.add(name);
    }
    if (hasItalic && !loadedFonts.has(`${name}-italic`)) {
      output += `             
        @font-face {
          font-family: '${name}';
          src: url('../dynamic/fonts/${key}/${key}-italic.woff2') format('woff2');
          font-weight: ${weight}; 
          font-display: swap;
          font-style: italic;
        }
      `;
      loadedFonts.add(`${name}-italic`);
    }
  };

  if (params.fontBody !== 'system-ui') {
    addFontFace(params.fontBody, fontBodyName, fontBodyWeight, params.fontBodyItalic && fontBodyHasItalic);
  }

  if (params.fontHeadings !== 'system-ui') {
    addFontFace(params.fontHeadings, fontHeadingsName, fontHeadingsWeight, params.fontHeadingsItalic && fontHeadingsHasItalic);
  }

  if (params.fontMenu === 'system-ui') {
    params.fontMenu = fontParams['system-ui'].family;
  }

  if (params.fontLogo === 'system-ui') {
    params.fontLogo = fontParams['system-ui'].family;
  }

  // Fluid base font-size
  const minScreen = 20; // rem
  const maxScreen = 100; // rem
  const screenRange = maxScreen - minScreen;
  const minFontSize = params.minFontSize;
  const maxFontSize = params.maxFontSize;
  const fontSizeRange = maxFontSize - minFontSize;
  const fontSizeValue = `clamp(${minFontSize}rem, ${minFontSize}rem + (${fontSizeRange} * ((100vw - ${minScreen}rem) / ${screenRange})), ${maxFontSize}rem)`;

  // Conversion of HEX to RGB
  function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;

    if (hex.length === 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
    } else if (hex.length === 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }

    return [+(r), +(g), +(b)];
  }

  // Conversion of RGB to HSL (only hue and saturation)
  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h, s;
    let l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // Achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100) + '%'];
  }

  // Conversion of RGBA to RGB
  function rgbaToRgb(rgba) {
    const rgbMatch = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!rgbMatch) {
      return null;
    }
    const [r, g, b] = rgbMatch.slice(1);
    return [parseInt(r), parseInt(g), parseInt(b)];
  }

  // Conversion of HSLA to HSL
  function hslaToHsl(hsla) {
    const hslMatch = hsla.match(/hsla?\((\d+),\s*(\d+)%,\s*\d+%\)/);
    if (!hslMatch) {
      return null;
    }
    const [h, s] = hslMatch.slice(1);
    return `${h}, ${s}%`;
  }

  // Map of predefined color schemes for light mode
  const lightPredefinedSchemes = {
    'blue': {
      '--red': '1, 69%',
      '--green': '112, 64%',
      '--yellow': '46, 88%',
      '--blue': '217, 68%',
      '--code': '1, 55%',
    },
    'brown': {
      '--red': '14, 57%',
      '--green': '103, 41%',
      '--yellow': '52, 45%',
      '--blue': '209, 100%',
      '--code': '14, 67%',
    },
    'gray': {
      '--red': '343, 60%',
      '--green': '176, 40%',
      '--yellow': '43, 78%',
      '--blue': '210, 95%',
      '--code': '343, 60%',
    },
    'green': {
      '--red': '352, 100%',
      '--green': '122, 39%',
      '--yellow': '42, 100%',
      '--blue': '198, 100%',
      '--code': '24, 95%',
    },
    'mint': {
      '--red': '340, 70%',
      '--green': '166, 60%',
      '--yellow': '50, 80%',
      '--blue': '200, 70%',
      '--code': '22, 100%',
    },
    'softlavender': {
      '--red': '340, 70%',
      '--green': '168, 48%',
      '--yellow': '50, 80%',
      '--blue': '200, 70%',
      '--code': '339, 77%',
    },
    
  };

  // Map of predefined color schemes for dark mode
  const darkPredefinedSchemes = {
    'darkblue': {
      '--red': '352, 90%',
      '--green': '114, 50%',
      '--yellow': '41, 93%',
      '--blue': '208, 98%',
      '--code': '24, 100%',
    },
    'darkbrown': {
      '--red': '10, 88%',
      '--green': '140, 40%',
      '--yellow': '47, 65%',
      '--blue': '193, 100%',
      '--code': '1, 68%',
    },
    'darkgreen': {
      '--red': '350, 60%',
      '--green': '123, 46%',
      '--yellow': '34, 100%',
      '--blue': '198, 100%',
      '--code': '26, 100%',
    },
    'darkmidnightnavy': {
      '--red': '357, 77%',
      '--green': '119, 49%',
      '--yellow': '44, 88%',
      '--blue': '215, 100%',
      '--code': '357, 67%',
    },
    'darkoliveshadow': {
      '--red': '5, 98%',
      '--green': '162, 43%',
      '--yellow': '40, 80%',
      '--blue': '190, 100%',
      '--code': '5, 54%',
    },
    'darkstormynight': {
      '--red': '337, 100%',
      '--green': '176, 65%',
      '--yellow': '44, 86%',
      '--blue': '206, 100%',
      '--code': '30, 100%',
    },
  };

  // Logic for getting color variables based on predefined or custom settings
  function getColorVariables(colorSchemeType, params, predefinedSchemes) {
    const selectedScheme = params[colorSchemeType];

    if (predefinedSchemes[selectedScheme]) {
      const colorVariables = { ...predefinedSchemes[selectedScheme] };

      const accentColorParam = `${selectedScheme}AccentColor`;
      const baseColorParam = `${selectedScheme}BaseColor`;

      if (params[accentColorParam]) {
        colorVariables['--accent-hs'] = getHSL(params[accentColorParam]);
      }
      if (params[baseColorParam]) {
        colorVariables['--base-hs'] = getHSL(params[baseColorParam]);
      }
      return colorVariables;
    } else {
      console.warn(`Unknown color scheme: ${selectedScheme}`);
      return {};
    }
  }

  // Logic for choosing colors for base and accent
  function getHSL(color) {
    if (!color || typeof color !== 'string') {
      console.error(`Invalid color value: ${color}`);
      return '0, 0%'; // Default HSL (neutral gray)
    }

    if (color.startsWith('hsla')) {
      return hslaToHsl(color);
    } else if (color.startsWith('rgba')) {
      const rgb = rgbaToRgb(color);
      return rgbToHsl(...rgb).join(', ');
    } else if (color.startsWith('#')) {
      const rgb = hexToRgb(color);
      return rgbToHsl(...rgb).join(', ');
    }
    return color; // If the format is already in HSL
  }

  const codeColorHSL = getHSL(params.codeColor);

  output += `
    :root {
      --content-width:      ${params.contentWidth};
      --sidebar-width:      ${params.sidebarWidth};
      --aside-width:        ${params.asideWidth};
      --page-margin:        ${params.pageMargin};
      --header-height:      ${params.navbarHeight};
      --border-radius:      ${params.borderRadius}px;
      --baseline:           ${params.baseline};
      --body-font:          ${fontBodyFamily};
      --heading-font:       ${fontHeadingsFamily};
      --logo-font:          ${params.fontLogo};
      --menu-font:          ${params.fontMenu};
      --font-size:          ${fontSizeValue};
      --font-weight-normal: ${params.fontBodyWeight};
      --font-weight-bold:   ${params.fontBoldWeight};
      --line-height:        ${params.lineHeight};
      --letter-spacing:     ${params.letterSpacing}em;
      --headings-weight:    ${params.fontHeadignsWeight};
      --headings-transform: ${params.fontHeadingsTransform};
      --headings-style:     ${params.fontHeadingsStyle};
      --headings-letter-spacing: ${params.fontHeadingsletterSpacing}em;
      --headings-line-height: ${params.fontHeadingsLineHeight};
    `;

  if (params.colorScheme !== 'dark') {
    const lightColorVariables = getColorVariables('colorSchemeLight', params, lightPredefinedSchemes);
    for (const [key, value] of Object.entries(lightColorVariables)) {
      output += `    ${key}: ${value};\n`;
    }
    output += `
      --white:    		        hsl(0, 0%, 100%);
      --black:                hsl(0, 0%, 0%);
      --dark:                 hsl(var(--base-hs), 19%);
      --light:                hsl(var(--base-hs), 97%);
      --helper:               hsl(var(--base-hs), 100%);
      --border-color:         hsl(var(--base-hs), 91%);
      --page-bg:              hsl(var(--base-hs), 100%);
      --primary-color:        hsl(var(--accent-hs), 51%);
      --secondary-color:      hsl(var(--base-hs), 29%);
      --logo-color:           hsl(var(--base-hs), 19%);
      --text-color:           hsl(var(--base-hs), 26%);
      --text-light-color:     hsl(var(--base-hs), 40%);
      --headings-color:       hsl(var(--base-hs), 19%);
      --link-color:           hsl(var(--accent-hs), 51%);
      --link-color-hover:     hsl(var(--base-hs), 19%);
      --code-color:           hsl(var(--code), 51%);
      --code-bg:              hsl(var(--code), 96%);
      --msg-highlight-bg:     hsl(var(--yellow), 96%);
      --msg-highlight-border: hsl(var(--yellow), 60%);
      --msg-highlight-color:  hsl(var(--yellow), 26%);
      --msg-info-bg:          hsl(var(--blue), 96%);
      --msg-info-border:      hsl(var(--blue), 51%);
      --msg-info-color:       hsl(var(--blue), 35%);
      --msg-success-bg:       hsl(var(--green), 96%);
      --msg-success-border:   hsl(var(--green), 34%);
      --msg-success-color:    hsl(var(--green), 17%);
      --msg-warning-bg:       hsl(var(--red), 96%);
      --msg-warning-border:   hsl(var(--red), 57%);
      --msg-warning-color:    hsl(var(--red), 36%);
    `;
  }

  if (params.colorScheme === 'dark') {
    const darkColorVariables = getColorVariables('colorSchemeDark', params, darkPredefinedSchemes);
    for (const [key, value] of Object.entries(darkColorVariables)) {
      output += `    ${key}: ${value};\n`;
    }
    output += `
      --white:                hsl(0, 0%, 100%);
      --black:                hsl(0, 0%, 0%);
      --dark:                 hsl(var(--base-hs), 66%);
      --helper:               hsl(var(--base-hs), 16%);
      --border-color:         hsl(var(--base-hs), 22%);
      --light:                hsl(var(--base-hs), 14%);
      --page-bg:              hsl(var(--base-hs), 10%);
      --primary-color:        hsl(var(--accent-hs), 54%);
      --secondary-color:      hsl(var(--base-hs), 70%);
      --logo-color:           hsl(var(--base-hs), 90%);
      --text-color:           hsl(var(--base-hs), 76%);
      --text-light-color:     hsl(var(--base-hs), 56%);
      --headings-color:       hsl(var(--base-hs), 90%);
      --link-color:           hsl(var(--accent-hs), 63%);
      --link-color-hover:     hsl(var(--base-hs), 90%);
      --btn-bg:               hsl(var(--accent-hs), 54%);
      --btn-bg-hover:         hsl(var(--accent-hs), 40%);
      --code-color:           hsl(var(--code), 51%);
      --code-bg:             hsl(var(--base-hs), 14%);
      --msg-highlight-bg:     hsl(var(--base-hs), 16%);
      --msg-highlight-border: hsl(var(--yellow), 60%);
      --msg-highlight-color:  hsl(var(--yellow), 62%);
      --msg-info-bg:          hsl(var(--base-hs), 16%);
      --msg-info-border:      hsl(var(--blue), 60%);
      --msg-info-color:       hsl(var(--blue), 66%);
      --msg-success-bg:       hsl(var(--base-hs), 16%);
      --msg-success-border:   hsl(var(--green), 60%);
      --msg-success-color:    hsl(var(--green), 62%);
      --msg-warning-bg:       hsl(var(--base-hs), 16%);
      --msg-warning-border:   hsl(var(--red), 60%);
      --msg-warning-color:    hsl(var(--red), 62%);
    `;
  }

  output += `\n}`;

  if (params.colorScheme === 'auto') {
    const darkColorVariablesAuto = getColorVariables('colorSchemeDark', params, darkPredefinedSchemes);
    let darkModeOutput = '';
    for (const [key, value] of Object.entries(darkColorVariablesAuto)) {
      darkModeOutput += `      ${key}: ${value};\n`;
    }
    output += `
      @media (prefers-color-scheme: dark) {
        :root {
      ${darkModeOutput}
          --white:                hsl(0, 0%, 100%);
          --black:                hsl(0, 0%, 0%);
          --dark:                 hsl(var(--base-hs), 66%);
          --helper:               hsl(var(--base-hs), 16%);
          --border-color:         hsl(var(--base-hs), 22%);
          --light:                hsl(var(--base-hs), 14%);
          --page-bg:              hsl(var(--base-hs), 10%);
          --primary-color:        hsl(var(--accent-hs), 54%);
          --secondary-color:      hsl(var(--base-hs), 70%);
          --logo-color:           hsl(var(--base-hs), 90%);
          --text-color:           hsl(var(--base-hs), 76%);
          --text-light-color:     hsl(var(--base-hs), 56%);
          --headings-color:       hsl(var(--base-hs), 90%);
          --link-color:           hsl(var(--accent-hs), 63%);
          --link-color-hover:     hsl(var(--base-hs), 90%);
          --btn-bg:               hsl(var(--accent-hs), 54%);
          --btn-bg-hover:         hsl(var(--accent-hs), 40%);
          --code-color:           hsl(var(--code), 51%);
          --code-bg:              hsl(var(--base-hs), 14%);
          --msg-highlight-bg:     hsl(var(--base-hs), 16%);
          --msg-highlight-border: hsl(var(--yellow), 60%);
          --msg-highlight-color:  hsl(var(--yellow), 62%);
          --msg-info-bg:          hsl(var(--base-hs), 16%);
          --msg-info-border:      hsl(var(--blue), 60%);
          --msg-info-color:       hsl(var(--blue), 66%);
          --msg-success-bg:       hsl(var(--base-hs), 16%);
          --msg-success-border:   hsl(var(--green), 60%);
          --msg-success-color:    hsl(var(--green), 62%);
          --msg-warning-bg:       hsl(var(--base-hs), 16%);
          --msg-warning-border:   hsl(var(--red), 60%);
          --msg-warning-color:    hsl(var(--red), 62%);
        }
      }
      `;
  }

  return output;
}

module.exports = generateThemeVariables;