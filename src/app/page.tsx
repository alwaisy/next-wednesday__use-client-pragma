import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Pagination from "@/sections/Pagination";

async function getData(
  skip: number = 0
): Promise<{ users: { id: number; firstName: string; email: string }[] }> {
  const res = await fetch(`https://dummyjson.com/users?limit=5&skip=${skip}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface Props {
  searchParams: {
    skip?: number;
  };
}

export default async function Home({ searchParams: { skip = 0 } }: Props) {
  const data = await getData(skip);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold text-slate-600">Use Client Pragma</h1>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {data.users.map((user) => (
          <Card className="w-[350px]" key={user.id}>
            <CardHeader>
              <CardTitle>{user.firstName}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* <Button onClick={() => getData(10)}>Load next 5</Button> */}

      {/* <LoadMore /> */}
      <Pagination />

      <p className="text-base text-slate-400">By: alwaisy @ linkedin</p>
    </main>
  );
}
