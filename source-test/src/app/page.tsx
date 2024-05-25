import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-200">
      <p className="mb-4 text-lg text-gray-700">
        Oops! Home page is under development, please come back later (or go to
        the product page)!
      </p>
      <Link href="/product" className="text-blue-500 underline">
        Return product page
      </Link>
    </div>
  );
};

export default Home;
