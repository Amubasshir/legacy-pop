'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { Heart } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const isLegacyView = pathname.startsWith('/legacy/');

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  if (isLegacyView) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/50 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* --- LOGO --- */}
          <Link
            href="/"
            className="group flex items-center space-x-2 z-50 relative"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-6 h-6 text-orange-600 fill-current" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-900">
              LegacyPop
            </span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink href="/pricing" text="Pricing" />
            <NavLink href="/examples" text="Examples" />
            <NavLink href="/dashboard" text="Dashboard" />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/create"
                className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-bold text-base shadow-lg shadow-stone-900/10"
              >
                Start a Page
              </Link>
            </motion.div>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="md:hidden z-50">
            <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 bg-white z-40 pt-24 px-6 md:hidden flex flex-col items-center"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center space-y-8 w-full max-w-sm"
            >
              <MobileNavLink
                href="/pricing"
                text="Pricing"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                href="/examples"
                text="Examples"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                href="/dashboard"
                text="Dashboard"
                onClick={() => setIsOpen(false)}
              />

              <div className="w-full h-px bg-stone-100 my-4" />

              <motion.div variants={itemVariants} className="w-full">
                <Link
                  href="/create"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full bg-stone-900 text-white px-6 py-5 rounded-full text-xl font-bold shadow-xl shadow-stone-200 active:scale-95 transition-transform"
                >
                  Start a Page
                </Link>
              </motion.div>
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-50 to-transparent opacity-50 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-100/50 backdrop-blur-sm border border-stone-200 focus:outline-none"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        transition={{ duration: 0.1 }}
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        animate={isOpen ? 'open' : 'closed'}
      />
    </svg>
  </button>
);

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="hsl(24, 9.8%, 10%)"
    strokeLinecap="round"
    {...props}
  />
);

const NavLink = ({ href, text }) => (
  <Link
    href={href}
    className="relative group text-[17px] font-semibold text-stone-600 hover:text-stone-900 transition-colors"
  >
    {text}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
  </Link>
);

