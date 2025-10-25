// Is component ko 'use client' ki zaroorat nahi hai
export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-background">
      {/* Ye Tailwind ka simple spinner hai */}
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
}