import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsComponents } from "./_components/tabComponent";
import { propertys } from "@/data/property-mock";
import { BsHouse, BsHouseX } from "react-icons/bs";

export default function Home() {
  const data = propertys;

  if (!data) {
    return (
      <div className="h-[80vh] w-full rounded-lg bg-gray-100 flex items-center justify-center flex-col">
        <BsHouseX  size={40}/>
        <p className="text-lg font-medium text-gray-500">Nenhum Local Cadastrado</p>
      </div>
    )
  }

  return (
    <div className="font-sans items-center justify-items-center min-h-screen  pb-20  sm:p-20">

      <Tabs defaultValue="property-1" className="max-w-[1000px] w-full mb-10 text- ">
        <TabsList>
          {data.map(item =>
            <TabsTrigger key={item.id} value={item.id}>{item.name}</TabsTrigger>
          )}
        </TabsList>

        {data.map(item =>
          <TabsComponents key={item.id} value={item.id} propertyScheduling={item} />
        )}
      </Tabs>
    </div>
  );
}
