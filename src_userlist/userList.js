import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./userList.css"; // Import your custom CSS for styling
 
const UserList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [editUserId, setEditUserId] = useState(null);
 
  const generateId = () => Math.random().toString(36).substring(2, 15);
 
  // Initial effect to create some sample users (remove if you have data fetching)
  useEffect(() => {
    setUsers([
      { id: generateId(), firstName: "Yatin", lastName: "Sarvaiya", email: "yatin@krishtechnolabs.com", contactNumber: "888-121-212", address: "Kariya, Junagadh" },
      { id: generateId(), firstName: "Sumit", lastName: "Sarvaiya", email: "sumit.sarvaiya300@gmail.com", contactNumber: "888-121-212", address: "Kariya, Junagadh" },
    ]);
  }, []);
 
  const onSubmit = (data) => {
    if (!editMode) {
        data.id = generateId(); // Add ID for new users
        setUsers([...users, data]); // Add new user
    }else {
        // Find and update the edited user
        const userIndex = users.findIndex((user) => user.id === editUserId);
        const updatedUsers = [...users];
        updatedUsers[userIndex] = { ...updatedUsers[userIndex], ...data };
        setUsers(updatedUsers); // Update user list
      }
    setShowForm(false);
    reset();
    setEditMode(false);
  };
 
  const handleEditUser = (user) => {
    console.log("edit ");
    setEditMode(true); // Enter edit mode
    setShowForm(true);
    setEditUserId(user.id); // Store edited user ID
    // Pre-populate form fields with user data
    setValue("firstName",user.firstName);
    setValue("lastName",user.lastName);
    setValue("email",user.email);
    setValue("contactNumber",user.contactNumber);
    setValue("address",user.address);
  };
 
  // Delete user
  const handleDeleteUser = (userId) => {
    console.log("delete ", userId);
    setUsers(users.filter((user) => user.id !== userId)); // Remove user from list
  };
 
 
  return (
    <div className="userlist-container">
      <h1>My User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Display user details here */}
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
            <span>{user.email}</span>
            <span>{user.contactNumber}</span>
            <span>{user.address}</span>
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
 
      <button
        onClick={() => {
          setShowForm(true);
        }}
      >
        Add User
      </button>
      {showForm && (
        <div id="addUserForm" className="add-user-form">
          <h2>Add User</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="error">First name is required.</p>
              )}
            </div>
 
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <p className="error">Last name is required.</p>
              )}
            </div>
 
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email && <p className="error">Invalid email format.</p>}
            </div>
 
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number:</label>
              <input
                type="text"
                id="contactNumber"
                {...register("contactNumber", { required: true })}
              />
              {errors.contactNumber && (
                <p className="error">Contact number is required.</p>
              )}
            </div>
 
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                {...register("address", { required: true })}
              />
              {errors.address && <p className="error">Address is required.</p>}
            </div>
 
            <button type="submit">Add User</button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setShowForm(false);
                reset();
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
 
export default UserList;