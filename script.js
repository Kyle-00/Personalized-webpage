document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const form = document.getElementById('userForm');
  const nameInput = document.getElementById('nameInput');
  const ageInput = document.getElementById('ageInput');
  const formErrorDiv = document.getElementById('formError');
  const greetingDiv = document.getElementById('greetingMessage');
  const ageMonthsDiv = document.getElementById('ageMonthsDisplay');
  const adultContentDiv = document.getElementById('adultContentMessage');
  const quoteContainer = document.getElementById('quoteLoopContainer');

  // Helper: calculate age in months
  const calculateAgeInMonths = (years) => {
    if (!years || isNaN(years)) return null;
    return Math.floor(years * 12);
  };

  // Helper: escape HTML to prevent XSS
  const escapeHTML = (str) => {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
      if (m === '&') return '&amp;';
      if (m === '<') return '&lt;';
      if (m === '>') return '&gt;';
      return m;
    });
  };

  // Update greeting using template literal
  const updateGreeting = (name) => {
    if (name && name.trim() !== '') {
      greetingDiv.innerHTML = `Hello, <span style="color:#b45309;">${escapeHTML(name.trim())}</span>! Your journey matters.`;
    } else {
      greetingDiv.innerHTML = `Welcome, fellow dreamer. Please tell us your name.`;
    }
  };

  // Update age in months display
  const updateAgeMonths = (age) => {
    if (age && !isNaN(age) && age > 0) {
      const months = calculateAgeInMonths(age);
      ageMonthsDiv.innerHTML = `${months} months <span style="font-size:0.9rem; font-weight:normal;">(${age} years)</span>`;
    } else {
      ageMonthsDiv.innerHTML = '-- no valid age provided --';
    }
  };

  // Adult content if/else statement
  const updateAdultContent = (age) => {
    if (!age || isNaN(age) || age <= 0) {
      adultContentDiv.innerHTML = 'Please provide a valid age using the form.';
      return;
    }
    if (age >= 18) {
      adultContentDiv.innerHTML = 'You can access adult content. (Mature discussions & curated insights available)';
    } else {
      adultContentDiv.innerHTML = 'You are too young for adult content. But enjoy our motivational and family-friendly zone!';
    }
  };

  // Loop to display a motivational quote 5 times
  const renderMotivationalQuotesLoop = () => {
    const quoteText = "The only limit to your impact is your imagination and commitment. — Tony Robbins";
    quoteContainer.innerHTML = '';
    
    // For loop: display same quote 5 times
    for (let i = 0; i < 5; i++) {
      const quoteCard = document.createElement('div');
      quoteCard.className = 'quote-card';
      quoteCard.innerHTML = `
        <div class="quote-icon">💬</div>
        <div class="quote-text">
          “${quoteText}”
          <div class="quote-counter">repetition ${i+1}/5</div>
        </div>
      `;
      quoteContainer.appendChild(quoteCard);
    }
  };

  // Save data to localStorage and refresh UI
  const saveUserDataAndRefresh = (name, age) => {
    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge <= 0 || parsedAge > 120) {
      formErrorDiv.textContent = 'Please enter a valid age between 1 and 120.';
      return false;
    }
    if (!name || name.trim() === '') {
      formErrorDiv.textContent = 'Please enter your name.';
      return false;
    }

    formErrorDiv.textContent = '';
    localStorage.setItem('userName', name.trim());
    localStorage.setItem('userAge', parsedAge.toString());

    updateUIFromStorage();
    return true;
  };

  // Load from localStorage and update all sections
  const updateUIFromStorage = () => {
    const storedName = localStorage.getItem('userName');
    const storedAge = localStorage.getItem('userAge');
    const ageNumber = storedAge ? parseInt(storedAge, 10) : null;

    if (storedName) {
      updateGreeting(storedName);
    } else {
      greetingDiv.innerHTML = 'Welcome, explorer. Share your name & age above.';
    }

    if (ageNumber && !isNaN(ageNumber)) {
      updateAgeMonths(ageNumber);
      updateAdultContent(ageNumber);
    } else {
      ageMonthsDiv.innerHTML = '-- no age data yet --';
      adultContentDiv.innerHTML = 'Please submit your age to see adult content eligibility.';
    }

    // Always render the motivational quote loop (5 times)
    renderMotivationalQuotesLoop();
  };

  // Form submit handler
  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const age = ageInput.value;
    const success = saveUserDataAndRefresh(name, age);
    if (success) {
      nameInput.value = '';
      ageInput.value = '';
      formErrorDiv.style.color = '#15803d';
      formErrorDiv.textContent = 'Data saved! Dashboard updated.';
      setTimeout(() => {
        formErrorDiv.textContent = '';
        formErrorDiv.style.color = '#dc2626';
      }, 2500);
    }
  };

  // Event listener
  form.addEventListener('submit', onFormSubmit);

  // Pre-populate form fields if data exists in localStorage
  const existingName = localStorage.getItem('userName');
  const existingAge = localStorage.getItem('userAge');
  if (existingName) nameInput.value = existingName;
  if (existingAge) ageInput.value = existingAge;

  // Initial load
  updateUIFromStorage();
});