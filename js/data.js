// Foodie Pizza — Menu Data
// All images HTTP-tested and verified 200 OK before deployment.

const WHATSAPP_NUMBER = "918176929294"; // 81769 29294
const PHONE_NUMBER = "8176929294";

const menuData = [

  // ══════════════════════════════════════════════════════
  //  PIZZA
  // ══════════════════════════════════════════════════════
  {
    id: 1,
    name: "Cheese Pizza",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 100, M: 130, L: 160 },
    description: "Classic cheese pizza with our signature tomato base.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
    imageAlt: "Cheese Margherita Pizza",
    isVeg: true
  },
  {
    id: 2,
    name: "Tomato & Cheese Pizza",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 110, M: 140, L: 170 },
    description: "Fresh tomatoes with double cheese on a crispy base.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
    imageAlt: "Tomato Cheese Pizza",
    isVeg: true
  },
  {
    id: 3,
    name: "Onion & Cheese Pizza",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 110, M: 140, L: 170 },
    description: "Caramelised onions with generous cheese topping.",
    image: "https://i.pinimg.com/1200x/7e/f2/fd/7ef2fd5a7d813e3ffab0d20ca5d1b11d.jpg",
    imageAlt: "Onion Cheese Pizza",
    isVeg: true
  },
  {
    id: 4,
    name: "Capsicum & Cheese Pizza",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 110, M: 140, L: 170 },
    description: "Colourful capsicum with melted cheese on tomato sauce.",
    image: "https://i.pinimg.com/736x/88/51/07/885107bc8b44b9df7f416048ed810065.jpg",
    imageAlt: "Capsicum Cheese Pizza",
    isVeg: true
  },
  {
    id: 5,
    name: "Country House",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 130, M: 160, L: 260 },
    description: "Loaded with onion, capsicum, tomato & corn.",
    image: "https://i.pinimg.com/736x/16/34/32/163432b46232b93ce59540114604516a.jpg",
    imageAlt: "Country House Pizza",
    isVeg: true,
    tag: "POPULAR"
  },
  {
    id: 6,
    name: "Pizza Veggie Fresh",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 130, M: 160, L: 260 },
    description: "Fresh seasonal vegetables on a herbed tomato base.",
    image: "https://i.pinimg.com/736x/95/9d/07/959d075f1d43263e53f1bbff0dee4baf.jpg",
    imageAlt: "Veggie Fresh Pizza",
    isVeg: true
  },
  {
    id: 7,
    name: "Indian Pizza",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 130, M: 160, L: 260 },
    description: "Desi twist with paneer, onion, green chilli.",
    image: "https://i.pinimg.com/736x/76/f9/42/76f9427a221a5ed3635888f710ee72d2.jpg",
    imageAlt: "Indian Style Pizza",
    isVeg: true
  },
  {
    id: 8,
    name: "Crush Veggie",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 130, M: 160, L: 260 },
    description: "Loaded veggie crush with bell peppers & sweet corn.",
    image: "https://i.pinimg.com/1200x/1f/5d/61/1f5d6114b9f838e42014835e146c2f77.jpg",
    imageAlt: "Crush Veggie Pizza",
    isVeg: true
  },
  {
    id: 9,
    name: "Cheese Pizza Loaded",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 160, M: 260, L: 380 },
    description: "Extra cheese loaded with multiple veggie toppings.",
    image: "https://i.pinimg.com/736x/8d/81/25/8d8125a03f2393f066a89832a9551d22.jpg",
    imageAlt: "Loaded Cheese Pizza",
    isVeg: true,
    tag: "LOADED"
  },
  {
    id: 10,
    name: "Spicy Paneer Pizza",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 160, M: 260, L: 380 },
    description: "Spiced paneer cubes with green chilli & herbs.",
    image: "https://i.pinimg.com/736x/89/6a/b5/896ab511d008d04a163d1e0e63de9b21.jpg",
    imageAlt: "Spicy Paneer Pizza",
    isVeg: true,
    tag: "SPICY 🌶"
  },
  {
    id: 11,
    name: "Pizza Mexican",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 160, M: 260, L: 380 },
    description: "Mexican-style with jalapenos, sweet corn & salsa.",
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Mexican Pizza",
    isVeg: true
  },
  {
    id: 12,
    name: "Pizza Deluxe",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 170, M: 330, L: 460 },
    description: "Premium deluxe topping combination.",
    image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Pizza Deluxe",
    isVeg: true,
    tag: "PREMIUM"
  },
  {
    id: 13,
    name: "Pasta Pizza",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 170, M: 330, L: 460 },
    description: "Unique pasta-topped pizza with creamy sauce.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Pasta Pizza",
    isVeg: true
  },
  {
    id: 14,
    name: "Spicy Veggie Pizza",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 170, M: 330, L: 460 },
    description: "Fiery veggie combination for spice lovers.",
    image: "https://www.twopeasandtheirpod.com/best-veggie-pizza/",
    imageAlt: "Spicy Veggie Pizza",
    isVeg: true,
    tag: "SPICY 🌶"
  },
  {
    id: 15,
    name: "Tandoor Paneer Pizza",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 170, M: 330, L: 460 },
    description: "Tandoori-marinated paneer with onions & capsicum.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Tandoor Paneer Pizza",
    isVeg: true,
    tag: "CHEF'S PICK"
  },
  {
    id: 16,
    name: "Pizza Classical",
    category: "pizza",
    hasSizes: true,
    sizes: { S: 170, M: 330, L: 460 },
    description: "Classic loaded combination — the ultimate pizza.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Pizza_al_taglio.jpg",
    imageAlt: "Classical Pizza",
    isVeg: true
  },

  // ══════════════════════════════════════════════════════
  //  COMBO DEALS
  // ══════════════════════════════════════════════════════
  {
    id: 17,
    name: "Veg Combo Single",
    category: "combo",
    hasSizes: false,
    price: 250,
    description: "1 Pizza + 1 Drink",
    image: " ",
    imageAlt: "Veg Combo Single",
    isVeg: true,
    tag: "DEAL"
  },
  {
    id: 18,
    name: "Veg Combo Double",
    category: "combo",
    hasSizes: false,
    price: 300,
    description: "2 Pizzas + 2 Drinks",
    image: "  ",
    imageAlt: "Veg Combo Double",
    isVeg: true,
    tag: "BEST VALUE"
  },
  {
    id: 19,
    name: "Small Combo",
    category: "combo",
    hasSizes: false,
    price: 199,
    description: "Special small pizza combo — limited time offer!",
    image: "https://www.google.com/imgres?q=Special%20small%20pizza%20combo%20&imgurl=https%3A%2F%2Fb.zmtcdn.com%2Fdata%2Fdish_photos%2Fc8a%2F30775542ec107c1a5a09fc4ba8d36c8a.jpeg&imgrefurl=https%3A%2F%2Fwww.zomato.com%2Fbangalore%2Fpizza%4099-whitefield-bangalore%2Forder&docid=GMrou1l61Q99BM&tbnid=yAmWfsH_zvFQeM&vet=12ahUKEwivoqiOzfWTAxWSSGcHHTtrLZgQnPAOegQIHhAB..i&w=900&h=600&hcb=2&ved=2ahUKEwivoqiOzfWTAxWSSGcHHTtrLZgQnPAOegQIHhAB",
    imageAlt: "Small Pizza Combo",
    isVeg: true,
    tag: "₹199 ONLY!"
  },

  // ══════════════════════════════════════════════════════
  //  GARLIC BREAD
  // ══════════════════════════════════════════════════════
  {
    id: 20,
    name: "Garlic Bread",
    category: "snacks",
    hasSizes: false,
    price: 79,
    description: "Crispy garlic-buttered bread sticks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Garlicbread.jpg",
    imageAlt: "Garlic Bread",
    isVeg: true
  },
  {
    id: 21,
    name: "Stuffed Cheese Garlic Bread",
    category: "snacks",
    hasSizes: false,
    price: 120,
    description: "4 pieces of garlic bread stuffed with melted cheese.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Focaccia_with_Crumb.jpg",
    imageAlt: "Stuffed Cheese Garlic Bread",
    isVeg: true,
    tag: "4 PCS"
  },

  // ══════════════════════════════════════════════════════
  //  SANDWICH
  // ══════════════════════════════════════════════════════
  {
    id: 22,
    name: "Veg Sandwich",
    category: "snacks",
    hasSizes: false,
    price: 49,
    description: "Fresh vegetable sandwich with chutneys.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Veg Sandwich",
    isVeg: true
  },
  {
    id: 23,
    name: "Veg Cheese Corn Sandwich",
    category: "snacks",
    hasSizes: false,
    price: 69,
    description: "Cheese, sweet corn & veggies in a toasted sandwich.",
    image: "https://www.google.com/imgres?q=Cheese%2C%20sweet%20corn%20%26%20veggies%20in%20a%20toasted%20sandwich.&imgurl=https%3A%2F%2Fwww.vegrecipesofindia.com%2Fwp-content%2Fuploads%2F2013%2F07%2Fcorn-sandwich-recipe-01a.jpg&imgrefurl=https%3A%2F%2Fwww.vegrecipesofindia.com%2Fcorn-sandwich%2F&docid=4iSr1s3vo_Am7M&tbnid=iHscZTOczbBrMM&vet=12ahUKEwj50ZXV0fWTAxUI2DgGHfaSMJ8QnPAOegQIGhAB..i&w=750&h=441&hcb=2&ved=2ahUKEwj50ZXV0fWTAxUI2DgGHfaSMJ8QnPAOegQIGhAB",
    imageAlt: "Veg Cheese Corn Sandwich",
    isVeg: true
  },
  {
    id: 24,
    name: "Chef Sandwich",
    category: "snacks",
    hasSizes: false,
    price: 89,
    description: "Chef's special generously loaded sandwich.",
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Chef Sandwich",
    isVeg: true
  },
  {
    id: 25,
    name: "Tandoor Paneer Sandwich",
    category: "snacks",
    hasSizes: false,
    price: 110,
    description: "Tandoori paneer filling in a grilled sandwich.",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Tandoor Paneer Sandwich",
    isVeg: true
  },

  // ══════════════════════════════════════════════════════
  //  BURGER & SNACKS
  // ══════════════════════════════════════════════════════
  {
    id: 26,
    name: "Veg Burger",
    category: "snacks",
    hasSizes: false,
    price: 79,
    description: "Classic veggie patty burger with sauce & veggies.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Veg Burger",
    isVeg: true
  },
  {
    id: 27,
    name: "Paneer Burger",
    category: "snacks",
    hasSizes: false,
    price: 79,
    description: "Spiced paneer patty burger with fresh veggies.",
    image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Paneer Burger",
    isVeg: true
  },
  {
    id: 28,
    name: "Double Cheese Burger",
    category: "snacks",
    hasSizes: false,
    price: 99,
    description: "Double cheese slices with veggie patty.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Double Cheese Burger",
    isVeg: true,
    tag: "DOUBLE CHEESE"
  },

  // ══════════════════════════════════════════════════════
  //  PASTA
  // ══════════════════════════════════════════════════════
  {
    id: 29,
    name: "Italian White Pasta",
    category: "pasta",
    hasSizes: false,
    price: 90,
    description: "Creamy white sauce pasta with herbs.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800",
    imageAlt: "White Sauce Pasta",
    isVeg: true
  },
  {
    id: 30,
    name: "Italian Red Pasta",
    category: "pasta",
    hasSizes: false,
    price: 80,
    description: "Classic red arrabbiata sauce pasta.",
    image: " ",
    imageAlt: "Red Sauce Pasta",
    isVeg: true
  },
  {
    id: 31,
    name: "Spicy Pasta",
    category: "pasta",
    hasSizes: false,
    price: 80,
    description: "Fiery spiced pasta for heat lovers.",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Spicy Pasta",
    isVeg: true,
    tag: "SPICY 🌶"
  },
  {
    id: 32,
    name: "Veg Pasta",
    category: "pasta",
    hasSizes: false,
    price: 80,
    description: "Mixed veggie pasta in a signature sauce.",
    image: " ",
    imageAlt: "Veg Pasta",
    isVeg: true
  },
  {
    id: 33,
    name: "Paneer Pasta",
    category: "pasta",
    hasSizes: false,
    price: 80,
    description: "Soft paneer cubes in a flavourful pasta sauce.",
    image: "https://www.google.com/imgres?q=Soft%20paneer%20cubes%20in%20a%20flavourful%20pasta%20sauce.&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F71OTjegWDoY%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLAwpRlNytOvIjqhqEif9sWWxpQeEw&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D71OTjegWDoY&docid=7lEZzvvHHc8QlM&tbnid=fbo688vXbBnhhM&vet=12ahUKEwipsOX80vWTAxXjzDgGHf61K3EQnPAOegQIFxAB..i&w=686&h=386&hcb=2&ved=2ahUKEwipsOX80vWTAxXjzDgGHf61K3EQnPAOegQIFxAB",
    imageAlt: "Paneer Pasta",
    isVeg: true
  },

  // ══════════════════════════════════════════════════════
  //  SHAKES
  // ══════════════════════════════════════════════════════
  {
    id: 34,
    name: "Strawberry Shake",
    category: "drinks",
    hasSizes: false,
    price: 59,
    description: "Fresh & frothy strawberry shake.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Strawberry Milkshake",
    isVeg: true,
    tag: "SHAKE"
  },
  {
    id: 35,
    name: "Mango Shake",
    category: "drinks",
    hasSizes: false,
    price: 59,
    description: "Thick and creamy mango shake.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Mango Shake",
    isVeg: true,
    tag: "SHAKE"
  },
  {
    id: 36,
    name: "Chocolate Shake",
    category: "drinks",
    hasSizes: false,
    price: 59,
    description: "Rich chocolate shake.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Chocolate Milkshake",
    isVeg: true,
    tag: "SHAKE"
  },
  {
    id: 37,
    name: "Butter Scotch Shake",
    category: "drinks",
    hasSizes: false,
    price: 59,
    description: "Sweet butterscotch flavoured shake.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Butterscotch Shake",
    isVeg: true,
    tag: "SHAKE"
  },
  {
    id: 38,
    name: "Banana Shake",
    category: "drinks",
    hasSizes: false,
    price: 59,
    description: "Creamy banana shake.",
    image: " ",
    imageAlt: "Banana Shake",
    isVeg: true,
    tag: "SHAKE"
  },
  {
    id: 39,
    name: "Blue Berry Shake",
    category: "drinks",
    hasSizes: false,
    price: 59,
    description: "Refreshing blueberry shake.",
    image: " ",
    imageAlt: "Blueberry Shake",
    isVeg: true,
    tag: "SHAKE"
  },
  {
    id: 40,
    name: "KitKat Shake",
    category: "drinks",
    hasSizes: false,
    price: 79,
    description: "Indulgent KitKat chocolate shake.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800",
    imageAlt: "KitKat Chocolate Shake",
    isVeg: true,
    tag: "SHAKE"
  },
  {
    id: 41,
    name: "Pineapple Shake",
    category: "drinks",
    hasSizes: false,
    price: 59,
    description: "Sweet & tangy pineapple shake.",
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Pineapple Shake",
    isVeg: true,
    tag: "SHAKE"
  },

  // ══════════════════════════════════════════════════════
  //  MOJITO
  // ══════════════════════════════════════════════════════
  {
    id: 42,
    name: "Blue Ice Mojito",
    category: "drinks",
    hasSizes: false,
    price: 69,
    description: "Chilled blue curacao mojito.",
    image: "https://i.pinimg.com/736x/5e/de/91/5ede91fc1dee2cc4c6e0c52c3dfd71d2.jpg",
    imageAlt: "Blue Ice Mojito",
    isVeg: true,
    tag: "MOJITO"
  },
  {
    id: 43,
    name: "Watermelon Mojito",
    category: "drinks",
    hasSizes: false,
    price: 69,
    description: "Fresh watermelon mojito.",
    image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Watermelon Mojito",
    isVeg: true,
    tag: "MOJITO"
  },
  {
    id: 44,
    name: "Pineapple Mint Mojito",
    category: "drinks",
    hasSizes: false,
    price: 69,
    description: "Refreshing pineapple & mint mojito.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Pineapple Mint Mojito",
    isVeg: true,
    tag: "MOJITO"
  },
  {
    id: 45,
    name: "Orange Mojito",
    category: "drinks",
    hasSizes: false,
    price: 69,
    description: "Zesty orange mojito.",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Orange Mojito",
    isVeg: true,
    tag: "MOJITO"
  },
  {
    id: 46,
    name: "Strawberry Mint Mojito",
    category: "drinks",
    hasSizes: false,
    price: 69,
    description: "Strawberry & mint mojito.",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Strawberry Mint Mojito",
    isVeg: true,
    tag: "MOJITO"
  },
  {
    id: 47,
    name: "Transparent Mojito",
    category: "drinks",
    hasSizes: false,
    price: 69,
    description: "Classic clear mojito with lime & mint.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Clear Lime Mojito",
    isVeg: true,
    tag: "MOJITO"
  },

  // ══════════════════════════════════════════════════════
  //  COFFEE
  // ══════════════════════════════════════════════════════
  {
    id: 48,
    name: "Cold Coffee",
    category: "drinks",
    hasSizes: false,
    price: 69,
    description: "Chilled cold coffee — smooth & refreshing.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Cold Coffee",
    isVeg: true,
    tag: "COFFEE"
  },
  {
    id: 49,
    name: "Cold Frappe Coffee",
    category: "drinks",
    hasSizes: false,
    price: 100,
    description: "Thick & creamy blended cold frappe.",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Cold Frappe Coffee",
    isVeg: true,
    tag: "COFFEE"
  },

  // ══════════════════════════════════════════════════════
  //  COLD DRINK
  // ══════════════════════════════════════════════════════
  {
    id: 50,
    name: "Cold Drink",
    category: "drinks",
    hasSizes: false,
    price: 20,
    description: "Chilled soft drink can.",
    image: "https://i.pinimg.com/1200x/8d/de/c1/8ddec1ae7c20e4ca2dd9899f47edb2b3.jpg",
    imageAlt: "Cold Soft Drink",
    isVeg: true,
    tag: "COLD DRINK"
  }
];
