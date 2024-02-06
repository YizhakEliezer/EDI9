
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("retailerInputSearch");
    const selectedValueInput = document.getElementById("nameRetailer");

    // Fetch data from JSON file (replace 'data.json' with your file)
    fetch('dataJsonR&&S/retailerData.json')
        .then(response => response.json())
        .then(data => {
            // Populate the datalist with values from the JSON file
            populateDatalist(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    function populateDatalist(data) {
        const datalist = document.getElementById("retailerList");

        // Clear previous options
        datalist.innerHTML = '';

        // Add options based on the data
        data.forEach(item => {
            const option = document.createElement("option");
            option.value = item.key;
            option.dataset.value = item.value; // Set the data-value attribute
            datalist.appendChild(option);
        });
    }

    searchInput.addEventListener("input", function () {
        const inputValue = searchInput.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
        const datalist = document.getElementById("retailerList");

        // Find the selected value in the datalist based on key or value
        const selectedOption = Array.from(datalist.options).find(option =>
            option.value.toLowerCase() === inputValue || option.dataset.value.toLowerCase() === inputValue
        );

        if (selectedOption) {
            // If a matching value is found, update the selected value input with the key
            selectedValueInput.innerHTML = selectedOption.value;
        } else {
            // Clear the selected input value if no match is found
            selectedValueInput.innerHTML = '';
        }
    });

    searchInput.addEventListener("change", function () {
        const inputValue = searchInput.value;
        const datalist = document.getElementById("retailerList");

        // Find the selected value in the datalist
        const selectedOption = Array.from(datalist.options).find(option => option.value === inputValue);

        if (selectedOption) {
            // Update the search input with the selected key's value
            searchInput.value = selectedOption.dataset.value;
        }
    });
});
















document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("supllierInputSearch");
    const selectedValueInput = document.getElementById("nameSupllier");

    // Fetch data from JSON file (replace 'data.json' with your file)
    fetch('dataJsonR&&S/supllierData.json')
        .then(response => response.json())
        .then(data => {
            // Populate the datalist with values from the JSON file
            populateDatalist(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    function populateDatalist(data) {
        const datalist = document.getElementById("supllierList");

        // Clear previous options
        datalist.innerHTML = '';

        // Add options based on the data
        data.forEach(item => {
            const option = document.createElement("option");
            option.value = item.key;
            option.dataset.value = item.value; // Set the data-value attribute
            datalist.appendChild(option);
        });
    }

    searchInput.addEventListener("input", function () {
        const inputValue = searchInput.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
        const datalist = document.getElementById("supllierList");

        // Find the selected value in the datalist based on key or value
        const selectedOption = Array.from(datalist.options).find(option =>
            option.value.toLowerCase() === inputValue || option.dataset.value.toLowerCase() === inputValue
        );

        if (selectedOption) {
            // If a matching value is found, update the selected value input with the key
            selectedValueInput.innerHTML = selectedOption.value;
        } else {
            // Clear the selected input value if no match is found
            selectedValueInput.innerHTML = '';
        }
    });

    searchInput.addEventListener("change", function () {
        const inputValue = searchInput.value;
        const datalist = document.getElementById("supllierList");

        // Find the selected value in the datalist
        const selectedOption = Array.from(datalist.options).find(option => option.value === inputValue);

        if (selectedOption) {
            // Update the search input with the selected key's value
            searchInput.value = selectedOption.dataset.value;
        }
    });
});





function toggleFunction() {
    var checkBox = document.querySelector('input[type="checkbox"]');
    if (checkBox.checked) {
        console.log( 'darkMode()');

    } else {
        console.log(  'brightMode()');
    }

}
