//menu items JSON dataset.
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "stake dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

//necessary selectors
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

//after DOM loads.
window.addEventListener('DOMContentLoaded', function(){
	
	//display filter buttons
	displayFilterBtns();
	
	//display menu items.
	displayMenuItems(menu);
	
	const filterBtns = btnContainer.querySelectorAll('.filter-btn');
	
	//addEventListener
	filterMenuEventListener(filterBtns, 'click');
	
	
});

//displayMenuItems function declaration.
function displayMenuItems(menuItems){
	let displayMenu = menuItems.map(function(item){
		
		return `<article class='menu-item'>
				<img src="${item.img}" alt='menu-item' class='photo'>
				<div class='item-info'>
					<header>
						<h4>${item.title}</h4>
						<h4 class='price'>$${item.price}</h4>
					</header>
					<p class='item-text'>${item.desc}</p>
				</div>
			</article>`;
	});
	
	//remove all ','.
	displayMenu = displayMenu.join('');
	
	//append menu to DOM
	sectionCenter.innerHTML = displayMenu;
}

//filterMenu function declaration.
function filterMenu(menuItems, e){
	let filteredItems = menuItems.filter(function(item){
		const category = e.currentTarget.innerHTML
		if(category === 'all')
			return menuItems
		else
			return item.category == category;
	});
	
	//daisplay filtered items
	displayMenuItems(filteredItems);
}

//getCategories function declaration.
function getCategories(menuItems){
	let categories = menuItems.map(function(item){
		return item.category;
	});
	
	//make array unique
	categories = Array.from(new Set(categories));
	//prepend category "all" to final category array
	categories.unshift('all');
	
	return categories;
	
}

//displayFilterBtns function declaration.
function displayFilterBtns(){
	const categories = getCategories(menu);
	
	let filterBtns = categories.map(function(category){
		return `<button class='filter-btn' type='button'>${category}</button>`
	});
	
	filterBtns = filterBtns.join('');
	
	//update DOM with dynamic filter buttons
	btnContainer.innerHTML = filterBtns;
}

//Filter menu event listener function declaration.
function filterMenuEventListener(filterBtnSelector, eventToAdd){
	filterBtnSelector.forEach(function(filterBtn){
		filterBtn.addEventListener(eventToAdd, function(evt){
			filterMenu(menu, evt);
		});
	});
}



























