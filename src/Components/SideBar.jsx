'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  PlusCircle,
  Settings,
  Heart,
  LogOut,
  ChevronRight,
  UserCircle,
} from 'lucide-react';

const SideBar = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '' },
    { icon: PlusCircle, label: 'Create Page', href: '' },
    { icon: Heart, label: 'Memorials', href: '' },
    { icon: Settings, label: 'Settings', href: '' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-stone-200 flex flex-col sticky top-0">
      {/* Logo Section */}
      <div className="p-6 border-b border-stone-50">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
            <Heart className="w-5 h-5 text-orange-600 fill-current" />
          </div>
          <span className="text-xl font-serif font-bold text-stone-900">
            LegacyPop
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(item => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`relative flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-orange-50 text-orange-700'
                    : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                <item.icon
                  className={`w-5 h-5 mr-3 ${isActive ? 'text-orange-600' : 'text-stone-400 group-hover:text-stone-600'}`}
                />
                <span className="font-medium text-sm">{item.label}</span>

                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 w-1 h-6 bg-orange-500 rounded-r-full"
                  />
                )}

                <ChevronRight
                  className={`ml-auto w-4 h-4 opacity-0 transition-opacity ${isActive ? 'opacity-0' : 'group-hover:opacity-100'}`}
                />
              </div>
            </Link>
          );
        })}
      </nav>

      {/* User & Bottom Section */}
      <div className="p-4 border-t border-stone-100">
        <div className="bg-stone-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center overflow-hidden">
              <UserCircle className="text-stone-400 w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-stone-900 truncate">
                John Doe
              </p>
              <p className="text-xs text-stone-500 truncate">Pro Plan</p>
            </div>
          </div>
        </div>

        <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
