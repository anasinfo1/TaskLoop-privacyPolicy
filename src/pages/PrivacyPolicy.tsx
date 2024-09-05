import React from 'react';
import { Shield, Clock, Lock, UserCheck, RefreshCw, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const SectionHeader: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold ml-2">{title}</h2>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">Privacy Policy for TaskLoop</h1>
      
      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeader icon={<Shield className="text-indigo-600" size={24} />} title="1. Introduction" />
          <p className="text-gray-700">Welcome to TaskLoop. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we handle your data and your privacy rights.</p>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeader icon={<Clock className="text-indigo-600" size={24} />} title="2. Data We Collect" />
          <p className="text-gray-700 mb-4">TaskLoop is designed to respect your privacy. We do not collect any personal information. The app only stores the task data you input locally on your device, which includes:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Task name</li>
            <li>Task priority</li>
            <li>Task time</li>
          </ul>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeader icon={<Lock className="text-indigo-600" size={24} />} title="3. How We Use Your Data" />
          <p className="text-gray-700">The task data you input is used solely for the purpose of organizing your tasks and providing reminders. This data never leaves your device and is not accessible to us or any third parties.</p>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeader icon={<Lock className="text-indigo-600" size={24} />} title="4. Data Storage and Security" />
          <p className="text-gray-700">All task data is stored locally on your device. We implement appropriate technical measures to maintain the security of your data.</p>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeader icon={<UserCheck className="text-indigo-600" size={24} />} title="5. Your Data Rights" />
          <p className="text-gray-700">Since all data is stored locally on your device, you have full control over your data. You can view, edit, or delete your tasks at any time within the app.</p>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeader icon={<RefreshCw className="text-indigo-600" size={24} />} title="6. Changes to This Privacy Policy" />
          <p className="text-gray-700">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeader icon={<Mail className="text-indigo-600" size={24} />} title="7. Contact Us" />
          <p className="text-gray-700">If you have any questions about this Privacy Policy, please contact us at: [Your Contact Information]</p>
        </section>
      </div>
      
      <p className="mt-8 text-sm text-gray-600 text-center">Last updated: 05/09/2024</p>
    </div>
  );
};

export default PrivacyPolicy;