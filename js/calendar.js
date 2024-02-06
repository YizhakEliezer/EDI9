function toggleDatePicker() {
    var datePicker = document.getElementById("datePicker");
    if (datePicker.style.display === "none") {
        datePicker.style.display = "block";
        generateYears();
        generateCalendar();
    } else {
        datePicker.style.display = "none";
    }
}

function generateYears() {
    var yearSelect = document.getElementById("yearSelect");
    var currentYear = new Date().getFullYear();
    for (var i = currentYear - 10; i <= currentYear + 10; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        yearSelect.add(option);
    }
}

function generateCalendar() {
    var monthSelect = document.getElementById("monthSelect");
    var yearSelect = document.getElementById("yearSelect");
    var selectedMonth = parseInt(monthSelect.value);
    var selectedYear = parseInt(yearSelect.value);

    var daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    var firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

    var calendarTable = document.getElementById("calendar");
    calendarTable.innerHTML = '';

    var headerRow = calendarTable.insertRow();
    var daysOfWeek = [];
    for (var i = 0; i < daysOfWeek.length; i++) {
        var cell = headerRow.insertCell();
        cell.innerHTML = daysOfWeek[i];
    }

    var date = 1;
    for (var i = 0; i < 6; i++) {
        var row = calendarTable.insertRow();
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                var cell = row.insertCell();
                cell.innerHTML = "";
            } else if (date > daysInMonth) {
                break;
            } else {
                var cell = row.insertCell();
                cell.innerHTML = '<span onclick="selectDate(' + date + ',' + (selectedMonth + 1) + ',' + selectedYear + ')">' + date + '</span>';
                date++;
            }
        }
    }
}

function selectDate(day, month, year) {
    var formattedDate = day.toString().padStart(2, '0') + '/' + month.toString().padStart(2, '0') + '/' + year;
    document.getElementById("selectedDateGroup").value = formattedDate;
    document.getElementById("datePicker").style.display = "none";
}