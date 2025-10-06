<h2 align="center"> 💻 Agenda Local </h2> 

<p align="center">
  
  <img max-width="auto" height="auto"  src="https://github.com/user-attachments/assets/6b78899b-e73b-40f8-af1c-7a060c4f50ef">
  <img max-width="auto" height="auto"  src="https://github.com/user-attachments/assets/446a0120-a92b-4262-9727-73aa59fb021a">
  
</p> 


## 💻  Sobre o Projeto  
Aplicação Front-End para agendamento de imóveis com duas páginas: uma exibe o calendário e lista de agendamentos, e outra permite cadastrar cliente, selecionar datas disponíveis e calcular automaticamente o valor da locação.

 Exemplo: Mock da Propriedade
```
{
    "id": "property-2",
    "name": "Casa Lorem",
    "city": "São Lorem",
    "street": "Lorem de Barro",
    "number_address": "22",
    "state": "LI",
    "cep": "01234-567",
    "totalRevenue": 500.00,
    "schedulingCount": 2,
    "scheduling": [
      {
        "id": "sched-1",
        "name": "Joelma Maria",
        "phone": "(11) 55555-4444",
        "dates": ["2025-08-08T00:00:00.000Z"],
        "status": "Pago",
        "value": 250.00,
        "updatedAt": "2025-08-01T10:00:00.000Z"
      },
      {
        "id": "sched-2",
        "name": "Tony Stark",
        "phone": "(00) 00000-0000",
        "dates": ["2025-09-06T00:00:00.000Z", "2025-09-07T00:00:00.000Z"],
        "status": "Pago",
        "value": 250.00,
        "updatedAt": "2025-08-01T10:00:00.000Z"
      }
    ]
  }
```


<br>


## :rocket: Tecnologias Usadas


Front-end 
```
Nextjs
Typescript
Shadcn ui
```
Design
```
Figma
```




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
