const MacadressValidation = (req, res, next) => {
    if(!req.body.macadress)
        return res.status(200).json({error: 'macadress é obrigatório'});
    else
        next();
}

module.exports = MacadressValidation;