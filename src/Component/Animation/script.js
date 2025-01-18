document.addEventListener("DOMContentLoaded", () => {
  // Select all divs with id starting with "page-"
  const pages = document.querySelectorAll('div[id^="page-"]');

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'active' class when in view
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
    }
  );

  // Observe each page element
  pages.forEach((page) => observer.observe(page));
});
