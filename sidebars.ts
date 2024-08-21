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
      'Introduction-to-Afyamsafiri/Background',
      'Introduction-to-Afyamsafiri/Rationale',
      'Introduction-to-Afyamsafiri/Objectives',
      'Introduction-to-Afyamsafiri/Scope',
    ],
     },
    {

      type: 'category',
      label: 'System Requirement and Components',
      items: [
        'System-Requirement-and-Components/System-Access-Requirement',
        'System-Requirement-and-Components/System-Components',
      ],
       },
       {

        type: 'category',
        label: 'AfyaMsafiri For Travelers',
        items: [
          'AfyaMsafiri-For-Travelers/Accessing-afyaMsafiri-Application',
          'AfyaMsafiri-For-Travelers/Booking-For-Yellow-Fever-Vaccination',
          'AfyaMsafiri-For-Travelers/Filling-Travelers-Surveilance-Arrivals-Form',
          'AfyaMsafiri-For-Travelers/Filling-Travelers-Surveilance-Departure-Form',
          'AfyaMsafiri-For-Travelers/Request-For-Card-Replacement',
       ],
        },
        {
          type: 'category',
          label: 'AfyaMsafiri-For-Managers',
          items: [
            'AfyaMsafiri-For-Managers/Accessing-AfyaMsafiri-Application',
            'AfyaMsafiri-For-Managers/Travelers-Screening',
            'AfyaMsafiri-For-Managers/Yellow-Fever-Certification',
          ],
        }
        ],
        }
    
export default sidebars;