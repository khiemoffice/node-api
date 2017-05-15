# node-api
o Get id: req.params.id
o var lion = _findIndex(lions, {id:req.params.id})
  -update: updatelions = _.assign(lions[lion],update) 
  -delete: lions.splice(lion,1)
