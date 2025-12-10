'use client';
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const AirDropForm = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [recipients, setRecipients] = useState('');
  const [amounts, setAmounts] = useState('');

  const isFormValid = tokenAddress.trim() !== '' && recipients.trim() !== '' && amounts.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    // TODO: Handle form submission
    console.log({ tokenAddress, recipients, amounts });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <form className="card flex flex-col gap-5" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Airdrop Tokens</h2>

        {/* Token Address */}
        <InputField
          label="Token Address"
          name="tokenAddress"
          type="text"
          placeholder="0x..."
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          required
        />

        {/* Recipients */}
        <InputField
          label="Recipients (Comma or new line separated)"
          name="recipients"
          type="textarea"
          placeholder="0x123..., 0x456...&#10;or&#10;0x123...&#10;0x456..."
          rows={5}
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          required
        />

        {/* Amounts */}
        <InputField
          label="Amounts (wei, comma or new line separated)"
          name="amounts"
          type="textarea"
          placeholder="1000000000000000000, 2000000000000000000&#10;or&#10;1000000000000000000&#10;2000000000000000000"
          rows={5}
          value={amounts}
          onChange={(e) => setAmounts(e.target.value)}
          required
        />

        {/* Transaction Details */}
        <div className="w-full flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">
            Transaction Details
          </label>
          <div className="w-full px-4 py-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-900">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Token Name:</span>
                <span className="text-sm font-medium text-gray-900">—</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Amount (wei):</span>
                <span className="text-sm font-medium text-gray-900">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Amount (tokens):</span>
                <span className="text-sm font-medium text-gray-900">0.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          text="Send Tokens"
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isFormValid}
        />
      </form>
    </div>
  );
};

export default AirDropForm;
