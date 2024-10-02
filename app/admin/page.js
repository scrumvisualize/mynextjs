'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import


const Admin = ()=>{
  const router = useRouter();
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      router.push('/login');
    }
  }, [router]);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
         {'Admin'.split('').map((letter, index) => (
        <span key={index} className="text-[#a955ed] font-semibold inline-block animate-splitRotateJoin mt-4 mx-1">{letter === ' ' ? '\u00A0' : letter}</span>
      ))}
        <p className="mt-4">Manage your application here.</p>
      </div>
      );
}

export default Admin;