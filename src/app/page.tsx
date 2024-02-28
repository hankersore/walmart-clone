import { gridData } from "@/data/gridData";
import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main className="flex-1">
     <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-5 m-5">
      {gridData.map((item, i)=> {return (<GridOption key={i} title={item.title} className={item.className} image={item.image}/>)})}
     </div>
    </main>
  );
}