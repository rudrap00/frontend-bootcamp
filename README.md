# frontend-bootcamp

1. Side Navbar:
   - Functionality:
     - Fully functional with multiple options.
     - Clicking on "Payments" displays the respective page on the right side.
     - For other options, show a white screen with the corresponding name appearing.
   - Style:
     - Fixed navbar; no collapsible feature needed for now.

2. Filter:
   - Location:
     - Notice the dropdown at the right top corner where "Last month" is written.
   - Functionality:
     - Filters the list based on the Order date.
   - Dropdown Options:
     a. Today
     b. Yesterday
     c. This Week
     d. Last Week
     e. This month
     f. This Year
     g. Last year
     h. All

3. Sort Button:
   - Location:
     - Slightly down from the filter dropdown.
   - Default State:
     - Unsorted list.
   - Click Actions:
     - 1st click: Ascending order of Order ID.
     - 2nd click: Descending order of Order ID.
     - 3rd click: No compulsory sorting.

4. Download Icon:
   - Location:
     - Next to the Sort button.
   - Functionality:
     - On click, downloads all currently visible transactions in PDF format.
     - Essentially, a snapshot of the list in PDF format.

5. Search Box:
   - Location:
     - On the left side.
   - Functionality:
     - Searches by Order ID.
     - Search Logic:
       - Not an exact match. For example, searching '1' displays all transactions with order IDs startswith '1' (e.g., 123, 124, 125).

6. Pagination:
   - Functionality:
     - Adds pagination to the UI.
     - Displays a maximum of 10 transactions at once.
     - To view another 10, the user must click on the Next button, as shown in the UI.

### Points to Remember:

1. Data:
   - No need to connect to any database; use dummy data for testing.
   
2. UI Precision:
   - Ensure the UI is pixel-perfect.

3. Responsiveness:
   - Make the UI responsive up to 800px width, covering tablet view (No need for mobile view).
