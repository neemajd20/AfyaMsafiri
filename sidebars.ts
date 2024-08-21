import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  documentationSidebar: [ 
     {

    type: 'category',
    label: 'Introduction to AfyaMsafiri',
    items: [
      'Background',
      'Rationale',
      'Objectives',
      'Scope',
    ],
     },
    {

      type: 'category',
      label: 'System Requirement and Components',
      items: [
        'System-Access-Requirement',
        'System-Components',
      ],
       },
       {

        type: 'category',
        label: 'AfyaMsafiri For Travelers',
        items: [
          'Accessing-afyaMsafiri-Application',
          'Filling-Travelers-Surveillance-Arrival-Form',
          'Filling-Travelers-Surveillance-Departure-Form',
          'Booking-For-Yellow-Fever-Vaccination',
          'Request-For-Card-Replacement'
       ],
        },
        ],
        }
    
export default sidebars;