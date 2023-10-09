**Release Notes: Infroiver Enterprise Version 2.5.1**

**Audit:**
- **Formula Capture:** Audit feature now captures and logs formulas used in Data Input Columns, providing enhanced transparency into data processes.

**Data Input:**
- **Bulk Static Row Insertion:** Users can now benefit from a bulk insert static row option, streamlining data input processes.
- **Copy Configuration Enhancement:** Resolved customer issue - 'Copy as Data Input' now replicates all available configurations.
- **Field Validation:** Added field validation for text-type data input columns, meeting Disney's specific requirements.
- **Dynamic Dropdown Control:** Users now have the option to control the addition of dynamic items in single/multi-select dropdowns, enhancing viewer control.
- **Dropdown Values Generation:** Dropdown values can now be generated from another data input column, improving data consistency.
- **Copy Support for Non-Numeric Data Input:** Non-numeric data input types now support the copy option for totals, including the ability to copy to all rows in the grandparent, improving efficiency.

**Forecasting:**
- **Extended Forecast Calculation:** Users can now extend and calculate forecasts on a month-by-month basis.
- **Time Extension on Past Periods:** Enabled the allowance of time extension on past periods.
- **Column Visibility Control:** Hide/Show all closed period columns in the forecast for better data focus.
- **Custom Column Creation:** Introduced an option to create a column in the forecast to display closed period values based on selected aggregation.
- **Column Distribution for Open Forecast Periods:** Users can now create a column and distribute values for open forecast periods.

**Scenario:**
- **User-Friendly Scenario Management:** Moved the create scenario button next to Manage Measures for improved user experience.

**Scheduler:**
- **Admin Console Enhancements:** Admin console user management layout now includes additional information such as last login, added at, and role on the list of users in table view.

**Snapshot:**
- **Forecast Variance Calculation:** Introduced the ability to calculate forecast variance across snapshots, allowing users to compare snapshots.
- **Security and RLS Impact:** Considered the impact of data security and Row-Level Security (RLS) in snapshots.
- **Performance Optimization:** Conducted performance testing and optimization for scheduled snapshots.
- **Scheduled Snapshot Functionality:** Users can now schedule snapshots for automated data capture.

**Writeback:**
- **Matrix Filter Writeback:** Users can now write back data using the Inforiver matrix filter.
- **User-Managed Writeback Destination UI:** Admin console now includes a user-friendly UI for users to input user-managed writeback destination table.
- **Azure SQL and SQL Server Warning:** Displays a warning if permission is not granted for bulk insert in Azure SQL and SQL Server, allowing users to save the destination.
- **Filter Options:** Include/exclude totals and subtotals filter added along with custom filter for writeback.
- **Optimization:** Optimized the call to prerequisite API in the visual for better performance.
- **Constraints for Writeback Measure:** Added the ability to add constraints for the writeback measure and display data that does not meet constraints during writeback.
- **User-Managed Table Mismatch UI:** Improved UI for displaying user-managed table column mismatch instead of a drop table pop-up.
- **New Writeback Destination - Dataverse:** Introduced a new writeback destination - Dataverse.
- **Writeback Validation Conditions:** Writeback validation now triggers after certain conditions are met.
- **Fabric Integration:** Integration with Fabric Datawarehouse and Fabric Lakehouse introduced as new destinations.

**Snapshot and Reference:**
- **Measure on Rows Support in Snapshot:** Implemented support for measures on rows in Snapshot.
- **Data Input Reference to Existing Columns:** Users can now create data input that references existing columns.

**Customer Requirement:**
- **URL Removal Option:** Added an option to remove URLs in duplicate reports listing, meeting Disney's specific requirements.
