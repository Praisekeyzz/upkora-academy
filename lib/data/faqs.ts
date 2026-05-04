export interface FAQItem {
  question: string
  answer: string
}

export const defaultFaqs: FAQItem[] = [
  {
    question: "What is Upkora Academy?",
    answer: "Upkora Academy is an online learning platform that provides industry-relevant courses in technology, design, and business. Our mission is to bridge the skill gap and empower students with practical, job-ready skills.",
  },
  {
    question: "How do I enroll in a course?",
    answer: "Simply browse our course catalog, select the course you're interested in, and click the 'Enroll' button. Once payment is confirmed, you'll get instant access to all course materials.",
  },
  {
    question: "Are the certificates recognized by employers?",
    answer: "Yes, our certificates are designed to showcase your skills and are recognized by many top employers in the industry. They serve as proof of your dedication and expertise in your chosen field.",
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Absolutely! Once you enroll in a course, you get lifetime access to the content. You can learn whenever and wherever it's convenient for you.",
  },
  {
    question: "Is there mentorship available?",
    answer: "Yes, many of our courses include access to expert mentors and a vibrant community of fellow students where you can ask questions and get feedback on your projects.",
  },
]

export const extendedFaqs: FAQItem[] = [
  ...defaultFaqs,
  {
    question: "What are the prerequisites for the bootcamps?",
    answer: "Prerequisites vary by track. While Software Development and Data Science benefit from some basic technical familiarity, our beginner-friendly bootcamps are designed to take you from zero to job-ready.",
  },
  {
    question: "Do you offer job placement assistance?",
    answer: "Yes! Our career services team provides resume reviews, interview prep, and access to our hiring partner network to help you land your dream role after graduation.",
  },
  {
    question: "What payment options are available?",
    answer: "We offer several flexible options including up-front payments with discounts, monthly installments, and deferred payment plans through our financial partners.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "We stand by the quality of our education. If you are not satisfied with your experience within the first 14 days, we offer a full refund, no questions asked.",
  },
  {
    question: "How long does a typical bootcamp take to complete?",
    answer: "Full-time bootcamps typically take 12-16 weeks, while part-time tracks are designed to be completed in 6-9 months, allowing you to learn alongside your current job.",
  },
]
