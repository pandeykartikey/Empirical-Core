import * as React from 'react';

const SubnavTabs = () => {
  return(
    <div className="tab-subnavigation-wrapper class-subnav">
      <div className="container">
        <ul>
          <li>
            <a href="/teachers/admin_dashboard">
              Admin Dashboard
            </a>
          </li>
          <li>
            <a href="/teachers/admin_dashboard/district_activity_scores">
              Activity Scores
            </a>
          </li>
          <li>
            <a href="/teachers/admin_dashboard/district_concept_reports">
              Concept Reports 
            </a>
          </li>
          <li>
            <a href="/teachers/admin_dashboard/district_standards_reports">
             Standards Reports 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubnavTabs;
