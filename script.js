document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const closeBtn = loginModal.querySelector('.close');
  const searchForm = document.getElementById('searchForm');
  const userTypeLogin = document.getElementById('userTypeLogin');

  // Theme toggle functionality
  themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const icon = themeToggle.querySelector('i');
      if (document.body.classList.contains('dark-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
      }
  });

  // Login modal functionality
  loginBtn.addEventListener('click', () => {
      loginModal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
      loginModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === loginModal) {
          loginModal.style.display = 'none';
      }
  });

  // User type login buttons
  const userTypes = ['Passenger', 'Driver', 'Conductor', 'Scheduler', 'Planner', 'Manager'];
  userTypes.forEach(type => {
      const button = document.createElement('button');
      button.textContent = `${type} Login`;
      button.addEventListener('click', () => {
          alert(`Redirecting to ${type} dashboard...`);
          // Here you would typically redirect to the specific dashboard
      });
      userTypeLogin.appendChild(button);
  });

  // Bus search functionality
  searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;
      const date = document.getElementById('date').value;

      // Simulated search results
      const results = [
          { id: 1, from: 'Station A', to: 'Station B', time: '10:00 AM' },
          { id: 2, from: 'Station C', to: 'Station D', time: '11:30 AM' },
      ];

      displaySearchResults(results);
  });

  function displaySearchResults(results) {
      const searchResults = document.getElementById('searchResults');
      searchResults.innerHTML = '';

      results.forEach(result => {
          const resultElement = document.createElement('div');
          resultElement.classList.add('search-result');
          resultElement.innerHTML = `
              <p><strong>From:</strong> ${result.from}</p>
              <p><strong>To:</strong> ${result.to}</p>
              <p><strong>Time:</strong> ${result.time}</p>
          `;
          searchResults.appendChild(resultElement);
      });
  }

  // Live location map (placeholder)
  const map = document.getElementById('map');
  map.innerHTML = '<p>Live bus location map will be displayed here</p>';

  // Notice board
  const notices = [
      { id: 1, title: 'Route Change', content: 'Route 123 will be diverted due to road construction.' },
      { id: 2, title: 'New Bus Service', content: 'New express service starting from next week.' },
  ];

  const notice