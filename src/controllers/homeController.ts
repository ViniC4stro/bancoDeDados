import { Request, Response } from 'express';

import { Product } from '../models/Product';

//importando o arquivo mysql.ts
import { sequelize } from '../instances/mysql'
import { User } from '../models/User';
import { Op } from 'sequelize';

export const home = async (req: Request, res: Response)=>{

    // ADICIONANDO USUÁRIOS NO BANCO
    const user = User.build({
        name: 'José',
        age: 10
    })

    await user.save()

    /*
    // PUXAR OS USUÁRIOS QUE ESTÃO NO MEU BD
    let users = await User.findAll({
       //  where: {name: ['vinicius']}
       where: {
        [Op.or]: [
            {age: 22},
            {age: 40}
        ]
       }
    })
    console.log("USUÁRIOS: ", JSON.stringify(users))
*/
    res.render('pages/home', {
        
    });
    
};