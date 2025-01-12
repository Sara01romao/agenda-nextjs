
interface CardProps {
    icon: React.ReactNode;
    title: string;
    value: string | number;
  }

export default function CardDash({ icon, title, value }:CardProps){
  
    return(
        <div className="flex w-full items-center gap-4 bg-[#F3F4F6] px-5 py-4 rounded-lg">
            <div className="bg-white rounded-full p-2">{icon}</div>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-[#229BFF] text-xl font-semibold">{value}</p>
            </div>
        </div>
    )

}