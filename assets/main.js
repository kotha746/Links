window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.


let imageBlocks = document.querySelectorAll('li.image-block')

imageBlocks.forEach((block) => {
    block.querySelector('figure').onclick = () => {
        block.classList.add('active')
    }
}

    block.querySelector('aside').onclick = () => {
    blocks.classList.remove('active')
}

})

