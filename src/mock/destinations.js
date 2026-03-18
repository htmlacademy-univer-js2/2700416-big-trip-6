const mockDestinations = [
    [
  {
    "id": "c0451e23-a675-4244-b1cb-5eb0f39ca21c",
    "description": "Rotterdam - with an embankment of a mighty river as a centre of attraction",
    "name": "Rotterdam",
    "pictures": []
  },
  {
    "id": "74e341cf-4de5-43ee-a195-e9541ac644e4",
    "description": "",
    "name": "Helsinki",
    "pictures": []
  },
  {
    "id": "71271525-c051-4b9d-8008-51beeb57088a",
    "description": "Monaco - is a beautiful city",
    "name": "Monaco",
    "pictures": [
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/18.jpg",
        "description": "Monaco a perfect place to stay with a family"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/7.jpg",
        "description": "Monaco with a beautiful old town"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/3.jpg",
        "description": "Monaco middle-eastern paradise"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/16.jpg",
        "description": "Monaco with crowded streets"
      }
    ]
  },
  {
    "id": "828c9614-c5dd-44c0-893b-0c4ad137d913",
    "description": "Den Haag - a true asian pearl",
    "name": "Den Haag",
    "pictures": [
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/8.jpg",
        "description": "Den Haag in a middle of Europe"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/4.jpg",
        "description": "Den Haag middle-eastern paradise"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/17.jpg",
        "description": "Den Haag a true asian pearl"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/20.jpg",
        "description": "Den Haag full of of cozy canteens where you can try the best coffee in the Middle East"
      }
    ]
  },
  {
    "id": "7e43ca4d-1419-4ea2-9502-cf1b1b4ee820",
    "description": "Hiroshima - for those who value comfort and coziness",
    "name": "Hiroshima",
    "pictures": [
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/15.jpg",
        "description": "Hiroshima with an embankment of a mighty river as a centre of attraction"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/5.jpg",
        "description": "Hiroshima a perfect place to stay with a family"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/11.jpg",
        "description": "Hiroshima middle-eastern paradise"
      }
    ]
  },
  {
    "id": "cd6686d3-6386-4296-8c05-ec48d0278713",
    "description": "Tokio - full of of cozy canteens where you can try the best coffee in the Middle East",
    "name": "Tokio",
    "pictures": [
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/7.jpg",
        "description": "Tokio a perfect place to stay with a family"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/6.jpg",
        "description": "Tokio a true asian pearl"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/8.jpg",
        "description": "Tokio for those who value comfort and coziness"
      }
    ]
  },
  {
    "id": "0e6d494e-7121-4e3d-8fc0-bce1c6b9ae93",
    "description": "Moscow - with crowded streets",
    "name": "Moscow",
    "pictures": [
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/17.jpg",
        "description": "Moscow a true asian pearl"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/7.jpg",
        "description": "Moscow in a middle of Europe"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/3.jpg",
        "description": "Moscow a perfect place to stay with a family"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/17.jpg",
        "description": "Moscow with crowded streets"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/11.jpg",
        "description": "Moscow middle-eastern paradise"
      }
    ]
  },
  {
    "id": "6c3304a0-00bc-4592-8806-d7210ea4c3e2",
    "description": "Paris - full of of cozy canteens where you can try the best coffee in the Middle East",
    "name": "Paris",
    "pictures": [
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/1.jpg",
        "description": "Paris with crowded streets"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/4.jpg",
        "description": "Paris with a beautiful old town"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/10.jpg",
        "description": "Paris for those who value comfort and coziness"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/2.jpg",
        "description": "Paris with a beautiful old town"
      }
    ]
  },
  {
    "id": "bba785b0-e21e-4e30-826d-9a6390329d38",
    "description": "Chamonix - is a beautiful city",
    "name": "Chamonix",
    "pictures": [
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/10.jpg",
        "description": "Chamonix with an embankment of a mighty river as a centre of attraction"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/15.jpg",
        "description": "Chamonix famous for its crowded street markets with the best street food in Asia"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/8.jpg",
        "description": "Chamonix full of of cozy canteens where you can try the best coffee in the Middle East"
      },
      {
        "src": "https://24.objects.htmlacademy.pro/static/destinations/1.jpg",
        "description": "Chamonix famous for its crowded street markets with the best street food in Asia"
      }
    ]
  },
  {
    "id": "43b80c1b-3c93-40a7-89c4-cc6f682527f4",
    "description": "",
    "name": "Munich",
    "pictures": []
  }
]
];

export {mockDestinations};