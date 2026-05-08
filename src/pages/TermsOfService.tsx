import React from 'react';
import PageHeader from '../components/PageHeader';

const TermsOfService = () => {
  return (
    <div>
      <PageHeader 
        title="Terms of Service" 
        subtitle="Governance of our professional relationship"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Agreement to Terms</h2>
            <p className="mb-8">
              By accessing or using the services of HIGH-TOP STRUCTURES ENGINEERING (HTS-E) & PARTNERS LTD ("HTS-E", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
            <p className="mb-8">
              The Service and its original content, features, and functionality are and will remain the exclusive property of HTS-E and its licensors. Our designs, blueprints, and engineering documentation are protected by copyright, trademark, and other laws of both Cameroon and foreign countries.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Professional Services</h2>
            <p className="mb-8">
              HTS-E provides civil engineering, architectural design, and construction services. While we strive for excellence and absolute technical accuracy, the provision of these services is subject to specific contracts and project agreements which override these general terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
            <p className="mb-8">
              In no event shall HTS-E, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Termination</h2>
            <p className="mb-8">
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
            <p className="mb-8">
              These Terms shall be governed and construed in accordance with the laws of Cameroon, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes</h2>
            <p className="mb-8">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="mb-8">
              If you have any questions about these Terms, please contact us at: <br />
              <strong>Email:</strong> lydiaguyy@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
