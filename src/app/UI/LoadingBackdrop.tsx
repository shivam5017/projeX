export const LoadingBackdrop = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <img
        src="/Images/logo.png"  
        alt="Logo"
        className="w-24 h-24 animate-spin"
      />
    </div>
  );