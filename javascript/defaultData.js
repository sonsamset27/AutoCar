const defaultUsers = [
  {
    id: 1,
    username: "admin",
    password: "123456"
  }
];

const defaultCars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: "2022",
    price: "850000000",
    image: [
      "../asset/toyota-camry1.jpg",
      "../asset/toyota-camry2.jpg",
      "../asset/toyota-camry3.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "Sedan",
    description: "Toyota Camry sedan hạng D sang trọng, vận hành êm ái."
  },

  {
    id: 2,
    brand: "Toyota",
    model: "Corolla Cross",
    year: "2023",
    price: "760000000",
    image: ["../asset/toyota-cross1.jpg","../asset/toyota-cross2.jpg","../asset/toyota-cross3.jpg"],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV đô thị tiết kiệm nhiên liệu, thiết kế hiện đại."
  },

  {
    id: 3,
    brand: "Toyota",
    model: "Fortuner",
    year: "2021",
    price: "1050000000",
    image: [
      "../asset/fortuner1.jpg",
      "../asset/fortuner2.jpg",
      "../asset/fortuner3.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV 7 chỗ mạnh mẽ, phù hợp gia đình."
  },

  {
    id: 4,
    brand: "Honda",
    model: "Civic",
    year: "2023",
    price: "870000000",
    image: ["../asset/honda-civic1.jpg","../asset/honda-civic2.jpg","../asset/honda-civic3.jpg"],
    status: "available",
    transmission: "Tự động",
    type: "Sedan",
    description: "Sedan thể thao, thiết kế trẻ trung."
  },

  {
    id: 5,
    brand: "Honda",
    model: "CR-V",
    year: "2022",
    price: "1030000000",
    image: [
      "../asset/crv1.jpg",
      "../asset/crv2.jpg",
      "../asset/crv3.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV 5+2 chỗ rộng rãi, tiện nghi."
  },

  {
    id: 6,
    brand: "Mazda",
    model: "Mazda 3",
    year: "2023",
    price: "720000000",
    image: [
      "../asset/mazda-1.jpg",
      "../asset/mazda-2.jpg",
      "../asset/mazda-3.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "Sedan",
    description: "Sedan phong cách thể thao, công nghệ hiện đại."
  },

  {
    id: 7,
    brand: "Mazda",
    model: "CX-5",
    year: "2022",
    price: "880000000",
    image: [
      "../asset/cx5-1.jpg",
      "../asset/cx5-2.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV bán chạy nhất phân khúc."
  },

  {
    id: 8,
    brand: "Hyundai",
    model: "Elantra",
    year: "2023",
    price: "690000000",
    image: [
      "../asset/Hyundai-Elantra1.jpg",
      "../asset/Hyundai-Elantra2.jpg",
      "../asset/Hyundai-Elantra3.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "Sedan",
    description: "Sedan phong cách thể thao, giá hợp lý."
  },

  {
    id: 9,
    brand: "Hyundai",
    model: "Tucson",
    year: "2022",
    price: "890000000",
    image: [
      "../asset/tucson1.jpg",
      "../asset/tucson2.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV công nghệ cao, thiết kế độc đáo."
  },

  {
    id: 10,
    brand: "Hyundai",
    model: "Santa Fe",
    year: "2023",
    price: "1180000000",
    image: [
      "../asset/santafe1.jpg",
      "../asset/santafe2.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV 7 chỗ cao cấp."
  },

  {
    id: 11,
    brand: "Kia",
    model: "K3",
    year: "2023",
    price: "650000000",
    image: [
      "../asset/k3-1.jpg",
      "../asset/k3-2.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "Sedan",
    description: "Sedan trẻ trung, nhiều công nghệ."
  },

  {
    id: 12,
    brand: "Kia",
    model: "Seltos",
    year: "2022",
    price: "720000000",
    image: [
      "../asset/seltos1.jpg",
      "../asset/seltos2.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV đô thị thiết kế trẻ."
  },

  {
    id: 13,
    brand: "Kia",
    model: "Sportage",
    year: "2023",
    price: "950000000",
    image: [
      "../asset/sportage1.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV hiện đại, thiết kế mạnh mẽ."
  },

  {
    id: 14,
    brand: "BMW",
    model: "320i",
    year: "2022",
    price: "1890000000",
    image: [
      "../asset/bmw320-1.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "Sedan",
    description: "Sedan hạng sang thể thao."
  },

  {
    id: 15,
    brand: "BMW",
    model: "X3",
    year: "2023",
    price: "2490000000",
    image: [
      "../asset/bmwx3-1.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV sang trọng, vận hành mạnh."
  },

  {
    id: 16,
    brand: "BMW",
    model: "X5",
    year: "2023",
    price: "4090000000",
    image: [
      "../asset/bmwx5-1.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV hạng sang cao cấp."
  },

  {
    id: 17,
    brand: "Mercedes",
    model: "C200",
    year: "2023",
    price: "1790000000",
    image: [
      "../asset/c200-1.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "Sedan",
    description: "Sedan sang trọng, công nghệ hiện đại."
  },

  {
    id: 18,
    brand: "Mercedes",
    model: "E300",
    year: "2022",
    price: "2990000000",
    image: [
      "../asset/e300-1.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "Sedan",
    description: "Sedan hạng sang cao cấp."
  },

  {
    id: 19,
    brand: "Mercedes",
    model: "GLC 300",
    year: "2023",
    price: "2499000000",
    image: [
      "../asset/glc300-1.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV sang trọng bán chạy."
  },

  {
    id: 20,
    brand: "Ford",
    model: "Everest",
    year: "2023",
    price: "1120000000",
    image: [
      "../asset/everest1.jpg"
    ],
    status: "available",
    transmission: "Tự động",
    type: "SUV",
    description: "SUV mạnh mẽ, địa hình tốt."
  },
  {
    id: 42,
    brand: "Toyota",
    model: "Fortuner",
    year: "2021",
    price: "1150000000",
    image: ["../asset/toyota-fortuner1.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Toyota Fortuner là mẫu SUV 7 chỗ nổi tiếng với khả năng vận hành bền bỉ, phù hợp cho cả gia đình và địa hình phức tạp."
  },
  {
    id: 43,
    brand: "Toyota",
    model: "Corolla Cross",
    year: "2023",
    price: "820000000",
    image: ["../asset/toyota-cross1.jpg","../asset/toyota-cross2.jpg","../asset/toyota-cross3.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Toyota Corolla Cross mang thiết kế hiện đại, tiết kiệm nhiên liệu và nhiều công nghệ an toàn tiên tiến."
  },
  {
    id: 44,
    brand: "BMW",
    model: "X3",
    year: "2022",
    price: "2450000000",
    image: ["../asset/bmw-x3.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "BMW X3 là mẫu SUV hạng sang với khả năng vận hành mạnh mẽ và nội thất cao cấp."
  },
  {
    id: 45,
    brand: "BMW",
    model: "X5",
    year: "2022",
    price: "4100000000",
    image: ["../asset/bmw-x5.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "BMW X5 nổi bật với thiết kế thể thao, công nghệ hiện đại và động cơ mạnh mẽ."
  },
  {
    id: 46,
    brand: "Mercedes",
    model: "GLC 300",
    year: "2023",
    price: "2790000000",
    image: ["../asset/mercedes-glc300.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Mercedes GLC 300 là mẫu SUV sang trọng với nhiều công nghệ hỗ trợ lái hiện đại."
  },
  {
    id: 47,
    brand: "Mercedes",
    model: "E300 AMG",
    year: "2022",
    price: "3250000000",
    image: ["../asset/mercedes-e300.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Mercedes E300 AMG mang phong cách thể thao với nội thất cao cấp và khả năng vận hành mạnh mẽ."
  },
  {
    id: 48,
    brand: "Audi",
    model: "A6",
    year: "2021",
    price: "2900000000",
    image: ["../asset/audi-a6.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Audi A6 là mẫu sedan hạng sang với thiết kế tinh tế và nhiều công nghệ tiên tiến."
  },
  {
    id: 49,
    brand: "Audi",
    model: "Q5",
    year: "2022",
    price: "2600000000",
    image: ["../asset/audi-q5.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Audi Q5 là SUV hạng sang với nội thất rộng rãi và khả năng vận hành êm ái."
  },
  {
    id: 50,
    brand: "Lexus",
    model: "RX350",
    year: "2023",
    price: "4300000000",
    image: ["../asset/lexus-rx350.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Lexus RX350 là SUV cao cấp nổi bật với độ bền, sự êm ái và nội thất sang trọng."
  },
  {
    id: 51,
    brand: "Lexus",
    model: "ES300h",
    year: "2022",
    price: "3100000000",
    image: ["../asset/lexus-es300h.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Lexus ES300h sử dụng công nghệ hybrid giúp tiết kiệm nhiên liệu và vận hành êm ái."
  },
  {
    id: 52,
    brand: "Hyundai",
    model: "Santa Fe",
    year: "2023",
    price: "1350000000",
    image: ["../asset/hyundai-santafe.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Hyundai Santa Fe là SUV 7 chỗ với thiết kế hiện đại và nhiều tiện nghi."
  },
  {
    id: 53,
    brand: "Hyundai",
    model: "Tucson",
    year: "2022",
    price: "980000000",
    image: ["../asset/hyundai-tucson.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Hyundai Tucson có thiết kế trẻ trung và công nghệ hiện đại."
  },
  {
    id: 54,
    brand: "Kia",
    model: "Seltos",
    year: "2022",
    price: "720000000",
    image: ["../asset/kia-seltos.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Kia Seltos là SUV cỡ nhỏ với thiết kế thể thao và giá thành hợp lý."
  },
  {
    id: 55,
    brand: "Kia",
    model: "Sorento",
    year: "2023",
    price: "1250000000",
    image: ["../asset/kia-sorento.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Kia Sorento là SUV 7 chỗ rộng rãi với nhiều công nghệ hỗ trợ lái."
  },
  {
    id: 56,
    brand: "Ford",
    model: "Everest",
    year: "2023",
    price: "1450000000",
    image: ["../asset/ford-everest.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Ford Everest nổi bật với khả năng off-road mạnh mẽ và không gian rộng rãi."
  },
  {
    id: 57,
    brand: "Ford",
    model: "Ranger",
    year: "2023",
    price: "980000000",
    image: ["../asset/ford-ranger.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Ford Ranger là mẫu bán tải mạnh mẽ được ưa chuộng tại Việt Nam."
  },
  {
    id: 58,
    brand: "Honda",
    model: "CR-V",
    year: "2022",
    price: "1100000000",
    image: ["../asset/honda-crv.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Honda CR-V là SUV 5+2 chỗ với khả năng tiết kiệm nhiên liệu và vận hành êm ái."
  },
  {
    id: 59,
    brand: "Honda",
    model: "Civic",
    year: "2023",
    price: "870000000",
    image: ["../asset/honda-civic1.jpg","../asset/honda-civic2.jpg","../asset/honda-civic3.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Honda Civic có thiết kế thể thao và khả năng vận hành linh hoạt."
  },
  {
    id: 60,
    brand: "Mazda",
    model: "CX-5",
    year: "2022",
    price: "950000000",
    image: ["../asset/mazda-cx5.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Mazda CX-5 có thiết kế KODO đặc trưng và nội thất sang trọng."
  },
  {
    id: 61,
    brand: "Mazda",
    model: "Mazda3",
    year: "2023",
    price: "720000000",
    image: ["../asset/mazda-1.jpg",
      "../asset/mazda-2.jpg",
      "../asset/mazda-3.jpg"],
    status: "available",
    transmission: "Tự động",
    description: "Mazda3 là sedan hạng C với thiết kế trẻ trung và công nghệ hiện đại."
  }
];

const defaultInfors = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        phone: "0909123456",
        message: "Tôi muốn tư vấn xe BMW",
        status: "not_called"
    },
    {
        id: 2,
        name: "Trần Thị B",
        phone: "0912345678",
        message: "Giá xe Mercedes bao nhiêu?",
        status: "called"
    }
];