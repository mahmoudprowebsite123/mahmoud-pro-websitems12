let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }






// ------------------------------------------------------------------------------------

const games = [{
        id: '1',
        gamename: `GTA 5
        <div class="subtitle">Rockstar Games</div>`,
        poster: "Imgs/gta5.png",
        href1: `contact.html`
    },
    {
        id: '2',
        gamename: `GTA 4
        <div class="subtitle">Rockstar Games</div>`,
        poster: "Imgs/gta4.png",
        href1: `AC2.html`
    },
    {
        id: '3',
        gamename: `GTA SA
        <div class="subtitle">Rockstar Games</div>`,
        poster: "Imgs/gta-san-andreas.png",
        href1: `AC2.html`
    },
    {
        id: '4',
        gamename: `GTA Vice City
        <div class="subtitle">Rockstar Games</div>`,
        poster: "Imgs/gta-vice-city.png",
        href1: `AC2.html`
    },
    {
        id: '5',
        gamename: `GTA 3
        <div class="subtitle">Rockstar Games</div>`,
        poster: "Imgs/gta3.png",
        href1: `AC2.html`
    },
    {
        
        id: '6',
        gamename: `Assassin's Creed 2
        <div class="subtitle"><span><i class="fa-solid fa-swords"></i> War</span> <br>
          <span><i class="fas fa-bolt"></i> Action</span></div>`,
        poster: "Imgs/AC2.png",
        href1: `AC2.html`
        
    },
    {
        
        id: '7',
        gamename: `PC Building Simulator
        <div class="subtitle">`,
        poster: "Imgs/pc-building1.jpg",
        href1: `pc-building1.html`
        
    },
    {
        
        id: '8',
        gamename: `Blur
        <div class="subtitle"><span><i class="fa-solid fa-car"></i> Car</span></div> `,
        poster: "Imgs/Blur.png",
        href1: `Blur.html`
        
    },
    {
        
        id: '9',
        gamename: `Conter Strike Source
        <div class="subtitle">Valve Corporation</div> `,
        poster: "Imgs/Counter_Strike_Source.png",
        href1: `CS-SO.html`
        
    },
    {
        
        id: '10',
        gamename: `Stranded Deep
        <div class="subtitle">Beam Team Games</div> `,
        poster: "Imgs/Stranded-DEEP.png",
        href1: `Stranded-Deep.html`
        
    },
    {
        
        id: '11',
        gamename: `Assassin's Creed Brotherhood
        <div class="subtitle"><span><i class="fa-solid fa-swords"></i> War</span> <br>
          <span><i class="fas fa-bolt"></i> Action</span></div> `,
        poster: "Imgs/ACB.png",
        href1: `ACB.html`
        
    },
    {
        
        id: '12',
        gamename: `Tech Store Simulator
        <div class="subtitle"></div> `,
        poster: "Imgs/Tech-Store-Simulator.jpg",
        href1: `Tech-store-sim.html`
        
    }
    
          
]
// search data start
 
let result = document.getElementsByClassName('result')[0];

games.forEach(element => {
    const { id, gamename, poster, href1 } = element;
    let cart = document.createElement('a');
    cart.classList.add('cart');
    cart.href = href1;
    cart.innerHTML = `
    <img src="${poster}" alt="">
        <div class="des"> 
            ${gamename}
        </div>
    `;
    result.appendChild(cart);
});



let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=> {
    let input_value = input.value.toUpperCase();
    let items = result.getElementsByTagName('a');

    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('des')[0];
        let text_value = as.textContent || as.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
        } else{
            items[i].style.display = "none";
        }

        if (input.value == 0) {
            result.style.display = "none";
        } else {
            result.style.display = "flex";
        }
    }
})



// search data end



const currentLocation = window.location.href;
const menuItems = document.querySelectorAll('.nav-links a');

menuItems.forEach(item => {
  if (item.href === currentLocation) {
    item.classList.add('active1');
  }
});