const MobileNavLink = ({ href, text, onClick }) => (
  <motion.div variants={itemVariants} className="w-full">
    <Link
      href={href}
      onClick={onClick}
      className="block w-full text-center text-3xl font-serif text-stone-800 py-2 hover:text-orange-600 transition-colors"
    >
      {text}
    </Link>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default NavBar;

// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from 'framer-motion';
// import { Heart, User, LogOut, ChevronDown, Settings } from 'lucide-react';
// import { supabase } from '../supabaseClient';
// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Auth State
//   const [session, setSession] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

//   const { scrollY } = useScroll();
//   const pathname = usePathname();
//   const router = useRouter();
//   const profileMenuRef = useRef(null);

//   // 1. Handle Auth & Profile Fetching
//   useEffect(() => {
//     // Check active session
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//       if (session) fetchProfile(session.user.id);
//     });

//     // Listen for changes (login/logout/signup)
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//       if (session) {
//         fetchProfile(session.user.id);
//       } else {
//         setUserProfile(null);
//       }
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   // Fetch 'full_name' from the 'profiles' table we created
//   const fetchProfile = async userId => {
//     const { data } = await supabase
//       .from('profiles')
//       .select('full_name, role')
//       .eq('id', userId)
//       .single();
//     setUserProfile(data);
//   };

//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//     setIsProfileMenuOpen(false);
//     setIsOpen(false);
//     router.push('/'); // Redirect home after logout
//     router.refresh();
//   };

//   // Close dropdown if clicking outside
//   useEffect(() => {
//     const handleClickOutside = event => {
//       if (
//         profileMenuRef.current &&
//         !profileMenuRef.current.contains(event.target)
//       ) {
//         setIsProfileMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Scroll detection
//   useMotionValueEvent(scrollY, 'change', latest => {
//     setIsScrolled(latest > 20);
//   });

//   if (pathname.startsWith('/legacy/')) return null;

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/50 py-3 shadow-sm'
//           : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="flex justify-between items-center">
//           {/* --- LOGO --- */}
//           <Link
//             href="/"
//             className="group flex items-center space-x-2 z-50 relative"
//           >
//             <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
//               <Heart className="w-5 h-5 text-orange-600 fill-current" />
//             </div>
//             <span
//               className={`text-xl font-serif font-bold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}
//             >
//               LegacyPop
//             </span>
//           </Link>

//           {/* --- DESKTOP MENU --- */}
//           <div className="hidden md:flex items-center space-x-6">
//             <NavLink href="/pricing" text="Pricing" />
//             <NavLink href="/examples" text="Examples" />

//             <div className="h-6 w-px bg-stone-200 mx-2" />

//             {/* AUTH SECTION */}
//             {session ? (
//               // --- LOGGED IN STATE ---
//               <div className="relative" ref={profileMenuRef}>
//                 <button
//                   onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
//                   className="flex items-center space-x-2 p-1 pr-3 rounded-full hover:bg-stone-100 transition-colors border border-transparent hover:border-stone-200"
//                 >
//                   <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-sm font-bold border border-orange-200">
//                     {userProfile?.full_name ? (
//                       userProfile.full_name.charAt(0).toUpperCase()
//                     ) : (
//                       <User size={14} />
//                     )}
//                   </div>
//                   <span className="text-sm font-medium text-stone-700 max-w-[100px] truncate">
//                     {userProfile?.full_name || 'User'}
//                   </span>
//                   <ChevronDown
//                     size={14}
//                     className={`text-stone-400 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`}
//                   />
//                 </button>

//                 {/* Dropdown */}
//                 <AnimatePresence>
//                   {isProfileMenuOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden py-1 ring-1 ring-black ring-opacity-5"
//                     >
//                       <div className="px-4 py-3 border-b border-stone-50 bg-stone-50/50">
//                         <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
//                           Signed in as
//                         </p>
//                         <p className="text-sm font-medium text-stone-900 truncate">
//                           {session.user.email}
//                         </p>
//                       </div>

//                       <Link
//                         href="/dashboard"
//                         className="flex items-center px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-orange-600"
//                       >
//                         <Settings className="w-4 h-4 mr-2" /> Dashboard
//                       </Link>

//                       <button
//                         onClick={handleSignOut}
//                         className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="w-4 h-4 mr-2" /> Sign Out
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               // --- LOGGED OUT STATE ---
//               <div className="flex items-center space-x-4">
//                 <Link
//                   href="/login"
//                   className="text-sm font-medium text-stone-600 hover:text-stone-900"
//                 >
//                   Log in
//                 </Link>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Link
//                     href="/create"
//                     className="bg-stone-900 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium text-sm shadow-lg shadow-stone-900/10"
//                   >
//                     Start a Page
//                   </Link>
//                 </motion.div>
//               </div>
//             )}
//           </div>

//           {/* --- MOBILE TOGGLE --- */}
//           <div className="md:hidden z-50">
//             <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
//           </div>
//         </div>
//       </div>

//       {/* --- MOBILE MENU OVERLAY --- */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: '100vh' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//             className="fixed inset-0 top-0 bg-white z-40 pt-24 px-6 md:hidden flex flex-col items-center"
//           >
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="show"
//               className="flex flex-col items-center space-y-6 w-full max-w-sm"
//             >
//               {/* Mobile Auth Header */}
//               {session && (
//                 <motion.div
//                   variants={itemVariants}
//                   className="flex flex-col items-center mb-4"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold border-2 border-orange-200 mb-2">
//                     {userProfile?.full_name ? (
//                       userProfile.full_name.charAt(0).toUpperCase()
//                     ) : (
//                       <User />
//                     )}
//                   </div>
//                   <span className="text-lg font-serif font-bold text-stone-900">
//                     {userProfile?.full_name || 'Welcome Back'}
//                   </span>
//                   <span className="text-sm text-stone-500">
//                     {session.user.email}
//                   </span>
//                 </motion.div>
//               )}

//               <MobileNavLink
//                 href="/pricing"
//                 text="Pricing"
//                 onClick={() => setIsOpen(false)}
//               />
//               <MobileNavLink
//                 href="/examples"
//                 text="Examples"
//                 onClick={() => setIsOpen(false)}
//               />

//               {session && (
//                 <MobileNavLink
//                   href="/dashboard"
//                   text="Dashboard"
//                   onClick={() => setIsOpen(false)}
//                 />
//               )}

//               <div className="w-full h-px bg-stone-100 my-4" />

//               <motion.div variants={itemVariants} className="w-full space-y-3">
//                 {session ? (
//                   <button
//                     onClick={handleSignOut}
//                     className="flex items-center justify-center w-full bg-stone-100 text-stone-700 px-6 py-4 rounded-full text-lg font-bold"
//                   >
//                     <LogOut className="w-5 h-5 mr-2" /> Sign Out
//                   </button>
//                 ) : (
//                   <>
//                     <Link
//                       href="/create"
//                       onClick={() => setIsOpen(false)}
//                       className="flex items-center justify-center w-full bg-stone-900 text-white px-6 py-4 rounded-full text-lg font-bold shadow-xl shadow-stone-200"
//                     >
//                       Start a Page
//                     </Link>
//                     <Link
//                       href="/login"
//                       onClick={() => setIsOpen(false)}
//                       className="flex items-center justify-center w-full text-stone-600 px-6 py-2"
//                     >
//                       Log in to existing account
//                     </Link>
//                   </>
//                 )}
//               </motion.div>
//             </motion.div>

//             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-50 to-transparent opacity-50 pointer-events-none" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// // --- SUB-COMPONENTS ---

// const MenuToggle = ({ toggle, isOpen }) => (
//   <button
//     onClick={toggle}
//     className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-100/50 backdrop-blur-sm border border-stone-200 focus:outline-none"
//   >
//     <svg width="20" height="20" viewBox="0 0 23 23">
//       <Path
//         variants={{
//           closed: { d: 'M 2 2.5 L 20 2.5' },
//           open: { d: 'M 3 16.5 L 17 2.5' },
//         }}
//         animate={isOpen ? 'open' : 'closed'}
//       />
//       <Path
//         d="M 2 9.423 L 20 9.423"
//         variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
//         transition={{ duration: 0.1 }}
//         animate={isOpen ? 'open' : 'closed'}
//       />
//       <Path
//         variants={{
//           closed: { d: 'M 2 16.346 L 20 16.346' },
//           open: { d: 'M 3 2.5 L 17 16.346' },
//         }}
//         animate={isOpen ? 'open' : 'closed'}
//       />
//     </svg>
//   </button>
// );

// const Path = props => (
//   <motion.path
//     fill="transparent"
//     strokeWidth="2"
//     stroke="hsl(24, 9.8%, 10%)"
//     strokeLinecap="round"
//     {...props}
//   />
// );

// const NavLink = ({ href, text }) => (
//   <Link
//     href={href}
//     className="relative group text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
//   >
//     {text}
//     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
//   </Link>
// );

// const MobileNavLink = ({ href, text, onClick }) => (
//   <motion.div variants={itemVariants} className="w-full">
//     <Link
//       href={href}
//       onClick={onClick}
//       className="block w-full text-center text-2xl font-serif text-stone-800 py-2 hover:text-orange-600 transition-colors"
//     >
//       {text}
//     </Link>
//   </motion.div>
// );

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   show: { y: 0, opacity: 1 },
// };

// export default NavBar;
