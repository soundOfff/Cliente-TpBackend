export default function FriendList({ list }) {
  console.log(list);
  return (
    <div className="absolute top-1/4 -right-2/3  h-auto p-4 w-auto bg-backgroundFriendsList mx-auto rounded-cards">
      <h2 className="text-white text-center font-semibold text-2xl">
        Friend List
      </h2>
      <hr />
      <ul className="p-4 text-white">
        {list.length === 0 ? <p>List not found</p> : null}
        {list.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
