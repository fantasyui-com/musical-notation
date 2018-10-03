module.exports = function(notes){

  const response = [];

  notes.trim()
  .split(/\n/) // split into lines
  .map(i=>i .trim() .split('') ) // split line into cells
    .map(line=>

      line
      .map(i=>i.match(/[^x-]/)?null:i) // mark non 'x'/'-' as null
      .filter(i=>i) // throw away nulls
      .map(i=>i==='-'?0:i) // convert '-' to 0
      .map(i=>i==='x'?1:i) // convert 'x' to 1

    )
  .forEach(function(line){
    response.push(line)
  })


  return response;

}
