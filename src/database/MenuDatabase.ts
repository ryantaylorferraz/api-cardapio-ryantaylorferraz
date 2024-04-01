import { TMenu } from "../interfaces";

let id = 0

export const generatedId = () => {
    id++
    return id;
}

export const MenuDataBase: TMenu[] = [{
    "id": generatedId(),
    "title": "Macarrão mediterrâneo",
    "description": "Macarrão spaghetti com frutos-do-mar e especíarias, especialidade da cozinha. Atenção: Contém camarão e outros frutos-do-mar!",
    "size": 400,
    "serving": 2,
    "price": 73.0
},
{
    "id": generatedId(),
    "title": "Pizza Margherita",
    "description": "Uma deliciosa pizza margherita com molho de tomate, queijo mussarela, manjericão fresco e azeite de oliva.",
    "size": 12,
    "serving": 1,
    "price": 25
  },
  {
    "id": generatedId(),
    "title": "Salmão grelhado",
    "description": "Salmão grelhado com legumes frescos e molho de limão. Uma opção saudável e saborosa para o almoço ou jantar.",
    "size": 200,
    "serving": 1,
    "price": 45
  }]