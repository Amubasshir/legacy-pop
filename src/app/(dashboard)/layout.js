// app/(dashboard)/layout.js
import SideBar from '@/Components/SideBar';
import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-stone-50">
      {/* সাইডবার শুধু ড্যাশবোর্ডেই দেখাবে */}
      <SideBar />

      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
