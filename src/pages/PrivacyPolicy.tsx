import React from 'react';
import PageHeader from '../components/PageHeader';

const PrivacyPolicy = () => {
  return (
    <div>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we protect and manage your data"
        image="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="mb-8">
              At HIGH-TOP STRUCTURES ENGINEERING (HTS-E) & PARTNERS LTD, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. The data we collect about you</h2>
            <p className="mb-4">
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-8">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How we use your personal data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-8">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
            <p className="mb-8">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Legal Rights</h2>
            <p className="mb-8">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
            <p className="mb-8">
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <br />
              <strong>Email:</strong> lydiaguyy@gmail.com <br />
              <strong>Address:</strong> NEW ROAD NKWEN, BAMENDA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
