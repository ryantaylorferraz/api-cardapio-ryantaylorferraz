import { MenuDataBase, generatedId } from "../database/MenuDatabase";
import { TMenu, TMenuCreate, TMenuUpdate } from "../interfaces";

export class MenuService {
    getMenu() {
        return MenuDataBase;
    }

    createMenu(data: TMenuCreate) {
        const newMenu = {id: generatedId(), ...data }
        MenuDataBase.push(newMenu)
        return newMenu
    }

    updateMenu(id: string, data: TMenuUpdate){
        const index = MenuDataBase.findIndex(menu => menu.id === Number(id)) 
        const currentMenu = MenuDataBase.find(menu => menu.id === Number(id)) 

        const newMenu = {...currentMenu, ...data} as TMenu

        MenuDataBase.splice(index, 1, newMenu)

        return newMenu
    }

    delete(id: string){
        const index = MenuDataBase.findIndex(menu => menu.id === Number(id))
        MenuDataBase.splice(index, 1)
    }
}