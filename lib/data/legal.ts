export interface LegalSection {
  id: string
  title: string
  intro?: string
  body?: string
  list?: string[]
  outro?: string
}

export const privacyLastUpdated = "1 May 2026"

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body:
      "This Privacy Policy describes how Upkora Academy (“we,” “us,” or “our”) collects, uses, shares, and protects your personal information when you use our learning platform, our website, and the related services (collectively, the “Service”). By creating an account or using the Service, you agree to the practices described here.",
  },
  {
    id: "information-collect",
    title: "Information We Collect",
    intro:
      "We collect information to provide a personalized and effective learning experience. The categories below reflect what we collect:",
    list: [
      "Account details: full name, email address, and profile preferences.",
      "Learning progress: courses enrolled, modules completed, quiz scores, and certifications earned.",
      "Payment data: bank account details or card information for course purchases, handled securely by our payment partners.",
      "Interaction data: messages to instructors, forum posts, and support tickets.",
      "Device data: IP address, browser type, and usage patterns to improve our platform performance.",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    intro: "We use your information for the following purposes:",
    list: [
      "Deliver Education: providing access to courses, tracking your progress, and issuing certificates.",
      "Personalization: recommending courses based on your interests and previous learning history.",
      "Communication: sending updates about your courses, new features, and marketing content (with your consent).",
      "Safety: preventing unauthorized access and ensuring a safe learning environment.",
      "Improvement: analyzing data to refine our course content and platform features.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body:
      "We keep your personal information as long as your account is active. Educational records (certifications and course completions) are kept indefinitely unless you request deletion, to ensure you can always access your credentials.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    list: [
      "Access and download your learning data.",
      "Correct any inaccurate personal information.",
      "Request account deletion (subject to legal or financial retention requirements).",
      "Opt-out of marketing communications.",
    ],
    outro: "Contact us at privacy@upkora.com to exercise these rights.",
  },
]

export const termsLastUpdated = "1 May 2026"

export const termsSections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body:
      "These Terms and Conditions govern your use of the Upkora Academy platform. By enrolling in a course or using our services, you agree to these terms in full.",
  },
  {
    id: "license",
    title: "License to Use",
    body:
      "Upon purchasing a course, Upkora Academy grants you a personal, non-exclusive, non-transferable license to access and view the course content for your own personal, non-commercial educational purposes.",
  },
  {
    id: "conduct",
    title: "Student Conduct",
    intro: "As a student at Upkora Academy, you agree not to:",
    list: [
      "Record, copy, or redistribute course materials without written permission.",
      "Share your account credentials with others.",
      "Harass instructors or other students in forums or chats.",
      "Use automated systems to scrape content from the platform.",
    ],
  },
  {
    id: "payments",
    title: "Payments and Refunds",
    body:
      "All course fees must be paid in full at the time of enrollment. We offer a 14-day money-back guarantee for most courses, provided you have not completed more than 20% of the content.",
  },
  {
    id: "certification",
    title: "Certifications",
    body:
      "Certificates are issued upon successful completion of all required modules and assessments for a specific course. Upkora Academy reserves the right to withhold certification if academic dishonesty is detected.",
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body:
      "Upkora Academy provides educational content to help you improve your skills. We do not guarantee specific employment outcomes or salary increases as a result of taking our courses.",
  },
  {
    id: "contact",
    title: "Contact Us",
    body: "Questions about these Terms? Reach out at legal@upkora.com.",
  },
]
