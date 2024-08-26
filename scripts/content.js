document.addEventListener("DOMContentLoaded", function() {
    // Find the navigation menu
    let ulHeader = document.querySelector("ul.global-nav_primary-items");

    // Check if the navigation menu is found
    if (ulHeader) {
        // Create a new list item element
        let liViewPosts = document.createElement("li");
        
        // Add a class to the new list item
        liViewPosts.classList.add("global-nav__primary-item"); // Adjusted class name
        
        // Set the inner HTML of the list item
        liViewPosts.textContent = "test"; // Use textContent instead of innerHTML
        
        // Append the new list item to the navigation menu
        ulHeader.appendChild(liViewPosts);
    } else {
        // Log an error if the navigation menu is not found
        console.error("Element with class 'global-nav_primary-items' not found.");
    }
});





