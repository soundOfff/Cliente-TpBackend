import Link from "next/link";

export default function UserCard({ user }) {
  return (
    <li className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-backgroundCards max-w-sm">
        <h5 className="text-gray-600 text-xl leading-tight font-medium mb-2">
          User: {user.name}
        </h5>
        <Link href={`/users/${user._id}`}>
          <a
            className="inline-block px-6 mb-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            href="#"
          >
            Ver mas...
          </a>
        </Link>
        <div className="pt-2 px-6 border-t border-gray-300 text-gray-600 font-semibold">
          Created In: {user.createdAt.split("T")[0]} at:{" "}
          {user.createdAt.split("T")[1].split(".")[0]}
        </div>
      </div>
    </li>
  );
}
