import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Scraping result</h1>
      <h2 className="mb-5 text-gray-400">We wont be long...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {Array(8).fill(null).map((item, i)=> {
            return <Skeleton key={i} className="w-[300px] h-[400px]"/>
        })}
      </div>
    </div>
  );
}