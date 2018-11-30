function bucle() {
    contextonpc.clearRect(0, 0, 2048, 2048)
    contextosensores.clearRect(0, 0, 2048, 2048)
    for (var i = 0; i < numeroNpc; i++) {
        // Pinto el npc
        /*
        contextonpc.beginPath()
        contextonpc.arc(npcs[i].posx,npcs[i].posy,4,0,Math.PI*2,true);
        contextonpc.fill();
        contextonpc.closePath();
        */
        drawImageRot(contextonpc, sprite, npcs[i].posx, npcs[i].posy, 12, 12, npcs[i].angulo)
        /*var datos = contextosprite.getImageData(0,0,25,20)
        contextonpc.putImageData(datos,npcs[i].posx,npcs[i].posy)*/
        // Pinto sus sensores
        // 30 grados
        contextosensores.beginPath()
        contextosensores.arc(npcs[i].posx + Math.cos(npcs[i].angulo + Math.PI / 6) * 10, npcs[i].posy + Math.sin(npcs[i].angulo + Math.PI / 6) * 10, 2, 0, Math.PI * 2, true);
        contextosensores.fill();
        contextosensores.closePath();
        // 60 grados
        contextosensores.beginPath()
        contextosensores.arc(npcs[i].posx + Math.cos(npcs[i].angulo + Math.PI / 3) * 10, npcs[i].posy + Math.sin(npcs[i].angulo + Math.PI / 3) * 10, 2, 0, Math.PI * 2, true);
        contextosensores.fill();
        contextosensores.closePath();
        // -30 grados
        contextosensores.beginPath()
        contextosensores.arc(npcs[i].posx + Math.cos(npcs[i].angulo - Math.PI / 6) * 10, npcs[i].posy + Math.sin(npcs[i].angulo - Math.PI / 6) * 10, 2, 0, Math.PI * 2, true);
        contextosensores.fill();
        contextosensores.closePath();
        // -60 grados
        contextosensores.beginPath()
        contextosensores.arc(npcs[i].posx + Math.cos(npcs[i].angulo - Math.PI / 3) * 10, npcs[i].posy + Math.sin(npcs[i].angulo - Math.PI / 3) * 10, 2, 0, Math.PI * 2, true);
        contextosensores.fill();
        contextosensores.closePath();
        // Vamos a hacer que se muevan
        npcs[i].muevete();
    }
    clearTimeout(temporizador);
    temporizador = setTimeout("bucle()", 1)

}