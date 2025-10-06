'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CircleArrowLeft, FileText, MapPin } from "lucide-react"
import Link from "next/link"
import { CalendarProperty } from "../_components/calendar-property"
import { Property, propertys } from "@/data/property-mock"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function Scheduling() {
  const { id } = useParams<{ id: string }>();
  const data: Property[] = propertys.filter(item => item.id === id);
  const schedulingList = data.map(item => item.scheduling.map(s => s.dates).flat()).flat();

  const [newScheduling, setNewScheduling] = useState<Date[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: ""
  });

  const [isPending, setIsPending] = useState(false);
  const [resetCalendar, setResetCalendar] = useState(false)
  const [errorScheduling, setErrorScheduling] = useState({
    client: "",
    calendar: ""
  })

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handlesScheduling() {
    setIsPending(true)

    if (Object.values(formData).includes("") || newScheduling.length === 0) {

      if (Object.values(formData).includes("")) {
        setErrorScheduling(prev => ({
          ...prev,
          client: "Preencher corretamente os campos"
        }));

      } else {
        setErrorScheduling(prev => ({
          ...prev,
          client: ""
        }));

      }

      if (newScheduling.length === 0) {
        setErrorScheduling(prev => ({
          ...prev,
          calendar: "Selecione as data para o Agendamento"
        }));

      }

      setIsPending(false);

      return
    }

    const objScheduling = {
      client: formData,
      scheduling: newScheduling,
      price: newScheduling.length * data[0].totalRevenue
    }

    setTimeout(() => {
      setFormData({
        name: "",
        cpf: "",
        phone: "",
        email: "",
      });

      setResetCalendar(true);

      setErrorScheduling(prev => ({
        ...prev,
        client: ""
      }));

      setIsPending(false);
    }, 1000)

  }

  let bookedDates = schedulingList.map(date => formatBookedDate(date));

  function formatBookedDate(date: string) {
    const dateFormat = new Date(date).toISOString().split("T")[0];
    return new Date(dateFormat.replaceAll("-", ","));
  }

  useEffect(() => {
    if (newScheduling.length > 0) {
      setErrorScheduling(prev => ({
        ...prev,
        calendar: ""
      }));
    }

  }, [newScheduling])

  return (
    <div className="max-w-[1200px] w-full m-auto p-4">
      <Link href="/" className="flex items-center gap-2 text-gray-600 font-semibold hover:text-gray-700"> <CircleArrowLeft /> Voltar</Link>
     
      <h1 className="text-2xl text-center font-bold mt-6 mb-4 text-[#228BE6] m-auto">{data[0].name}</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Novo Agendamento</CardTitle>
        </CardHeader>
        <CardContent className="border-t pt-4 flex items-start justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold"><span className="flex flex-col font-semibold text-[#3d3d3d] text-sm">Imóvel</span> {data[0].name}</p>
            <p className="text-lg font-semibold"><span className="flex flex-col font-semibold  text-[#3d3d3d] text-sm">Preço por dia</span>R$ {data[0].totalRevenue}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex flex-col font-semibold text-[#3d3d3d] text-sm">Endereço</p>
            <p className="font-semibold text-[#3d3d3d]" >Cidade: <span className="font-semibold text-black">{data[0].city} - {data[0].state}</span></p>
            <p className="font-semibold text-[#3d3d3d]">Rua:<span className="font-semibold text-black"> {data[0].street}</span></p>
            <p className="font-semibold text-[#3d3d3d]">Nº: <span className="font-semibold text-black">{data[0].number_address}</span></p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex flex-col font-semibold text-[#3d3d3d] text-sm" >Compartilhar</p>
            <Button className="flex items-center gap-2 cursor-pointer" >
              Localização
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 flex-col md:flex-row mt-4">
        <div className="flex-1 border shadow-sm p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4 text-center">Informações Cliente</h2>

          <form action="" className="flex flex-col gap-4">
            <div className="grid w-full  items-center gap-3">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInput} type="text" className="w-full h-10 border-neutral-400" />
            </div>


            <div className="flex flex-col flex-1  gap-3">
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" name="cpf" value={formData.cpf} onChange={handleInput} placeholder="000.000.000-00" type="text" className="w-full h-10 border-neutral-400" />
            </div>

            <div className="flex flex-col flex-1 gap-3">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleInput} type="text" className="w-full h-10 border-neutral-400" />
            </div>


            <div className="grid w-full items-center gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" value={formData.email} onChange={handleInput} type="email" className="w-full h-10 border-neutral-400" />
            </div>

          </form>
          {errorScheduling.client !== "" && (
            <p className="text-red-400 text-center mt2">{errorScheduling.client}</p>
          )}
        </div>

        <div className="flex-1 border shadow-sm p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4 text-center rounded-md">Selecionar Data</h2>
          <CalendarProperty booked={bookedDates} newScheduling={setNewScheduling} reset={resetCalendar} />
          {errorScheduling.calendar !== "" && (
            <p className="text-red-400 text-center mt2">{errorScheduling.calendar}</p>
          )}
        </div>
      </div>

      <Card className="mt-4">
        <CardHeader className="flex justify-between gap-6 flex-wrap">
          <CardTitle className="text-xl">Informações da Reserva</CardTitle>
          <CardAction>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="flex flex-col font-semibold text-[#3d3d3d] text-sm" >Compartilhar</p>
              <Button className="flex items-center gap-2 cursor-pointer">
                <FileText />
                Orçamento
              </Button>

            </div>
          </CardAction>
        </CardHeader>
        <CardContent>

          <div className="border-t pt-4 flex items-start gap-y-6 gap-x-10 flex-wrap">
            <div className="flex flex-col gap-2">
              <p className="flex flex-col font-semibold text-[#3d3d3d]">
                <span className="flex flex-col font-semibold text-neutral-800 text-lg">Imóvel</span>
                {data[0].name}
              </p>
            </div>

            <div className="flex flex-col">
              <p className="flex flex-col font-semibold text-neutral-800  text-lg">Endereço</p>

              <div className="flex gap-4 flex-wrap">
                <p className="font-semibold text-neutral-600" >Cidade: <span className="font-semibold text-black">{data[0].city} - {data[0].state}</span></p>
                <p className="font-semibold text-neutral-600">Rua:<span className="font-semibold text-black"> {data[0].street}</span></p>
                <p className="font-semibold text-neutral-600">Nº: <span className="font-semibold text-black">{data[0].number_address}</span></p>
              </div>
            </div>

          </div>

          <div className="mt-6 border-t border-dashed pt-4">
            <div className="flex flex-col">
              <p className="flex flex-col font-semibold text-neutral-800 mb-2  text-lg">Datas Selecionadas</p>
              <div className="flex gap-4">
                {newScheduling.length > 0 && (
                  newScheduling.map((item, index) => <p key={index} className="font-semibold text-black">{item.toLocaleDateString('pt-BR')}</p>)
                )
                }

              </div>
            </div>
          </div>

          <h2 className="flex gap-2 border-t pt-2 mt-4 items-center">

            Total
            <span className="font-semibold text-lg">R$ {newScheduling.length * data[0].totalRevenue}</span>
          </h2>

          {isPending
            ?
            <Button type="submit" disabled className="bg-sky-600 text-white hover:bg-blue-700 w-[150px] flex m-auto cursor-pointer">
              Enviando
            </Button>
            :
            <Button className="flex mt-4 mx-auto p-4 cursor-pointer" onClick={handlesScheduling}>Confirmar Reserva</Button>
          }


        </CardContent>

      </Card>

    </div>
  )
}