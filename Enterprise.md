### Inforiver Matrix Enterprise
# Release Notes - Version 2.4.0
## Release Date: September 1, 2023

We are pleased to present the latest version of our software, Version 2.4.0, which brings an array of enhancements and new features to empower your data management and analysis. Here are the highlights of this release:

### Data Input:

- **Single Select Data Input Options Enhancement**:
  - Added the ability to add options from the Dataset window and improved the search functionality for more efficient data input.

### Forecasting:

- **Allow Forecast with Future Actual Values**:
  - Users can now perform forecasting even when future actual values are available, expanding forecasting capabilities.

- **Subtotal Column in Closed Periods**:
  - The subtotal column in closed periods is now greyed out for improved data visualization in forecasts.

- **Sort Time Dimensions**:
  - Introduced an option to sort time dimensions that are not in Power BI format, enhancing data organization.

- **Reforecast Open Periods**:
  - Added the ability to reforecast values for open periods, offering more flexibility in data analysis.

- **Time Intelligence Support**:
  - Enhanced support for time dimensions with year and quarter data combined for advanced time-based analysis.

### Inforiver Premium:

- **Enterprise Data Input Type for Simulation**:
  - Implemented the Enterprise data input type for simulations in Inforiver Premium, offering advanced data handling capabilities.

### Scenario:

- **Measure on Rows Support**:
  - Now supporting measures on rows within scenarios for more comprehensive data analysis.

- **Scenario Performance Enhancements**:
  - Part 4: Improved scenario performance through Re-Calc on simulation optimization.
  - Part 5: Utilized a hybrid approach to further enhance scenario performance.

- **API Updates for Modified Exception Objects**:
  - Enhanced APIs to send modified exception objects, improving compatibility with the Visual component.

### Scheduler:

- **Admin Console Date Field Enhancement**:
  - The date field in the admin console now reflects the browser timezone and date format for accurate time representation.

- **Improved Execution with Report Filters**:
  - Improved the execution of schedules with report filters for more efficient job management.

- **Logs and Job Filters**:
  - Introduced logs and job filters similar to RLS (Row-Level Security) implementation, streamlining job monitoring.

### Scheduled Snapshot:

- **Performance Optimization**:
  - Conducted performance testing and optimization for scheduled snapshots, ensuring smoother operations.

### Writeback:

- **Data Consistency Improvement**:
  - Ensured that 0 is saved as 0 instead of null in SAP HANA and Oracle during writeback, enhancing data consistency.

- **Milestone for Data Input Processing**:
  - Added a new milestone in writeback for displaying "Processing Data Input," providing better visibility.

- **API Support for Debounce Settings**:
  - Introduced API changes to support debounce settings, offering users more control over data operations.

- **Autowriteback Enhancement**:
  - Integrated batch polling for Autowriteback in the Visual component, improving data synchronization.

- **Isolated Storage Tables**:
  - Isolated Entity storage destination table shared by Scheduler and Writeback for improved data management.
  - Isolated permission table shared by scenarios and Writeback for better access control.

- **Code Optimization**:
  - Moved specific code from the base class to the Inforiver class for improved code organization.

- **Event-Based Filtering**:
  - Provided support to filter writeback logs based on events, making it easier to track specific data changes.

- **Baselining Check in Writeback Prerequisite API**:
  - Updated Writeback prerequisite API to include baselining checks at the scenario level, ensuring data integrity.

- **Writeback Payload Enhancement**:
  - Improved Writeback payload to contain meta-information of allocation to frame where clauses, enhancing data handling.
  - 
### Bug Fixes:

- Fixed various bugs and addressed performance issues for a more stable and reliable application.
 
