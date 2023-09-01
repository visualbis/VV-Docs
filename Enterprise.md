### Inforiver Matrix Enterprise 2.4 Release Notes:

1. **Scheduler - Improved Execution with Report Filters**:
   - Enhancements to the scheduler to execute schedules with report filters more efficiently.
   
2. **Isolated Entity Storage Destination Table**:
   - Isolated storage destination table shared by Scheduler and Writeback for improved data management.

3. **Debounce Auto Write-backs**:
   - Added the ability to debounce auto write-backs based on user preferences to reduce unnecessary operations.

4. **API Updates for Exception Objects**:
   - Updated APIs to send modified exception objects, improving compatibility with the Admin console and Visual components.

5. **Version Check SQL Query**:
   - Included a version check SQL query call during destination creation for better compatibility and tracking.

6. **Writeback Payload Enhancement**:
   - Improved Writeback payload to contain meta-information of allocation to frame where clause, facilitating more precise data handling.

7. **API Support for Debounce Settings**:
   - Introduced API changes to support debounce settings, giving users more control over their operations.

8. **Performance Improvements - Scenario Simulation**:
   - Part 4: Re-Calc on simulation optimization for enhanced scenario performance.
   - Part 5: Implemented a hybrid approach for further performance enhancements.

9. **Isolated Permission Table**:
   - Isolated permission table shared by scenario and writeback for better data access control.

10. **Writeback Prerequisite API Update**:
    - Updated Writeback prerequisite API to include baselining checks at the scenario level, ensuring data integrity.

11. **Scheduler Enhancements**:
    - Added logs and job filters similar to RLS (Row-Level Security) implementation for better job management.

12. **Batch Polling for Autowriteback**:
    - Integrated batch polling for Autowriteback in the Visual component for more efficient data synchronization.

13. **Time Dimension Sorting**:
    - Added the option to sort time dimensions that are not in Power BI format for improved data organization.

14. **Data Input Improvements**:
    - Enhanced single-select options by adding the ability to add options from the Dataset window and providing searchable dropdown options.

15. **Measure on Rows Support for Scenario**:
    - Added support for measures on rows within scenarios, expanding data analysis capabilities.

16. **Time Intelligence Support**:
    - Provided support for time dimensions with both year and quarter data together, improving time-based analysis.

17. **Writeback Logs Filtering**:
    - Added support to filter writeback logs based on events, making it easier to track specific data changes.

18. **Scheduled Snapshot Optimization**:
    - Conducted performance testing and optimization for scheduled snapshots to improve efficiency.

19. **Reforecast Values for Open Periods**:
    - Implemented the ability to reforecast values for open periods, enhancing forecasting capabilities.

20. **Browser Timezone Reflection**:
    - Date field in the admin console now reflects the browser timezone and date format, ensuring accurate time representation.

21. **Forecast Enhancement**:
    - Subtotal column of closed periods is now greyed out in the forecast for improved data visualization.

22. **Writeback Log Screen Optimization**:
    - Optimized the writeback log screen for a smoother user experience.

23. **Autopause Autowriteback**:
    - Autowriteback will now automatically pause and display a toast message if the scenario is not baselined or disabled.

24. **Code Refactoring**:
    - Moved specific code from the base class to the Inforiver class for better code organization.

25. **Data Handling Improvement**:
    - Improved data handling by saving 0 as 0 instead of null in SAP HANA and Oracle during writeback operations.

### Bug Fixes:

- Fixed various bugs and addressed performance issues for a more stable and reliable application.
 
