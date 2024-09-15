import { ListCreate } from "@/components/list.create";
import { ListCard } from "@/components/list.card";

async function getLists() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/Hyud4bOWHH7l", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}

export default async function page() {
  const { data } = await getLists();
  console.log(data);

  return (
    <div className="flex bg-rose-100 p-2">
      <div>
        <ListCreate className="basis-1/2" />
      </div>
      <div className="basis-1/2">
        {data.map((list) => {
          return (
            <ListCard
              key={list._id}
              id={list._id}
              baju={list.baju}
              harga={list.harga}
              alamat={list.alamat}
            />
          );
        })}
      </div>
    </div>
  );
}
