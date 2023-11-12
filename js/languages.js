'use strict';
const langs = {
	//Main__body
	'main__view':{
		'en': "View collection",
		'ru': "Смотреть коллекцию",
	},
	'footer-main_ring':{
		'en': "TRINITY RING, Cartier",
		'ru': "КОЛЬЦО TRINITY, Cartier",
	},
	'footer-main_gold':{
		'en': "White gold, diamonds",
		'ru': "Белое золото, бриллианты",
	},
	//Nav-main
	'nav-main_jewelry':{
		'en': "Jewelry",
		'ru': "Ювелирные изделия",
	},
	'nav-main_clock':{
		'en': "clock",
		'ru': "часы",
	},
	'nav-main_aromas':{
		'en': "aromas",
		'ru': "ароматы",
	},
	'nav-main_brands':{
		'en': "brands",
		'ru': "бренды",
	},
	'nav-main_leather':{
		'en': "LEATHER GOODS",
		'ru': "изделия из кожи",
	},
	'nav-main_bridal':{
		'en': "BRIDAL JEWELRY",
		'ru': "Свадебные украшения",
	},
	'nav-main_another':{
		'en': "another",
		'ru': "другое",
	},
	'nav-main-column-for':{
		'en': "for whom",
		'ru': "для кого",
	},
	'nav-main-column-women':{
		'en': "For women",
		'ru': "Для женщин",
	},
	'nav-main-column-men':{
		'en': "For men",
		'ru': "Для мужчин",
	},
	'nav-main-column-child':{
		'en': "For children",
		'ru': "Для детей",
	},
	'nav-main-column-catg':{
		'en': "Categories",
		'ru': "Категории",
	},
	'nav-main-column-ring':{
		'en': "Rings",
		'ru': "Кольца",
	},
	'nav-main-column-bracelet':{
		'en': "Bracelets",
		'ru': "Браслеты",
	},
	'nav-main-column-necklace':{
		'en': "Necklace",
		'ru': "Колье",
	},
	'nav-main-column-earring':{
		'en': "Earrings",
		'ru': "Серьги",
	},
	'nav-main-column-brooches':{
		'en': "Brooches",
		'ru': "Броши",
	},
	'nav-main-column-material':{
		'en': "material",
		'ru': "материал",
	},
	'nav-main-column-diamond':{
		'en': "Products <br/>with diamonds",
		'ru': "Изделия <br/>с бриллиантами",
	},
	'nav-main-column-yellow':{
		'en': "Yellow gold",
		'ru': "Желтое золото",
	},
	'nav-main-column-white':{
		'en': "White gold",
		'ru': "Белое золото",
	},
	'nav-main-column-pink':{
		'en': "Pink gold",
		'ru': "Розовое золото",
	},
	'nav-main-column-brand':{
		'en': "brand",
		'ru': "бренд",
	},
	'nav-main-column-item':{
		'en': "Show all brands",
		'ru': "Показать все бренды",
	},
	'footer-nav_new':{
		'en': "New collection by Mercury",
		'ru': "Новая коллекция by Mercury",
	},
	'footer-nav_look':{
		'en': "View collection",
		'ru': "Cмотреть коллекцию",
	},
	'footer-nav_phone':{
		'en': "hotline phone number",
		'ru': "телефон горячей линии",
	},
	'footer-nav_subscribe':{
		'en': "subscribe to news",
		'ru': "подпишитесь на новости",
	},
	'input_mail':{
		'en': "Enter Email",
		'ru': "Введите E-mail",
	},
	//Section
	'section_column':{
		'en': "Go to section",
		'ru': "Перейти в раздел",
	},
	'section_column_men':{
		'en': "For men",
		'ru': "Для мужчин",
	},
	'section_column_women':{
		'en': "For women",
		'ru': "Для женщин",
	},
	//Address
	'address_find':{
		'en': "Find <br/> a boutique near you",
		'ru': "Найди <br/> бутик около себя",
	},
	'address_write':{
		'en': "Enter your address and find out about the closest boutiques to you",
		'ru': "Введите свой адрес и узнайте о самых ближайших бутиках к вам",
	},
	'address_input':{
		'en': "Enter address",
		'ru': "Введите адрес",
	},
	//Jewelry
	'jewelry_Jow':{
		'en': "Jow's RING, Cartier",
		'ru': "КОЛЬЦО jow’s, Cartier",
	},
	'jewelry_Jow_desc':{
		'en': "White gold, diamonds",
		'ru': "Белое золото, бриллианты",
	},
	'jewelry_Etoile':{
		'en': "Etoile necklace, HUBLOT",
		'ru': "КОлье etoile, HUBLOT",
	},
	'jewelry_Etoile_desc':{
		'en': "White gold, diamonds",
		'ru': "Белое золото, бриллианты",
	},
	'jewelry_Moon':{
		'en': "Moon earrings, HUBLOT",
		'ru': "Серьги moon, HUBLOT",
	},
	'jewelry_Moon_desc':{
		'en': "Yellow gold, sapphire",
		'ru': "Желтое золото, сапфир",
	},
	'jewelry_Croix':{
		'en': "RING croix, Cartier",
		'ru': "КОЛЬЦО croix, Cartier",
	},
	'jewelry_Croix_desc':{
		'en': "Yellow, white, rose gold",
		'ru': "Желтое, белое, розовое золото",
	},
	'jewelry_Win':{
		'en': "earrings win, BLANCPAIN",
		'ru': "серьги win, BLANCPAIN",
	},
	'jewelry_Win_desc':{
		'en': "Yellow gold, pearls",
		'ru': "Желтое золото, жемчуг",
	},
	//Social
	'social_title':{
		'en': "We<br/>on social networks",
		'ru': "Мы<br/>в социальных сетях",
	},
	//Subscribe
	'subscribe_phone':{
		'en': "flagship store phone number",
		'ru': "телефон флагманского магазина",
	},
	'subscribe_write':{
		'en': "subscribe to news",
		'ru': "подпишитесь на новости",
	},
	//Footer
	'footer_work':{
		'en': "work in a company",
		'ru': "работа в компании",
	},
	'footer_use':{
		'en': "terms of use",
		'ru': "условия пользования",
	},
	'footer_output':{
		'en': "output",
		'ru': "выходные данные",
	},
	'footer_policy':{
		'en': "Privacy Policy",
		'ru': "политика конфиденциальности",
	},
	'footer_map':{
		'en': "Site Map",
		'ru': "карта сайта",
	},
	'footer_phone':{
		'en': "hotline phone number",
		'ru': "телефон горячей линии",
	},
	'footer_subscribe':{
		'en': "subscribe to news",
		'ru': "подпишитесь на новости",
	}
};
export default langs;