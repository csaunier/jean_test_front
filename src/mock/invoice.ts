import { Invoice } from '@customTypes/index'

export const invoice: Invoice = {
  "id": 19634,
  "customer_id": 254,
  "finalized": false,
  "paid": false,
  "date": "2024-11-22",
  "deadline": "2024-12-18",
  "total": "109245.0",
  "tax": "3561.67",
  "customer": {
    "id": 254,
    "first_name": "Lauren",
    "last_name": "Klein",
    "address": "665 Louanne Row",
    "zip_code": "54758-7650",
    "city": "Lake Inocenciachester",
    "country": "Saint Martin (French part)",
    "country_code": "MF"
  },
  "invoice_lines": [
    {
      "id": 41085,
      "invoice_id": 19634,
      "product_id": 17,
      "quantity": 5,
      "unit": "piece",
      "label": "Nissan Altima",
      "vat_rate": "0",
      "price": "87875.0",
      "tax": "0.0",
      "product": {
        "id": 17,
        "label": "Nissan Altima",
        "vat_rate": "0",
        "unit": "piece",
        "unit_price": "17575.0",
        "unit_price_without_tax": "17575.0",
        "unit_tax": "0.0"
      }
    },
    {
      "id": 41086,
      "invoice_id": 19634,
      "product_id": 4,
      "quantity": 2,
      "unit": "piece",
      "label": "Ford Fiesta",
      "vat_rate": "20",
      "price": "21370.0",
      "tax": "3561.67",
      "product": {
        "id": 4,
        "label": "Ford Fiesta",
        "vat_rate": "20",
        "unit": "piece",
        "unit_price": "10685.0",
        "unit_price_without_tax": "8904.17",
        "unit_tax": "1780.83"
      }
    }
  ]
}