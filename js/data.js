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
    image: "https://loremflickr.com/cache/resized/65535_54501294056_eea402a0b2_b_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/7668_17188259336_93539e7d1b_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/6228_6364073481_40df1ee458_b_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/5130_5380033191_9f93195e1b_b_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/2679_4395351820_bc33680618_b_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/3046_2770207838_16597f37a6_c_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/2883_12150396976_a17e638cf6_h_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/7029_6640125321_ea76537faf_h_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/3372_3240599868_938703da55_b_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/65535_53892223850_feab5392bd_h_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/2203_2436355239_6bf04ca38d_h_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/3134_2416801656_fb5525945f_c_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/8334_8414089035_1b4a6648bc_h_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/216_507654514_570d31e5f5_c_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/2074_2043046023_9061a723a4_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/8156_7665155446_4711dd2d1d_c_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/2572_3952644052_f0cf18445f_b_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/65535_53635720525_362527bf84_b_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/7460_12150142354_ca430d1504_b_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/2094_2879198548_51dbc6dc23_h_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/4228_34575156483_da74499700_c_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/2122_2157863728_e37cd56e12_b_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/defaultImage.small_800_600_nofilter.jpg",
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
    image: "https://loremflickr.com/cache/resized/51_131888165_56760e4b0e_c_800_600_nofilter.jpg",
    imageAlt: "Cold Soft Drink",
    isVeg: true,
    tag: "COLD DRINK"
  }
];
