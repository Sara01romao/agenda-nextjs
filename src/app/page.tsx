import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsComponents } from "./_components/tabComponent";
import { propertys } from "@/data/property-mock";
import { BsHouse, BsHouseX } from "react-icons/bs";
import clsx from "clsx";

export default function Home() {
  const data = propertys;

  if (!data) {
    return (
      <div className="h-[80vh] w-full rounded-lg bg-gray-100 flex items-center justify-center flex-col">
        <BsHouseX size={40} />
        <p className="text-lg font-medium text-gray-500">Nenhum Local Cadastrado</p>
      </div>
    )
  }

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-2 pb-20 sm:p-20">
      <Tabs defaultValue="property-1" className="max-w-[1000px] w-full mb-10">
        <TabsList className="flex flex-wrap h-auto gap-2">
          {data.map(tabBtn =>
            <TabsTrigger
              key={tabBtn.id}
              value={tabBtn.id}
              className={clsx(
                " rounded-md transition cursor-pointer",
                "data-[state=active]:bg-black data-[state=active]:text-white",
                "data-[state=inactive]:bg-gray-20"
              )}

            >{tabBtn.name}</TabsTrigger>
          )}
        </TabsList>

        {data.map(tab =>
          <TabsComponents key={tab.id} value={tab.id} propertyScheduling={tab} />
        )}
      </Tabs>
    </div>
  );
}
