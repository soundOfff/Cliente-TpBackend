import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import FriendList from "../../components/friendList";

const url = "http://localhost:9000/api/v1/friendList/";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:9000/api/v1/users");
  const users = await res.json();

  const paths = await users.users.map((user) => ({
    params: { _id: user._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:9000/api/v1/users/${params._id}`);
  const data = await res.json();

  const resFriendList = await fetch(`${url + params._id}`);
  const dataFriendList = await resFriendList.json();

  return {
    props: { data, dataFriendList },
  };
}

export default function UserPage({ data, dataFriendList }) {
  const [isOpen, setOpen] = useState(false);
  const toggleFriendList = () => setOpen(!isOpen);
  var dataList = [];

  if (dataFriendList.msg) {
    dataList = [];
  } else {
    dataList = dataFriendList.map((user) => {
      return user.email;
    });
  }

  if (!data) return <p>No profile data found</p>;
  return (
    <div className="h-screen w-screen bg-backgroundCards pt-24">
      <div className="h-4/5 w-1/4 bg-white mx-auto rounded-cards">
        <div className="h-full w-full relative flex flex-col p-4 items-center justify-between">
          <Image
            src={`${data.user.profileImage}`}
            alt={`Picture of name here`}
            width={192}
            height={192}
            className="h-48 w-48 rounded-full border-1"
          />

          <p className="font-semibold text-textUserCards text-3xl">
            {data.user.name}
          </p>
          <p className="font-semibold text-textUserCards text-xl">
            {data.user.email}
          </p>
          <p className="text-md text-black text-ellipsis">
            {data.user.description}
          </p>
          <Link href={"http://localhost:3000"}>
            <a className="bg-buttonUserColors px-32 py-5 rounded-full">
              Go back
            </a>
          </Link>
          <button
            onClick={toggleFriendList}
            className="px-5 py-2 -rotate-90 absolute top-1/4 -right-7 text-white text- rounded-xl bg-backgroundFriendsList"
          >
            Friends
          </button>
          {isOpen ? <FriendList list={dataList} /> : null}
        </div>
      </div>
    </div>
  );
}
