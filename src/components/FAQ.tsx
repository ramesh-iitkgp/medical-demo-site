import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Do you accept my insurance?',
      answer:
        'We accept most major insurance providers including Aetna, Cigna, BlueCross BlueShield, and UnitedHealthcare. Please contact our front desk for verification of your specific plan.',
    },
    {
      question: 'How do I access my lab results?',
      answer:
        'All lab results are posted to the VITALIS Patient Portal immediately upon review by your physician. You will receive a secure notification email when they are ready.',
    },
  ];

  return (
    <section className="z-20 w-full border-t border-slate-100 relative bg-white">
      <div className="lg:px-[6%] max-w-[1600px] mr-auto ml-auto pr-6 pl-6 pt-24 pb-24">
        <div className="max-w-3xl">
          <h3 className="text-xs font-mono text-slate-500 uppercase mb-8">
            Common Questions
          </h3>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="group border-b border-slate-100">
                <button
                  className="w-full pt-6 pb-6 flex items-center justify-between cursor-pointer text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-slate-900 group-hover:text-teal-600 transition-colors">
                    {faq.question}
                  </h3>
                  <Icon
                    icon="solar:add-circle-linear"
                    className={`w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-all ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`pb-8 text-slate-500 font-light leading-relaxed animate-reveal ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
