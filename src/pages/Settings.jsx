import React, { useEffect, useRef, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "../styles/Input.css"
import { Toast } from 'primereact/toast';

function Settings() {
  const [user, setUser] = useState({});
  const [editedUser, setEditedUser] = useState({});
  const [isValidEmail, setIsValidEmail] = useState(true);
  const toast = useRef(null);

  useEffect(() => {
    document.title = 'Profile | My-App';
    axiosInstance
      .get('/api/v1/user/me')
      .then((res) => {
        setUser(res.data.data);
        setEditedUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e, field) => {
    setEditedUser((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const validateEmail = (email) => {
    // Basic email validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSaveChanges = () => {
    // Validate email before saving changes
    if (editedUser.email && !validateEmail(editedUser.email)) {
      setIsValidEmail(false);
      return;
    }

    // Save changes using your API endpoint (axiosInstance.post or put, depending on your backend)
    axiosInstance
      .put('/api/v1/user/me', editedUser)
      .then((res) => {
        toast.current.show({
          severity: 'success',
          summary: 'Success',
          detail: 'Changes saved successfully!',
          life: 3000,
        });
        setUser(editedUser);
      })
      .catch((err) => {
        console.log('Error saving changes:', err);
      });
  };

  useEffect(() => {
  }, [user.phone]);
  return (
    <div className="mx-8">
      <Toast ref={toast} />
      <h1 className="text-3xl font-bold py-4">Profile</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 pb-4 pl-2">Name</label>
        <InputText
          value={editedUser.name || ''}
          onChange={(e) => handleInputChange(e, 'name')}
          className="w-96 mt-1 "
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 pb-4 pl-2">Email</label>
        <InputText
          value={editedUser.email || ''}
          onChange={(e) => handleInputChange(e, 'email')}
          className={`w-96 rounded-full mt-1 ${!isValidEmail ? 'border-red-500' : ''}`}
        />
        {!isValidEmail && (
          <p className="text-red-500 text-sm mt-1">
            Please enter a valid email address.
          </p>
        )}
      </div>

      <div className="mb-4 cursor-not-allowed">
        <label className="block text-sm font-medium text-gray-700 pb-4 pl-2">Phone</label>
        <InputText
          value={user.phone || ''}
          disabled
          className="w-96 rounded-xl mt-1 "
          prefix='+91'
        />
      </div>

      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 pb-4 pl-2">
          Profile Image
        </label>
        <Upload/>
      </div> */}

      <Button
        label="Save Changes"
        className="bg-secondary text-white px-4 py-2 rounded-full "
        onClick={handleSaveChanges}
      />
    </div>
  );
}

export default Settings;
