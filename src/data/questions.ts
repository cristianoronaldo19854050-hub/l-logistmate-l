
export interface Question {
  id: number;
  text: { en: string; ru: string; uz: string };
  options: { en: string; ru: string; uz: string }[];
  correctAnswer: number;
  explanation?: { en: string; ru: string; uz: string };
}

export const QUESTIONS: Record<number, Question[]> = {
  1: [
    {
      id: 1,
      text: { en: "What does 'LTL' stand for?", ru: "Что означает 'LTL'?", uz: "'LTL' nimani anglatadi?" },
      options: [
        { en: "Low Truck Load", ru: "Низкая загрузка грузовика", uz: "Past yuk mashinasi yuki" },
        { en: "Less than Truckload", ru: "Меньше чем полная загрузка", uz: "To'liq yuk mashinasidan kam" },
        { en: "Long Transport Line", ru: "Длинная транспортная линия", uz: "Uzun transport liniyasi" },
        { en: "Local Truck Logistics", ru: "Местная логистика грузовиков", uz: "Mahalliy yuk mashinalari logistikasi" }
      ],
      correctAnswer: 1,
      explanation: { 
        en: "LTL (Less than Truckload) is used for shipments that don't require a full 48- or 53-foot trailer.", 
        ru: "LTL (Less than Truckload) используется для грузов, которые не требуют полного 48- или 53-футового прицепа.", 
        uz: "LTL (Less than Truckload) to'liq 48 yoki 53 futlik tirkama talab qilmaydigan yuklar uchun ishlatiladi." 
      }
    },
    {
      id: 2,
      text: { en: "What is a 'Bill of Lading'?", ru: "Что такое 'Коносамент'?", uz: "'Konosament' nima?" },
      options: [
        { en: "A bill for fuel", ru: "Счет за топливо", uz: "Yoqilg'i uchun hisob" },
        { en: "A driver's license", ru: "Водительское удостоверение", uz: "Haydovchilik guvohnomasi" },
        { en: "A legal document between shipper and carrier", ru: "Юридический документ между отправителем и перевозчиком", uz: "Yuk jo'natuvchi va tashuvchi o'rtasidagi huquqiy hujjat" },
        { en: "A map of the route", ru: "Карта маршрута", uz: "Yo'nalish xaritasi" }
      ],
      correctAnswer: 2,
      explanation: {
        en: "The Bill of Lading (BOL) works as a receipt of freight services and a contract between a freight carrier and shipper.",
        ru: "Коносамент (BOL) служит квитанцией о транспортных услугах и договором между перевозчиком и отправителем.",
        uz: "Konosament (BOL) yuk tashish xizmatlari uchun kvitansiya va tashuvchi hamda yuk jo'natuvchi o'rtasidagi shartnoma bo'lib xizmat qiladi."
      }
    },
    {
      id: 3,
      text: { en: "What is 'Deadhead'?", ru: "Что такое 'Порожний пробег'?", uz: "'Bo'sh yurish' nima?" },
      options: [
        { en: "Driving with a heavy load", ru: "Вождение с тяжелым грузом", uz: "Og'ir yuk bilan haydash" },
        { en: "Driving an empty trailer", ru: "Вождение пустого прицепа", uz: "Bo'sh tirkama bilan haydash" },
        { en: "A broken engine", ru: "Сломанный двигатель", uz: "Buzilgan dvigatel" },
        { en: "Resting at a truck stop", ru: "Отдых на стоянке", uz: "To'xtash joyida dam olish" }
      ],
      correctAnswer: 1,
      explanation: {
        en: "Deadheading is the movement of a commercial truck pulling an empty trailer.",
        ru: "Порожний пробег (Deadhead) — это движение коммерческого грузовика с пустым прицепом.",
        uz: "Bo'sh yurish (Deadhead) - bu bo'sh tirkama bilan tijorat yuk mashinasining harakatlanishi."
      }
    },
    {
      id: 4,
      text: { en: "What does 'FOB' stand for?", ru: "Что означает 'FOB'?", uz: "'FOB' nimani anglatadi?" },
      options: [
        { en: "Freight On Board", ru: "Груз на борту", uz: "Bortdagi yuk" },
        { en: "Free On Board", ru: "Франко-борт", uz: "Bortda bepul" },
        { en: "Forward Operating Base", ru: "Передовая оперативная база", uz: "Oldinga operatsion baza" },
        { en: "Fuel On Board", ru: "Топливо на борту", uz: "Bortdagi yoqilg'i" }
      ],
      correctAnswer: 1,
      explanation: {
        en: "FOB (Free On Board) is a term used to indicate when the liability and ownership of goods is transferred from a seller to a buyer.",
        ru: "FOB (Free On Board) — это термин, указывающий на момент перехода ответственности и права собственности на товар от продавца к покупателю.",
        uz: "FOB (Free On Board) - bu tovarlar uchun javobgarlik va egalik huquqi sotuvchidan sotib oluvchiga o'tishini ko'rsatuvchi atama."
      }
    },
    {
      id: 5,
      text: { en: "Who is the 'Consignee'?", ru: "Кто такой 'Грузополучатель'?", uz: "'Yuk qabul qiluvchi' kim?" },
      options: [
        { en: "The person who ships the goods", ru: "Лицо, отправляющее товар", uz: "Yukni jo'natuvchi shaxs" },
        { en: "The truck driver", ru: "Водитель грузовика", uz: "Yuk mashinasi haydovchisi" },
        { en: "The receiver of the shipment", ru: "Получатель груза", uz: "Yukni qabul qiluvchi" },
        { en: "The insurance agent", ru: "Страховой агент", uz: "Sug'urta agenti" }
      ],
      correctAnswer: 2
    },
    {
      id: 6,
      text: { en: "What is 'Intermodal' transport?", ru: "Что такое 'Интермодальные' перевозки?", uz: "'Intermodal' tashish nima?" },
      options: [
        { en: "Transport within one city", ru: "Транспорт внутри одного города", uz: "Bir shahar ichidagi transport" },
        { en: "Using multiple modes of transport", ru: "Использование нескольких видов транспорта", uz: "Bir nechta transport turlaridan foydalanish" },
        { en: "Air transport only", ru: "Только авиационный транспорт", uz: "Faqat havo transporti" },
        { en: "Bicycle delivery", ru: "Доставка на велосипеде", uz: "Velosipedda yetkazib berish" }
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      text: { en: "What is the role of a 'Dispatcher'?", ru: "Какова роль 'Диспетчера'?", uz: "'Dispetcher'ning roli nima?" },
      options: [
        { en: "To repair trucks", ru: "Ремонтировать грузовики", uz: "Yuk mashinalarini ta'mirlash" },
        { en: "To coordinate shipments and drivers", ru: "Координировать грузы и водителей", uz: "Yuklar va haydovchilarni muvofiqlashtirish" },
        { en: "To cook for drivers", ru: "Готовить еду для водителей", uz: "Haydovchilar uchun ovqat pishirish" },
        { en: "To clean the warehouse", ru: "Убирать склад", uz: "Omborni tozalash" }
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      text: { en: "What is an 'ELD'?", ru: "Что такое 'ELD'?", uz: "'ELD' nima?" },
      options: [
        { en: "Electronic Logging Device", ru: "Электронное устройство регистрации", uz: "Elektron jurnal qurilmasi" },
        { en: "Emergency Light Device", ru: "Устройство аварийного освещения", uz: "Favqulodda yorug'lik moslamasi" },
        { en: "Engine Loading Data", ru: "Данные о нагрузке двигателя", uz: "Dvigatel yuklanishi ma'lumotlari" },
        { en: "Extra Long Delivery", ru: "Очень длинная доставка", uz: "Juda uzoq yetkazib berish" }
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      text: { en: "What is 'Inbound Logistics'?", ru: "Что такое 'Входящая логистика'?", uz: "'Kiruvchi logistika' nima?" },
      options: [
        { en: "Shipping goods to customers", ru: "Отправка товаров клиентам", uz: "Tovarlarni mijozlarga jo'natish" },
        { en: "Receiving goods into a facility", ru: "Прием товаров на объект", uz: "Tovarlarni ob'ektga qabul qilish" },
        { en: "Internal warehouse movement", ru: "Внутреннее перемещение по складу", uz: "Ombor ichidagi harakat" },
        { en: "Returning broken items", ru: "Возврат сломанных вещей", uz: "Buzilgan narsalarni qaytarish" }
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      text: { en: "What is 'Outbound Logistics'?", ru: "Что такое 'Исходящая логистика'?", uz: "'Chiquvchi logistika' nima?" },
      options: [
        { en: "Receiving raw materials", ru: "Получение сырья", uz: "Xom ashyoni qabul qilish" },
        { en: "Shipping finished goods to customers", ru: "Отправка готовой продукции клиентам", uz: "Tayyor mahsulotlarni mijozlarga jo'natish" },
        { en: "Buying office supplies", ru: "Покупка канцелярских товаров", uz: "Kantselyariya buyumlarini sotib olish" },
        { en: "Employee training", ru: "Обучение сотрудников", uz: "Xodimlarni o'qitish" }
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      text: { en: "What is the primary mode of transportation in the trucking industry?", ru: "Каков основной вид транспорта в сфере грузоперевозок?", uz: "Yuk tashish sanoatida asosiy transport turi nima?" },
      options: [
        { en: "Airplanes", ru: "Самолеты", uz: "Samolyotlar" },
        { en: "Trains", ru: "Поезда", uz: "Poyezdlar" },
        { en: "Trucks", ru: "Грузовики", uz: "Yuk mashinalari" },
        { en: "Ships", ru: "Корабли", uz: "Kemalar" }
      ],
      correctAnswer: 2
    },
    {
      id: 12,
      text: { en: "Which type of truck is designed to transport liquid cargo like fuel or chemicals?", ru: "Какой тип грузовика предназначен для перевозки жидких грузов, таких как топливо или химикаты?", uz: "Yoqilg'i yoki kimyoviy moddalar kabi suyuq yuklarni tashish uchun qaysi turdagi yuk mashinasi mo'ljallangan?" },
      options: [
        { en: "Semi-truck", ru: "Полуприцеп", uz: "Yarim tirkama" },
        { en: "Dump truck", ru: "Самосвал", uz: "Samosval" },
        { en: "Tanker truck", ru: "Автоцистерна", uz: "Avtotsisterna" },
        { en: "Delivery truck", ru: "Грузовик для доставки", uz: "Yetkazib berish yuk mashinasi" }
      ],
      correctAnswer: 2
    },
    {
      id: 13,
      text: { en: "What is a significant challenge faced by the trucking industry?", ru: "С какой серьезной проблемой сталкивается индустрия грузоперевозок?", uz: "Yuk tashish sanoati qanday jiddiy muammoga duch kelmoqda?" },
      options: [
        { en: "Driver shortages", ru: "Нехватка водителей", uz: "Haydovchilar etishmasligi" },
        { en: "Fluctuating fuel prices", ru: "Колебания цен на топливо", uz: "Yoqilg'i narxining o'zgarishi" },
        { en: "Traffic congestion", ru: "Пробки на дорогах", uz: "Yo'llardagi tirbandlik" },
        { en: "Regulatory compliance", ru: "Соблюдение нормативных требований", uz: "Normativ talablarga rioya qilish" }
      ],
      correctAnswer: 0
    },
    {
      id: 14,
      text: { en: "Which technology helps trucking companies optimize routes and reduce costs?", ru: "Какая технология помогает транспортным компаниям оптимизировать маршруты и снижать затраты?", uz: "Qaysi texnologiya yuk tashish kompaniyalariga yo'nalishlarni optimallashtirish va xarajatlarni kamaytirishga yordam beradi?" },
      options: [
        { en: "GPS systems", ru: "Системы GPS", uz: "GPS tizimlari" },
        { en: "Radio communication", ru: "Радиосвязь", uz: "Radiosvyaz" },
        { en: "Fax machines", ru: "Факсы", uz: "Fakslar" },
        { en: "Pagers", ru: "Пейджеры", uz: "Peyjerlar" }
      ],
      correctAnswer: 0
    },
    {
      id: 15,
      text: { en: "Which environmental concern is associated with the trucking industry?", ru: "Какая экологическая проблема связана с индустрией грузоперевозок?", uz: "Yuk tashish sanoati bilan qanday ekologik muammo bog'liq?" },
      options: [
        { en: "Deforestation", ru: "Вырубка лесов", uz: "O'rmonlarni kesish" },
        { en: "Water pollution", ru: "Загрязнение воды", uz: "Suvning ifloslanishi" },
        { en: "Greenhouse gas emissions", ru: "Выбросы парниковых газов", uz: "Issiqxona gazlari chiqindilari" },
        { en: "Noise pollution", ru: "Шумовое загрязнение", uz: "Shovqin bilan ifloslanish" }
      ],
      correctAnswer: 2
    },
    {
      id: 16,
      text: { en: "What term refers to the practice of using multiple modes of transportation for long-distance shipments?", ru: "Какой термин относится к практике использования нескольких видов транспорта для перевозок на дальние расстояния?", uz: "Uzoq masofalarga yuk tashish uchun bir nechta transport turlaridan foydalanish amaliyoti qaysi atama bilan ataladi?" },
      options: [
        { en: "Cross-docking", ru: "Кросс-докинг", uz: "Kross-doking" },
        { en: "Intermodal transportation", ru: "Интермодальные перевозки", uz: "Intermodal tashish" },
        { en: "Direct delivery", ru: "Прямая доставка", uz: "To'g'ridan-to'g'ri yetkazib berish" },
        { en: "Freight forwarding", ru: "Экспедирование грузов", uz: "Yuk tashish" }
      ],
      correctAnswer: 1
    },
    {
      id: 17,
      text: { en: "Which department in a trucking company is responsible for planning and coordinating shipments?", ru: "Какой отдел в транспортной компании отвечает за планирование и координацию перевозок?", uz: "Yuk tashish kompaniyasining qaysi bo'limi yuklarni rejalashtirish va muvofiqlashtirish uchun javobgardir?" },
      options: [
        { en: "Human Resources", ru: "Отдел кадров", uz: "Kadrlar bo'limi" },
        { en: "Finance", ru: "Финансы", uz: "Moliya" },
        { en: "Dispatch", ru: "Диспетчерская", uz: "Dispetcherlik" },
        { en: "Marketing", ru: "Маркетинг", uz: "Marketing" }
      ],
      correctAnswer: 2
    },
    {
      id: 18,
      text: { en: "Which type of truck is commonly used for transporting construction materials, like sand and gravel?", ru: "Какой тип грузовика обычно используется для перевозки строительных материалов, таких как песок и гравий?", uz: "Qum va shag'al kabi qurilish materiallarini tashish uchun odatda qaysi turdagi yuk mashinasi ishlatiladi?" },
      options: [
        { en: "Semi-truck", ru: "Полуприцеп", uz: "Yarim tirkama" },
        { en: "Tanker truck", ru: "Автоцистерна", uz: "Avtotsisterna" },
        { en: "Dump truck", ru: "Самосвал", uz: "Samosval" },
        { en: "Flatbed truck", ru: "Бортовой грузовик", uz: "Bortli yuk mashinasi" }
      ],
      correctAnswer: 2
    },
    {
      id: 19,
      text: { en: "What safety device helps maintain a safe distance between a truck and the vehicle in front of it?", ru: "Какое защитное устройство помогает поддерживать безопасную дистанцию между грузовиком и впереди идущим автомобилем?", uz: "Qaysi xavfsizlik moslamasi yuk mashinasi va uning oldidagi transport vositasi o'rtasida xavfsiz masofani saqlashga yordam beradi?" },
      options: [
        { en: "Rearview camera", ru: "Камера заднего вида", uz: "Orqa ko'rinish kamerasi" },
        { en: "GPS navigation", ru: "GPS-навигация", uz: "GPS navigatsiyasi" },
        { en: "Anti-lock braking system (ABS)", ru: "Антиблокировочная система (ABS)", uz: "Blokirovkaga qarshi tormoz tizimi (ABS)" },
        { en: "Adaptive cruise control", ru: "Адаптивный круиз-контроль", uz: "Adaptiv kruiz nazorati" }
      ],
      correctAnswer: 3
    },
    {
      id: 20,
      text: { en: "Which type of truck is equipped with a hydraulic lifting mechanism to load and unload goods easily?", ru: "Какой тип грузовика оснащен гидравлическим подъемным механизмом для легкой погрузки и разгрузки товаров?", uz: "Tovarlarni oson yuklash va tushirish uchun qaysi turdagi yuk mashinasi gidravlik ko'tarish mexanizmi bilan jihozlangan?" },
      options: [
        { en: "Tanker truck", ru: "Автоцистерна", uz: "Avtotsisterna" },
        { en: "Semi-truck", ru: "Полуприцеп", uz: "Yarim tirkama" },
        { en: "Flatbed truck", ru: "Бортовой грузовик", uz: "Bortli yuk mashinasi" },
        { en: "Delivery truck", ru: "Грузовик для доставки", uz: "Yetkazib berish yuk mashinasi" }
      ],
      correctAnswer: 3
    },
    {
      id: 21,
      text: { en: "What organization regulates the trucking industry’s safety and operational standards in the United States?", ru: "Какая организация регулирует стандарты безопасности и эксплуатации в индустрии грузоперевозок в США?", uz: "AQSHda yuk tashish sanoatining xavfsizligi va operatsion standartlarini qaysi tashkilot tartibga soladi?" },
      options: [
        { en: "Department of Transportation (DOT)", ru: "Министерство транспорта (DOT)", uz: "Transport vazirligi (DOT)" },
        { en: "Federal Aviation Administration (FAA)", ru: "Федеральное управление гражданской авиации (FAA)", uz: "Federal aviatsiya boshqarmasi (FAA)" },
        { en: "Environmental Protection Agency (EPA)", ru: "Агентство по охране окружающей среды (EPA)", uz: "Atrof-muhitni muhofaza qilish agentligi (EPA)" },
        { en: "Food and Drug Administration (FDA)", ru: "Управление по санитарному надзору за качеством пищевых продуктов и медикаментов (FDA)", uz: "Oziq-ovqat va farmatsevtika idorasi (FDA)" }
      ],
      correctAnswer: 0
    },
    {
      id: 22,
      text: { en: "What is the legal maximum weight limit for a fully loaded tractor-trailer on most U.S. highways?", ru: "Каков установленный законом максимальный предел веса для полностью загруженного тягача с прицепом на большинстве автомагистралей США?", uz: "AQSHning ko'pgina magistrallarida to'liq yuklangan tirkamali tyagach uchun qonuniy maksimal vazn chegarasi qancha?" },
      options: [
        { en: "60,000 pounds", ru: "60 000 фунтов", uz: "60 000 funt" },
        { en: "70,000 pounds", ru: "70 000 фунтов", uz: "70 000 funt" },
        { en: "80,000 pounds", ru: "80 000 фунтов", uz: "80 000 funt" },
        { en: "90,000 pounds", ru: "90 000 фунтов", uz: "90 000 funt" }
      ],
      correctAnswer: 2
    },
    {
      id: 23,
      text: { en: "Which term refers to the process of unloading goods directly from one truck to another without warehousing?", ru: "Какой термин относится к процессу разгрузки товаров непосредственно из одного грузовика в другой без складирования?", uz: "Tovarlarni omborga qo'ymasdan to'g'ridan-to'g'ri bitta yuk mashinasidan boshqasiga tushirish jarayoni qaysi atama bilan ataladi?" },
      options: [
        { en: "Cross-docking", ru: "Кросс-докинг", uz: "Kross-doking" },
        { en: "Transloading", ru: "Перевалка", uz: "Yuklash" },
        { en: "Freight forwarding", ru: "Экспедирование грузов", uz: "Yuk tashish" },
        { en: "Freight consolidation", ru: "Консолидация грузов", uz: "Yuklarni konsolidatsiyalash" }
      ],
      correctAnswer: 0
    },
    {
      id: 24,
      text: { en: "What is the purpose of a bill of lading (BOL) in the trucking industry?", ru: "Какова цель коносамента (BOL) в индустрии грузоперевозок?", uz: "Yuk tashish sanoatida konosamentning (BOL) maqsadi nima?" },
      options: [
        { en: "Calculate fuel costs", ru: "Рассчитать стоимость топлива", uz: "Yoqilg'i xarajatlarini hisoblash" },
        { en: "Track delivery routes", ru: "Отслеживать маршруты доставки", uz: "Yetkazib berish yo'nalishlarini kuzatish" },
        { en: "Document the receipt of goods", ru: "Документировать получение товара", uz: "Tovarlarni qabul qilishni hujjatlashtirish" },
        { en: "Determine truck insurance rates", ru: "Определить тарифы на страхование грузовиков", uz: "Yuk mashinalari sug'urta stavkalarini aniqlash" }
      ],
      correctAnswer: 2
    },
    {
      id: 25,
      text: { en: "Which factor affects the fuel efficiency of trucks the most?", ru: "Какой фактор больше всего влияет на топливную экономичность грузовиков?", uz: "Yuk mashinalarining yoqilg'i samaradorligiga qaysi omil ko'proq ta'sir qiladi?" },
      options: [
        { en: "Tire type", ru: "Тип шин", uz: "Shina turi" },
        { en: "Cargo weight", ru: "Вес груза", uz: "Yuk vazni" },
        { en: "Engine horsepower", ru: "Мощность двигателя", uz: "Dvigatel kuchi" },
        { en: "Exterior color of the truck", ru: "Цвет кузова грузовика", uz: "Yuk mashinasining tashqi rangi" }
      ],
      correctAnswer: 1
    },
    {
      id: 26,
      text: { en: "What technology allows trucks to communicate with each other and with infrastructure to improve traffic flow?", ru: "Какая технология позволяет грузовикам общаться друг с другом и с инфраструктурой для улучшения транспортного потока?", uz: "Qaysi texnologiya yuk mashinalariga harakat oqimini yaxshilash uchun bir-biri bilan va infratuzilma bilan aloqa qilish imkonini beradi?" },
      options: [
        { en: "Artificial Intelligence (AI)", ru: "Искусственный интеллект (AI)", uz: "Sun'iy intellekt (AI)" },
        { en: "Blockchain (BC)", ru: "Блокчейн (BC)", uz: "Blokcheyn (BC)" },
        { en: "Vehicle-to-Vehicle (V2V) communication", ru: "Связь между автомобилями (V2V)", uz: "Avtomobillararo (V2V) aloqa" },
        { en: "Virtual Reality (VR)", ru: "Виртуальная реальность (VR)", uz: "Virtual haqiqat (VR)" }
      ],
      correctAnswer: 2
    }
  ],
  2: [
    {
      id: 1,
      text: { en: "What is 'Cross-docking'?", ru: "Что такое 'Кросс-докинг'?", uz: "'Kross-doking' nima?" },
      options: [
        { en: "Storing goods for a long time", ru: "Длительное хранение товаров", uz: "Tovarlarni uzoq vaqt saqlash" },
        { en: "Direct transfer from inbound to outbound", ru: "Прямая перевалка с входа на выход", uz: "Kirishdan chiqishga to'g'ridan-to'g'ri o'tkazish" },
        { en: "Crossing a bridge with a truck", ru: "Переезд через мост на грузовике", uz: "Yuk mashinasida ko'prikdan o'tish" },
        { en: "Docking a ship", ru: "Швартовка корабля", uz: "Kemani to'xtatish" }
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: { en: "What does 'TEU' stand for?", ru: "Что означает 'TEU'?", uz: "'TEU' nimani anglatadi?" },
      options: [
        { en: "Total Energy Unit", ru: "Общая единица энергии", uz: "Umumiy energiya birligi" },
        { en: "Twenty-foot Equivalent Unit", ru: "Двадцатифутовый эквивалент", uz: "Yigirma futlik ekvivalent birligi" },
        { en: "Transport Efficiency Unit", ru: "Единица эффективности транспорта", uz: "Transport samaradorligi birligi" },
        { en: "Truck Engine Unit", ru: "Единица двигателя грузовика", uz: "Yuk mashinasi dvigateli birligi" }
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: { en: "What is 'Last Mile' delivery?", ru: "Что такое доставка 'Последней мили'?", uz: "'Oxirgi mil' yetkazib berish nima?" },
      options: [
        { en: "The first mile of a journey", ru: "Первая миля пути", uz: "Sayohatning birinchi mili" },
        { en: "The final step of delivery to the customer", ru: "Заключительный этап доставки клиенту", uz: "Mijozga yetkazib berishning yakuniy bosqichi" },
        { en: "A race for truck drivers", ru: "Гонка для водителей грузовиков", uz: "Yuk mashinasi haydovchilari uchun poyga" },
        { en: "The distance to the gas station", ru: "Расстояние до заправки", uz: "Yoqilg'i quyish shoxobchasigacha bo'lgan masofa" }
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      text: { en: "What is a '3PL'?", ru: "Что такое '3PL'?", uz: "'3PL' nima?" },
      options: [
        { en: "Third Party Logistics provider", ru: "Сторонний логистический провайдер", uz: "Uchinchi tomon logistika provayderi" },
        { en: "Three Person Load", ru: "Загрузка тремя людьми", uz: "Uch kishilik yuk" },
        { en: "Third Priority Level", ru: "Третий уровень приоритета", uz: "Uchinchi ustuvorlik darajasi" },
        { en: "Triple Pallet Load", ru: "Тройная загрузка поддонов", uz: "Uch tomonlama palletli yuk" }
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      text: { en: "What is a 'KPI' in logistics?", ru: "Что такое 'KPI' в логистике?", uz: "Logistikada 'KPI' nima?" },
      options: [
        { en: "Key Performance Indicator", ru: "Ключевой показатель эффективности", uz: "Asosiy samaradorlik ko'rsatkichi" },
        { en: "Keep Packages Inside", ru: "Держите посылки внутри", uz: "Paketlarni ichkarida saqlang" },
        { en: "Known Product Inventory", ru: "Известный товарный запас", uz: "Ma'lum mahsulot inventarizatsiyasi" },
        { en: "Kilometer Per Item", ru: "Километр на единицу товара", uz: "Har bir mahsulot uchun kilometr" }
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      text: { en: "What is 'Just-in-Time' (JIT)?", ru: "Что такое 'Точно в срок' (JIT)?", uz: "'Aynan vaqtida' (JIT) nima?" },
      options: [
        { en: "Arriving exactly at noon", ru: "Прибытие ровно в полдень", uz: "Aynan tushda yetib kelish" },
        { en: "Inventory strategy to reduce waste", ru: "Стратегия инвентаризации для сокращения отходов", uz: "Isrofgarchilikni kamaytirish uchun inventarizatsiya strategiyasi" },
        { en: "A fast truck", ru: "Быстрый грузовик", uz: "Tezkor yuk mashinasi" },
        { en: "A clock in the warehouse", ru: "Часы на складе", uz: "Ombordagi soat" }
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      text: { en: "What is 'Demurrage'?", ru: "Что такое 'Демерредж'?", uz: "'Demerredj' nima?" },
      options: [
        { en: "A type of insurance", ru: "Вид страхования", uz: "Sug'urta turi" },
        { en: "Fee for delaying a container/ship", ru: "Плата за задержку контейнера/судна", uz: "Konteyner/kemani kechiktirganlik uchun to'lov" },
        { en: "A discount for early delivery", ru: "Скидка за раннюю доставку", uz: "Erta yetkazib berish uchun chegirma" },
        { en: "The weight of an empty truck", ru: "Вес пустого грузовика", uz: "Bo'sh yuk mashinasining vazni" }
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      text: { en: "What is 'Drayage'?", ru: "Что такое 'Дрейдж'?", uz: "'Dreydj' nima?" },
      options: [
        { en: "Short-distance hauling", ru: "Перевозка на короткие расстояния", uz: "Qisqa masofaga tashish" },
        { en: "Long-haul trucking", ru: "Дальние перевозки", uz: "Uzoq masofaga yuk tashish" },
        { en: "Cleaning a trailer", ru: "Чистка прицепа", uz: "Tirkamani tozalash" },
        { en: "Painting a truck", ru: "Покраска грузовика", uz: "Yuk mashinasini bo'yash" }
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      text: { en: "What is a 'Freight Forwarder'?", ru: "Кто такой 'Экспедитор'?", uz: "'Ekspeditor' kim?" },
      options: [
        { en: "A person who drives the truck", ru: "Человек, который водит грузовик", uz: "Yuk mashinasini haydaydigan odam" },
        { en: "An agent who organizes shipments", ru: "Агент, который организует перевозки", uz: "Yuk tashishni tashkil etuvchi agent" },
        { en: "A warehouse security guard", ru: "Охранник склада", uz: "Ombor qo'riqchisi" },
        { en: "A customs officer", ru: "Таможенник", uz: "Bojxona xodimi" }
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      text: { en: "What is 'Backhaul'?", ru: "Что такое 'Обратный рейс'?", uz: "'Qaytish reysi' nima?" },
      options: [
        { en: "The back of a truck", ru: "Задняя часть грузовика", uz: "Yuk mashinasining orqa qismi" },
        { en: "Return trip with a load", ru: "Обратный рейс с грузом", uz: "Yuk bilan qaytish safari" },
        { en: "Pushing a truck backwards", ru: "Толкать грузовик назад", uz: "Yuk mashinasini orqaga surish" },
        { en: "A delay in shipping", ru: "Задержка в доставке", uz: "Yetkazib berishdagi kechikish" }
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      text: { en: "Which government agency is responsible for issuing commercial driver’s licenses (CDLs) in the United States?", ru: "Какое государственное агентство отвечает за выдачу коммерческих водительских прав (CDL) в США?", uz: "AQSHda tijorat haydovchilik guvohnomalarini (CDL) berish uchun qaysi davlat agentligi mas'ul?" },
      options: [
        { en: "Department of Transportation (DOT)", ru: "Министерство транспорта (DOT)", uz: "Transport vazirligi (DOT)" },
        { en: "Federal Highway Administration (FHWA)", ru: "Федеральное управление шоссейных дорог (FHWA)", uz: "Federal magistral yo'llar boshqarmasi (FHWA)" },
        { en: "Department of Motor Vehicles (DMV)", ru: "Департамент транспортных средств (DMV)", uz: "Avtotransport vositalari departamenti (DMV)" },
        { en: "Federal Motor Carrier Safety Administration (FMCSA)", ru: "Федеральное управление безопасности автотранспортных средств (FMCSA)", uz: "Federal avtotashuvchilar xavfsizligi boshqarmasi (FMCSA)" }
      ],
      correctAnswer: 2
    },
    {
      id: 12,
      text: { en: "What is the primary cause of tire blowouts in trucks?", ru: "Какова основная причина разрыва шин у грузовиков?", uz: "Yuk mashinalarida shinalar portlashining asosiy sababi nima?" },
      options: [
        { en: "Overinflated tires", ru: "Перекачанные шины", uz: "Haddan tashqari dam berilgan shinalar" },
        { en: "Excessive braking", ru: "Чрезмерное торможение", uz: "Haddan tashqari tormozlash" },
        { en: "Underinflated tires", ru: "Недокачанные шины", uz: "Kam dam berilgan shinalar" },
        { en: "Aggressive driving", ru: "Агрессивное вождение", uz: "Agressiv haydash" }
      ],
      correctAnswer: 2
    },
    {
      id: 13,
      text: { en: "What is the purpose of the 'Hours of Service' regulations in the trucking industry?", ru: "Какова цель правил 'Часы работы' в индустрии грузоперевозок?", uz: "Yuk tashish sanoatida 'Xizmat soatlari' qoidalarining maqsadi nima?" },
      options: [
        { en: "Limit the number of hours in operation per day", ru: "Ограничить количество часов работы в день", uz: "Kuniga ish soatlari sonini cheklash" },
        { en: "Determine the maximum truck speed on highways", ru: "Определить максимальную скорость грузовика на шоссе", uz: "Magistral yo'llarda yuk mashinasining maksimal tezligini aniqlash" },
        { en: "Regulate the size and weight of trucks", ru: "Регулировать размер и вес грузовиков", uz: "Yuk mashinalarining o'lchami va vaznini tartibga solish" },
        { en: "Specify the type of cargo that can be transported", ru: "Указать тип груза, который можно перевозить", uz: "Tashish mumkin bo'lgan yuk turini ko'rsatish" }
      ],
      correctAnswer: 0
    },
    {
      id: 14,
      text: { en: "What does the term 'LTL' stand for in the trucking industry?", ru: "Что означает термин 'LTL' в индустрии грузоперевозок?", uz: "Yuk tashish sanoatida 'LTL' atamasi nimani anglatadi?" },
      options: [
        { en: "Less Than Legitimate", ru: "Менее чем законно", uz: "Qonuniydan kam" },
        { en: "Limited Time Load", ru: "Загрузка с ограниченным временем", uz: "Cheklangan vaqtli yuk" },
        { en: "Low-Tire Liability", ru: "Ответственность за низкое давление в шинах", uz: "Past shina javobgarligi" },
        { en: "Less Than Truckload", ru: "Меньше чем полная загрузка", uz: "To'liq yuk mashinasidan kam" }
      ],
      correctAnswer: 3
    },
    {
      id: 15,
      text: { en: "What type of truck is designed to carry cars from manufacturers to dealerships?", ru: "Какой тип грузовика предназначен для перевозки автомобилей от производителей к дилерам?", uz: "Ishlab chiqaruvchilardan dilerlik markazlariga avtomobillarni tashish uchun qaysi turdagi yuk mashinasi mo'ljallangan?" },
      options: [
        { en: "Car hauler", ru: "Автовоз", uz: "Avtovoz" },
        { en: "Refrigerated truck", ru: "Рефрижератор", uz: "Refrijerator" },
        { en: "Box truck", ru: "Фургон", uz: "Furgon" },
        { en: "Garbage truck", ru: "Мусоровоз", uz: "Chiqindi tashuvchi mashina" }
      ],
      correctAnswer: 0
    },
    {
      id: 16,
      text: { en: "What safety mechanism is required on the rear of all trailers to alert other drivers when a truck is backing up?", ru: "Какой механизм безопасности требуется на задней части всех прицепов для оповещения других водителей, когда грузовик движется задним ходом?", uz: "Yuk mashinasi orqaga harakatlanayotganda boshqa haydovchilarni ogohlantirish uchun barcha tirkamalarning orqa tomonida qanday xavfsizlik mexanizmi talab qilinadi?" },
      options: [
        { en: "Emergency brakes", ru: "Аварийные тормоза", uz: "Favqulodda tormozlar" },
        { en: "Rearview camera", ru: "Камера заднего вида", uz: "Orqa ko'rinish kamerasi" },
        { en: "Reverse lights", ru: "Фонари заднего хода", uz: "Orqaga harakatlanish chiroqlari" },
        { en: "Backup alarm", ru: "Сигнал заднего хода", uz: "Orqaga harakatlanish signali" }
      ],
      correctAnswer: 3
    },
    {
      id: 17,
      text: { en: "What is the term used to describe the distance between the front and rear axles of a truck or trailer?", ru: "Какой термин используется для описания расстояния между передней и задней осями грузовика или прицепа?", uz: "Yuk mashinasi yoki tirkamaning old va orqa o'qlari orasidagi masofani tavsiflash uchun qanday atama ishlatiladi?" },
      options: [
        { en: "Wheelbase", ru: "Колесная база", uz: "G'ildirak bazasi" },
        { en: "Overhang", ru: "Свес", uz: "Osma" },
        { en: "Payload", ru: "Полезная нагрузка", uz: "Foydali yuk" },
        { en: "Tongue weight", ru: "Нагрузка на сцепное устройство", uz: "Ulanish moslamasidagi yuk" }
      ],
      correctAnswer: 0
    },
    {
      id: 18,
      text: { en: "What is the primary purpose of a weigh station along highways?", ru: "Какова основная цель весового контроля на автомагистралях?", uz: "Magistral yo'llardagi tarozida tortish punktining asosiy maqsadi nima?" },
      options: [
        { en: "To conduct vehicle inspections", ru: "Проводить осмотр транспортных средств", uz: "Transport vositalarini tekshirish" },
        { en: "To measure truck speed", ru: "Измерять скорость грузовика", uz: "Yuk mashinasi tezligini o'lchash" },
        { en: "To provide rest areas for truck drivers", ru: "Обеспечить зоны отдыха для водителей", uz: "Haydovchilar uchun dam olish joylarini ta'minlash" },
        { en: "To charge toll fees for trucks", ru: "Взимать плату за проезд грузовиков", uz: "Yuk mashinalari uchun yo'l haqini undirish" }
      ],
      correctAnswer: 0
    },
    {
      id: 19,
      text: { en: "What is the legal minimum age requirement for obtaining a commercial driver’s license (CDL) in most U.S. states?", ru: "Каков установленный законом минимальный возраст для получения коммерческих водительских прав (CDL) в большинстве штатов США?", uz: "AQSHning ko'pgina shtatlarida tijorat haydovchilik guvohnomasini (CDL) olish uchun qonuniy minimal yosh talabi qancha?" },
      options: [
        { en: "18 years old", ru: "18 лет", uz: "18 yosh" },
        { en: "21 years old", ru: "21 год", uz: "21 yosh" },
        { en: "25 years old", ru: "25 лет", uz: "25 yosh" },
        { en: "16 years old", ru: "16 лет", uz: "16 yosh" }
      ],
      correctAnswer: 1
    },
    {
      id: 20,
      text: { en: "What type of truck is commonly used for delivering packages and parcels to residential areas?", ru: "Какой тип грузовика обычно используется для доставки посылок и бандеролей в жилые районы?", uz: "Turar-joy hududlariga paketlar va posilkalarni yetkazib berish uchun odatda qaysi turdagi yuk mashinasi ishlatiladi?" },
      options: [
        { en: "Semi-truck", ru: "Полуприцеп", uz: "Yarim tirkama" },
        { en: "Box truck", ru: "Фургон", uz: "Furgon" },
        { en: "Tanker truck", ru: "Автоцистерна", uz: "Avtotsisterna" },
        { en: "Flatbed truck", ru: "Бортовой грузовик", uz: "Bortli yuk mashinasi" }
      ],
      correctAnswer: 1
    },
    {
      id: 21,
      text: { en: "Which term refers to the total weight of a truck, including the vehicle, driver, and cargo?", ru: "Какой термин относится к общему весу грузовика, включая транспортное средство, водителя и груз?", uz: "Yuk mashinasining umumiy vazni, shu jumladan transport vositasi, haydovchi va yuk qaysi atama bilan ataladi?" },
      options: [
        { en: "Curb weight", ru: "Снаряженная масса", uz: "Bordagi vazn" },
        { en: "Payload capacity", ru: "Грузоподъемность", uz: "Yuk ko'tarish qobiliyati" },
        { en: "Gross vehicle weight", ru: "Полная масса автомобиля", uz: "Avtomobilning umumiy vazni" },
        { en: "Net weight", ru: "Вес нетто", uz: "Netto vazni" }
      ],
      correctAnswer: 2
    },
    {
      id: 22,
      text: { en: "Which trucking industry regulation requires drivers to take mandatory rest breaks during long trips?", ru: "Какое правило индустрии грузоперевозок требует от водителей обязательных перерывов на отдых во время длительных поездок?", uz: "Yuk tashish sanoatining qaysi qoidasi haydovchilardan uzoq safarlar paytida majburiy dam olish tanaffuslarini olishni talab qiladi?" },
      options: [
        { en: "Clean Air Act", ru: "Закон о чистом воздухе", uz: "Toza havo to'g'risidagi qonun" },
        { en: "Hours of Service (HOS) rules", ru: "Правила режима труда и отдыха (HOS)", uz: "Xizmat soatlari (HOS) qoidalari" },
        { en: "Hazardous Materials Transportation Act", ru: "Закон о перевозке опасных грузов", uz: "Xavfli yuklarni tashish to'g'risidagi qonun" },
        { en: "National Environmental Policy Act", ru: "Национальный закон об экологической политике", uz: "Milliy ekologik siyosat to'g'risidagi qonun" }
      ],
      correctAnswer: 1
    },
    {
      id: 23,
      text: { en: "What type of truck is equipped with a temperature control to transport perishable goods?", ru: "Какой тип грузовика оснащен системой контроля температуры для перевозки скоропортящихся продуктов?", uz: "Tez buziladigan mahsulotlarni tashish uchun qaysi turdagi yuk mashinasi haroratni nazorat qilish moslamasi bilan jihozlangan?" },
      options: [
        { en: "Box truck", ru: "Фургон", uz: "Furgon" },
        { en: "Flatbed truck", ru: "Бортовой грузовик", uz: "Bortli yuk mashinasi" },
        { en: "Tanker truck", ru: "Автоцистерна", uz: "Avtotsisterna" },
        { en: "Refrigerated truck", ru: "Рефрижератор", uz: "Refrijerator" }
      ],
      correctAnswer: 3
    },
    {
      id: 24,
      text: { en: "What technology enables trucks to connect to the internet and transmit data in real-time?", ru: "Какая технология позволяет грузовикам подключаться к Интернету и передавать данные в режиме реального времени?", uz: "Qaysi texnologiya yuk mashinalariga internetga ulanish va ma'lumotlarni real vaqt rejimida uzatish imkonini beradi?" },
      options: [
        { en: "Satellite communication", ru: "Спутниковая связь", uz: "Sun'iy yo'ldosh aloqasi" },
        { en: "Bluetooth", ru: "Bluetooth", uz: "Bluetooth" },
        { en: "Wi-Fi", ru: "Wi-Fi", uz: "Wi-Fi" },
        { en: "Cellular network", ru: "Сотовая сеть", uz: "Mobil tarmoq" }
      ],
      correctAnswer: 3
    },
    {
      id: 25,
      text: { en: "Which drivers are generally required to use an ELD according to the FMCSA mandate?", ru: "Каким водителям, как правило, требуется использовать ELD в соответствии с мандатом FMCSA?", uz: "FMCSA mandatiga ko'ra, odatda qaysi haydovchilar ELD dan foydalanishlari shart?" },
      options: [
        { en: "All drivers of any vehicle", ru: "Все водители любых транспортных средств", uz: "Barcha turdagi transport vositalari haydovchilari" },
        { en: "Drivers required to keep Records of Duty Status (RODS)", ru: "Водители, обязанные вести учет статуса дежурства (RODS)", uz: "Navbatchilik holati qaydlarini (RODS) yuritishi shart bo'lgan haydovchilar" },
        { en: "Only drivers of hazardous materials", ru: "Только водители опасных грузов", uz: "Faqat xavfli yuk haydovchilari" },
        { en: "Only drivers crossing international borders", ru: "Только международные водители", uz: "Faqat xalqaro haydovchilar" }
      ],
      correctAnswer: 1
    },
    {
      id: 26,
      text: { en: "What data does an ELD automatically record from the vehicle's engine?", ru: "Какие данные ELD автоматически записывает из двигателя автомобиля?", uz: "ELD avtomobil dvigatelidan qanday ma'lumotlarni avtomatik ravishda yozib oladi?" },
      options: [
        { en: "Fuel level and tire pressure", ru: "Уровень топлива и давление в шинах", uz: "Yoqilg'i darajasi va shinalar bosimi" },
        { en: "Driver's heart rate and blood pressure", ru: "Пульс и артериальное давление водителя", uz: "Haydovchining yurak urishi va qon bosimi" },
        { en: "Engine power status, vehicle motion, and miles driven", ru: "Статус питания двигателя, движение автомобиля и пройденные мили", uz: "Dvigatel quvvati holati, avtomobil harakati va bosib o'tilgan millar" },
        { en: "Cargo weight and temperature", ru: "Вес и температура груза", uz: "Yuk vazni va harorati" }
      ],
      correctAnswer: 2
    },
    {
      id: 27,
      text: { en: "What is a driver required to do when an ELD malfunctions?", ru: "Что обязан сделать водитель при неисправности ELD?", uz: "ELD nosoz bo'lib qolganda haydovchi nima qilishi shart?" },
      options: [
        { en: "Stop driving immediately until fixed", ru: "Немедленно прекратить вождение до устранения неисправности", uz: "Nosozlik bartaraf etilguncha haydashni darhol to'xtatish" },
        { en: "Switch to paper logs and notify the carrier within 24 hours", ru: "Перейти на бумажные журналы и уведомить перевозчика в течение 24 часов", uz: "Qog'oz jurnallarga o'tish va 24 soat ichida tashuvchini xabardor qilish" },
        { en: "Continue driving and ignore the device", ru: "Продолжать движение и игнорировать устройство", uz: "Haydashni davom ettirish va qurilmaga e'tibor bermaslik" },
        { en: "Use a smartphone app instead", ru: "Вместо этого использовать приложение на смартфоне", uz: "Buning o'rniga smartfon ilovasidan foydalanish" }
      ],
      correctAnswer: 1
    },
    {
      id: 28,
      text: { en: "How does an ELD typically connect to the vehicle to capture data?", ru: "Как ELD обычно подключается к автомобилю для сбора данных?", uz: "ELD ma'lumotlarni to'plash uchun odatda avtomobilga qanday ulanadi?" },
      options: [
        { en: "Via the vehicle's diagnostic port (OBD-II or J1939)", ru: "Через диагностический порт автомобиля (OBD-II или J1939)", uz: "Avtomobilning diagnostika porti (OBD-II yoki J1939) orqali" },
        { en: "Via a USB cable to the driver's phone", ru: "Через USB-кабель к телефону водителя", uz: "Haydovchining telefoniga USB kabeli orqali" },
        { en: "Via satellite only", ru: "Только через спутник", uz: "Faqat sun'iy yo'ldosh orqali" },
        { en: "Via a manual switch on the dashboard", ru: "Через ручной переключатель на приборной панели", uz: "Asboblar panelidagi qo'lda boshqariladigan kalit orqali" }
      ],
      correctAnswer: 0
    },
    {
      id: 29,
      text: { en: "How often must a driver certify their ELD records?", ru: "Как часто водитель должен заверять свои записи в ELD?", uz: "Haydovchi ELD qaydlarini qanchalik tez-tez tasdiqlashi kerak?" },
      options: [
        { en: "Once a week", ru: "Раз в неделю", uz: "Haftada bir marta" },
        { en: "Once a month", ru: "Раз в месяц", uz: "Oyiga bir marta" },
        { en: "At the end of every 24-hour period", ru: "В конце каждого 24-часового периода", uz: "Har 24 soatlik davr oxirida" },
        { en: "Only when requested by an inspector", ru: "Только по запросу инспектора", uz: "Faqat inspektor so'raganda" }
      ],
      correctAnswer: 2
    }
  ],
  3: [
    {
      id: 1,
      text: { en: "What are 'Incoterms'?", ru: "Что такое 'Инкотермс'?", uz: "'Inkoterms' nima?" },
      options: [
        { en: "Internal company rules", ru: "Внутренние правила компании", uz: "Kompaniyaning ichki qoidalari" },
        { en: "International commercial terms", ru: "Международные коммерческие условия", uz: "Xalqaro tijorat shartlari" },
        { en: "Internet communication terms", ru: "Условия интернет-связи", uz: "Internet aloqa shartlari" },
        { en: "Insurance company names", ru: "Названия страховых компаний", uz: "Sug'urta kompaniyalari nomlari" }
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: { en: "What does 'EXW' mean?", ru: "Что означает 'EXW'?", uz: "'EXW' nimani anglatadi?" },
      options: [
        { en: "Ex Works", ru: "Франко-завод", uz: "Franko-zavod" },
        { en: "Extra Weight", ru: "Дополнительный вес", uz: "Qo'shimcha vazn" },
        { en: "Express Warehouse", ru: "Экспресс-склад", uz: "Ekspress ombor" },
        { en: "Exit Way", ru: "Выход", uz: "Chiqish yo'li" }
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      text: { en: "What does 'DDP' mean?", ru: "Что означает 'DDP'?", uz: "'DDP' nimani anglatadi?" },
      options: [
        { en: "Delivery Duty Paid", ru: "Поставка с оплатой пошлины", uz: "Boj to'langan holda yetkazib berish" },
        { en: "Direct Delivery Process", ru: "Процесс прямой доставки", uz: "To'g'ridan-to'g'ri yetkazib berish jarayoni" },
        { en: "Driver Data Profile", ru: "Профиль данных водителя", uz: "Haydovchi ma'lumotlari profili" },
        { en: "Daily Delivery Plan", ru: "Ежедневный план доставки", uz: "Kundalik yetkazib berish rejasi" }
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      text: { en: "What does 'CIF' stand for?", ru: "Что означает 'CIF'?", uz: "'CIF' nimani anglatadi?" },
      options: [
        { en: "Cost, Insurance, and Freight", ru: "Стоимость, страхование и фрахт", uz: "Narx, sug'urta va fraxt" },
        { en: "Carrier In Freight", ru: "Перевозчик во фрахте", uz: "Fraxtdagi tashuvchi" },
        { en: "Customs Inspection Fee", ru: "Сбор за таможенный досмотр", uz: "Bojxona tekshiruvi to'lovi" },
        { en: "Container In Facility", ru: "Контейнер на объекте", uz: "Ob'ektdagi konteyner" }
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      text: { en: "What is a 'Customs Broker'?", ru: "Кто такой 'Таможенный брокер'?", uz: "'Bojxona brokeri' kim?" },
      options: [
        { en: "A person who breaks customs laws", ru: "Человек, нарушающий таможенные законы", uz: "Bojxona qonunlarini buzgan shaxs" },
        { en: "An agent who clears goods through customs", ru: "Агент, оформляющий товары через таможню", uz: "Tovarlarni bojxonadan o'tkazuvchi agent" },
        { en: "A police officer", ru: "Полицейский", uz: "Politsiya xodimi" },
        { en: "A tax collector", ru: "Сборщик налогов", uz: "Soliq yig'uvchi" }
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      text: { en: "What is an 'HS Code'?", ru: "Что такое 'Код ТН ВЭД'?", uz: "'HS kodi' nima?" },
      options: [
        { en: "High Speed Code", ru: "Высокоскоростной код", uz: "Yuqori tezlik kodi" },
        { en: "Harmonized System Code", ru: "Код Гармонизированной системы", uz: "Uyg'unlashtirilgan tizim kodi" },
        { en: "Home Security Code", ru: "Код домашней безопасности", uz: "Uy xavfsizligi kodi" },
        { en: "Highway Safety Code", ru: "Код безопасности на шоссе", uz: "Magistral yo'l harakati xavfsizligi kodi" }
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      text: { en: "What is a 'Bonded Warehouse'?", ru: "Что такое 'Таможенный склад'?", uz: "'Bojxona ombori' nima?" },
      options: [
        { en: "A warehouse for glue", ru: "Склад для клея", uz: "Yelim uchun ombor" },
        { en: "A facility where goods are stored before duties are paid", ru: "Объект, где хранятся товары до уплаты пошлин", uz: "Boj to'langunga qadar tovarlar saqlanadigan joy" },
        { en: "A very strong building", ru: "Очень прочное здание", uz: "Juda kuchli bino" },
        { en: "A prison for smugglers", ru: "Тюрьма для контрабандистов", uz: "Kontrabandachilar uchun qamoqxona" }
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      text: { en: "What is a 'Letter of Credit'?", ru: "Что такое 'Аккредитив'?", uz: "'Akkreditiv' nima?" },
      options: [
        { en: "A thank you note", ru: "Благодарственное письмо", uz: "Rahmatnoma" },
        { en: "A bank document guaranteeing payment", ru: "Банковский документ, гарантирующий оплату", uz: "To'lovni kafolatlaydigan bank hujjati" },
        { en: "A credit card", ru: "Кредитная карта", uz: "Kredit karta" },
        { en: "A list of references", ru: "Список рекомендаций", uz: "Tavsiyalar ro'yxati" }
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      text: { en: "What is 'Force Majeure'?", ru: "Что такое 'Форс-мажор'?", uz: "'Fors-major' nima?" },
      options: [
        { en: "A very strong driver", ru: "Очень сильный водитель", uz: "Juda kuchli haydovchi" },
        { en: "Unforeseeable circumstances that prevent contract fulfillment", ru: "Непредвиденные обстоятельства, препятствующие выполнению контракта", uz: "Shartnoma bajarilishiga to'sqinlik qiladigan kutilmagan holatlar" },
        { en: "A type of engine oil", ru: "Тип моторного масла", uz: "Dvigatel moyining turi" },
        { en: "A military operation", ru: "Военная операция", uz: "Harbiy operatsiya" }
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      text: { en: "What is a 'Bill of Entry'?", ru: "Что такое 'Въездная декларация'?", uz: "'Kirish deklaratsiyasi' nima?" },
      options: [
        { en: "A ticket to a concert", ru: "Билет на концерт", uz: "Konsertga chipta" },
        { en: "A document filed with customs for imported goods", ru: "Документ, подаваемый в таможню на импортные товары", uz: "Import qilinadigan tovarlar uchun bojxonaga topshiriladigan hujjat" },
        { en: "A key to the warehouse", ru: "Ключ от склада", uz: "Ombor kaliti" },
        { en: "A list of employees", ru: "Список сотрудников", uz: "Xodimlar ro'yxati" }
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      text: { en: "What is the primary responsibility of a truck dispatcher?", ru: "Какова основная обязанность диспетчера грузоперевозок?", uz: "Yuk tashish dispetcherining asosiy vazifasi nima?" },
      options: [
        { en: "Driving the truck", ru: "Вождение грузовика", uz: "Yuk mashinasini haydash" },
        { en: "Coordinating loads, routes, and schedules for drivers", ru: "Координация грузов, маршрутов и графиков для водителей", uz: "Haydovchilar uchun yuklar, yo'nalishlar va jadvallarni muvofiqlashtirish" },
        { en: "Maintaining the vehicles", ru: "Техническое обслуживание автомобилей", uz: "Avtomobillarga texnik xizmat ko'rsatish" },
        { en: "Loading and unloading cargo", ru: "Погрузка и разгрузка груза", uz: "Yukni yuklash va tushirish" }
      ],
      correctAnswer: 1
    },
    {
      id: 12,
      text: { en: "What does HOS stand for in trucking regulations?", ru: "Что означает HOS в правилах грузоперевозок?", uz: "Yuk tashish qoidalarida HOS nimani anglatadi?" },
      options: [
        { en: "Highway Operation Standards", ru: "Стандарты эксплуатации шоссе", uz: "Magistral yo'llardan foydalanish standartlari" },
        { en: "Hours of Service", ru: "Часы работы", uz: "Xizmat soatlari" },
        { en: "Heavy Operation Systems", ru: "Тяжелые операционные системы", uz: "Og'ir operatsion tizimlar" },
        { en: "Hazardous Operation Safety", ru: "Безопасность при работе с опасными грузами", uz: "Xavfli operatsiyalar xavfsizligi" }
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      text: { en: "What is the maximum driving time allowed for a truck driver in a 14-hour period?", ru: "Каково максимальное время вождения, разрешенное водителю грузовика в течение 14-часового периода?", uz: "14 soatlik vaqt ichida yuk mashinasi haydovchisiga ruxsat etilgan maksimal haydash vaqti qancha?" },
      options: [
        { en: "10 hours", ru: "10 часов", uz: "10 soat" },
        { en: "11 hours", ru: "11 часов", uz: "11 soat" },
        { en: "12 hours", ru: "12 часов", uz: "12 soat" },
        { en: "14 hours", ru: "14 часов", uz: "14 soat" }
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      text: { en: "Which technology system is commonly used for fleet tracking and communication?", ru: "Какая технологическая система обычно используется для отслеживания автопарка и связи?", uz: "Parkni kuzatish va aloqa qilish uchun odatda qaysi texnologiya tizimi qo'llaniladi?" },
      options: [
        { en: "GPS and ELD systems", ru: "Системы GPS и ELD", uz: "GPS va ELD tizimlari" },
        { en: "Radio communication only", ru: "Только радиосвязь", uz: "Faqat radiosvyaz" },
        { en: "Paper logbooks", ru: "Бумажные журналы", uz: "Qog'oz jurnallar" },
        { en: "Phone calls exclusively", ru: "Исключительно телефонные звонки", uz: "Faqat telefon qo'ng'iroqlari" }
      ],
      correctAnswer: 0
    },
    {
      id: 15,
      text: { en: "What should we confirm first when dispatching?", ru: "Что мы должны подтвердить в первую очередь при диспетчеризации?", uz: "Dispetcherlik paytida birinchi navbatda nimani tasdiqlashimiz kerak?" },
      options: [
        { en: "Technician name", ru: "Имя техника", uz: "Texnik ismi" },
        { en: "Location of Breakdown", ru: "Место поломки", uz: "Buzilish joyi" },
        { en: "Tire availability & ETA", ru: "Наличие шин и расчетное время прибытия", uz: "Shinalar mavjudligi va taxminiy yetib kelish vaqti" },
        { en: "Pricing", ru: "Цена", uz: "Narx" }
      ],
      correctAnswer: 1
    },
    {
      id: 16,
      text: { en: "Who can we call for more accurate breakdown location information?", ru: "Кому мы можем позвонить для получения более точной информации о месте поломки?", uz: "Buzilish joyi haqida aniqroq ma'lumot olish uchun kimga qo'ng'iroq qilishimiz mumkin?" },
      options: [
        { en: "Dispatcher", ru: "Диспетчер", uz: "Dispetcher" },
        { en: "Vendor", ru: "Поставщик", uz: "Sotuvchi" },
        { en: "Technician", ru: "Техник", uz: "Texnik" },
        { en: "Driver", ru: "Водитель", uz: "Haydovchi" }
      ],
      correctAnswer: 3
    },
    {
      id: 17,
      text: { en: "Which of these are not considered as payment methods?", ru: "Что из этого не считается способами оплаты?", uz: "Bulardan qaysi biri to'lov usuli hisoblanmaydi?" },
      options: [
        { en: "P2P", ru: "P2P", uz: "P2P" },
        { en: "EFS", ru: "EFS", uz: "EFS" },
        { en: "VPN", ru: "VPN", uz: "VPN" },
        { en: "T-check", ru: "T-check", uz: "T-check" }
      ],
      correctAnswer: 2
    },
    {
      id: 18,
      text: { en: "Which of the following best describes the primary responsibility of an operations manager in a trucking company?", ru: "Что из следующего лучше всего описывает основную обязанность операционного менеджера в транспортной компании?", uz: "Quyidagilardan qaysi biri yuk tashish kompaniyasidagi operatsion menejerning asosiy vazifasini yaxshi tavsiflaydi?" },
      options: [
        { en: "Driving trucks when drivers are unavailable", ru: "Вождение грузовиков, когда водители недоступны", uz: "Haydovchilar bo'lmaganda yuk mashinalarini haydash" },
        { en: "Coordinating dispatch, safety, customer service, and fleet efficiency", ru: "Координация диспетчеризации, безопасности, обслуживания клиентов и эффективности автопарка", uz: "Dispetcherlik, xavfsizlik, mijozlarga xizmat ko'rsatish va park samaradorligini muvofiqlashtirish" },
        { en: "Handling only accounting and payroll", ru: "Обработка только бухгалтерии и заработной платы", uz: "Faqat buxgalteriya va ish haqini qayta ishlash" },
        { en: "Selling transportation services", ru: "Продажа транспортных услуг", uz: "Transport xizmatlarini sotish" }
      ],
      correctAnswer: 1
    },
    {
      id: 19,
      text: { en: "After how many hours does a truck driver have to get a 30-minute break under FMCSA HOS rules?", ru: "Через сколько часов водитель грузовика должен сделать 30-минутный перерыв согласно правилам FMCSA HOS?", uz: "FMCSA HOS qoidalariga ko'ra, yuk mashinasi haydovchisi necha soatdan keyin 30 daqiqalik tanaffus qilishi kerak?" },
      options: [
        { en: "8 hours", ru: "8 часов", uz: "8 soat" },
        { en: "10 hours", ru: "10 часов", uz: "10 soat" },
        { en: "11 hours", ru: "11 часов", uz: "11 soat" },
        { en: "14 hours", ru: "14 часов", uz: "14 soat" }
      ],
      correctAnswer: 0
    },
    {
      id: 20,
      text: { en: "Minimum how many pounds should there be in the trailer for us to send the driver to get mandatorily scaled?", ru: "Минимум сколько фунтов должно быть в прицепе, чтобы мы отправили водителя на обязательное взвешивание?", uz: "Haydovchini majburiy taroziga yuborishimiz uchun tirkamada kamida necha funt yuk bo'lishi kerak?" },
      options: [
        { en: "34,000 lbs", ru: "34 000 фунтов", uz: "34 000 funt" },
        { en: "45,000 lbs", ru: "45 000 фунтов", uz: "45 000 funt" },
        { en: "35,000 lbs", ru: "35 000 фунтов", uz: "35 000 funt" },
        { en: "40,000 lbs", ru: "40 000 фунтов", uz: "40 000 funt" }
      ],
      correctAnswer: 0
    },
    {
      id: 21,
      text: { en: "A driver calls saying they will miss their delivery appointment due to a breakdown. What should the operations manager do first?", ru: "Водитель звонит и говорит, что пропустит время доставки из-за поломки. Что должен сделать операционный менеджер в первую очередь?", uz: "Haydovchi qo'ng'iroq qilib, buzilish tufayli yetkazib berish vaqtini o'tkazib yuborishini aytdi. Operatsion menejer birinchi navbatda nima qilishi kerak?" },
      options: [
        { en: "Tell the driver to fix it themselves", ru: "Сказать водителю починить все самому", uz: "Haydovchiga o'zi tuzatishini aytish" },
        { en: "Notify the customer and request a rescheduled appointment", ru: "Уведомить клиента и запросить перенос встречи", uz: "Mijozni xabardor qilish va uchrashuvni boshqa vaqtga ko'chirishni so'rash" },
        { en: "Ignore the issue", ru: "Игнорировать проблему", uz: "Muammoni e'tiborsiz qoldirish" },
        { en: "Cancel the load", ru: "Отменить груз", uz: "Yukni bekor qilish" }
      ],
      correctAnswer: 1
    },
    {
      id: 22,
      text: { en: "What is the purpose of a pre-trip inspection?", ru: "Какова цель предрейсового осмотра?", uz: "Safar oldidan tekshirishning maqsadi nima?" },
      options: [
        { en: "To check fuel prices", ru: "Проверить цены на топливо", uz: "Yoqilg'i narxini tekshirish" },
        { en: "To ensure the truck is safe and compliant before driving", ru: "Убедиться, что грузовик безопасен и соответствует требованиям перед поездкой", uz: "Haydashdan oldin yuk mashinasi xavfsiz va talablarga javob berishiga ishonch hosil qilish" },
        { en: "To verify the driver’s schedule", ru: "Проверить график водителя", uz: "Haydovchining jadvalini tekshirish" },
        { en: "To check weather conditions", ru: "Проверить погодные условия", uz: "Ob-havo sharoitini tekshirish" }
      ],
      correctAnswer: 1
    },
    {
      id: 23,
      text: { en: "Which document is required for proof of delivery?", ru: "Какой документ необходим для подтверждения доставки?", uz: "Yetkazib berishni tasdiqlash uchun qaysi hujjat talab qilinadi?" },
      options: [
        { en: "Rate confirmation", ru: "Подтверждение тарифа", uz: "Stavkani tasdiqlash" },
        { en: "Bill of Lading (BOL)", ru: "Коносамент (BOL)", uz: "Konosament (BOL)" },
        { en: "Fuel receipt", ru: "Квитанция на топливо", uz: "Yoqilg'i kvitansiyasi" },
        { en: "Safety manual", ru: "Руководство по безопасности", uz: "Xavfsizlik bo'yicha qo'llanma" }
      ],
      correctAnswer: 1
    },
    {
      id: 24,
      text: { en: "What is the best way to reduce empty miles?", ru: "Как лучше всего сократить порожний пробег?", uz: "Bo'sh yurishni kamaytirishning eng yaxshi usuli qanday?" },
      options: [
        { en: "Increase driver pay", ru: "Увеличить оплату водителю", uz: "Haydovchi haqini oshirish" },
        { en: "Improve load planning and backhaul scheduling", ru: "Улучшить планирование грузов и составление графиков обратных рейсов", uz: "Yuklarni rejalashtirish va qaytish reyslari jadvalini yaxshilash" },
        { en: "Reduce maintenance", ru: "Сократить техническое обслуживание", uz: "Texnik xizmat ko'rsatishni kamaytirish" },
        { en: "Add more trucks", ru: "Добавить больше грузовиков", uz: "Ko'proq yuk mashinalarini qo'shish" }
      ],
      correctAnswer: 1
    },
    {
      id: 25,
      text: { en: "A driver is out of hours but the customer insists on immediate pickup. What should the operations manager do?", ru: "У водителя закончились часы работы, но клиент настаивает на немедленном получении груза. Что должен сделать операционный менеджер?", uz: "Haydovchining ish soatlari tugagan, ammo mijoz darhol yukni olishni talab qilmoqda. Operatsion menejer nima qilishi kerak?" },
      options: [
        { en: "Tell the driver to go anyway", ru: "Сказать водителю все равно ехать", uz: "Haydovchiga baribir borishini aytish" },
        { en: "Ask another available driver or reschedule", ru: "Спросить другого свободного водителя или перенести встречу", uz: "Boshqa bo'sh haydovchidan so'rash yoki vaqtni o'zgartirish" },
        { en: "Ignore HOS rules", ru: "Игнорировать правила HOS", uz: "HOS qoidalarini e'tiborsiz qoldirish" },
        { en: "Cancel the load without informing the customer", ru: "Отменить груз, не информируя клиента", uz: "Mijozni xabardor qilmasdan yukni bekor qilish" }
      ],
      correctAnswer: 1
    },
    {
      id: 26,
      text: { en: "What is the main purpose of ELDs?", ru: "Какова основная цель ELD?", uz: "ELDning asosiy maqsadi nima?" },
      options: [
        { en: "Track fuel usage", ru: "Отслеживать расход топлива", uz: "Yoqilg'i sarfini kuzatish" },
        { en: "Track truck wash schedules", ru: "Отслеживать график мойки грузовиков", uz: "Yuk mashinalarini yuvish jadvalini kuzatish" },
        { en: "Track customer payments", ru: "Отслеживать платежи клиентов", uz: "Mijozlar to'lovlarini kuzatish" },
        { en: "Track driver hours and ensure HOS compliance", ru: "Отслеживать часы работы водителя и обеспечивать соблюдение HOS", uz: "Haydovchi soatlarini kuzatish va HOS muvofiqligini ta'minlash" }
      ],
      correctAnswer: 3
    },
    {
      id: 27,
      text: { en: "Which factor most affects detention charges?", ru: "Какой фактор больше всего влияет на плату за простой?", uz: "Kutib turish to'loviga qaysi omil ko'proq ta'sir qiladi?" },
      options: [
        { en: "Driver’s fuel level", ru: "Уровень топлива у водителя", uz: "Haydovchining yoqilg'i darajasi" },
        { en: "Truck color", ru: "Цвет грузовика", uz: "Yuk mashinasining rangi" },
        { en: "Time spent waiting at shipper/receiver", ru: "Время ожидания у отправителя/получателя", uz: "Yuk jo'natuvchi/qabul qiluvchida kutish vaqti" },
        { en: "Weather conditions", ru: "Погодные условия", uz: "Ob-havo sharoiti" }
      ],
      correctAnswer: 2
    },
    {
      id: 28,
      text: { en: "What is the best way to handle a high-priority customer complaint?", ru: "Как лучше всего обработать жалобу приоритетного клиента?", uz: "Yuqori ustuvorlikka ega mijoz shikoyatini ko'rib chiqishning eng yaxshi usuli qanday?" },
      options: [
        { en: "Respond quickly, investigate, and provide a solution", ru: "Быстро ответить, расследовать и предоставить решение", uz: "Tezda javob berish, tekshirish va yechim taklif qilish" },
        { en: "Ignore it", ru: "Игнорировать", uz: "E'tiborsiz qoldirish" },
        { en: "Blame the driver", ru: "Обвинить водителя", uz: "Haydovchini ayblash" },
        { en: "Delay response for several days", ru: "Отложить ответ на несколько дней", uz: "Javobni bir necha kunga kechiktirish" }
      ],
      correctAnswer: 0
    },
    {
      id: 29,
      text: { en: "What is a common cause of CSA score increases?", ru: "Какова общая причина повышения баллов CSA?", uz: "CSA ballari oshishining umumiy sababi nima?" },
      options: [
        { en: "On-time deliveries", ru: "Своевременные поставки", uz: "O'z vaqtida yetkazib berish" },
        { en: "Safety violations and roadside inspections", ru: "Нарушения безопасности и дорожные проверки", uz: "Xavfsizlik qoidalarini buzish va yo'l bo'yidagi tekshiruvlar" },
        { en: "Customer reviews", ru: "Отзывы клиентов", uz: "Mijozlar sharhlari" },
        { en: "Fuel efficiency", ru: "Топливная экономичность", uz: "Yoqilg'i samaradorligi" }
      ],
      correctAnswer: 1
    },
    {
      id: 30,
      text: { en: "What is the purpose of a rate confirmation?", ru: "Какова цель подтверждения тарифа?", uz: "Stavkani tasdiqlashning maqsadi nima?" },
      options: [
        { en: "To confirm driver pay", ru: "Подтвердить оплату водителю", uz: "Haydovchi haqini tasdiqlash" },
        { en: "To confirm agreed rate, pickup/delivery details, and load terms", ru: "Подтвердить согласованный тариф, детали получения/доставки и условия загрузки", uz: "Kelishilgan stavkani, qabul qilish/yetkazib berish tafsilotlarini va yuk shartlarini tasdiqlash" },
        { en: "To confirm truck maintenance", ru: "Подтвердить техническое обслуживание грузовика", uz: "Yuk mashinasiga texnik xizmat ko'rsatishni tasdiqlash" },
        { en: "To confirm fuel surcharge", ru: "Подтвердить топливную надбавку", uz: "Yoqilg'i qo'shimcha haqini tasdiqlash" }
      ],
      correctAnswer: 1
    },
    {
      id: 31,
      text: { en: "Which KPI is most important for operations managers?", ru: "Какой KPI наиболее важен для операционных менеджеров?", uz: "Operatsion menejerlar uchun qaysi KPI eng muhim?" },
      options: [
        { en: "Number of office staff", ru: "Количество офисных сотрудников", uz: "Ofis xodimlari soni" },
        { en: "On-time delivery percentage", ru: "Процент своевременной доставки", uz: "O'z vaqtida yetkazib berish foizi" },
        { en: "Number of trucks detailed", ru: "Количество детализированных грузовиков", uz: "Batafsil ko'rib chiqilgan yuk mashinalari soni" },
        { en: "Number of emails sent", ru: "Количество отправленных писем", uz: "Yuborilgan elektron xatlar soni" }
      ],
      correctAnswer: 1
    },
    {
      id: 32,
      text: { en: "A driver reports overweight axle distribution. What should the operations manager advise?", ru: "Водитель сообщает о перегрузке по осям. Что должен посоветовать операционный менеджер?", uz: "Haydovchi o'qlar bo'yicha ortiqcha yuk haqida xabar berdi. Operatsion menejer nima maslahat berishi kerak?" },
      options: [
        { en: "Ignore it", ru: "Игнорировать", uz: "E'tiborsiz qoldirish" },
        { en: "Adjust the load or re-scale", ru: "Отрегулировать груз или взвесить заново", uz: "Yukni sozlash yoki qayta taroziga tortish" },
        { en: "Drive faster", ru: "Ехать быстрее", uz: "Tezroq haydash" },
        { en: "Cancel the load", ru: "Отменить груз", uz: "Yukni bekor qilish" }
      ],
      correctAnswer: 1
    },
    {
      id: 33,
      text: { en: "What is the best way to improve driver retention?", ru: "Как лучше всего улучшить удержание водителей?", uz: "Haydovchilarni saqlab qolishni yaxshilashning eng yaxshi usuli qanday?" },
      options: [
        { en: "Reduce communication", ru: "Сократить общение", uz: "Muloqotni kamaytirish" },
        { en: "Provide fair pay, respect, and consistent loads", ru: "Обеспечить справедливую оплату, уважение и стабильные грузы", uz: "Adolatli haq to'lash, hurmat va barqaror yuklarni ta'minlash" },
        { en: "Increase paperwork", ru: "Увеличить количество документов", uz: "Hujjatlar sonini ko'paytirish" },
        { en: "Ignore driver concerns", ru: "Игнорировать опасения водителей", uz: "Haydovchilar xavotirlarini e'tiborsiz qoldirish" }
      ],
      correctAnswer: 1
    },
    {
      id: 34,
      text: { en: "Which group of documents won’t be included into a binder?", ru: "Какая группа документов не будет включена в папку?", uz: "Qaysi hujjatlar guruhi papkaga kiritilmaydi?" },
      options: [
        { en: "Equipment-related", ru: "Связанные с оборудованием", uz: "Uskunalar bilan bog'liq" },
        { en: "Driver-related", ru: "Связанные с водителем", uz: "Haydovchi bilan bog'liq" },
        { en: "Company-related", ru: "Связанные с компанией", uz: "Kompaniya bilan bog'liq" },
        { en: "Accounting-related", ru: "Связанные с бухгалтерией", uz: "Buxgalteriya bilan bog'liq" }
      ],
      correctAnswer: 3
    },
    {
      id: 35,
      text: { en: "Which manager makes sure that the driver is doing PTI on time?", ru: "Какой менеджер следит за тем, чтобы водитель вовремя проводил предрейсовый осмотр (PTI)?", uz: "Qaysi menejer haydovchining PTI-ni o'z vaqtida bajarayotganini nazorat qiladi?" },
      options: [
        { en: "Update managers", ru: "Менеджеры по обновлениям", uz: "Yangilash menejerlari" },
        { en: "Safety managers", ru: "Менеджеры по безопасности", uz: "Xavfsizlik menejerlari" },
        { en: "Fleet managers", ru: "Менеджеры автопарка", uz: "Park menejerlari" },
        { en: "Dispatch managers", ru: "Менеджеры по диспетчеризации", uz: "Dispetcherlik menejerlari" }
      ],
      correctAnswer: 2
    },
    {
      id: 36,
      text: { en: "Which manager makes sure that the driver has HUT?", ru: "Какой менеджер следит за тем, чтобы у водителя был HUT?", uz: "Qaysi menejer haydovchida HUT borligini nazorat qiladi?" },
      options: [
        { en: "Update managers", ru: "Менеджеры по обновлениям", uz: "Yangilash menejerlari" },
        { en: "Safety managers", ru: "Менеджеры по безопасности", uz: "Xavfsizlik menejerlari" },
        { en: "Fleet managers", ru: "Менеджеры автопарка", uz: "Park menejerlari" },
        { en: "Dispatch managers", ru: "Менеджеры по диспетчеризации", uz: "Dispetcherlik menejerlari" }
      ],
      correctAnswer: 2
    },
    {
      id: 37,
      text: { en: "What device primarily calculates how many miles a vehicle kept moving?", ru: "Какое устройство в первую очередь рассчитывает, сколько миль проехал автомобиль?", uz: "Qaysi qurilma birinchi navbatda avtomobil necha mil yurganini hisoblaydi?" },
      options: [
        { en: "Speedometer", ru: "Спидометр", uz: "Spidometr" },
        { en: "Barometer", ru: "Барометр", uz: "Barometr" },
        { en: "Odometer", ru: "Одометр", uz: "Odometer" },
        { en: "Taxometer", ru: "Таксометр", uz: "Taksometr" }
      ],
      correctAnswer: 2
    },
    {
      id: 38,
      text: { en: "What is not usually confirmed with the facilities at pick-up point?", ru: "Что обычно не подтверждается на объекте в пункте получения?", uz: "Odatda qabul qilish punktidagi ob'ektlar bilan nima tasdiqlanmaydi?" },
      options: [
        { en: "Check-in time", ru: "Время регистрации", uz: "Ro'yxatdan o'tish vaqti" },
        { en: "Pick-up number", ru: "Номер получения", uz: "Qabul qilish raqami" },
        { en: "Driver credentials", ru: "Учетные данные водителя", uz: "Haydovchi ma'lumotlari" },
        { en: "Load weight", ru: "Вес груза", uz: "Yuk vazni" }
      ],
      correctAnswer: 3
    },
    {
      id: 39,
      text: { en: "What is asked from the driver going in the direction to the facility first?", ru: "Что в первую очередь спрашивают у водителя, направляющегося к объекту?", uz: "Ob'ektga qarab ketayotgan haydovchidan birinchi bo'lib nima so'raladi?" },
      options: [
        { en: "Cycle time", ru: "Время цикла", uz: "Sikl vaqti" },
        { en: "ETA", ru: "Расчетное время прибытия", uz: "Taxminiy yetib kelish vaqti" },
        { en: "Location", ru: "Местоположение", uz: "Manzil" },
        { en: "Status", ru: "Статус", uz: "Holat" }
      ],
      correctAnswer: 1
    },
    {
      id: 40,
      text: { en: "Which of these companies is regarded as an asset-based broker company?", ru: "Какая из этих компаний считается брокерской компанией с собственными активами?", uz: "Ushbu kompaniyalardan qaysi biri aktivlarga asoslangan brokerlik kompaniyasi hisoblanadi?" },
      options: [
        { en: "Amazon", ru: "Amazon", uz: "Amazon" },
        { en: "TQL", ru: "TQL", uz: "TQL" },
        { en: "Schindier", ru: "Schindier", uz: "Schindier" },
        { en: "Tesla", ru: "Tesla", uz: "Tesla" }
      ],
      correctAnswer: 0
    }
  ],
  4: [
    {
      id: 1,
      text: { en: "What is 'Supply Chain Visibility'?", ru: "Что такое 'Прозрачность цепочки поставок'?", uz: "'Ta'minot zanjiri ko'rinishi' nima?" },
      options: [
        { en: "Being able to see the warehouse", ru: "Возможность видеть склад", uz: "Omborni ko'ra olish" },
        { en: "Tracking products from source to destination", ru: "Отслеживание продукции от источника до пункта назначения", uz: "Mahsulotlarni manbadan manzilgacha kuzatish" },
        { en: "Using glasses to read labels", ru: "Использование очков для чтения этикеток", uz: "Yorliqlarni o'qish uchun ko'zoynakdan foydalanish" },
        { en: "A clear plastic bag", ru: "Прозрачный пластиковый пакет", uz: "Shaffof plastik to'rva" }
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: { en: "What is the 'Bullwhip Effect'?", ru: "Что такое 'Эффект хлыста'?", uz: "'Qamchi effekti' nima?" },
      options: [
        { en: "A fast delivery method", ru: "Метод быстрой доставки", uz: "Tez yetkazib berish usuli" },
        { en: "Increasing fluctuations in inventory in response to demand changes", ru: "Усиление колебаний запасов в ответ на изменения спроса", uz: "Talab o'zgarishiga javoban inventarizatsiyadagi tebranishlarning kuchayishi" },
        { en: "A tool used by drivers", ru: "Инструмент, используемый водителями", uz: "Haydovchilar foydalanadigan vosita" },
        { en: "A type of truck engine", ru: "Тип двигателя грузовика", uz: "Yuk mashinasi dvigatelining turi" }
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: { en: "What is 'Reverse Logistics'?", ru: "Что такое 'Обратная логистика'?", uz: "'Teskari logistika' nima?" },
      options: [
        { en: "Driving a truck in reverse", ru: "Вождение грузовика задним ходом", uz: "Yuk mashinasini orqaga haydash" },
        { en: "The process of moving goods from customer back to seller", ru: "Процесс перемещения товаров от покупателя обратно к продавцу", uz: "Tovarlarni xaridordan sotuvchiga qaytarish jarayoni" },
        { en: "Logistics in the past", ru: "Логистика в прошлом", uz: "O'tmishdagi logistika" },
        { en: "A secret logistics plan", ru: "Секретный план логистики", uz: "Yashirin logistika rejasi" }
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      text: { en: "What is 'Omnichannel' distribution?", ru: "Что такое 'Омниканальное' распределение?", uz: "'Omnikanal' tarqatish nima?" },
      options: [
        { en: "Selling only in one store", ru: "Продажа только в одном магазине", uz: "Faqat bitta do'konda sotish" },
        { en: "A multichannel approach to sales and distribution", ru: "Многоканальный подход к продажам и распределению", uz: "Sotish va tarqatishga ko'p kanalli yondashuv" },
        { en: "Using only trucks", ru: "Использование только грузовиков", uz: "Faqat yuk mashinalaridan foydalanish" },
        { en: "A TV channel about logistics", ru: "ТВ-канал о логистике", uz: "Logistika haqidagi telekanal" }
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      text: { en: "What is 'Green Logistics'?", ru: "Что такое 'Зеленая логистика'?", uz: "'Yashil logistika' nima?" },
      options: [
        { en: "Painting warehouses green", ru: "Покраска складов в зеленый цвет", uz: "Omborlarni yashil rangga bo'yash" },
        { en: "Environmentally friendly logistics practices", ru: "Экологически чистые методы логистики", uz: "Ekologik toza logistika amaliyoti" },
        { en: "Logistics in the forest", ru: "Логистика в лесу", uz: "O'rmondagi logistika" },
        { en: "Shipping vegetables", ru: "Перевозка овощей", uz: "Sabzavotlarni tashish" }
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      text: { en: "What is 'Cold Chain'?", ru: "Что такое 'Холодовая цепь'?", uz: "'Sovuq zanjir' nima?" },
      options: [
        { en: "A metal chain in winter", ru: "Металлическая цепь зимой", uz: "Qishdagi metall zanjir" },
        { en: "Temperature-controlled supply chain", ru: "Цепочка поставок с контролируемой температурой", uz: "Harorat nazorat qilinadigan ta'minot zanjiri" },
        { en: "A chain of ice cream shops", ru: "Сеть магазинов мороженого", uz: "Muzqaymoq do'konlari tarmog'i" },
        { en: "A broken heater", ru: "Сломанный обогреватель", uz: "Buzilgan isitgich" }
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      text: { en: "What is 'Blockchain' in logistics?", ru: "Что такое 'Блокчейн' в логистике?", uz: "Logistikada 'Blokcheyn' nima?" },
      options: [
        { en: "A heavy lock for trucks", ru: "Тяжелый замок для грузовиков", uz: "Yuk mashinalari uchun og'ir qulf" },
        { en: "A distributed ledger for secure record-keeping", ru: "Распределенный реестр для безопасного ведения записей", uz: "Xavfsiz yozuvlarni yuritish uchun taqsimlangan reestr" },
        { en: "A chain of blocks in a warehouse", ru: "Цепочка блоков на складе", uz: "Ombordagi bloklar zanjiri" },
        { en: "A way to block traffic", ru: "Способ блокировать движение", uz: "Trafikni to'sish usuli" }
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      text: { en: "What is 'Lean Logistics'?", ru: "Что такое 'Бережливая логистика'?", uz: "'Tejamkor logistika' nima?" },
      options: [
        { en: "Logistics for thin people", ru: "Логистика для худых людей", uz: "Ozib ketgan odamlar uchun logistika" },
        { en: "Focusing on eliminating waste and non-value-added activities", ru: "Сосредоточение на устранении отходов и деятельности, не приносящей ценности", uz: "Isrofgarchilikni va qiymat qo'shmaydigan faoliyatni bartaraf etishga e'tibor qaratish" },
        { en: "A truck leaning to one side", ru: "Грузовик, наклонившийся в одну сторону", uz: "Bir tomonga og'gan yuk mashinasi" },
        { en: "Cheap logistics", ru: "Дешевая логистика", uz: "Arzon logistika" }
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      text: { en: "What is 'TCO'?", ru: "Что такое 'TCO'?", uz: "'TCO' nima?" },
      options: [
        { en: "Total Cost of Ownership", ru: "Общая стоимость владения", uz: "Egalik qilishning umumiy qiymati" },
        { en: "Truck Control Office", ru: "Офис управления грузовиками", uz: "Yuk mashinalarini boshqarish idorasi" },
        { en: "Transport Company Owner", ru: "Владелец транспортной компании", uz: "Transport kompaniyasi egasi" },
        { en: "Total Container Output", ru: "Общий объем контейнеров", uz: "Konteynerlarning umumiy chiqishi" }
      ],
      correctAnswer: 0
    },
    {
      id: 10,
      text: { en: "What is an 'Agile' supply chain?", ru: "Что такое 'Гибкая' цепочка поставок?", uz: "'Egilochan' ta'minot zanjiri nima?" },
      options: [
        { en: "A chain made of rubber", ru: "Цепь из резины", uz: "Rezinadan yasalgan zanjir" },
        { en: "A supply chain that responds quickly to changes", ru: "Цепочка поставок, которая быстро реагирует на изменения", uz: "O'zgarishlarga tezda javob beradigan ta'minot zanjiri" },
        { en: "A very long supply chain", ru: "Очень длинная цепочка поставок", uz: "Juda uzun ta'minot zanjiri" },
        { en: "A supply chain for sports equipment", ru: "Цепочка поставок спортивного инвентаря", uz: "Sport anjomlari uchun ta'minot zanjiri" }
      ],
      correctAnswer: 1
    }
  ],
  5: [
    {
      id: 1,
      text: { en: "What is the 'Golden Rule' of dispatching?", ru: "Каково 'Золотое правило' диспетчеризации?", uz: "Dispetcherlikning 'Oltin qoidasi' nima?" },
      options: [
        { en: "Always get the highest rate", ru: "Всегда получать самую высокую ставку", uz: "Har doim eng yuqori stavkani olish" },
        { en: "Never lie to your driver", ru: "Никогда не врать своему водителю", uz: "Hech qachon haydovchingizga yolg'on gapirmang" },
        { en: "Drive the truck yourself if needed", ru: "Сами водите грузовик, если нужно", uz: "Agar kerak bo'lsa, yuk mashinasini o'zingiz haydang" },
        { en: "Always use the same broker", ru: "Всегда использовать одного и того же брокера", uz: "Har doim bir xil brokerdan foydalaning" }
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: { en: "What is 'Accessorial' charge?", ru: "Что такое 'Аксессуарный' сбор?", uz: "'Aksessuar' to'lovi nima?" },
      options: [
        { en: "A fee for truck accessories", ru: "Плата за аксессуары для грузовика", uz: "Yuk mashinasi aksessuarlari uchun to'lov" },
        { en: "Additional fees for extra services (tarping, lumper, etc.)", ru: "Дополнительные сборы за доп. услуги (брезент, лампер и т.д.)", uz: "Qo'shimcha xizmatlar uchun qo'shimcha to'lovlar (brezent, lamper va h.k.)" },
        { en: "A discount for regular customers", ru: "Скидка для постоянных клиентов", uz: "Doimiy mijozlar uchun chegirma" },
        { en: "A fine for late delivery", ru: "Штраф за позднюю доставку", uz: "Kech yetkazib berish uchun jarima" }
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: { en: "What is 'Comcheck'?", ru: "Что такое 'Комчек'?", uz: "'Komchek' nima?" },
      options: [
        { en: "A communication check", ru: "Проверка связи", uz: "Aloqani tekshirish" },
        { en: "A electronic payment system used in trucking", ru: "Электронная платежная система, используемая в грузоперевозках", uz: "Yuk tashishda ishlatiladigan elektron to'lov tizimi" },
        { en: "A company background check", ru: "Проверка биографии компании", uz: "Kompaniya tarixini tekshirish" },
        { en: "A computer check-up", ru: "Проверка компьютера", uz: "Kompyuterni tekshirish" }
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      text: { en: "What is 'Hazmat'?", ru: "Что такое 'Hazmat'?", uz: "'Hazmat' nima?" },
      options: [
        { en: "Heavy Material", ru: "Тяжелый материал", uz: "Og'ir material" },
        { en: "Hazardous Materials", ru: "Опасные грузы", uz: "Xavfli yuklar" },
        { en: "High Altitude Material", ru: "Высокогорный материал", uz: "Yuqori balandlikdagi material" },
        { en: "Hasty Maintenance", ru: "Спешное обслуживание", uz: "Shoshilinch texnik xizmat" }
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      text: { en: "What is 'OOS'?", ru: "Что такое 'OOS'?", uz: "'OOS' nima?" },
      options: [
        { en: "Out Of Service", ru: "Вне службы (запрет на движение)", uz: "Xizmatdan tashqari (harakatlanish taqiqlangan)" },
        { en: "On Operating Schedule", ru: "По графику работы", uz: "Ish jadvali bo'yicha" },
        { en: "Over Operating Speed", ru: "Превышение рабочей скорости", uz: "Ish tezligidan yuqori" },
        { en: "Only One Shipper", ru: "Только один отправитель", uz: "Faqat bitta yuk jo'natuvchi" }
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      text: { en: "What is 'FMCSA'?", ru: "Что такое 'FMCSA'?", uz: "'FMCSA' nima?" },
      options: [
        { en: "Federal Motor Carrier Safety Administration", ru: "Федеральное управление безопасности автотранспортных средств", uz: "Federal avtotashuvchilar xavfsizligi boshqarmasi" },
        { en: "Freight Management and Cargo Safety Agency", ru: "Агентство по управлению грузоперевозками и безопасности грузов", uz: "Yuklarni boshqarish va yuk xavfsizligi agentligi" },
        { en: "Federal Marine and Cargo Safety Authority", ru: "Федеральное управление морской и грузовой безопасности", uz: "Federal dengiz va yuk xavfsizligi boshqarmasi" },
        { en: "Freight Movement and Carrier Safety Association", ru: "Ассоциация по перемещению грузов и безопасности перевозчиков", uz: "Yuklarni tashish va tashuvchilar xavfsizligi assotsiatsiyasi" }
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      text: { en: "What is a 'Blind Shipment'?", ru: "Что такое 'Слепая отгрузка'?", uz: "'Ko'r-ko'rona jo'natish' nima?" },
      options: [
        { en: "A shipment at night", ru: "Отгрузка ночью", uz: "Kechasi jo'natish" },
        { en: "A shipment where shipper and receiver don't know each other", ru: "Отгрузка, при которой отправитель и получатель не знают друг друга", uz: "Yuk jo'natuvchi va qabul qiluvchi bir-birini tanimaydigan jo'natma" },
        { en: "A shipment without a BOL", ru: "Отгрузка без BOL", uz: "BOLsiz jo'natish" },
        { en: "A shipment of fragile goods", ru: "Отгрузка хрупких товаров", uz: "Nozik tovarlarni jo'natish" }
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      text: { en: "What is 'Groupage'?", ru: "Что такое 'Групаж'?", uz: "'Grupaj' nima?" },
      options: [
        { en: "A group of drivers", ru: "Группа водителей", uz: "Haydovchilar guruhi" },
        { en: "Consolidating multiple small shipments into one load", ru: "Объединение нескольких небольших партий в один груз", uz: "Bir nechta kichik jo'natmalarni bitta yukka birlashtirish" },
        { en: "A type of truck engine", ru: "Тип двигателя грузовика", uz: "Yuk mashinasi dvigatelining turi" },
        { en: "A logistics meeting", ru: "Логистическое совещание", uz: "Logistika yig'ilishi" }
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      text: { en: "What is 'Reverse Logistics'?", ru: "Что такое 'Обратная логистика'?", uz: "'Teskari logistika' nima?" },
      options: [
        { en: "Driving backwards", ru: "Вождение задом", uz: "Orqaga haydash" },
        { en: "The process of moving goods from customer back to seller", ru: "Процесс перемещения товаров от покупателя обратно к продавцу", uz: "Tovarlarni xaridordan sotuvchiga qaytarish jarayoni" },
        { en: "Logistics in the southern hemisphere", ru: "Логистика в южном полушарии", uz: "Janubiy yarim shardagi logistika" },
        { en: "Buying goods from a customer", ru: "Покупка товаров у покупателя", uz: "Mijozdan tovar sotib olish" }
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      text: { en: "What is 'SCM'?", ru: "Что такое 'SCM'?", uz: "'SCM' nima?" },
      options: [
        { en: "Supply Chain Management", ru: "Управление цепочками поставок", uz: "Ta'minot zanjirini boshqarish" },
        { en: "Safety Compliance Monitor", ru: "Монитор соблюдения безопасности", uz: "Xavfsizlik muvofiqligi monitori" },
        { en: "Standard Cargo Manifest", ru: "Стандартный грузовой манифест", uz: "Standart yuk manifesti" },
        { en: "Shipping Cost Model", ru: "Модель стоимости доставки", uz: "Yetkazib berish narxi modeli" }
      ],
      correctAnswer: 0
    }
  ],
  6: [
    {
      id: 1,
      text: { en: "What is 'CSA' score?", ru: "Что такое оценка 'CSA'?", uz: "'CSA' balli nima?" },
      options: [
        { en: "Carrier Safety Analysis", ru: "Анализ безопасности перевозчика", uz: "Tashuvchi xavfsizligi tahlili" },
        { en: "Compliance, Safety, Accountability", ru: "Соблюдение требований, безопасность, подотчетность", uz: "Muvofiqlik, xavfsizlik, javobgarlik" },
        { en: "Cargo Safety Association", ru: "Ассоциация безопасности грузов", uz: "Yuk xavfsizligi assotsiatsiyasi" },
        { en: "Commercial Speed Assessment", ru: "Оценка коммерческой скорости", uz: "Tijorat tezligini baholash" }
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: { en: "What is 'IFTA'?", ru: "Что такое 'IFTA'?", uz: "'IFTA' nima?" },
      options: [
        { en: "International Fuel Tax Agreement", ru: "Международное соглашение по налогу на топливо", uz: "Yoqilg'i solig'i bo'yicha xalqaro shartnoma" },
        { en: "Interstate Freight Transport Association", ru: "Ассоциация грузоперевозок между штатами", uz: "Shtatlararo yuk tashish assotsiatsiyasi" },
        { en: "International Freight Tracking Agency", ru: "Международное агентство по отслеживанию грузов", uz: "Xalqaro yuklarni kuzatish agentligi" },
        { en: "Interstate Fuel Tracking Authority", ru: "Управление по отслеживанию топлива между штатами", uz: "Shtatlararo yoqilg'ini kuzatish boshqarmasi" }
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      text: { en: "What is 'IRP'?", ru: "Что такое 'IRP'?", uz: "'IRP' nima?" },
      options: [
        { en: "International Registration Plan", ru: "Международный план регистрации", uz: "Xalqaro ro'yxatga olish rejasi" },
        { en: "Interstate Route Planning", ru: "Планирование маршрутов между штатами", uz: "Shtatlararo yo'nalishni rejalashtirish" },
        { en: "Internal Repair Process", ru: "Внутренний процесс ремонта", uz: "Ichki ta'mirlash jarayoni" },
        { en: "Insurance Rate Program", ru: "Программа страховых тарифов", uz: "Sug'urta stavkalari dasturi" }
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      text: { en: "What is 'UCR'?", ru: "Что такое 'UCR'?", uz: "'UCR' nima?" },
      options: [
        { en: "Unified Carrier Registration", ru: "Единая регистрация перевозчиков", uz: "Yagona tashuvchilarni ro'yxatga olish" },
        { en: "Universal Cargo Receipt", ru: "Универсальная грузовая квитанция", uz: "Universal yuk kvitansiyasi" },
        { en: "United Compliance Review", ru: "Объединенный обзор соответствия", uz: "Birlashgan muvofiqlik sharhi" },
        { en: "Under Capacity Rate", ru: "Ставка ниже мощности", uz: "Quvvatdan past stavka" }
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      text: { en: "What is 'GVM'?", ru: "Что такое 'GVM'?", uz: "'GVM' nima?" },
      options: [
        { en: "Gross Vehicle Mass", ru: "Полная масса автомобиля", uz: "Avtomobilning umumiy massasi" },
        { en: "General Vehicle Maintenance", ru: "Общее обслуживание автомобиля", uz: "Avtomobilga umumiy xizmat ko'rsatish" },
        { en: "Global Vehicle Monitor", ru: "Глобальный монитор автомобиля", uz: "Global avtomobil monitori" },
        { en: "Gross Value Management", ru: "Управление валовой стоимостью", uz: "Yalpi qiymatni boshqarish" }
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      text: { en: "What is 'WMS'?", ru: "Что такое 'WMS'?", uz: "'WMS' nima?" },
      options: [
        { en: "Warehouse Management System", ru: "Система управления складом", uz: "Omborni boshqarish tizimi" },
        { en: "Weight Monitoring System", ru: "Система мониторинга веса", uz: "Vaznni monitoring qilish tizimi" },
        { en: "Weather Monitoring Station", ru: "Станция мониторинга погоды", uz: "Ob-havo monitoringi stantsiyasi" },
        { en: "Weekly Manifest Summary", ru: "Еженедельная сводка манифеста", uz: "Haftalik manifest xulosasi" }
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      text: { en: "What is 'TMS'?", ru: "Что такое 'TMS'?", uz: "'TMS' nima?" },
      options: [
        { en: "Transportation Management System", ru: "Система управления транспортом", uz: "Transportni boshqarish tizimi" },
        { en: "Truck Maintenance Schedule", ru: "График обслуживания грузовиков", uz: "Yuk mashinalariga texnik xizmat ko'rsatish jadvali" },
        { en: "Total Mileage Summary", ru: "Сводка общего пробега", uz: "Umumiy masofa xulosasi" },
        { en: "Traffic Management Service", ru: "Служба управления трафиком", uz: "Trafikni boshqarish xizmati" }
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      text: { en: "What is 'RFID'?", ru: "Что такое 'RFID'?", uz: "'RFID' nima?" },
      options: [
        { en: "Radio Frequency Identification", ru: "Радиочастотная идентификация", uz: "Radiochastotali identifikatsiya" },
        { en: "Rapid Freight Information Data", ru: "Данные быстрой информации о грузе", uz: "Tezkor yuk ma'lumotlari" },
        { en: "Remote Fuel Injection Device", ru: "Устройство дистанционного впрыска топлива", uz: "Masofaviy yoqilg'i quyish moslamasi" },
        { en: "Road Freight Insurance Document", ru: "Документ о страховании дорожных грузов", uz: "Avtomobil yuklarini sug'urtalash hujjati" }
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      text: { en: "What is 'EDI'?", ru: "Что такое 'EDI'?", uz: "'EDI' nima?" },
      options: [
        { en: "Electronic Data Interchange", ru: "Электронный обмен данными", uz: "Elektron ma'lumotlar almashinuvi" },
        { en: "Engine Data Interface", ru: "Интерфейс данных двигателя", uz: "Dvigatel ma'lumotlari interfeysi" },
        { en: "Emergency Delivery Information", ru: "Информация о экстренной доставке", uz: "Favqulodda yetkazib berish ma'lumotlari" },
        { en: "Electronic Driver Identification", ru: "Электронная идентификация водителя", uz: "Elektron haydovchi identifikatsiyasi" }
      ],
      correctAnswer: 0
    },
    {
      id: 10,
      text: { en: "What is 'POD'?", ru: "Что такое 'POD'?", uz: "'POD' nima?" },
      options: [
        { en: "Proof Of Delivery", ru: "Подтверждение доставки", uz: "Yetkazib berishni tasdiqlash" },
        { en: "Point Of Distribution", ru: "Точка распределения", uz: "Tarqatish nuqtasi" },
        { en: "Port Of Departure", ru: "Порт отправления", uz: "Jo'nash porti" },
        { en: "Payment On Delivery", ru: "Оплата при доставке", uz: "Yetkazib berilganda to'lash" }
      ],
      correctAnswer: 0
    }
  ]
};
