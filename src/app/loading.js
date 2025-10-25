// src/app/loading.js

export default function Loading() {
  // Ye spinner tab dikhega jab page (children) load ho raha hoga
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
}