// pages/careers.tsx OR app/careers/page.tsx
import React from 'react';
import Head from 'next/head'; // Optional: for page title

// Interface for Job Opening structure (optional but good practice)
interface JobOpening {
    title: string;
    details: {
        location?: string;
        role?: string;
        requirements?: string;
    };
}

// Interface for FAQ structure (optional)
interface FAQItem {
    question: string;
    answer: string;
}

export default function CareersPage(): JSX.Element {

    // Data for Job Openings (can be fetched from an API later)
    const jobOpenings: JobOpening[] = [
        {
            title: 'Sales Executive',
            details: {
                location: 'Remote / On-site',
                requirements: 'Experience in sales, working with real estate professionals and showcasing the value of Leadbuddy\'s high-quality leads. Requirements: Experience in sales, excellent communication skills, and a passion for real estate.'
            }
        },
        {
            title: 'Digital Marketing Specialist',
            details: {
                location: 'Remote',
                role: 'Develop and manage digital marketing strategies to reach new clients and increase Leadbuddy\'s brand visibility.',
                requirements: 'Proficiency in SEO/SEM, social media, and email marketing, strong analytical skills.'
            }
        },
        {
            title: 'Customer Success Manager',
            details: {
                location: 'On-site / Hybrid',
                role: 'Support clients in maximizing the benefits of Leadbuddy\'s services, providing guidance, and ensuring satisfaction.',
                requirements: 'Strong communication skills, customer service orientation, and knowledge of the real estate industry.'
            }
        },
        {
            title: 'Data Analyst',
            details: {
                location: 'Remote',
                role: 'Analyze market trends and metrics to optimize lead quality and improve targeting for our clients.',
                requirements: 'Proficiency in data analysis tools, experience in data mining or analysis, and attention to detail.'
            }
        },
        {
            title: 'Content Writer',
            details: {
                location: 'Remote',
                role: 'Create engaging, informative content for our website, blog, and social media to attract and educate potential clients.',
                requirements: 'Strong writing skills, knowledge of SEO, and experience in content creation.'
            }
        }
    ];

    // Data for FAQs (can be fetched later)
    const faqs: FAQItem[] = [
        {
            question: 'Can I apply for multiple positions?',
            answer: 'Yes, you can apply for multiple positions that match your skills and interests. Submit a separate application for each role.'
        },
        {
            question: 'What is the interview process like?',
            answer: 'Our process typically involves an initial screening, one or two initial interviews, and a final in-person or virtual interview with the hiring team.'
        },
        {
            question: 'Are remote positions available?',
            answer: 'Yes, Leadbuddy offers remote positions as well as hybrid and on-site options based on the role.'
        }
    ];


    return (
        <>
            <Head>
                <title>Careers at LeadBuddy - Join Our Team</title>
                <meta name="description" content="Explore career opportunities at LeadBuddy and help shape the future of real estate lead generation." />
            </Head>

            {/* Main container with padding and max-width for content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

                {/* Header Section */}
                <header className="mb-10 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        Careers at LeadBuddy
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4">
                        Join Our Team and Shape the Future of Real Estate Lead Generation
                    </h2>
                    <p className="text-base text-gray-700">
                        At LeadBuddy, we are passionate about connecting real estate professionals with high-quality, motivated property buyers. As we grow, we are always looking for motivated, talented individuals to join us in reshaping the lead generation industry. If you're driven, innovative, and excited about making a real impact, LeadBuddy could be the perfect place for you.
                    </p>
                </header>

                {/* Current Open Positions Section */}
                <section className="mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Current Open Positions
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Join our dynamic team! Below are the current openings at LeadBuddy. If you find a role that excites you, we'd love to hear from you:
                    </p>
                    <ul className="space-y-6">
                        {jobOpenings.map((job, index) => (
                            <li key={index} className="pl-4 border-l-4 border-indigo-200">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{job.title}</h3>
                                {job.details.location && <p className="text-sm text-gray-600"><strong className="font-medium">Location:</strong> {job.details.location}</p>}
                                {job.details.role && <p className="text-sm text-gray-600"><strong className="font-medium">Role:</strong> {job.details.role}</p>}
                                {job.details.requirements && <p className="text-sm text-gray-600 mt-1"><strong className="font-medium">Requirements:</strong> {job.details.requirements}</p>}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Why Work at LeadBuddy? Section */}
                <section className="mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Why Work at LeadBuddy?
                    </h2>
                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                        <li><strong className="font-medium">Innovation Environment:</strong> Join a team of forward-thinking professionals who are constantly exploring new ways to improve the real estate lead generation industry.</li>
                        <li><strong className="font-medium">Growth Opportunities:</strong> We value continuous learning and provide opportunities for professional development, mentorship, and career growth.</li>
                        <li><strong className="font-medium">Impactful Work:</strong> Every role at Leadbuddy contributes directly to helping real estate agents, brokers, and developers succeed in a competitive industry.</li>
                        <li><strong className="font-medium">Flexible Work Options:</strong> We offer a flexible work environment that accommodates your needs and promotes work-life balance.</li>
                        <li><strong className="font-medium">Inclusion and Collaboration:</strong> Thrive in a supportive and collaborative environment where everyone's voice matters, and innovation is encouraged.</li>
                    </ul>
                </section>

                {/* Our Core Values Section */}
                <section className="mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Our Core Values
                    </h2>
                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                        <li><strong className="font-medium">Integrity:</strong> We operate honestly and transparently, guided by strong ethics.</li>
                        <li><strong className="font-medium">Customer Focus:</strong> We prioritize our clients' needs, striving to ensure satisfaction and success.</li>
                        <li><strong className="font-medium">Innovation:</strong> We continuously seek creative solutions to challenges in lead generation.</li>
                        <li><strong className="font-medium">Teamwork:</strong> We collaborate and support each other to achieve shared goals.</li>
                    </ul>
                </section>

                {/* How to Apply Section */}
                <section className="mb-10 sm:mb-12 p-6 bg-indigo-50 rounded-lg">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
                        How to Apply
                    </h2>
                    <p className="text-gray-700">
                        Interested in joining Leadbuddy? Send your resume and a cover letter to <a href="mailto:careers@leadbuddy.io" className="text-indigo-600 hover:text-indigo-800 font-medium">careers@leadbuddy.io</a>. Please mention the position you are applying for in the subject line. We look forward to hearing more about you and seeing how you could be a great fit for our team!
                    </p>
                </section>

                {/* Perks and Benefits Section */}
                <section className="mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Perks and Benefits
                    </h2>
                     <ul className="space-y-3 list-disc list-inside text-gray-700">
                        <li><strong className="font-medium">Competitive Salary Packages:</strong> We offer competitive compensation packages, recognizing your skills and experience.</li>
                        <li><strong className="font-medium">Health and Wellness:</strong> Comprehensive health benefits to support your well-being (details may vary).</li>
                        <li><strong className="font-medium">Flexible Work Hours:</strong> We understand the importance of work-life balance and offer flexible scheduling options.</li>
                        <li><strong className="font-medium">Team Building Events:</strong> Participate in team lunches, virtual gatherings, and company outings.</li>
                    </ul>
                </section>

                 {/* Life at LeadBuddy Section */}
                <section className="mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Life at LeadBuddy
                    </h2>
                    <p className="text-gray-700">
                        At LeadBuddy, you'll be part of a close-knit, inclusive company culture. We value diversity, respect, and equal opportunity for everyone on our team. Whether working remotely or from the office, you'll experience an environment that celebrates collaboration and creativity. Join us in making an impact on the future of real estate lead generation!
                    </p>
                </section>

                 {/* FAQ Section */}
                <section>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Frequently Asked Questions
                    </h2>
                    <dl className="space-y-4">
                        {faqs.map((faq, index) => (
                             <div key={index}>
                                <dt className="font-semibold text-gray-800">Q: {faq.question}</dt>
                                <dd className="mt-1 text-gray-600 pl-4">A: {faq.answer}</dd>
                             </div>
                        ))}
                    </dl>
                </section>

            </div>
        </>
    );
}