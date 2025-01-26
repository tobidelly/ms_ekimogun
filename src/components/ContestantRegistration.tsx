import React, { useState } from 'react';
import { Crown, Upload } from 'lucide-react';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  nationality: string;
  occupation: string;

  // Physical Attributes
  height: string;
  weight: string;
  bustSize: string;
  waistSize: string;
  hipSize: string;
  dressSize: string;
  shoeSize: string;
  skinTone: string;
  eyeColor: string;
  hairColor: string;

  // Additional Information
  languages: string;
  hobbies: string;
  talents: string;
  previousPageants: string;
  whyCompete: string;
  platformCause: string;

  // Photos will be handled separately
  photos: {
    headshot: File | null;
    fullBody: File | null;
    casual: File | null;
    formal: File | null;
  };
}

const ContestantRegistration = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    nationality: '',
    occupation: '',
    height: '',
    weight: '',
    bustSize: '',
    waistSize: '',
    hipSize: '',
    dressSize: '',
    shoeSize: '',
    skinTone: '',
    eyeColor: '',
    hairColor: '',
    languages: '',
    hobbies: '',
    talents: '',
    previousPageants: '',
    whyCompete: '',
    platformCause: '',
    photos: {
      headshot: null,
      fullBody: null,
      casual: null,
      formal: null,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>, type: keyof typeof formData.photos) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        photos: {
          ...formData.photos,
          [type]: e.target.files[0],
        },
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-12">
            <Crown className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Do you have what it takes?</h1>
            <p className="text-xl text-gray-600">
              Join the contestants to become the 2025 Miss Ekimogun Beauty Queen
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="firstName">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="lastName">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="nationality">
                    Nationality *
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 mb-2" htmlFor="address">
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  rows={3}
                  required
                ></textarea>
              </div>
            </div>

            {/* Physical Attributes */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Physical Attributes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="height">
                    Height (cm) *
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="weight">
                    Weight (kg) *
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="bustSize">
                    Bust Size (inches) *
                  </label>
                  <input
                    type="number"
                    id="bustSize"
                    name="bustSize"
                    value={formData.bustSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="waistSize">
                    Waist Size (inches) *
                  </label>
                  <input
                    type="number"
                    id="waistSize"
                    name="waistSize"
                    value={formData.waistSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="hipSize">
                    Hip Size (inches) *
                  </label>
                  <input
                    type="number"
                    id="hipSize"
                    name="hipSize"
                    value={formData.hipSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="dressSize">
                    Dress Size *
                  </label>
                  <input
                    type="text"
                    id="dressSize"
                    name="dressSize"
                    value={formData.dressSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="skinTone">
                    Skin Tone *
                  </label>
                  <input
                    type="text"
                    id="skinTone"
                    name="skinTone"
                    value={formData.skinTone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="eyeColor">
                    Eye Color *
                  </label>
                  <input
                    type="text"
                    id="eyeColor"
                    name="eyeColor"
                    value={formData.eyeColor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="hairColor">
                    Hair Color *
                  </label>
                  <input
                    type="text"
                    id="hairColor"
                    name="hairColor"
                    value={formData.hairColor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Photos Upload */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Photos</h2>
              <p className="text-gray-600 mb-6">
                Please upload recent photos (not older than 3 months). All photos should be clear,
                high quality, and in JPG/PNG format.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="headshot">
                    Headshot Photo *
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      id="headshot"
                      accept="image/*"
                      onChange={(e) => handlePhotoChange(e, 'headshot')}
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="headshot"
                      className="flex items-center px-4 py-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Choose File
                    </label>
                    <span className="text-gray-500">
                      {formData.photos.headshot?.name || 'No file chosen'}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="fullBody">
                    Full Body Photo *
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      id="fullBody"
                      accept="image/*"
                      onChange={(e) => handlePhotoChange(e, 'fullBody')}
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="fullBody"
                      className="flex items-center px-4 py-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Choose File
                    </label>
                    <span className="text-gray-500">
                      {formData.photos.fullBody?.name || 'No file chosen'}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="casual">
                    Casual Wear Photo *
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      id="casual"
                      accept="image/*"
                      onChange={(e) => handlePhotoChange(e, 'casual')}
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="casual"
                      className="flex items-center px-4 py-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Choose File
                    </label>
                    <span className="text-gray-500">
                      {formData.photos.casual?.name || 'No file chosen'}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="formal">
                    Formal Wear Photo *
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      id="formal"
                      accept="image/*"
                      onChange={(e) => handlePhotoChange(e, 'formal')}
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="formal"
                      className="flex items-center px-4 py-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Choose File
                    </label>
                    <span className="text-gray-500">
                      {formData.photos.formal?.name || 'No file chosen'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="languages">
                    Languages Spoken *
                  </label>
                  <input
                    type="text"
                    id="languages"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    placeholder="e.g., English, Yoruba"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="hobbies">
                    Hobbies & Interests *
                  </label>
                  <textarea
                    id="hobbies"
                    name="hobbies"
                    value={formData.hobbies}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    rows={3}
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="talents">
                    Special Talents *
                  </label>
                  <textarea
                    id="talents"
                    name="talents"
                    value={formData.talents}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    rows={3}
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="previousPageants">
                    Previous Pageant Experience (if any)
                  </label>
                  <textarea
                    id="previousPageants"
                    name="previousPageants"
                    value={formData.previousPageants}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    rows={3}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="whyCompete">
                    Why do you want to compete in Miss Ekimogun 2025? *
                  </label>
                  <textarea
                    id="whyCompete"
                    name="whyCompete"
                    value={formData.whyCompete}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="platformCause">
                    What social cause would you champion if crowned Miss Ekimogun? *
                  </label>
                  <textarea
                    id="platformCause"
                    name="platformCause"
                    value={formData.platformCause}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    rows={4}
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContestantRegistration;