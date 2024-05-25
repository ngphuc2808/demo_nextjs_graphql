import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-200">
      <h2 className="text-2xl font-bold text-red-600">404</h2>
      <p className="mb-4 text-lg text-gray-700">
        Oops! That page cannot be found.
      </p>
      <Link href="/product" className="text-blue-500 underline">
        Return product page
      </Link>
    </div>
  );
};

export default NotFound;
