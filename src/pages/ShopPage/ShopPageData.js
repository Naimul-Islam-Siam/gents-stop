const SHOP_DATA = {
   shirts: {
      id: 1,
      title: 'Shirts',
      routeName: 'shirts',
      items: [
         {
            id: 1,
            name: 'Black & White Striped',
            imageUrl: 'https://images.unsplash.com/photo-1565366896067-3e7b52d395e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1558&q=80',
            price: 65
         },
         {
            id: 2,
            name: 'White & Blue Checked',
            imageUrl: 'https://images.unsplash.com/flagged/photo-1561530822-3d8826007519?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
            price: 50
         },
         {
            id: 3,
            name: 'Black XXL',
            imageUrl: 'https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
            price: 70
         },
         {
            id: 4,
            name: 'Blue Shirt',
            imageUrl: 'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
            price: 55
         },
         {
            id: 5,
            name: 'Blue & White Checkered',
            imageUrl: 'https://images.unsplash.com/photo-1582023617394-9f99138316af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80',
            price: 55
         },
         {
            id: 6,
            name: 'Blue & White Plaid',
            imageUrl: 'https://images.unsplash.com/photo-1589992896387-140e940257d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
            price: 65
         },
         {
            id: 7,
            name: 'Navy Blue',
            imageUrl: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            price: 60
         },
         {
            id: 8,
            name: 'Purple',
            imageUrl: 'https://images.unsplash.com/photo-1559718062-108b9039734b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            price: 55
         },
         {
            id: 9,
            name: 'Red & White Plaid',
            imageUrl: 'https://images.unsplash.com/flagged/photo-1564468781192-f023d514222d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            price: 55
         }
      ]
   },
   sneakers: {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
         {
            id: 10,
            name: 'Adidas NMD',
            imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
            price: 220
         },
         {
            id: 11,
            name: 'Adidas Yeezy',
            imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
            price: 280
         },
         {
            id: 12,
            name: 'Black Converse',
            imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
            price: 110
         },
         {
            id: 13,
            name: 'Nike White AirForce',
            imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
            price: 160
         },
         {
            id: 14,
            name: 'Nike Red High Tops',
            imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
            price: 160
         },
         {
            id: 15,
            name: 'Nike Brown High Tops',
            imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
            price: 160
         },
         {
            id: 16,
            name: 'Air Jordan Limited',
            imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
            price: 190
         },
         {
            id: 17,
            name: 'Timberlands',
            imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
            price: 200
         }
      ]
   },
   jackets: {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
         {
            id: 18,
            name: 'Black Jean Shearling',
            imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
            price: 125
         },
         {
            id: 19,
            name: 'Blue Jean Jacket',
            imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
            price: 90
         },
         {
            id: 20,
            name: 'Grey Jean Jacket',
            imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
            price: 90
         },
         {
            id: 21,
            name: 'Brown Shearling',
            imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
            price: 165
         },
         {
            id: 22,
            name: 'Tan Trench',
            imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
            price: 185
         }
      ]
   },
   watches: {
      id: 4,
      title: 'Watches',
      routeName: 'watches',
      items: [
         {
            id: 23,
            name: 'Round Silver Analog',
            imageUrl: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            price: 250
         },
         {
            id: 24,
            name: 'Round Grey Analog',
            imageUrl: 'https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
            price: 280
         },
         {
            id: 25,
            name: 'Brown White Analog',
            imageUrl: 'https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80',
            price: 340
         },
         {
            id: 26,
            name: 'Black Chronograph',
            imageUrl: 'https://images.unsplash.com/photo-1468421201266-ec88b2809284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
            price: 320
         },
         {
            id: 27,
            name: 'Silver Link',
            imageUrl: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            price: 999
         },
         {
            id: 28,
            name: 'Blue & Silver Analog',
            imageUrl: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80',
            price: 635
         },
         {
            id: 29,
            name: 'Black & Silver Chronograph',
            imageUrl: 'https://images.unsplash.com/photo-1584184804426-5e2aa23c2937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            price: 400
         }
      ]
   },
   'hair-care': {
      id: 5,
      title: 'Hair-Care',
      routeName: 'hair-care',
      items: [
         {
            id: 30,
            name: 'Kevin Murphey Wax',
            imageUrl: 'https://images.unsplash.com/photo-1575411303373-30dcf90a6643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            price: 65
         },
         {
            id: 31,
            name: 'Hair Trimmer',
            imageUrl: 'https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            price: 30
         },
         {
            id: 32,
            name: 'Prestige Pomade',
            imageUrl: 'https://images.unsplash.com/photo-1519801491772-1adde548b8f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            price: 25
         },
         {
            id: 33,
            name: 'The Man Club Comb',
            imageUrl: 'https://images.unsplash.com/photo-1590159763121-7c9fd312190d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            price: 25
         },
         {
            id: 34,
            name: 'Botanical Shampoo',
            imageUrl: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            price: 40
         },
         {
            id: 35,
            name: 'Maui Fibers Shampoo',
            imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            price: 25
         }
      ]
   }
};

export default SHOP_DATA;