const grid=document.getElementById('grid')
fetch('https://hp-api.onrender.com/api/characters')
.then(r=>r.json())
.then(d =>{
  document.getElementById('loading').remove()
  d.filter(p=>p.image).forEach(p=>{
    const card=document.createElement('div')
    card.className='card'
    // definir variables ALT usadas en la plantilla para evitar referencias indefinidas
    const altName = p.name || 'Personaje sin nombre'
    const altHouse = p.house || 'Sin casa'
    const altActor = p.actor || 'actor no especificado'
    const altAlive = p.alive ? 'vivo' : 'fallecido'
    card.innerHTML=`
    <div class="portrait"><img src="${p.image}" alt="${altName}, retrato a busto mirando a la cámara, ${altHouse === 'Sin casa' ? 'Sin casa' : 'miembro de ' + altHouse}, interpretado por ${altActor}, ${altAlive}. Fondo liso, sin texto legible"></div>
    <div class="name">${p.name}</div>
    <div class="house">${p.house||'Sin casa'}</div>
    <div class="actor">${p.actor}</div>
    <div class="alive">${p.alive ? 'Vivo' : 'Fallecido'}</div>`
    grid.append(card)
    })
})
