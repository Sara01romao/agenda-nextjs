import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function Scheduling() {

  return (
    <div className="max-w-[1200px] w-full m-auto p-4">
      <h1 className="text-2xl text-center font-bold mt-6 mb-4 text-[#228BE6]">Sítio Clover</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Novo Agendamento</CardTitle>
        </CardHeader>
        <CardContent className="border-t pt-4 flex items-start justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold"><span className="flex flex-col font-semibold text-[#3d3d3d] text-sm">Imóvel</span> Sítio da Folha</p>
            <p className="text-lg font-semibold"><span className="flex flex-col font-semibold  text-[#3d3d3d] text-sm">Preço por dia</span>R$ 200</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex flex-col font-semibold text-[#3d3d3d] text-sm">Endereço</p>
            <p className="font-semibold">Cidade: <span>São Paulo - SP</span></p>
            <p className="font-semibold">Rua:<span> Caminho das Pedras</span></p>
            <p className="font-semibold">Nº: <span>150</span></p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex flex-col font-semibold text-[#3d3d3d] text-sm" >Compartilhar</p>
            <Button >
              <Link href="google" className="flex items-center gap-2">
                <MapPin />
                Localização
              </Link>
            </Button>

          </div>
        </CardContent>
      </Card>

      <div>
        <div>
          
        </div>
      </div>
    </div>
  )
}