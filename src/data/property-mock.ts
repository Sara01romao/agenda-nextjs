export interface Property {
  id: string;
  name: string;
  city: string;
  street: string;
  number_address: string;
  state: string;
  cep: string;
  totalRevenue: number;
  schedulingCount: number;
  scheduling: Scheduling[];
}

interface Scheduling {
  id: string;
  name: string;
  phone: string;
  dates: string[];
  status: "Pago" | "Pendente" | "Cancelado";
  value: number;
  updatedAt: string;
}

export const propertys: Property[] = [
  {
    "id": "property-1",
    "name": "Sítio da Folha",
    "city": "São Paulo",
    "street": "João de Barro",
    "number_address": "22",
    "state": "SP",
    "cep": "01234-567",
    "totalRevenue": 500.00,
    "schedulingCount": 2,
    "scheduling": [
      {
        "id": "sched-1",
        "name": "Florence",
        "phone": "(11) 11111-1111",
        "dates": ["2025-08-09T00:00:00.000Z"],
        "status": "Pago",
        "value": 250.00,
        "updatedAt": "2025-08-01T10:00:00.000Z"
      },
      {
        "id": "sched-2",
        "name": "Pink",
        "phone": "(11) 98989-89898",
        "dates": ["2025-08-22T00:00:00.000Z", "2025-08-23T00:00:00.000Z", "2025-08-24T00:00:00.000Z"],
        "status": "Pago",
        "value": 250.00,
        "updatedAt": "2025-08-01T10:00:00.000Z"
      }
    ]
  },
  {
    "id": "property-2",
    "name": "Casa",
    "city": "São Paulo",
    "street": "João de Barro",
    "number_address": "22",
    "state": "SP",
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
]