import React, { useState } from 'react';

const ProfileFormAuth = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');

    const handleSave = () => {
        console.log('Profile saved:', { name, lastname, address, date });
        alert('Profile saved successfully!');
    };

    const handleDelete = () => {
        console.log('Account deleted');
        alert('Account deleted successfully!');
    };

    return (
        <div className="relative -mt-12 px-8">
            <div className="bg-slate-100 rounded-xl shadow-lg p-6 max-w-[90%] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row-reverse gap-2 justify-between items-start mt-10">
                    
                    <div className="flex flex-col items-center text-center md:w-1/3 mb-4"> 
                        <img
                            className="w-32 h-32 rounded-full border-2 border-gray-300"
                            src="https://s3-alpha-sig.figma.com/img/d771/e8ee/4d516f000e29670bda6ceb5a6c836183?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRB8FmOriCJyxjVdIa1fvNIW~oh~crxMLW~D0wz770m4mD7Q4v~l5XBiYu8GgPHk4623IdKHAZLSS4DN~WWQzOvQf6WrhpDp06uhV0g3HBt84-57IHvdICd56bXPBKrKNTnsE9SxYudT7ybVJiUyWyeeeW17CmWl3k56DKQ-puV4swXxB84Z~QTwQOXK3yqRA-yVFKM8cR26DnGSG5ag0CmLfZKxAl19TohkmKHd3ji8qyiJSTSwqTjdmN3BBc6dJpWUOJt3lO64JmNhfbSUqUvQA2a2bKuKkYG1syPEO~~fiGiZoe18JbFuzrhqNzNhzIlIJw223GC2nJONMnB2bA__"
                            alt="Profile"
                        />
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800">Lucas Ezequiel Silva</h2>
                            <p className="text-sm text-gray-600">Caseros, Buenos Aires</p>
                            <p className="text-sm text-gray-600">16/02/2000</p>
                        </div>
                    </div>

                    <div className="w-1/2 md:w-1/2 lg:w-1/3 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Profile</h2>

                        <div className="mb-4">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                                placeholder="First Name"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                                placeholder="Last Name"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                                placeholder="Address"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={handleSave}
                                className="bg-green-400 text-white py-2 rounded-full font-bold text-sm shadow-md hover:bg-green-700 transition duration-300"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-200 text-red-500 py-2 rounded-full font-bold text-sm shadow-md hover:bg-red-200 transition duration-300"
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileFormAuth;
