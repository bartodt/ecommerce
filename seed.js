const { User, Product, Order, OrderProduct, Category, CategoryProduct, ProductUser } = require("./models/index");

async function seed() {
  async function createUsersProductsOrdersAndCategories() {
    /*SUDO!*/ await User.create({
    firstName: "Admin",
    lastName: "3",
    email: "admin3@admin.com",
    password: "admin",
    address: "Tu casa",
    phone: "1111111111",
    userType: "3",
  })
      .then(() => console.log("Por favor espere, estbleciendo conexión cuántica")).catch((err) => console.log(err));

  /*SUDO!*/ await User.create({
        firstName: "Juan",
        lastName: "Loza",
        email: "juana@gmail.com",
        password: "1",
        address: "Pachanga 3032",
        phone: "2332432",
        userType: "3",
      }).then(() => console.log("Por favor espere, estbleciendo conexión cuántica")).catch((err) => console.log(err));

    /*Admin*/ await User.create({
        firstName: "Cristian",
        lastName: "Mendoza",
        email: "cristian@gmail.com",
        password: "1",
        address: "Aston 1311",
        phone: "43432432",
        userType: "2",
      })
      .then(() => console.log("Generando super usuario con telemetría cósmica"))
      .catch((err) => console.log(err));
    /*User*/ await User.create({
        firstName: "Jose",
        lastName: "Perez",
        email: "jose@gmail.com",
        password: "1",
        address: "Machacay 8042",
        phone: "7522432",
        userType: "1",
      })
      .then(() =>
        console.log("Fusión molecular completada, por favor espere...")
      )
      .catch((err) => console.log(err));
    console.log("users generated!");

    Category.bulkCreate([
      { name: "calzado" },
      { name: "remeras" },
      { name: "pantalones" },
      { name: "camperas" },
      { name: "accesorios" },
    ])
      .then(() => console.log("Categories generated!"))
      .catch((err) => console.log(err));

    Product.bulkCreate([
      {
        name: "NIKE AIR MAX TAILWIND IV",
        price: 18499,
        description: "El Nike Air Max Tailwind IV le da un nuevo estilo al clásico de los años 90, a la vez que las unidades Max Air brindan comodidad y estilo que duran. Zapatillas Nike Air Max Tailwind Iv De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/330007-1000-1000/306-6718_1.jpg?v=637304224147630000",
        image: "http://essential.vteximg.com.br/arquivos/tailwindazul_02.jpg?v=637304963288870000",
        stock: 10,
        reviews: [7, 6, 9, 10, 9, 10],
      },
      {
        name: "PUMA RS-2K",
        price: 10999,
        description: "Zapatillas Puma Rs-2K De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/377614-1000-1000/961-1265_1.jpg?v=637401965257170000",
        image: "https://essential.vteximg.com.br/arquivos/ids/377615-1000-1000/961-1265_2.jpg?v=637401965363930000",
        stock: 10,
        reviews: [8, 8],
      },
      {
        name: "ADIDAS ORIGINALS SONKEI",
        price: 9999,
        description: "ZAPATILLAS ADIDAS ORIGINALS SONKEI De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/372738-1000-1000/261-1847_1.jpg?v=637395662377870000",
        image: "https://essential.vteximg.com.br/arquivos/ids/372959-1000-1000/261-1847_2.jpg?v=637395677870230000",
        stock: 20,
        reviews: [7, 5, 6],
      },
      {
        name: "ADIDAS ORIGINALS SONKEI",
        price: 9999,
        description: "Zapatillas Adidas Originals Sonkei De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/373956-1000-1000/261-1898_1.jpg?v=637395918483730000",
        image: "https://essential.vteximg.com.br/arquivos/ids/374093-1000-1000/261-1898_2.jpg?v=637395924887200000",
        stock: 20,
        reviews: [8, 10, 10],
      },
      {
        name: "ADIDAS ORIGINALS ZX 2K BOOST",
        price: 14999,
        description: "Zapatillas Adidas Originals Zx 2K Boost De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/359981-1000-1000/261--1370_1.jpg?v=637378700666300000",
        image: "https://essential.vteximg.com.br/arquivos/ids/359982-1000-1000/261-1370_2.jpg?v=637378700843900000",
        stock: 15,
        reviews: [8, 10, 8, 10, 6],
      },
      {
        name: "JORDAN AIR 1 LOW SE",
        price: 14999,
        description: "ZAPATILLAS JORDAN AIR 1 LOW SE De Basket Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/358319-1000-1000/306-6985_1.jpg?v=637377604078100000",
        image: "https://essential.vteximg.com.br/arquivos/ids/358324-1000-1000/306-6985_2.jpg?v=637377604132900000",
        stock: 20,
        reviews: [8, 10, 8, 10, 6],
      },
      {
        name: "REEBOK CLASSIC LEATHER",
        price: 9499,
        description: "Zapatillas Reebok Classic Leather De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/360243-1000-1000/721-0138_1.jpg?v=637383636098770000",
        image: "https://essential.vteximg.com.br/arquivos/ids/360601-1000-1000/721-0138_2.jpg?v=637383642591900000",
        stock: 20,
        reviews: [8, 10, 8, 10, 6],
      },
      {
        name: "NIKE AIR MAX 90",
        price: 11999,
        description: "No hay nada tan ligero, cómodo ni auténtico como las Nike Air Max 90 Premium, que se mantienen fieles a sus raíces originales con la icónica suela exterior tipo gofre, revestimientos cosidos y toques clásicos de TPU.",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/316717-1000-1000/306-6587_1.jpg?v=637177191026500000",
        image: "http://essential.vteximg.com.br/arquivos/306-6587_1.jpg?v=637177400818200000",
        stock: 20,
        reviews: [8, 10, 8, 10, 6],
      },
      {
        name: "NIKE CORTEZ BASIC",
        price: 9999,
        description: "Zapatillas Nike Cortez Basic De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/354270-1000-1000/306-6285_1.jpg?v=637364537386830000",
        image: "https://essential.vteximg.com.br/arquivos/ids/354273-1000-1000/306-6285_2.jpg?v=637364537959330000",
        stock: 20,
        reviews: [8, 10, 10],
      },
      {
        name: "NIKE AIR MAX 720",
        price: 18499,
        description: "Zapatillas Nike Air Max 720 De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/348693-1000-1000/306-6893_1.jpg?v=637357005744030000",
        image: "https://essential.vteximg.com.br/arquivos/ids/349166-1000-1000/306-6893_2.jpg?v=637357014048430000",
        stock: 20,
        reviews: [7, 5, 6, 8, 9],
      },
      {
        name: "NIKE AIR FORCE 1 REACT",
        price: 15499,
        description: "Zapatillas Nike Air Force 1 React De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/343178-1000-1000/306-7528_1.jpg?v=637341659929600000",
        image: "https://essential.vteximg.com.br/arquivos/ids/343652-1000-1000/306-7528_2.jpg?v=637341671510630000",
        stock: 20,
        reviews: [7, 5, 6, 8, 9],
      },
      {
        name: "REMERA NIKE FLORAL",
        price: 4499,
        description: "REMERA NIKE FLORAL De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/377661-1000-1000/304-7700_1.jpg?v=637402729548830000",
        image: "https://essential.vteximg.com.br/arquivos/ids/377661-1000-1000/304-7700_1.jpg?v=637402729548830000",
        stock: 20,
        reviews: [7, 5, 6, 5, 3, 8],
      },
      {
        name: "REMERA FILA DAY",
        price: 2389,
        description: "REMERA FILA DAY De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/372638-1000-1000/432-7841_1.jpg?v=637395661939370000",
        image: "https://essential.vteximg.com.br/arquivos/ids/373299-1000-1000/432-7841_4.jpg?v=637395679726930000",
        stock: 20,
        reviews: [7, 5],
      },
      {
        name: "REMERA REEBOK CLASSIC CLASSICS VECTOR",
        price: 2999,
        description: "Remera Reebok Classic Classics Vector De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/371886-1000-1000/722-0328_1.jpg?v=637393916019200000",
        image: "https://essential.vteximg.com.br/arquivos/ids/372346-1000-1000/722-0328_4.jpg?v=637393921074430000",
        stock: 20,
        reviews: [7, 5],
      },
      {
        name: "REMERA NIKE RS2",
        price: 3999,
        description: "REMERA NIKE RS2 De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/370437-1000-1000/304-8292_1.jpg?v=637390574726300000",
        image: "https://essential.vteximg.com.br/arquivos/ids/370437-1000-1000/304-8292_1.jpg?v=637390574726300000",
        stock: 20,
        reviews: [7, 5, 6, 4],
      },
      {
        name: "REMERA NIKE RS2",
        price: 3999,
        description: "REMERA NIKE RS2 De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/370439-1000-1000/304-8277_1.jpg?v=637390575973800000",
        image: "https://essential.vteximg.com.br/arquivos/ids/370439-1000-1000/304-8277_1.jpg?v=637390575973800000",
        stock: 20,
        reviews: [7, 5, 6, 4],
      },
      {
        name: "REMERA O'NEILL RUNNER",
        price: 1949,
        description: "Remera O'Neill Runner De Moda Para Hombre Código: Oms1Re55 Blanco",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/370744-1000-1000/082-0020_1.jpg?v=637390768349030000",
        image: "https://essential.vteximg.com.br/arquivos/ids/370744-1000-1000/082-0020_1.jpg?v=637390768349030000",
        stock: 20,
        reviews: [7, 5, 6, 4],
      },
      {
        name: "REMERA O'NEILL NO BAD VIBES",
        price: 1749,
        description: "Remera O'Neill No Bad Vibes De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/370729-1000-1000/082-0014_1.jpg?v=637390768272070000",
        image: "https://essential.vteximg.com.br/arquivos/ids/370729-1000-1000/082-0014_1.jpg?v=637390768272070000",
        stock: 25,
        reviews: [7, 5, 6, 4],
      },
      {
        name: "REMERA JORDAN PARIS SAINT-GERMAIN LOGO",
        price: 4199,
        description: "Remera O'Neill No Bad Vibes De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/372540-1000-1000/302-0044_1.jpg?v=637394826174330000",
        image: "https://essential.vteximg.com.br/arquivos/ids/372540-1000-1000/302-0044_1.jpg?v=637394826174330000",
        stock: 25,
        reviews: [7, 5, 6, 4],
      },
      {
        name: "REMERA PUMA ICONIC",
        price: 2599,
        description: "REMERA PUMA ICONIC  De Entrenamiento Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/363572-1000-1000/962-1335_1.jpg?v=637389908902170000",
        image: "https://essential.vteximg.com.br/arquivos/ids/363572-1000-1000/962-1335_1.jpg?v=637389908902170000",
        stock: 25,
        reviews: [7, 5, 3],
      },
      {
        name: "REMERA PUMA TAILORED FOR SPORT",
        price: 2899,
        description: "Remera Puma Tailored For Sport De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/352815-1000-1000/962-1314_1.jpg?v=637363130850570000",
        image: "https://essential.vteximg.com.br/arquivos/ids/352815-1000-1000/962-1314_1.jpg?v=637363130850570000",
        stock: 25,
        reviews: [7, 5, 3],
      },
      {
        name: "REMERA JORDAN AIR 85",
        price: 4199,
        description: "Remera Jordan Air 85 De Moda Para Hombre",
        thumbnail: "https://essential.vteximg.com.br/arquivos/ids/332825-1000-1000/304-8248_1.jpg?v=637310680562270000",
        image: "https://essential.vteximg.com.br/arquivos/ids/332825-1000-1000/304-8248_1.jpg?v=637310680562270000",
        stock: 30,
        reviews: [7, 5, 3, 5, 6, 8],
      },
      {
        name: "Pantalón de hombre Elio ",
        price: 5000, description: "Pantalón de hombre Elio",
        thumbnail: "https://d3295hraz5fimx.cloudfront.net/18467-product_lg/pantalon-de-hombre-elio.jpg",
        image: "https://d3295hraz5fimx.cloudfront.net/18467-product_lg/pantalon-de-hombre-elio.jpg",
        stock: 6,
        reviews: [7, 5, 6, 9]
      },
      {
        name: "Pantalón chino",
        price: 6000, description: "Pantalón chino",
        thumbnail: "https://falabella.scene7.com/is/image/FalabellaAR/881835629_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70",
        image: "https://falabella.scene7.com/is/image/FalabellaAR/881835629_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70",
        stock: 6,
        reviews: [7, 5, 6, 10, 2]
      },
      {
        name: "Pantalón Jogger Cargo",
        price: 4500,
        description: "Pantalón Jogger Cargo",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_619997-MLA42774901985_072020-O.webphttps://http2.mlstatic.com/D_NQ_NP_619997-MLA42774901985_072020-O.webp",
        image: "https://http2.mlstatic.com/D_NQ_NP_619997-MLA42774901985_072020-O.webphttps://http2.mlstatic.com/D_NQ_NP_619997-MLA42774901985_072020-O.webp",
        stock: 6,
        reviews: [7, 5, 6, 8, 2, 3]
      },
      {
        name: "Pantalón Jogger Estilizado",
        price: 4500, description: "Pantalón Jogger Estilizado",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_801411-MLA41850100556_052020-O.webp",
        image: "https://http2.mlstatic.com/D_NQ_NP_801411-MLA41850100556_052020-O.webp",
        stock: 6,
        reviews: [7, 5, 6, 8, 8, 9]
      },
      {
        name: "Jean Chupin Hombre",
        price: 3000, description: "Jean Chupin Hombre",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_624586-MLA43161626943_082020-O.webp",
        image: "https://http2.mlstatic.com/D_NQ_NP_624586-MLA43161626943_082020-O.webp",
        stock: 6,
        reviews: [7, 5, 6, 8, 9]
      },
      {
        name: "Pantalón Policial",
        price: 4500,
        description: "Pantalón Policial",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_946648-MLA43363974067_092020-O.webp",
        image: "https://http2.mlstatic.com/D_NQ_NP_946648-MLA43363974067_092020-O.webp",
        stock: 6,
        reviews: [7, 5, 6, 10, 10]
      },
      {
        name: "Pantalon Tilo",
        price: 5000,
        description: "Pantalon Tilo",
        thumbnail: "https://cardon.com.ar/wp-content/uploads/2020/10/CD-22430100501-1-1000x1353.jpg",
        image: "https://cardon.com.ar/wp-content/uploads/2020/10/CD-22430100501-1-1000x1353.jpg",
        stock: 6,
        reviews: [7, 5, 6, 3, 4, 5]
      },
      {
        name: "Pantalón Cipres",
        price: 3000,
        description: "Pantalón Cipres",
        thumbnail: "https://cardon.com.ar/wp-content/uploads/2020/09/IN12254002234_5_51-1000x1353.jpg",
        image: "https://cardon.com.ar/wp-content/uploads/2020/09/IN12254002234_5_51-1000x1353.jpg",
        stock: 6,
        reviews: [7, 5, 6, 4, 3]
      },
      {
        name: "Pantalón Goya",
        price: 3500,
        description: "Pantalón Goya",
        thumbnail: "https://cardon.com.ar/wp-content/uploads/2020/09/22357001625_7-1000x1353.jpg",
        image: "https://cardon.com.ar/wp-content/uploads/2020/09/22357001625_7-1000x1353.jpg",
        stock: 6, reviews: [7, 5, 6, 1, 2]
      },
      {
        name: "Pantalón Alta Gracia",
        price: 2000,
        description: "Pantalón Alta Gracia",
        thumbnail: "https://cardon.com.ar/wp-content/uploads/2020/05/224540340GC-1000x1353.jpg",
        image: "https://cardon.com.ar/wp-content/uploads/2020/05/224540340GC-1000x1353.jpg",
        stock: 6,
        reviews: [7, 5, 6, 3, 5, 9]
      },
      {
        name: "Pantalón Carlota",
        price: 5000,
        description: "Pantalón Carlota",
        thumbnail: "https://cardon.com.ar/wp-content/uploads/2020/09/224540306991-1000x1353.jpg",
        image: "https://cardon.com.ar/wp-content/uploads/2020/09/224540306991-1000x1353.jpg",
        stock: 6,
        reviews: [7, 5, 6, 9, 7]
      },
      {
        name: "Pantalón Figueroa",
        price: 4500,
        description: "Pantalón Figueroa",
        thumbnail: "https://cardon.com.ar/wp-content/uploads/2020/05/RI-224540199E31-1000x1353.jpg",
        image: "https://cardon.com.ar/wp-content/uploads/2020/05/RI-224540199E31-1000x1353.jpg",
        stock: 6,
        reviews: [7, 5, 6, 8, 9, 3]
      },
      {
        name: "Pantalon Viajera",
        price: 4000, description: "Pantalon Viajera",
        thumbnail: "https://cardon.com.ar/wp-content/uploads/2020/05/IN-224540329GC-1-1000x1353.jpg",
        image: "https://cardon.com.ar/wp-content/uploads/2020/05/IN-224540329GC-1-1000x1353.jpg",
        stock: 6,
        reviews: [7, 5, 6]
      },
      {
        name: "Campera Antartida",
        price: 46800,
        description: "Campera de plumón para climas extremadamente fríos",
        thumbnail: "https://www.ansilta.com/img/articulos/campera_antartida_14_imagen2.jpg",
        image: "https://www.ansilta.com/img/articulos/campera_antartida_14_imagen2.jpg",
        stock: 5,
        reviews: [7, 8, 9, 10, 9, 10],
      },
      {
        name: "Campera Piuquen",
        price: 23900,
        description: "Campera de abrigo, muy liviana, ideal para actividades de montaña y zonas urbanas",
        thumbnail: "https://www.ansilta.com/img/articulos/campera_piuquen_2_27_imagen1.jpg",
        image: "https://www.ansilta.com/img/articulos/campera_piuquen_2_27_imagen1.jpg",
        stock: 10,
        reviews: [7, 6, 9, 10, 9, 8],
      },
      {
        name: "Campera Aconcagua",
        price: 37530,
        description: "Campera técnica de alta montaña para expediciones y largas travesías",
        thumbnail: "https://www.ansilta.com/img/articulos/campera_aconcagua_iii_2_imagen3.jpg",
        image: "https://www.ansilta.com/img/articulos/campera_aconcagua_iii_2_imagen3.jpg",
        stock: 8,
        reviews: [8, 10, 9, 7, 9, 8],
      },
      {
        name: "Campera Need a Hug",
        price: 7800,
        description: "Alguien necesita un abrazo",
        thumbnail: "https://i.pinimg.com/originals/a6/16/c0/a616c0be452cec8dc78f7b34f017f262.jpg",
        image: "https://i.pinimg.com/originals/a6/16/c0/a616c0be452cec8dc78f7b34f017f262.jpg",
        stock: 0,
        reviews: [5, 7, 6, 7, 9, 8],
      },
      {
        name: "Dragon Ball Jacket",
        price: 5200,
        description: "ATR perro cumbia cajeteala piola gato",
        thumbnail: "https://www.usajacket.com/wp-content/uploads/2017/07/Dragon-Ball-Z-Jacket.jpg",
        image: "https://www.usajacket.com/wp-content/uploads/2017/07/Dragon-Ball-Z-Jacket.jpg",
        stock: 0,
        reviews: [10, 10, 10, 10, 10, 10],
      },
      {
        name: "Campera Fitito",
        price: 10000,
        description: "Campera de motoquero re cheta. Viene con el relleno incluido",
        thumbnail: "https://k60.kn3.net/taringa/7/9/F/8/F/7/lucaBogard-rises/905.jpg",
        image: "https://k60.kn3.net/taringa/7/9/F/8/F/7/lucaBogard-rises/905.jpg",
        stock: 0,
        reviews: [2, 5, 7, 4, 3, 6],
      },
      {
        name: "No Pain No Gain",
        price: 3500,
        description: "Entrenar es mi pasion",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHkYIejg9tyJYW4HuyNwKyE3iUhXhg9Uq42A&usqp=CAU",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHkYIejg9tyJYW4HuyNwKyE3iUhXhg9Uq42A&usqp=CAU",
        stock: 0,
        reviews: [6, 7],
      },
      {
        name: "Christmas Jacket 1",
        price: 7200,
        description: "Christmas is comming",
        thumbnail: "https://i5.walmartimages.com/asr/d74cd485-e0a8-4c94-a160-5ba230b63c68_1.47c8ad0674175c4a1583c5ffdadc7ce4.jpeg",
        image: "https://i5.walmartimages.com/asr/d74cd485-e0a8-4c94-a160-5ba230b63c68_1.47c8ad0674175c4a1583c5ffdadc7ce4.jpeg",
        stock: 0,
        reviews: [6, 7, 8, 9, 5, 8],
      },
      {
        name: "Christmas Jacket 2",
        price: 7200,
        description: "Christmas is comming",
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/71uibNOV1VL._AC_UL1500_.jpg",
        image: "https://images-na.ssl-images-amazon.com/images/I/71uibNOV1VL._AC_UL1500_.jpg",
        stock: 0,
        reviews: [6, 7, 8, 9, 5, 8],
      },
      {
        name: "Disfraz Mujer Maravilla",
        price: 5400,
        description: "Disfraz de Mujer Maravilla, talle unico",
        thumbnail: "https://www.northernstar-online.com/wp-content/uploads/2016/02/funny-dressed-men-006.jpg",
        image: "https://www.northernstar-online.com/wp-content/uploads/2016/02/funny-dressed-men-006.jpg",
        stock: 2,
        reviews: [2, 3, 5, 7, 10, 5],
      },
      {
        name: "Brain Hut",
        price: 900,
        description: "Gorro de lana con forma de cerebro",
        thumbnail: "https://img.izismile.com/img/img5/20120221/640/funny_creative_clothes_640_26.jpg",
        image: "https://img.izismile.com/img/img5/20120221/640/funny_creative_clothes_640_26.jpg",
        stock: 50,
        reviews: [6, 9, 5, 7, 10, 6],
      },
      {
        name: "Covid 19 Mask",
        price: 750,
        description: "Mascara ultra efectiva contra el Covid-19",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhA2_oWke4SgKEOVakwjnsPONwOyKJ3ufXng&usqp=CAU",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhA2_oWke4SgKEOVakwjnsPONwOyKJ3ufXng&usqp=CAU",
        stock: 100,
        reviews: [10, 9, 8, 7, 7],
      },
      {
        name: "Taza Programador 1",
        price: 550,
        description: "Taza Programador 1",
        thumbnail: "https://i.pinimg.com/originals/79/d2/02/79d2024c50f311ac95849ff077e82a9b.jpg",
        image: "https://i.pinimg.com/originals/79/d2/02/79d2024c50f311ac95849ff077e82a9b.jpg",
        stock: 40,
        reviews: [10, 9, 8, 9, 7],
      },
      {
        name: "Taza Programador 2",
        price: 500,
        description: "Taza Programador 2",
        thumbnail: "https://res.cloudinary.com/teepublic/image/private/s--2Uw6efNZ--/c_scale,h_264/c_lpad,g_north_west,h_801,w_1802,x_219,y_268/c_crop,h_801,w_691,x_125/c_mfit,g_north_west,u_misc:Mug%20Effect%20Coffee3%20Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug%20Effect%20Coffee3%20Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696262:production:blanks:w00xdkhjelyrnp8i8wxr,x_-410,y_-235/b_rgb:191919/c_limit,f_auto,h_630,q_90,w_630/v1516826282/production/designs/2305879_0.jpg",
        image: "https://res.cloudinary.com/teepublic/image/private/s--2Uw6efNZ--/c_scale,h_264/c_lpad,g_north_west,h_801,w_1802,x_219,y_268/c_crop,h_801,w_691,x_125/c_mfit,g_north_west,u_misc:Mug%20Effect%20Coffee3%20Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug%20Effect%20Coffee3%20Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696262:production:blanks:w00xdkhjelyrnp8i8wxr,x_-410,y_-235/b_rgb:191919/c_limit,f_auto,h_630,q_90,w_630/v1516826282/production/designs/2305879_0.jpg",
        stock: 50,
        reviews: [6, 9, 8, 9, 7],
      },
      {
        name: "Gorra Programador",
        price: 900,
        description: "Gorra Programador",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHsdsR00UwDDz4smMRT3PDqXTNBbBxw2fBqw&usqp=CAU",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHsdsR00UwDDz4smMRT3PDqXTNBbBxw2fBqw&usqp=CAU",
        stock: 60,
        reviews: [7, 9, 8, 9, 7],
      },
      {
        name: "Gafas de Alien",
        price: 1100,
        description: "Gafas de Alien",
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/6191-2Q32EL._AC_SX425_.jpg",
        image: "una bella image",
        stock: 20,
        reviews: [7, 3, 5, 2, 6]
      }]
    ).then(() => console.log("products generated!"));

    await Order.bulkCreate([
      {
        userId: 2,
        userEmail: "zaragoza@zara.com",
        ammount: 2000,
        address: "Zaragoza 3032",
        orderStatus: "completed",
      }, //1 camisa
      {
        userId: 2,
        userEmail: "zaragoza@zara.com",
        ammount: 4800,
        address: "Uruguay 130",
        orderStatus: "completed",
      }, //1 campera
      {
        userId: 3,
        userEmail: "libertadores@gmail.com",
        ammount: 6800,
        address: "Libertador 1037",
        orderStatus: "completed",
      }, //camisa y campera
      {
        userId: 2,
        ammount: 5200,
        userEmail: "zaragoza@zara.com",
        address: "Uruguay 130",
        orderStatus: "pending",
      }, //camisa, pantalon y remera
      {
        userId: 2,
        ammount: 5000,
        userEmail: "zaragoza@zara.com",
        address: "Zaragoza 3032",
        orderStatus: "completed",
      }, //5 remeras
      {
        userId: 3,
        ammount: 2000,
        userEmail: "libertadores@gmail.com",
        address: "Libertador 1037",
        orderStatus: "pending",
      }, //2 remeras
      {
        userId: 2,
        ammount: 3000,
        userEmail: "zaragoza@zara.com",
        address: "San Lorenzo 150",
        orderStatus: "pending",
      }, //3 remeras
    ])
      .then(() => console.log("orders generated!"))
      .catch((err) => console.log(err));
  }
  await createUsersProductsOrdersAndCategories();

  OrderProduct.bulkCreate([
    /*Orden 1*/ { orderId: 1, productId: 1, quantity: 1 },
    /*Orden 2*/ { orderId: 2, productId: 4, quantity: 1 },
    /*Orden 3*/ { orderId: 3, productId: 1, quantity: 1 }, { orderId: 3, productId: 4, quantity: 1 },
    /*Orden 4*/ { orderId: 4, productId: 1, quantity: 1 }, { orderId: 4, productId: 2, quantity: 1 }, { orderId: 4, productId: 3, quantity: 1 },
    /*Orden 5*/ { orderId: 5, productId: 3, quantity: 5 },
    /*Orden 6*/ { orderId: 6, productId: 3, quantity: 2 },
    /*Orden 7*/ { orderId: 7, productId: 3, quantity: 3 },
  ])
    .then(() => console.log("products in cart generated!"))
    .catch((err) => console.log(err));

  CategoryProduct.bulkCreate([
    /*Categoria Calzado*/
    { categoryId: 1, productId: 1 },
    { categoryId: 1, productId: 2 },
    { categoryId: 1, productId: 3 },
    { categoryId: 1, productId: 4 },
    { categoryId: 1, productId: 5 },
    { categoryId: 1, productId: 6 },
    { categoryId: 1, productId: 7 },
    { categoryId: 1, productId: 8 },
    { categoryId: 1, productId: 9 },
    { categoryId: 1, productId: 10 },
    { categoryId: 1, productId: 11 },
    /*Categoria remeras*/
    { categoryId: 2, productId: 12 },
    { categoryId: 2, productId: 13 },
    { categoryId: 2, productId: 14 },
    { categoryId: 2, productId: 15 },
    { categoryId: 2, productId: 16 },
    { categoryId: 2, productId: 17 },
    { categoryId: 2, productId: 18 },
    { categoryId: 2, productId: 19 },
    { categoryId: 2, productId: 20 },
    { categoryId: 2, productId: 21 },
    { categoryId: 2, productId: 22 },
    /*Categoria pantalon*/
    { categoryId: 3, productId: 23 },
    { categoryId: 3, productId: 24 },
    { categoryId: 3, productId: 25 },
    { categoryId: 3, productId: 26 },
    { categoryId: 3, productId: 27 },
    { categoryId: 3, productId: 28 },
    { categoryId: 3, productId: 29 },
    { categoryId: 3, productId: 30 },
    { categoryId: 3, productId: 31 },
    { categoryId: 3, productId: 32 },
    { categoryId: 3, productId: 33 },
    { categoryId: 3, productId: 34 },
    { categoryId: 3, productId: 35 },
    /*Categoria camperas*/
    { categoryId: 4, productId: 36 },
    { categoryId: 4, productId: 37 },
    { categoryId: 4, productId: 38 },
    { categoryId: 4, productId: 39 },
    { categoryId: 4, productId: 40 },
    { categoryId: 4, productId: 41 },
    { categoryId: 4, productId: 42 },
    { categoryId: 4, productId: 43 },
    { categoryId: 4, productId: 44 },
    /*Categoria accesorios*/
    { categoryId: 5, productId: 45 },
    { categoryId: 5, productId: 46 },
    { categoryId: 5, productId: 47 },
    { categoryId: 5, productId: 48 },
    { categoryId: 5, productId: 49 },
  ])
    .then(() => console.log("products in cart generated!")).catch((err) => console.log(err));

  ProductUser.bulkCreate([
    /*Reviews de producto 1*/ { productId: 1, userId: 1, review: 8 }, { productId: 1, userId: 2, review: 8 }, { productId: 1, userId: 3, review: 10 },
    /*Reviews de producto 2*/ { productId: 2, userId: 1, review: 8 }, { productId: 2, userId: 2, review: 5 },
    /*Reviews de producto 3*/ { productId: 3, userId: 1, review: 7 }, { productId: 2, userId: 3, review: 10 },
    /*Reviews de producto 4*/ { productId: 4, userId: 1, review: 4 }, { productId: 4, userId: 3, review: 4 },
    /*Reviews de producto 5*/ { productId: 5, userId: 1, review: 7 }, { productId: 5, userId: 2, review: 10 }, { productId: 5, userId: 3, review: 7 },
    /*Reviews de producto 6*/ { productId: 6, userId: 2, review: 3 },
  ]).then(() => console.log("product reviews generated!")).catch((err) => console.log(err));
}
seed();
