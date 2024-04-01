const searchBars = document.querySelectorAll('.search-bar');

searchBars.forEach(searchBar => {
    const dropdown = searchBar.nextElementSibling;
    const doneButton = dropdown.querySelector('.done-button');
    const selectedCount = dropdown.querySelector('.selected-count');

    let selectedOptions = 0;

    searchBar.addEventListener('click', function() {
        dropdown.style.display = 'block';
    });

    doneButton.addEventListener('click', function() {
        dropdown.style.display = 'none';
        selectedCount.textContent = `Selected: ${selectedOptions} options`;
    });

    document.addEventListener('click', function(e) {
        if (!searchBar.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    dropdown.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.querySelector('input').checked) {
                selectedOptions++;
            } else {
                selectedOptions--;
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const searchBars = document.querySelectorAll('.search-bar');

    searchBars.forEach(function(searchBar) {
        const dropdown = searchBar.nextElementSibling;
        const doneButton = dropdown.querySelector('.done-button');
        const checkboxes = dropdown.querySelectorAll('.checkbox input');
        const countDisplay = searchBar.nextElementSibling.nextElementSibling;

        searchBar.addEventListener('click', function() {
            dropdown.style.display = 'block';
        });

        doneButton.addEventListener('click', function(event) {
            event.preventDefault(); // prevent refresh
            dropdown.style.display = 'none';
            displaySelectedCount();
        });

        document.addEventListener('click', function(e) {
            if (!searchBar.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
                displaySelectedCount();
            }
        });

        function displaySelectedCount() {
            const selectedOptions = Array.from(checkboxes).filter(checkbox => checkbox.checked);
            countDisplay.textContent = `Selected: ${selectedOptions.length}`;
        }
    });
});

