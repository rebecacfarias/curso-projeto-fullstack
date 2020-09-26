const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
    
    const {macadress, type, title, description, when} = req.body;

    if(!macadress)
        return res.status(400).json({error: 'macaddress é obrigatório'});
    else if(!type)
        return res.status(400).json({error: 'tipo é obrigatório'});
    else if(!title)
        return res.status(400).json({error: 'título é obrigatório'});
    else if(!description)
        return res.status(400).json({error: 'descrição é obrigatório'});
    else if(!when)
        return res.status(400).json({error: 'data e hora são obrigatórios'});
    else if(isPast(new Date(when)))
        return res.status(400).json({error: 'insira uma data válida'});
    else {
        let exists;

        if(req.params.id){
            exists = await TaskModel
            .findOne({
                    '_id': {'$ne': req.params.id},
                    'when': {'$eq': new Date(when)}, 
                    'macadress': {'$in': macadress }
                });
        }else{
            exists = await TaskModel
            .findOne({
                'when': {'$eq': new Date(when)}, 
                'macadress': {'$in': macadress }
            });
        }

        if(exists){
            return res.status(400).json({error: 'já existe uma tarefa nesse horário'});
        }
    }
   next();
}

module.exports = TaskValidation;