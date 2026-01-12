
import { FormGroup } from './types';

export const DATA_GROUPS: FormGroup[] = [
  {
    id: 'general',
    title: 'General & Contact Info',
    description: 'Basic center identification and contact details.',
    fields: [
      { id: 'name_of_respondent', label: 'Name of Respondent', type: 'text' },
      { id: 'country_where_centre_is_located', label: 'Country', type: 'text' },
      { id: 'name_of_tvet_centre', label: 'Name of TVET Centre', type: 'text' },
      { id: 'city_where_centre_is_located', label: 'City', type: 'text' },
      { id: 'locality_where_centre_is_located', label: 'Locality', type: 'text' },
      { id: 'name_of_tvet_principal_director', label: 'Principal/Director Name', type: 'text' },
      { id: 'job_title_designation', label: 'Job Title / Designation', type: 'text' },
      { id: 'are_you_a_professed_salesian', label: 'Are you a professed Salesian?', type: 'boolean' },
      { id: 'year_established', label: 'Year Established', type: 'number' },
      { id: 'google_map_coordinates', label: 'Google Map Coordinates', type: 'text' },
      { id: 'tvet_centre_registration_number', label: 'Registration Number', type: 'text' },
      { id: 'is_registration_current', label: 'Is registration up to date?', type: 'boolean' },
      { id: 'principal_email', label: 'Principal E-mail', type: 'email' },
      { id: 'principal_phone', label: 'Principal Phone Number(s)', type: 'tel' },
      { id: 'centre_email', label: 'TVET Centre E-mail', type: 'email' },
      { id: 'centre_phone', label: 'TVET Centre Phone Number(s)', type: 'tel' },
      { id: 'centre_postal_address', label: 'Postal Address', type: 'textarea' },
      { id: 'centre_physical_address', label: 'Physical Address', type: 'textarea' }
    ]
  },
  {
    id: 'digital_presence',
    title: 'Digital & Social Presence',
    description: 'Websites and social media handles for the center.',
    fields: [
      { id: 'tvet_centre_website', label: 'Website URL', type: 'url' },
      { id: 'social_facebook', label: 'Facebook Handle', type: 'text' },
      { id: 'social_linkedin', label: 'LinkedIn Handle', type: 'text' },
      { id: 'social_twitter_x', label: 'Twitter / X Handle', type: 'text' },
      { id: 'social_youtube', label: 'YouTube Handle', type: 'text' },
      { id: 'social_instagram', label: 'Instagram Handle', type: 'text' },
      { id: 'social_tiktok', label: 'TikTok Handle', type: 'text' },
      { id: 'social_other_1', label: 'Other Social Media 1', type: 'text' },
      { id: 'social_other_2', label: 'Other Social Media 2', type: 'text' }
    ]
  },
  {
    id: 'finance',
    title: 'Finance & Sustainability',
    description: 'Annual budget, income sources, and financial strategies.',
    fields: [
      { id: 'annual_operational_budget_usd', label: 'Total Annual Operational Budget (USD)', type: 'number' },
      { id: 'income_govt_funding', label: 'Government Funding (%)', type: 'percentage' },
      { id: 'income_donor_funding', label: 'Donor/NGO Funding (%)', type: 'percentage' },
      { id: 'income_student_fees', label: 'Student Fees/Tuition (%)', type: 'percentage' },
      { id: 'income_generating_activities', label: 'Income Generating Activities (%)', type: 'percentage' },
      { id: 'income_private_partnerships', label: 'Private Sector Partnerships (%)', type: 'percentage' },
      { id: 'income_alumni_contributions', label: 'Alumni Contributions (%)', type: 'percentage' },
      { id: 'income_other', label: 'Other Income Sources (%)', type: 'percentage' },
      { id: 'main_financial_challenges', label: 'Main Financial Challenges', type: 'textarea' },
      { id: 'sustainability_preparedness', label: 'Preparedness for Sustainability', type: 'textarea' },
      { id: 'sustainability_strategies', label: 'Sustainability Strategies in Place', type: 'textarea' }
    ]
  },
  {
    id: 'strategic_planning',
    title: 'Strategic Planning',
    description: 'Strategic plan details and effectiveness ratings.',
    fields: [
      { id: 'has_strategic_plan', label: 'Do you have a strategic plan?', type: 'boolean' },
      { id: 'strategic_plan_period', label: 'Time Period Covered', type: 'text' },
      { id: 'strategic_plan_effectiveness', label: 'Effectiveness Rating (1-5)', type: 'rating' },
      { id: 'success_governance', label: 'Success: Governance & Management', type: 'select', options: ['Low', 'Medium', 'High'] },
      { id: 'success_quality', label: 'Success: Quality & Relevance', type: 'select', options: ['Low', 'Medium', 'High'] },
      { id: 'success_access', label: 'Success: Access & Equity', type: 'select', options: ['Low', 'Medium', 'High'] },
      { id: 'success_funding', label: 'Success: Funding & Finance', type: 'select', options: ['Low', 'Medium', 'High'] },
      { id: 'success_technology', label: 'Success: Integration of Tech', type: 'select', options: ['Low', 'Medium', 'High'] },
      { id: 'success_networking', label: 'Success: Networking & Advocacy', type: 'select', options: ['Low', 'Medium', 'High'] },
      { id: 'strategic_plan_successful_initiative', label: 'Example of Successful Initiative', type: 'textarea' },
      { id: 'strategic_plan_ineffective_areas', label: 'Areas Requiring Improvement', type: 'textarea' }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing & Enquiries',
    description: 'Course promotion and student recruitment data.',
    fields: [
      { id: 'marketing_social_media', label: 'Promote via Social Media', type: 'boolean' },
      { id: 'marketing_tv_radio', label: 'Promote via TV/Radio', type: 'boolean' },
      { id: 'marketing_newspaper', label: 'Promote via Newspaper/Ads', type: 'boolean' },
      { id: 'marketing_word_of_mouth', label: 'Promote via Word of Mouth', type: 'boolean' },
      { id: 'marketing_career_fairs', label: 'Promote via Career Fairs', type: 'boolean' },
      { id: 'marketing_school_visits', label: 'Promote via School Visits', type: 'boolean' },
      { id: 'annual_enquiries_count', label: 'Average Enquiries per Year', type: 'number' },
      { id: 'most_effective_marketing', label: 'Most Effective Method', type: 'text' },
      { id: 'marketing_challenges', label: 'Challenges in Marketing', type: 'textarea' }
    ]
  },
  {
    id: 'trades',
    title: 'Trades & Curriculum',
    description: 'Information regarding trade certifications, curriculum, and equipment.',
    fields: [
      { id: 'name_of_trade', label: 'Name of Trade', type: 'text' },
      { id: 'duration_of_trade', label: 'Duration', type: 'text' },
      { id: 'level_of_trade', label: 'Level of Trade', type: 'text' },
      { id: 'is_trade_accredited', label: 'Is Trade Accredited?', type: 'boolean' },
      { id: 'curriculum_satisfactory', label: 'Is Curriculum Satisfactory?', type: 'boolean' },
      { id: 'curriculum_last_reviewed', label: 'Last Reviewed Date', type: 'text' },
      { id: 'curriculum_gaps', label: 'Perceived Gaps in Curriculum', type: 'textarea' },
      { id: 'specialized_equipment_required', label: 'Specialized Equipment Required', type: 'textarea' },
      { id: 'offers_rpl', label: 'Offers Recognition of Prior Learning (RPL)?', type: 'boolean' },
      { id: 'offers_dual_training', label: 'Offers Dual Training?', type: 'boolean' }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Facilities',
    description: 'Counts and condition of physical and digital assets.',
    fields: [
      { id: 'num_classrooms', label: 'Number of Classrooms', type: 'number' },
      { id: 'num_workshops', label: 'Number of Workshops', type: 'number' },
      { id: 'num_computer_labs', label: 'Number of Computer Labs', type: 'number' },
      { id: 'num_computers', label: 'Total Number of Computers', type: 'number' },
      { id: 'condition_classrooms', label: 'Condition: Classrooms', type: 'select', options: ['Poor', 'Fair', 'Good', 'Excellent'] },
      { id: 'condition_workshops', label: 'Condition: Workshops', type: 'select', options: ['Poor', 'Fair', 'Good', 'Excellent'] },
      { id: 'internet_access_staff', label: 'Internet Access for Staff?', type: 'boolean' },
      { id: 'internet_access_trainees', label: 'Internet Access for Trainees?', type: 'boolean' },
      { id: 'internet_connection_method', label: 'Connection Method', type: 'select', options: ['Fibre', 'Mobile', 'Satellite', 'None'] },
      { id: 'dbta_lms_access', label: 'Access to DBTA LMS?', type: 'boolean' },
      { id: 'satisfied_with_lms', label: 'Satisfaction with LMS', type: 'rating' }
    ]
  },
  {
    id: 'trainees',
    title: 'Trainee Information',
    description: 'Demographics, counts, and development programs.',
    fields: [
      { id: 'total_trainees', label: 'Total Trainees', type: 'number' },
      { id: 'total_trainees_male', label: 'Total Male Trainees', type: 'number' },
      { id: 'total_trainees_female', label: 'Total Female Trainees', type: 'number' },
      { id: 'trainees_with_disability', label: 'Trainees with Disabilities', type: 'number' },
      { id: 'trainees_refugees', label: 'Refugee Trainees', type: 'number' },
      { id: 'age_below_15', label: 'Age: Below 15', type: 'number' },
      { id: 'age_15_18', label: 'Age: 15-18', type: 'number' },
      { id: 'age_19_22', label: 'Age: 19-22', type: 'number' },
      { id: 'age_over_30', label: 'Age: Over 30', type: 'number' },
      { id: 'training_digital_skills', label: 'Digital Skills Training?', type: 'boolean' },
      { id: 'training_entrepreneurship', label: 'Entrepreneurship Training?', type: 'boolean' },
      { id: 'training_green_tvet', label: 'Green TVET Training?', type: 'boolean' },
      { id: 'training_life_skills', label: 'Life Skills Training?', type: 'boolean' }
    ]
  },
  {
    id: 'staff',
    title: 'Staff & HR',
    description: 'Staffing levels, educational qualifications, and training.',
    fields: [
      { id: 'staff_total', label: 'Total Staff Count', type: 'number' },
      { id: 'staff_teaching', label: 'Teaching Staff', type: 'number' },
      { id: 'staff_non_teaching', label: 'Non-Teaching Staff', type: 'number' },
      { id: 'staff_phd', label: 'Staff with PhD/Doctorate', type: 'number' },
      { id: 'staff_masters', label: 'Staff with Master\'s Degree', type: 'number' },
      { id: 'staff_bachelors', label: 'Staff with Bachelor\'s Degree', type: 'number' },
      { id: 'staff_diploma', label: 'Staff with Diploma', type: 'number' },
      { id: 'staff_training_digital', label: 'Staff Digital Pedagogy Training?', type: 'boolean' },
      { id: 'staff_training_salesian', label: 'Staff Salesian Pedagogy Training?', type: 'boolean' }
    ]
  },
  {
    id: 'performance',
    title: 'Performance & Graduates',
    description: 'Historical enrollment, graduation rates, and placement stats.',
    fields: [
      { id: 'enrolled_2024', label: 'Enrolled in 2024', type: 'number' },
      { id: 'graduated_2024', label: 'Graduated in 2024', type: 'number' },
      { id: 'placed_jso_2024', label: 'Placed by JSO in 2024', type: 'number' },
      { id: 'employment_rate_1yr', label: 'Employment Rate (within 1 yr)', type: 'percentage' },
      { id: 'conducts_tracer_studies', label: 'Conduct Tracer Studies?', type: 'boolean' },
      { id: 'has_alumni_association', label: 'Has Alumni Association?', type: 'boolean' },
      { id: 'employer_satisfaction_tracking', label: 'Track Employer Satisfaction?', type: 'boolean' }
    ]
  },
  {
    id: 'policy',
    title: 'Policy & Frameworks',
    description: 'National and institutional policies (RPL, Dual, Gender, Protection).',
    fields: [
      { id: 'country_rpl_framework', label: 'National RPL Framework exists?', type: 'boolean' },
      { id: 'centre_rpl_framework', label: 'Centre RPL Framework exists?', type: 'boolean' },
      { id: 'country_dual_training_framework', label: 'National Dual Training Framework?', type: 'boolean' },
      { id: 'centre_dual_training_framework', label: 'Centre Dual Training Framework?', type: 'boolean' },
      { id: 'gender_inclusivity_policy', label: 'Centre Inclusivity Policy?', type: 'boolean' },
      { id: 'safeguarding_policy', label: 'Safeguarding & Protection Policy?', type: 'boolean' },
      { id: 'safeguarding_officer', label: 'Has Safeguarding Officer?', type: 'boolean' }
    ]
  },
  {
    id: 'outreach',
    title: 'Events & Outreach',
    description: 'Stakeholder collaborations and day celebrations.',
    fields: [
      { id: 'celebrate_womens_day', label: 'Celebrate Women\'s Day?', type: 'boolean' },
      { id: 'celebrate_env_day', label: 'Celebrate Environmental Day?', type: 'boolean' },
      { id: 'celebrate_african_child', label: 'Celebrate Day of African Child?', type: 'boolean' },
      { id: 'collaborates_tvet_centres', label: 'Collaborates with other TVET Centres?', type: 'boolean' },
      { id: 'engagement_dialogues', label: 'Participate in Decent Work Dialogues?', type: 'boolean' }
    ]
  }
];
