export default async function TeamList() {
  const res = await fetch("https://randomuser.me/api/?results=4");
  const data = await res.json();
  const users = data.results;

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user: any, i: number) => (
          <div
            key={i}
            className="border rounded p-4 flex flex-col items-center text-center"
          >
            <img
              src={user.picture.large}
              alt={user.name.first}
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="font-bold">
              {user.name.first} {user.name.last}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {user.location.country}
            </p>
            <p>
              Passionate about delivering great user experiences and modern web
              solutions.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
