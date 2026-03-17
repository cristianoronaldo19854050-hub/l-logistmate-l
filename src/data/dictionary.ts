
export interface DictionaryItem {
  en: string;
  ru: string;
  uz: string;
  desc: {
    en: string;
    ru: string;
    uz: string;
  };
}

export const TERMS: DictionaryItem[] = [
  {
    en: 'Bill of Lading (BOL)',
    ru: 'Коносамент',
    uz: 'Konosament',
    desc: {
      en: 'A legal document between a shipper and a carrier that details the type, quantity, and destination of the goods being carried.',
      ru: 'Юридический документ между грузоотправителем и перевозчиком, в котором подробно указываются тип, количество и пункт назначения перевозимых грузов.',
      uz: 'Yuk jo\'natuvchi va tashuvchi o\'rtasidagi huquqiy hujjat bo\'lib, unda tashilayotgan yuklarning turi, miqdori va boradigan manzili ko\'rsatilgan.'
    }
  },
  {
    en: 'Incoterms',
    ru: 'Инкотермс',
    uz: 'Inkoterms',
    desc: {
      en: 'International commercial terms that define the responsibilities of buyers and sellers in international trade.',
      ru: 'Международные коммерческие условия, определяющие обязанности покупателей и продавцов в международной торговле.',
      uz: 'Xalqaro savdoda xaridor va sotuvchilarning majburiyatlarini belgilaydigan xalqaro tijorat shartlari.'
    }
  },
  {
    en: 'Freight Forwarder',
    ru: 'Экспедитор',
    uz: 'Ekspeditor',
    desc: {
      en: 'A company that organizes shipments for individuals or corporations to get goods from the manufacturer to a market, customer, or final point of distribution.',
      ru: 'Компания, которая организует перевозки для частных лиц или корпораций с целью доставки товаров от производителя на рынок, клиенту или в конечный пункт распределения.',
      uz: 'Tovarlarni ishlab chiqaruvchidan bozorga, mijozga yoki yakuniy tarqatish punktiga yetkazish uchun jismoniy shaxslar yoki korporatsiyalar uchun yuk tashishni tashkil etuvchi kompaniya.'
    }
  },
  {
    en: 'Last Mile',
    ru: 'Последняя миля',
    uz: 'Oxirgi mil',
    desc: {
      en: 'The final step of the delivery process from a distribution center or facility to the end user.',
      ru: 'Заключительный этап процесса доставки от распределительного центра или объекта до конечного пользователя.',
      uz: 'Tarqatish markazi yoki ob\'ektdan oxirgi foydalanuvchiga yetkazib berish jarayonining yakuniy bosqichi.'
    }
  },
  {
    en: 'Cross-docking',
    ru: 'Кросс-докинг',
    uz: 'Kross-doking',
    desc: {
      en: 'A logistics procedure where products from a supplier or manufacturing plant are distributed directly to a customer or retail chain with marginal to no handling or storage time.',
      ru: 'Логистическая процедура, при которой продукция от поставщика или производственного предприятия распределяется напрямую клиенту или розничной сети с минимальным временем обработки или хранения или без него.',
      uz: 'Yetkazib beruvchi yoki ishlab chiqarish korxonasidan mahsulotlar to\'g\'ridan-to\'g\'ri mijozga yoki chakana savdo tarmog\'iga minimal ishlov berish yoki saqlash vaqti bilan yoki usiz tarqatiladigan logistika jarayoni.'
    }
  },
  {
    en: 'TEU (Twenty-foot Equivalent Unit)',
    ru: 'ДФЭ (Двадцатифутовый эквивалент)',
    uz: 'TEU (Yigirma futlik ekvivalent birligi)',
    desc: {
      en: 'An inexact unit of cargo capacity often used to describe the capacity of container ships and container terminals.',
      ru: 'Неточная единица грузоподъемности, часто используемая для описания вместимости контейнеровозов и контейнерных терминалов.',
      uz: 'Konteyner kemalari va konteyner terminallarining sig\'imini tavsiflash uchun tez-tez ishlatiladigan yuk sig\'imining noaniq birligi.'
    }
  },
  {
    en: 'Intermodal Transport',
    ru: 'Интермодальные перевозки',
    uz: 'Intermodal tashish',
    desc: {
      en: 'The movement of cargo from origin to destination by several modes of transport where the cargo itself is not handled when changing modes.',
      ru: 'Перемещение груза из пункта отправления в пункт назначения несколькими видами транспорта, при котором сам груз не обрабатывается при смене видов транспорта.',
      uz: 'Yukni kelib chiqish joyidan belgilangan joyga bir nechta transport turlari orqali ko\'chirish, bunda transport turlari o\'zgarganda yukning o\'zi qayta ishlanmaydi.'
    }
  },
  {
    en: 'LCL (Less than Container Load)',
    ru: 'LCL (Меньше чем загрузка контейнера)',
    uz: 'LCL (Konteyner yukidan kam)',
    desc: {
      en: 'A shipment that is not large enough to fill a standard cargo container.',
      ru: 'Груз, размер которого недостаточно велик, чтобы заполнить стандартный грузовой контейнер.',
      uz: 'Standart yuk konteynerini to\'ldirish uchun etarli darajada katta bo\'lmagan yuk.'
    }
  },
  {
    en: 'FCL (Full Container Load)',
    ru: 'FCL (Полная загрузка контейнера)',
    uz: 'FCL (To\'liq konteyner yuki)',
    desc: {
      en: 'A shipment that occupies the entire space of a container.',
      ru: 'Груз, занимающий все пространство контейнера.',
      uz: 'Konteynerning butun maydonini egallagan yuk.'
    }
  },
  {
    en: 'Deadhead',
    ru: 'Порожний пробег',
    uz: 'Bo\'sh yurish',
    desc: {
      en: 'The movement of a commercial vehicle without any cargo, typically on the return trip.',
      ru: 'Движение коммерческого автомобиля без груза, обычно на обратном пути.',
      uz: 'Tijorat transport vositasining yuksiz harakati, odatda qaytish safarida.'
    }
  },
  {
    en: 'Consignee',
    ru: 'Грузополучатель',
    uz: 'Yuk qabul qiluvchi',
    desc: {
      en: 'The person or entity to whom a shipment is being delivered.',
      ru: 'Лицо или организация, которой доставляется груз.',
      uz: 'Yuk yetkazib beriladigan shaxs yoki tashkilot.'
    }
  },
  {
    en: 'Consignor',
    ru: 'Грузоотправитель',
    uz: 'Yuk jo\'natuvchi',
    desc: {
      en: 'The person or entity that sends a shipment.',
      ru: 'Лицо или организация, отправляющая груз.',
      uz: 'Yukni jo\'natuvchi shaxs yoki tashkilot.'
    }
  },
  {
    en: 'Drayage',
    ru: 'Дрейдж',
    uz: 'Dreydj',
    desc: {
      en: 'The transport of goods over a short distance, often as part of a longer journey, such as from a port to a warehouse.',
      ru: 'Транспортировка грузов на короткое расстояние, часто как часть более длительного пути, например, из порта на склад.',
      uz: 'Yuklarni qisqa masofaga tashish, ko\'pincha uzoqroq sayohatning bir qismi sifatida, masalan, portdan omborga.'
    }
  },
  {
    en: 'ELD (Electronic Logging Device)',
    ru: 'Электронное устройство регистрации (ELD)',
    uz: 'Elektron jurnal qurilmasi (ELD)',
    desc: {
      en: 'Technology used by commercial vehicle operators to automatically record driving time and Hours of Service (HOS) records.',
      ru: 'Технология, используемая операторами коммерческих автомобилей для автоматической записи времени вождения и записей о часах работы (HOS).',
      uz: 'Tijorat transport vositalari operatorlari tomonidan haydash vaqtini va xizmat ko\'rsatish soatlarini (HOS) avtomatik ravishda yozib olish uchun foydalaniladigan texnologiya.'
    }
  },
  {
    en: 'Freight Class',
    ru: 'Класс груза',
    uz: 'Yuk klassi',
    desc: {
      en: 'A standardized classification system used to determine the shipping cost of LTL freight based on density, stowability, handling, and liability.',
      ru: 'Стандартизированная система классификации, используемая для определения стоимости доставки грузов LTL на основе плотности, возможности укладки, обработки и ответственности.',
      uz: 'Zichlik, saqlash qobiliyati, ishlov berish va javobgarlikka asoslangan LTL yuklarini tashish narxini aniqlash uchun ishlatiladigan standartlashtirilgan tasniflash tizimi.'
    }
  },
  {
    en: 'Accessorials',
    ru: 'Дополнительные услуги',
    uz: 'Qo\'shimcha xizmatlar',
    desc: {
      en: 'Additional services performed by a carrier beyond standard pickup and delivery, such as inside delivery, liftgate service, or detention.',
      ru: 'Дополнительные услуги, выполняемые перевозчиком помимо стандартного забора и доставки, такие как доставка внутрь помещения, услуги гидроборта или простой.',
      uz: 'Tashuvchi tomonidan standart yuk olish va yetkazib berishdan tashqari amalga oshiriladigan qo\'shimcha xizmatlar, masalan, bino ichiga yetkazib berish, gidrobort xizmati yoki kutib qolish.'
    }
  },
  {
    en: 'Authority',
    ru: 'Полномочия (MC Authority)',
    uz: 'Vakolat (MC Authority)',
    desc: {
      en: 'The legal right granted by the FMCSA to a motor carrier to transport goods for hire.',
      ru: 'Юридическое право, предоставленное FMCSA автоперевозчику на перевозку грузов по найму.',
      uz: 'FMCSA tomonidan avtotashuvchiga yuklarni haq evaziga tashish uchun berilgan qonuniy huquq.'
    }
  },
  {
    en: 'Bobtail',
    ru: 'Бобтейл (Тягач без прицепа)',
    uz: 'Bobtail (Tirkamasiz tyagach)',
    desc: {
      en: 'A tractor operating without a trailer attached.',
      ru: 'Тягач, работающий без прицепа.',
      uz: 'Tirkamasiz ishlayotgan tyagach.'
    }
  },
  {
    en: 'Broker',
    ru: 'Брокер',
    uz: 'Broker',
    desc: {
      en: 'An intermediary who matches shippers with transportation carriers but does not own the trucks.',
      ru: 'Посредник, который подбирает перевозчиков для грузоотправителей, но не владеет грузовиками.',
      uz: 'Yuk jo\'natuvchilarni tashuvchilar bilan moslashtiradigan, lekin yuk mashinalariga ega bo\'lmagan vositachi.'
    }
  },
  {
    en: 'CDL (Commercial Driver’s License)',
    ru: 'CDL (Коммерческие права)',
    uz: 'CDL (Tijorat haydovchilik guvohnomasi)',
    desc: {
      en: 'A driver\'s license required to operate large, heavy, or placarded hazardous material vehicles.',
      ru: 'Водительское удостоверение, необходимое для управления крупными, тяжелыми или перевозящими опасные грузы транспортными средствами.',
      uz: 'Katta, og\'ir yoki xavfli yuk belgisi bo\'lgan transport vositalarini boshqarish uchun talab qilinadigan haydovchilik guvohnomasi.'
    }
  },
  {
    en: 'Detention',
    ru: 'Детеншн (Простой)',
    uz: 'Detenshn (Kutib qolish)',
    desc: {
      en: 'A fee charged by a carrier when a driver is delayed at a shipper or consignee beyond the allotted free time.',
      ru: 'Плата, взимаемая перевозчиком, когда водитель задерживается у грузоотправителя или грузополучателя сверх отведенного бесплатного времени.',
      uz: 'Haydovchi yuk jo\'natuvchi yoki qabul qiluvchi joyida ajratilgan bepul vaqtdan ortiq ushlanib qolganda tashuvchi tomonidan olinadigan to\'lov.'
    }
  },
  {
    en: 'Dispatcher',
    ru: 'Диспетчер',
    uz: 'Dispetcher',
    desc: {
      en: 'A person who coordinates the movement of trucks and freight, communicates with drivers, and manages schedules.',
      ru: 'Человек, который координирует движение грузовиков и грузов, общается с водителями и управляет графиками.',
      uz: 'Yuk mashinalari va yuklarning harakatini muvofiqlashtiradigan, haydovchilar bilan muloqot qiladigan va jadvallarni boshqaradigan shaxs.'
    }
  },
  {
    en: 'Dry Van',
    ru: 'Сухой фургон',
    uz: 'Quruq furgon',
    desc: {
      en: 'A standard, enclosed non-refrigerated trailer used to protect freight from the elements.',
      ru: 'Стандартный закрытый нерефрижераторный прицеп, используемый для защиты груза от атмосферных воздействий.',
      uz: 'Yukni tashqi ta\'sirlardan himoya qilish uchun ishlatiladigan standart, yopiq, sovutkichsiz tirkama.'
    }
  },
  {
    en: 'ETA (Estimated Time of Arrival)',
    ru: 'Ожидаемое время прибытия',
    uz: 'Taxminiy yetib kelish vaqti',
    desc: {
      en: 'The approximate time a shipment is expected to arrive at its destination.',
      ru: 'Приблизительное время, когда груз должен прибыть в пункт назначения.',
      uz: 'Yukning belgilangan manzilga yetib borishi kutilayotgan taxminiy vaqt.'
    }
  },
  {
    en: 'Flatbed',
    ru: 'Флэтбед (Бортовая платформа)',
    uz: 'Flatbed (Ochiq platforma)',
    desc: {
      en: 'An open trailer with no sides or roof, used for hauling oversized or odd-shaped freight.',
      ru: 'Открытый прицеп без бортов и крыши, используемый для перевозки негабаритных или нестандартных грузов.',
      uz: 'Yon tomonlari va tomi bo\'lmagan ochiq tirkama, katta hajmli yoki g\'ayrioddiy shakldagi yuklarni tashish uchun ishlatiladi.'
    }
  },
  {
    en: 'Freight',
    ru: 'Груз (Фрахт)',
    uz: 'Yuk (Frayt)',
    desc: {
      en: 'Goods or produce being transported by truck, train, ship, or aircraft.',
      ru: 'Товары или продукция, перевозимые грузовиком, поездом, кораблем или самолетом.',
      uz: 'Yuk mashinasi, poezd, kema yoki samolyotda tashiladigan tovarlar yoki mahsulotlar.'
    }
  },
  {
    en: 'Hazmat',
    ru: 'Опасные грузы',
    uz: 'Xavfli yuklar',
    desc: {
      en: 'Short for Hazardous Materials; substances that pose a risk to health, safety, or property during transport.',
      ru: 'Сокращение от Hazardous Materials; вещества, представляющие риск для здоровья, безопасности или имущества во время транспортировки.',
      uz: 'Hazardous Materials (Xavfli materiallar) so\'zining qisqartmasi; tashish paytida sog\'liq, xavfsizlik yoki mulkka xavf tug\'diradigan moddalar.'
    }
  },
  {
    en: 'Hot Load',
    ru: 'Срочный груз',
    uz: 'Shoshilinch yuk',
    desc: {
      en: 'A shipment that is time-sensitive and needs to be delivered as quickly as possible.',
      ru: 'Груз, чувствительный ко времени, который необходимо доставить как можно быстрее.',
      uz: 'Vaqtga sezgir va iloji boricha tezroq yetkazib berilishi kerak bo\'lgan yuk.'
    }
  },
  {
    en: 'HOS (Hours of Service)',
    ru: 'Часы работы (HOS)',
    uz: 'Ish soatlari (HOS)',
    desc: {
      en: 'Safety regulations governing how long commercial drivers can be on duty and behind the wheel.',
      ru: 'Правила безопасности, регулирующие, как долго коммерческие водители могут находиться на дежурстве и за рулем.',
      uz: 'Tijorat haydovchilari qancha vaqt navbatchilikda va rulda bo\'lishi mumkinligini tartibga soluvchi xavfsizlik qoidalari.'
    }
  },
  {
    en: 'Reefer',
    ru: 'Рефрижератор',
    uz: 'Refrijerator',
    desc: {
      en: 'A refrigerated trailer used to transport temperature-sensitive goods like food or pharmaceuticals.',
      ru: 'Рефрижераторный прицеп, используемый для перевозки чувствительных к температуре товаров, таких как продукты питания или лекарства.',
      uz: 'Oziq-ovqat yoki farmatsevtika kabi haroratga sezgir tovarlarni tashish uchun ishlatiladigan sovutkichli tirkama.'
    }
  },
  {
    en: 'Rate Confirmation',
    ru: 'Подтверждение ставки',
    uz: 'Stavka tasdig\'i',
    desc: {
      en: 'A document that confirms the agreed-upon price for a specific load between a broker and a carrier.',
      ru: 'Документ, подтверждающий согласованную цену за конкретный груз между брокером и перевозчиком.',
      uz: 'Broker va tashuvchi o\'rtasidagi ma\'lum bir yuk uchun kelishilgan narxni tasdiqlovchi hujjat.'
    }
  },
  {
    en: 'TONU (Truck Ordered Not Used)',
    ru: 'TONU (Грузовик заказан, но не использован)',
    uz: 'TONU (Yuk mashinasi buyurtma qilingan, lekin ishlatilmagan)',
    desc: {
      en: 'A fee paid to a carrier when a load is cancelled after the truck has already been dispatched or arrived.',
      ru: 'Плата, выплачиваемая перевозчику, когда заказ отменяется после того, как грузовик уже был отправлен или прибыл.',
      uz: 'Yuk mashinasi yuborilganidan yoki yetib kelganidan keyin yuk bekor qilinganda tashuvchiga to\'lanadigan haq.'
    }
  },
  {
    en: 'Lumper',
    ru: 'Лампер (Грузчик)',
    uz: 'Lamper (Yuk tushiruvchi)',
    desc: {
      en: 'A third-party laborer hired to load or unload a trailer at a warehouse.',
      ru: 'Сторонний рабочий, нанятый для погрузки или разгрузки прицепа на складе.',
      uz: 'Omborda tirkamani yuklash yoki tushirish uchun yollangan uchinchi tomon ishchisi.'
    }
  },
  {
    en: 'Drop and Hook',
    ru: 'Дроп-энд-хук',
    uz: 'Drop and Hook',
    desc: {
      en: 'A process where a driver drops a loaded trailer at a facility and hooks up to another trailer immediately.',
      ru: 'Процесс, при котором водитель оставляет груженый прицеп на объекте и сразу же цепляет другой прицеп.',
      uz: 'Haydovchi muassasada yuklangan tirkamani qoldirib, darhol boshqa tirkamani ulaydigan jarayon.'
    }
  },
  {
    en: 'Dunnage',
    ru: 'Даннаж (Крепеж)',
    uz: 'Dannaj (Mahkamlash)',
    desc: {
      en: 'Materials like wood blocks, planks, or inflatable bags used to secure and protect cargo during transport.',
      ru: 'Материалы, такие как деревянные блоки, доски или надувные мешки, используемые для закрепления и защиты груза во время транспортировки.',
      uz: 'Tashish paytida yukni mahkamlash va himoya qilish uchun ishlatiladigan yog\'och bloklar, taxtalar yoki shishiriladigan qoplar kabi materiallar.'
    }
  },
  {
    en: 'Axle Load',
    ru: 'Осевая нагрузка',
    uz: 'O\'q yuki',
    desc: {
      en: 'The amount of weight carried by a single axle of a vehicle.',
      ru: 'Вес, приходящийся на одну ось транспортного средства.',
      uz: 'Transport vositasining bitta o\'qiga to\'g\'ri keladigan og\'irlik miqdori.'
    }
  },
  {
    en: 'Blind Shipment',
    ru: 'Слепая отгрузка',
    uz: 'Ko\'r-ko\'rona jo\'natish',
    desc: {
      en: 'A shipment where the identity of the shipper, consignee, or both is kept secret from each other.',
      ru: 'Отгрузка, при которой личности грузоотправителя, грузополучателя или обоих скрыты друг от друга.',
      uz: 'Yuk jo\'natuvchi, qabul qiluvchi yoki ikkalasining shaxsi bir-biridan sir tutiladigan jo\'natma.'
    }
  },
  {
    en: 'Chassis',
    ru: 'Шасси',
    uz: 'Shassi',
    desc: {
      en: 'A specialized frame with wheels used to transport shipping containers over land.',
      ru: 'Специализированная рама с колесами, используемая для транспортировки морских контейнеров по суше.',
      uz: 'Dengiz konteynerlarini quruqlikda tashish uchun ishlatiladigan g\'ildirakli maxsus ramka.'
    }
  },
  {
    en: 'Claim',
    ru: 'Претензия (Рекламация)',
    uz: 'Da\'vo (E\'tiroz)',
    desc: {
      en: 'A legal demand for financial compensation due to loss or damage of freight.',
      ru: 'Юридическое требование финансовой компенсации в связи с потерей или повреждением груза.',
      uz: 'Yukning yo\'qolishi yoki shikastlanishi munosabati bilan moliyaviy tovon undirish haqidagi qonuniy talab.'
    }
  },
  {
    en: 'Commodity',
    ru: 'Товар (Груз)',
    uz: 'Tovar (Yuk)',
    desc: {
      en: 'The type of goods being transported.',
      ru: 'Тип перевозимых товаров.',
      uz: 'Tashilayotgan tovarlar turi.'
    }
  },
  {
    en: 'Cube Out',
    ru: 'Заполнение объема',
    uz: 'Hajmni to\'ldirish',
    desc: {
      en: 'When a trailer is filled to its volumetric capacity before reaching its weight limit.',
      ru: 'Когда прицеп заполняется до своего объемного предела до достижения предела веса.',
      uz: 'Tirkama vazn chegarasiga yetmasdan oldin o\'zining hajmiy sig\'imiga qadar to\'lganda.'
    }
  },
  {
    en: 'Density',
    ru: 'Плотность',
    uz: 'Zichlik',
    desc: {
      en: 'The weight of a shipment divided by its volume, used to determine freight class.',
      ru: 'Вес груза, деленный на его объем, используется для определения класса груза.',
      uz: 'Yukning og\'irligi uning hajmiga bo\'lingan holda, yuk klassini aniqlash uchun ishlatiladi.'
    }
  },
  {
    en: 'Embargo',
    ru: 'Эмбарго',
    uz: 'Embargo',
    desc: {
      en: 'A temporary prohibition on the movement of freight to a specific destination or by a specific carrier.',
      ru: 'Временный запрет на перемещение грузов в определенный пункт назначения или определенным перевозчиком.',
      uz: 'Yuklarni ma\'lum bir manzilga yoki ma\'lum bir tashuvchi tomonidan ko\'chirishni vaqtincha taqiqlash.'
    }
  },
  {
    en: 'Expedited',
    ru: 'Ускоренная доставка',
    uz: 'Tezkor yetkazib berish',
    desc: {
      en: 'A premium shipping service that guarantees faster-than-normal delivery times.',
      ru: 'Премиальная услуга доставки, гарантирующая более быстрые сроки, чем обычно.',
      uz: 'Odatdagidan tezroq yetkazib berish muddatini kafolatlaydigan premium yuk tashish xizmati.'
    }
  },
  {
    en: 'Fifth Wheel',
    ru: 'Седельно-сцепное устройство',
    uz: 'Egarli-ulash moslamasi',
    desc: {
      en: 'The coupling device on a tractor used to connect to a semi-trailer.',
      ru: 'Сцепное устройство на тягаче, используемое для соединения с полуприцепом.',
      uz: 'Yarim tirkamaga ulanish uchun ishlatiladigan tyagachdagi ulash moslamasi.'
    }
  },
  {
    en: 'Linehaul',
    ru: 'Магистральная перевозка',
    uz: 'Magistral tashish',
    desc: {
      en: 'The movement of freight between cities or terminals, excluding pickup and delivery.',
      ru: 'Перемещение грузов между городами или терминалами, исключая забор и доставку.',
      uz: 'Yuklarni shaharlar yoki terminallar o\'rtasidako\'chirish, yukni olish va yetkazib berishdan tashqari.'
    }
  },
  {
    en: 'Load Board',
    ru: 'Биржа грузов',
    uz: 'Yuk birjasi',
    desc: {
      en: 'An online marketplace where shippers and brokers post loads for carriers to find.',
      ru: 'Онлайн-площадка, где грузоотправители и брокеры размещают грузы для поиска перевозчиками.',
      uz: 'Yuk jo\'natuvchilar va brokerlar tashuvchilar topishi uchun yuklarni joylashtiradigan onlayn bozor.'
    }
  },
  {
    en: 'Manifest',
    ru: 'Манифест',
    uz: 'Manifest',
    desc: {
      en: 'A comprehensive list of all cargo on a vehicle, including details for each shipment.',
      ru: 'Полный список всех грузов в транспортном средстве, включая детали по каждой отправке.',
      uz: 'Transport vositasidagi barcha yuklarning to\'liq ro\'yxati, har bir jo\'natma uchun tafsilotlarni o\'z ichiga oladi.'
    }
  },
  {
    en: 'Net Weight',
    ru: 'Вес нетто',
    uz: 'Netto vazni',
    desc: {
      en: 'The weight of the goods alone, excluding packaging or the vehicle.',
      ru: 'Вес только товаров, без учета упаковки или транспортного средства.',
      uz: 'Faqat tovarlarning og\'irligi, qadoqlash yoki transport vositasini hisobga olmaganda.'
    }
  },
  {
    en: 'Over-the-Road (OTR)',
    ru: 'Дальние перевозки',
    uz: 'Uzoq masofali tashishlar',
    desc: {
      en: 'Long-distance trucking that often involves drivers staying away from home for several days or weeks.',
      ru: 'Дальние грузоперевозки, часто связанные с тем, что водители находятся вдали от дома в течение нескольких дней или недель.',
      uz: 'Ko\'pincha haydovchilarning bir necha kun yoki hafta davomida uydan uzoqda bo\'lishini o\'z ichiga oladigan uzoq masofali yuk tashish.'
    }
  },
  {
    en: 'Pallet Jack',
    ru: 'Гидравлическая тележка (Рохля)',
    uz: 'Gidravlik arava (Roxlya)',
    desc: {
      en: 'A tool used to lift and move pallets within a warehouse or trailer.',
      ru: 'Инструмент, используемый для подъема и перемещения поддонов на складе или в прицепе.',
      uz: 'Ombor yoki tirkama ichida palletlarni ko\'tarish va ko\'chirish uchun ishlatiladigan asbob.'
    }
  },
  {
    en: 'Proof of Delivery (POD)',
    ru: 'Подтверждение доставки (POD)',
    uz: 'Yetkazib berish tasdig\'i (POD)',
    desc: {
      en: 'A document signed by the consignee confirming that the shipment was received in good condition.',
      ru: 'Документ, подписанный грузополучателем, подтверждающий, что груз был получен в хорошем состоянии.',
      uz: 'Yuk qabul qiluvchi tomonidan imzolangan, yukning yaxshi holatda qabul qilinganligini tasdiqlovchi hujjat.'
    }
  },
  {
    en: 'Relay',
    ru: 'Эстафета',
    uz: 'Estafeta',
    desc: {
      en: 'A system where one driver hands off a trailer to another driver to keep the freight moving without the first driver exceeding HOS limits.',
      ru: 'Система, при которой один водитель передает прицеп другому, чтобы груз продолжал движение без нарушения первым водителем норм HOS.',
      uz: 'Yukning harakatlanishini davom ettirish uchun bir haydovchi tirkamani boshqa haydovchi topshiradigan tizim, bunda birinchi haydovchi HOS me\'yorlarini buzmaydi.'
    }
  },
  {
    en: 'Seal',
    ru: 'Пломба',
    uz: 'Plomba',
    desc: {
      en: 'A numbered plastic or metal device placed on trailer doors to prevent and detect unauthorized access.',
      ru: 'Пронумерованное пластиковое или металлическое устройство, помещаемое на двери прицепа для предотвращения и обнаружения несанкционированного доступа.',
      uz: 'Ruxsatsiz kirishni oldini olish va aniqlash uchun tirkama eshiklariga o\'rnatiladigan raqamlangan plastik yoki metall moslama.'
    }
  },
  {
    en: 'Step Deck',
    ru: 'Степ-дек (Прицеп с заниженной платформой)',
    uz: 'Step-dek (Past platformali tirkama)',
    desc: {
      en: 'A trailer with a lower deck height designed to carry taller loads that would exceed height limits on a standard flatbed.',
      ru: 'Прицеп с меньшей высотой платформы, предназначенный для перевозки более высоких грузов, которые превысили бы лимиты высоты на стандартном флэтбеде.',
      uz: 'Standart flatbedda balandlik chegarasidan oshib ketadigan balandroq yuklarni tashish uchun mo\'ljallangan, platforma balandligi pastroq bo\'lgan tirkama.'
    }
  },
  {
    en: 'Accessorial Charges',
    ru: 'Дополнительные сборы',
    uz: 'Qo\'shimcha to\'lovlar',
    desc: {
      en: 'Fees for services that go beyond standard pickup and delivery.',
      ru: 'Сборы за услуги, выходящие за рамки стандартного забора и доставки.',
      uz: 'Standart yuk olish va yetkazib berishdan tashqari xizmatlar uchun to\'lovlar.'
    }
  },
  {
    en: 'Air Freight',
    ru: 'Авиаперевозки',
    uz: 'Aviayuk tashish',
    desc: {
      en: 'The transportation of goods by aircraft.',
      ru: 'Транспортировка грузов самолетом.',
      uz: 'Yuklarni samolyotda tashish.'
    }
  },
  {
    en: 'All-In Rate',
    ru: 'Все включено (Тариф)',
    uz: 'Hammasi ichida (Tarif)',
    desc: {
      en: 'A shipping rate that includes all costs, such as fuel surcharges and accessorials.',
      ru: 'Тариф на доставку, включающий все расходы, такие как топливные надбавки и дополнительные услуги.',
      uz: 'Yoqilg\'i ustamalari va qo\'shimcha xizmatlar kabi barcha xarajatlarni o\'z ichiga olgan yuk tashish tarifi.'
    }
  },
  {
    en: 'Cargo Claim',
    ru: 'Претензия по грузу',
    uz: 'Yuk bo\'yicha da\'vo',
    desc: {
      en: 'A demand for compensation due to loss or damage of freight.',
      ru: 'Требование компенсации в связи с потерей или повреждением груза.',
      uz: 'Yukning yo\'qolishi yoki shikastlanishi munosabati bilan tovon undirish talabi.'
    }
  }
];

export const GLOSSARY: DictionaryItem[] = [
  {
    en: '3PL (Third-Party Logistics)',
    ru: '3PL (Сторонняя логистика)',
    uz: '3PL (Uchinchi tomon logistikasi)',
    desc: {
      en: 'Outsourcing ecommerce logistics processes to a third-party business, including inventory management, warehousing, and fulfillment.',
      ru: 'Аутсорсинг логистических процессов электронной коммерции сторонней компании, включая управление запасами, складирование и выполнение заказов.',
      uz: 'Elektron tijorat logistika jarayonlarini uchinchi tomon biznesiga autsorsing qilish, jumladan inventarni boshqarish, omborga joylashtirish va buyurtmalarni bajarish.'
    }
  },
  {
    en: 'Backhaul',
    ru: 'Обратный рейс',
    uz: 'Qaytish reysi',
    desc: {
      en: 'The return trip of a commercial vehicle that is transporting cargo back to its point of origin.',
      ru: 'Обратный путь коммерческого автомобиля, который перевозит груз обратно в пункт отправления.',
      uz: 'Yukni kelib chiqqan joyiga qaytarib olib ketayotgan tijorat transport vositasining qaytish safari.'
    }
  },
  {
    en: 'Carrier',
    ru: 'Перевозчик',
    uz: 'Tashuvchi',
    desc: {
      en: 'A person or company that transports goods or people for any person or company and that is responsible for any possible loss of the goods during transport.',
      ru: 'Лицо или компания, которая перевозит товары или людей для любого лица или компании и несет ответственность за любую возможную потерю товаров во время транспортировки.',
      uz: 'Har qanday shaxs yoki kompaniya uchun tovarlar yoki odamlarni tashiydigan va tashish paytida tovarlarning har qanday yo\'qolishi uchun javobgar bo\'lgan shaxs yoki kompaniya.'
    }
  },
  {
    en: 'Customs Broker',
    ru: 'Таможенный брокер',
    uz: 'Bojxona brokeri',
    desc: {
      en: 'A professional who assists businesses in clearing goods through customs, ensuring compliance with laws and regulations.',
      ru: 'Профессионал, который помогает предприятиям оформлять товары через таможню, обеспечивая соблюдение законов и нормативных актов.',
      uz: 'Korxonalarga tovarlarni bojxonadan o\'tkazishda yordam beradigan, qonun va qoidalarga rioya qilinishini ta\'minlaydigan mutaxassis.'
    }
  },
  {
    en: 'Demurrage',
    ru: 'Демерредж',
    uz: 'Demerredj',
    desc: {
      en: 'A charge required as compensation for the delay of a ship or freight car beyond the time allowed for loading or unloading.',
      ru: 'Плата, требуемая в качестве компенсации за задержку судна или грузового вагона сверх времени, отведенного на погрузку или разгрузку.',
      uz: 'Kema yoki yuk vagonining yuklash yoki tushirish uchun ruxsat etilgan vaqtdan ortiq kechikishi uchun tovon sifatida talab qilinadigan to\'lov.'
    }
  },
  {
    en: 'Distribution Center',
    ru: 'Распределительный центр',
    uz: 'Tarqatish markazi',
    desc: {
      en: 'A specialized building which is stocked with products to be redistributed to retailers, to wholesalers, or directly to consumers.',
      ru: 'Специализированное здание, в котором хранятся товары для последующего перераспределения розничным торговцам, оптовикам или напрямую потребителям.',
      uz: 'Chakana sotuvchilarga, ulgurji sotuvchilarga yoki to\'g\'ridan-to\'g\'ri iste\'molchilarga qayta tarqatilishi kerak bo\'lgan mahsulotlar bilan to\'ldirilgan ixtisoslashtirilgan bino.'
    }
  },
  {
    en: 'FOB (Free On Board)',
    ru: 'FOB (Франко-борт)',
    uz: 'FOB (Bortda bepul)',
    desc: {
      en: 'A term used to indicate who is responsible for paying transportation charges and who has the title to the goods at any given point.',
      ru: 'Термин, используемый для обозначения того, кто несет ответственность за оплату транспортных расходов и кто имеет право собственности на товар в любой данный момент.',
      uz: 'Transport xarajatlarini to\'lash uchun kim javobgar ekanligini va har qanday vaqtda tovarlarga kim egalik qilishini ko\'rsatish uchun ishlatiladigan atama.'
    }
  },
  {
    en: 'Inventory Management',
    ru: 'Управление запасами',
    uz: 'Inventarni boshqarish',
    desc: {
      en: 'The process of ordering, storing, using, and selling a company\'s inventory.',
      ru: 'Процесс заказа, хранения, использования и продажи запасов компании.',
      uz: 'Kompaniya inventarlarini buyurtma qilish, saqlash, ishlatish va sotish jarayoni.'
    }
  },
  {
    en: 'Just-in-Time (JIT)',
    ru: 'Точно в срок (JIT)',
    uz: 'Aynan vaqtida (JIT)',
    desc: {
      en: 'An inventory management method in which goods are received from suppliers only as they are needed.',
      ru: 'Метод управления запасами, при котором товары поступают от поставщиков только по мере необходимости.',
      uz: 'Tovarlar etkazib beruvchilardan faqat kerak bo\'lganda olinadigan inventarni boshqarish usuli.'
    }
  },
  {
    en: 'KPI (Key Performance Indicator)',
    ru: 'KPI (Ключевой показатель эффективности)',
    uz: 'KPI (Asosiy samaradorlik ko\'rsatkichi)',
    desc: {
      en: 'A measurable value that demonstrates how effectively a company is achieving key business objectives.',
      ru: 'Измеряемая величина, которая демонстрирует, насколько эффективно компания достигает ключевых бизнес-целей.',
      uz: 'Kompaniya asosiy biznes maqsadlariga qanchalik samarali erishayotganini ko\'rsatadigan o\'lchanadigan qiymat.'
    }
  },
  {
    en: 'Lead Time',
    ru: 'Время выполнения',
    uz: 'Bajarilish vaqti',
    desc: {
      en: 'The amount of time that passes from the start of a process until its conclusion.',
      ru: 'Количество времени, которое проходит от начала процесса до его завершения.',
      uz: 'Jarayon boshlanganidan to uning yakunigacha o\'tadigan vaqt miqdori.'
    }
  },
  {
    en: 'Logistics',
    ru: 'Логистика',
    uz: 'Logistika',
    desc: {
      en: 'The detailed coordination of a complex operation involving many people, facilities, or supplies.',
      ru: 'Детальная координация сложной операции, в которой задействовано много людей, объектов или ресурсов.',
      uz: 'Ko\'p odamlar, ob\'ektlar yoki materiallarni o\'z ichiga olgan murakkab operatsiyani batafsil muvofiqlashtirish.'
    }
  },
  {
    en: 'Pallet',
    ru: 'Поддон (паллета)',
    uz: 'Pallet',
    desc: {
      en: 'A flat transport structure, which supports goods in a stable fashion while being lifted by a forklift, a pallet jack, a front loader, or another jacking device.',
      ru: 'Плоская транспортная конструкция, которая устойчиво поддерживает грузы при подъеме вилочным погрузчиком, гидравлической тележкой, фронтальным погрузчиком или другим подъемным устройством.',
      uz: 'Yassi transport strukturasi bo\'lib, u yuk ko\'targich, palletli domkrat, oldingi yuk ko\'targich yoki boshqa domkrat moslamasi bilan ko\'tarilayotganda yuklarni barqaror ravishda ushlab turadi.'
    }
  },
  {
    en: 'Reverse Logistics',
    ru: 'Обратная логистика',
    uz: 'Teskari logistika',
    desc: {
      en: 'The process of moving goods from their typical final destination for the purpose of capturing value, or proper disposal.',
      ru: 'Процесс перемещения товаров из их типичного конечного пункта назначения с целью извлечения стоимости или надлежащей утилизации.',
      uz: 'Qiymatni qo\'lga kiritish yoki to\'g\'ri yo\'q qilish maqsadida tovarlarni odatdagi yakuniy manzildan ko\'chirish jarayoni.'
    }
  },
  {
    en: 'Supply Chain',
    ru: 'Цепочка поставок',
    uz: 'Ta\'minot zanjiri',
    desc: {
      en: 'The sequence of processes involved in the production and distribution of a commodity.',
      ru: 'Последовательность процессов, участвующих в производстве и распределении товара.',
      uz: 'Tovarni ishlab chiqarish va tarqatish bilan bog\'liq jarayonlar ketma-ketligi.'
    }
  },
  {
    en: 'Axle',
    ru: 'Ось',
    uz: 'O\'q (Oksel)',
    desc: {
      en: 'A central shaft for a rotating wheel or gear. In trucking, weight limits are often calculated per axle.',
      ru: 'Центральный вал для вращающегося колеса или шестерни. В грузоперевозках ограничения по весу часто рассчитываются на ось.',
      uz: 'Aylanadigan g\'ildirak yoki tishli qurilma uchun markaziy mil. Yuk tashishda vazn cheklovlari ko\'pincha har bir o\'q uchun hisoblanadi.'
    }
  },
  {
    en: 'Bill of Sale',
    ru: 'Договор купли-продажи',
    uz: 'Oldi-sotdi shartnomasi',
    desc: {
      en: 'A document that transfers ownership of goods from one party to another.',
      ru: 'Документ, передающий право собственности на товары от одной стороны другой.',
      uz: 'Tovarlarga egalik huquqini bir tomondan ikkinchisiga o\'tkazadigan hujjat.'
    }
  },
  {
    en: 'Cargo Insurance',
    ru: 'Страхование грузов',
    uz: 'Yuk sug\'urtasi',
    desc: {
      en: 'Insurance that protects the shipper or carrier against financial loss from damaged or lost freight.',
      ru: 'Страхование, которое защищает грузоотправителя или перевозчика от финансовых потерь в результате повреждения или потери груза.',
      uz: 'Yuk jo\'natuvchi yoki tashuvchini shikastlangan yoki yo\'qolgan yukdan kelib chiqadigan moliyaviy yo\'qotishlardan himoya qiladigan sug\'urta.'
    }
  },
  {
    en: 'Common Carrier',
    ru: 'Общий перевозчик',
    uz: 'Umumiy tashuvchi',
    desc: {
      en: 'A carrier that offers its services to the general public under published rates.',
      ru: 'Перевозчик, который предлагает свои услуги широкой публике по опубликованным тарифам.',
      uz: 'O\'z xizmatlarini e\'lon qilingan tariflar bo\'yicha keng jamoatchilikka taklif qiladigan tashuvchi.'
    }
  },
  {
    en: 'Contract Carrier',
    ru: 'Контрактный перевозчик',
    uz: 'Shartnomaviy tashuvchi',
    desc: {
      en: 'A carrier that provides transportation services to specific shippers under individual contracts.',
      ru: 'Перевозчик, который предоставляет транспортные услуги конкретным грузоотправителям по индивидуальным контрактам.',
      uz: 'Individual shartnomalar asosida ma\'lum yuk jo\'natuvchilarga transport xizmatlarini ko\'rsatadigan tashuvchi.'
    }
  },
  {
    en: 'Dispatch',
    ru: 'Диспетчеризация',
    uz: 'Dispetcherlik',
    desc: {
      en: 'The process of scheduling and sending drivers and vehicles to pick up or deliver freight.',
      ru: 'Процесс планирования и отправки водителей и транспортных средств для забора или доставки груза.',
      uz: 'Yukni olish yoki yetkazib berish uchun haydovchilar va transport vositalarini rejalashtirish va yuborish jarayoni.'
    }
  },
  {
    en: 'Driver Log',
    ru: 'Журнал водителя',
    uz: 'Haydovchi jurnali',
    desc: {
      en: 'A record of a driver\'s daily activities, including driving time, rest periods, and duty status.',
      ru: 'Запись ежедневной деятельности водителя, включая время вождения, периоды отдыха и статус дежурства.',
      uz: 'Haydovchining kundalik faoliyati, jumladan haydash vaqti, dam olish davrlari va navbatchilik holati qaydi.'
    }
  },
  {
    en: 'ELD Mandate',
    ru: 'Мандат ELD',
    uz: 'ELD mandati',
    desc: {
      en: 'A federal regulation requiring most commercial drivers to use Electronic Logging Devices.',
      ru: 'Федеральное правило, требующее от большинства коммерческих водителей использования электронных устройств регистрации.',
      uz: 'Ko\'pgina tijorat haydovchilaridan elektron qayd qurilmalaridan foydalanishni talab qiladigan federal qoida.'
    }
  },
  {
    en: 'FMCSA',
    ru: 'FMCSA',
    uz: 'FMCSA',
    desc: {
      en: 'Federal Motor Carrier Safety Administration; the lead federal government agency responsible for regulating and providing safety oversight of commercial motor vehicles.',
      ru: 'Федеральное управление безопасности автоперевозчиков; ведущее федеральное агентство, отвечающее за регулирование и надзор за безопасностью коммерческих автомобилей.',
      uz: 'Federal avtotashuvchilar xavfsizligi ma\'muriyati; tijorat avtotransport vositalarini tartibga solish va xavfsizligini nazorat qilish uchun mas\'ul bo\'lgan asosiy federal davlat agentligi.'
    }
  },
  {
    en: 'Fuel Surcharge',
    ru: 'Топливная надбавка',
    uz: 'Yoqilg\'i ustamasi',
    desc: {
      en: 'An extra fee added to shipping costs to cover fluctuations in fuel prices.',
      ru: 'Дополнительная плата, добавляемая к стоимости доставки для покрытия колебаний цен на топливо.',
      uz: 'Yoqilg\'i narxining o\'zgarishini qoplash uchun yuk tashish xarajatlariga qo\'shiladigan qo\'shimcha haq.'
    }
  },
  {
    en: 'Gross Vehicle Weight (GVW)',
    ru: 'Полная масса автомобиля (GVW)',
    uz: 'Avtomobilning umumiy vazni (GVW)',
    desc: {
      en: 'The total weight of a vehicle, including its chassis, body, engine, fuel, and cargo.',
      ru: 'Общий вес транспортного средства, включая его шасси, кузов, двигатель, топливо и груз.',
      uz: 'Transport vositasining umumiy vazni, shu jumladan uning shassisi, korpusi, dvigateli, yoqilg\'isi va yuki.'
    }
  },
  {
    en: 'Interstate Commerce',
    ru: 'Межштатная торговля',
    uz: 'Shtatlararo savdo',
    desc: {
      en: 'Trade or transportation that crosses state or international borders.',
      ru: 'Торговля или транспортировка, пересекающая границы штатов или международные границы.',
      uz: 'Shtat yoki xalqaro chegaralarni kesib o\'tadigan savdo yoki transport.'
    }
  },
  {
    en: 'Intrastate Commerce',
    ru: 'Внутриштатная торговля',
    uz: 'Shtat ichidagi savdo',
    desc: {
      en: 'Trade or transportation that stays within the borders of a single state.',
      ru: 'Торговля или транспортировка, которая остается в пределах границ одного штата.',
      uz: 'Bitta shtat chegaralarida qoladigan savdo yoki transport.'
    }
  },
  {
    en: 'Motor Carrier',
    ru: 'Автоперевозчик',
    uz: 'Avtotashuvchi',
    desc: {
      en: 'A company that provides truck transportation for hire.',
      ru: 'Компания, предоставляющая услуги грузоперевозок по найму.',
      uz: 'Haq evaziga yuk tashish xizmatlarini ko\'rsatadigan kompaniya.'
    }
  },
  {
    en: 'Owner-Operator',
    ru: 'Владелец-оператор',
    uz: 'Egasining o\'zi haydovchi',
    desc: {
      en: 'A driver who owns their own truck and operates it independently or under contract with a carrier.',
      ru: 'Водитель, который владеет собственным грузовиком и управляет им независимо или по контракту с перевозчиком.',
      uz: 'O\'z yuk mashinasiga egalik qiladigan va uni mustaqil ravishda yoki tashuvchi bilan shartnoma asosida boshqaradigan haydovchi.'
    }
  },
  {
    en: 'Packing List',
    ru: 'Упаковочный лист',
    uz: 'O\'rash varag\'i',
    desc: {
      en: 'A document detailing the contents of a shipment, often used for customs and inventory purposes.',
      ru: 'Документ, подробно описывающий содержимое груза, часто используемый для таможенных целей и инвентаризации.',
      uz: 'Yukning mazmunini batafsil tavsiflovchi hujjat, ko\'pincha bojxona va inventarizatsiya maqsadlarida ishlatiladi.'
    }
  },
  {
    en: 'Shipper',
    ru: 'Грузоотправитель',
    uz: 'Yuk jo\'natuvchi',
    desc: {
      en: 'The person or company that originates the shipment of goods.',
      ru: 'Лицо или компания, которая инициирует отправку товаров.',
      uz: 'Tovarlarni jo\'natishni boshlaydigan shaxs yoki kompaniya.'
    }
  },
  {
    en: 'Tractor',
    ru: 'Тягач',
    uz: 'Tyagach',
    desc: {
      en: 'The front part of a semi-truck that contains the engine and driver\'s cab.',
      ru: 'Передняя часть полуприцепа, в которой находится двигатель и кабина водителя.',
      uz: 'Yarim tirkamaning dvigatel va haydovchi kabinasi joylashgan old qismi.'
    }
  },
  {
    en: 'Trailer',
    ru: 'Прицеп',
    uz: 'Tirkama',
    desc: {
      en: 'The unpowered cargo-carrying part of a semi-truck that is pulled by a tractor.',
      ru: 'Безмоторная грузоподъемная часть полуприцепа, которую тянет тягач.',
      uz: 'Yarim tirkamaning tyagach tomonidan tortiladigan dvigatelsiz yuk ko\'taruvchi qismi.'
    }
  },
  {
    en: 'VIN',
    ru: 'VIN (Идентификационный номер)',
    uz: 'VIN (Identifikatsiya raqami)',
    desc: {
      en: 'Vehicle Identification Number; a unique code used to identify individual motor vehicles.',
      ru: 'Идентификационный номер транспортного средства; уникальный код, используемый для идентификации отдельных транспортных средств.',
      uz: 'Transport vositasining identifikatsiya raqami; alohida transport vositalarini aniqlash uchun ishlatiladigan noyob kod.'
    }
  },
  {
    en: 'A-Frame',
    ru: 'А-образная рама',
    uz: 'A-simon ramka',
    desc: {
      en: 'A structure used to support heavy loads, often used in specialized transport.',
      ru: 'Конструкция, используемая для поддержки тяжелых грузов, часто применяется в специализированных перевозках.',
      uz: 'Og\'ir yuklarni ko\'tarish uchun ishlatiladigan struktura, ko\'pincha ixtisoslashtirilgan tashishlarda qo\'llaniladi.'
    }
  },
  {
    en: 'Aggregate',
    ru: 'Заполнитель (Инертные материалы)',
    uz: 'To\'ldiruvchi (Inert materiallar)',
    desc: {
      en: 'Materials like sand, gravel, or crushed stone often hauled in dump trucks.',
      ru: 'Материалы, такие как песок, гравий или щебень, часто перевозимые в самосвалах.',
      uz: 'Qum, shag\'al yoki maydalangan tosh kabi materiallar, ko\'pincha samosvallarda tashiladi.'
    }
  },
  {
    en: 'Air Ride Suspension',
    ru: 'Пневматическая подвеска',
    uz: 'Pnevmatik osma',
    desc: {
      en: 'A suspension system that uses air bags to provide a smoother ride and protect delicate cargo.',
      ru: 'Система подвески, использующая пневмоподушки для обеспечения плавного хода и защиты хрупкого груза.',
      uz: 'Yumshoqroq harakatlanishni ta\'minlash va nozik yuklarni himoya qilish uchun havo yostiqchalaridan foydalanadigan osma tizimi.'
    }
  },
  {
    en: 'Articulated Vehicle',
    ru: 'Сочлененное транспортное средство',
    uz: 'Bo\'g\'imli transport vositasi',
    desc: {
      en: 'A vehicle with a permanent or semi-permanent pivot point, allowing for better maneuverability.',
      ru: 'Транспортное средство с постоянной или полупостоянной точкой поворота, обеспечивающей лучшую маневренность.',
      uz: 'Yaxshiroq manevr qilish imkonini beruvchi doimiy yoki yarim doimiy burilish nuqtasiga ega transport vositasi.'
    }
  },
  {
    en: 'Belly Dump',
    ru: 'Донный самосвал',
    uz: 'Pastki tushirgichli samosval',
    desc: {
      en: 'A trailer that discharges its load through gates in the bottom of the hopper.',
      ru: 'Прицеп, который выгружает груз через ворота в нижней части бункера.',
      uz: 'Yukni bunkerning pastki qismidagi darvozalar orqali tushiradigan tirkama.'
    }
  },
  {
    en: 'Bridge Formula',
    ru: 'Мостовая формула',
    uz: 'Ko\'prik formulasi',
    desc: {
      en: 'A mathematical formula used to determine the maximum legal weight for a commercial vehicle based on axle spacing.',
      ru: 'Математическая формула, используемая для определения максимально допустимого веса коммерческого автомобиля на основе расстояния между осями.',
      uz: 'O\'qlar orasidagi masofaga qarab tijorat transport vositasi uchun ruxsat etilgan maksimal vaznni aniqlash uchun ishlatiladigan matematik formula.'
    }
  },
  {
    en: 'Cabover',
    ru: 'Бескапотный грузовик',
    uz: 'Kabina dvigatel ustida joylashgan yuk mashinasi',
    desc: {
      en: 'A truck design where the cab sits directly over the engine.',
      ru: 'Конструкция грузовика, при которой кабина располагается непосредственно над двигателем.',
      uz: 'Kabinasi to\'g\'ridan-to\'g\'ri dvigatel ustida joylashgan yuk mashinasi dizayni.'
    }
  },
  {
    en: 'Clearance',
    ru: 'Клиренс (Дорожный просвет)',
    uz: 'Klirens (Yo\'l masofasi)',
    desc: {
      en: 'The distance between the lowest point of a vehicle and the road, or the height of an overhead obstacle.',
      ru: 'Расстояние между самой низкой точкой автомобиля и дорогой или высота надземного препятствия.',
      uz: 'Transport vositasining eng past nuqtasi va yo\'l orasidagi masofa yoki tepadagi to\'siqning balandligi.'
    }
  },
  {
    en: 'Convertible',
    ru: 'Конвертируемый прицеп',
    uz: 'O\'zgaruvchan tirkama',
    desc: {
      en: 'A trailer that can be used as either a flatbed or a dry van.',
      ru: 'Прицеп, который можно использовать как бортовую платформу или как закрытый фургон.',
      uz: 'Ham ochiq platforma, ham yopiq furgon sifatida ishlatilishi mumkin bo\'lgan tirkama.'
    }
  },
  {
    en: 'Curtainside',
    ru: 'Шторный прицеп',
    uz: 'Pardali tirkama',
    desc: {
      en: 'A trailer with flexible side curtains that can be pulled back for easy side loading.',
      ru: 'Прицеп с гибкими боковыми шторами, которые можно отодвинуть для удобной боковой погрузки.',
      uz: 'Yon tomondan oson yuklash uchun orqaga tortilishi mumkin bo\'lgan moslashuvchan yon pardalari bo\'lgan tirkama.'
    }
  },
  {
    en: 'Dead Axle',
    ru: 'Поддерживающая ось (Ленивец)',
    uz: 'Yordamchi o\'q',
    desc: {
      en: 'An unpowered axle on a truck or trailer used to help support weight.',
      ru: 'Неведущая ось грузовика или прицепа, используемая для поддержки веса.',
      uz: 'Yuk mashinasi yoki tirkamadagi vaznni qo\'llab-quvvatlash uchun ishlatiladigan dvigatelsiz o\'q.'
    }
  },
  {
    en: 'Dolly',
    ru: 'Подкатная тележка',
    uz: 'Podkatnaya telejka',
    desc: {
      en: 'An auxiliary axle assembly used to connect two trailers together.',
      ru: 'Вспомогательный осевой узел, используемый для соединения двух прицепов вместе.',
      uz: 'Ikkita tirkamani bir-biriga ulash uchun ishlatiladigan yordamchi o\'q yig\'masi.'
    }
  },
  {
    en: 'Double Drop',
    ru: 'Двухуровневая платформа',
    uz: 'Ikki darajali platforma',
    desc: {
      en: 'A specialized flatbed trailer with a very low center section for hauling extremely tall loads.',
      ru: 'Специализированный бортовой прицеп с очень низкой центральной частью для перевозки чрезвычайно высоких грузов.',
      uz: 'Juda baland yuklarni tashish uchun juda past markaziy qismga ega bo\'lgan maxsus ochiq tirkama.'
    }
  },
  {
    en: 'Doubles',
    ru: 'Двойная сцепка',
    uz: 'Ikkitalik ulanma',
    desc: {
      en: 'A combination of a tractor pulling two trailers.',
      ru: 'Комбинация тягача, тянущего два прицепа.',
      uz: 'Ikkita tirkamani tortayotgan tyagach birikmasi.'
    }
  },
  {
    en: 'Escort',
    ru: 'Сопровождение',
    uz: 'Kuzatib borish',
    desc: {
      en: 'Pilot cars used to accompany oversized loads to ensure safety and navigate obstacles.',
      ru: 'Машины сопровождения, используемые для сопровождения негабаритных грузов для обеспечения безопасности.',
      uz: 'Xavfsizlikni ta\'minlash va to\'siqlardan o\'tish uchun katta hajmli yuklarga hamrohlik qilish uchun ishlatiladigan kuzatuvchi mashinalar.'
    }
  },
  {
    en: 'Glider Kit',
    ru: 'Глайдер-кит',
    uz: 'Glayder-kit',
    desc: {
      en: 'A new truck chassis and cab without an engine or transmission, used to rebuild a truck with existing components.',
      ru: 'Новое шасси и кабина грузовика без двигателя и трансмиссии, используемые для восстановления грузовика с существующими компонентами.',
      uz: 'Dvigatel yoki transmissiyasiz yangi yuk mashinasi shassisi va kabinasi, mavjud komponentlar bilan yuk mashinasini qayta tiklash uchun ishlatiladi.'
    }
  },
  {
    en: 'Headache Rack',
    ru: 'Защитная решетка кабины',
    uz: 'Kabinaning himoya panjarasi',
    desc: {
      en: 'A heavy-duty structure mounted behind the cab to protect the driver from shifting cargo.',
      ru: 'Прочная конструкция, установленная за кабиной для защиты водителя от смещающегося груза.',
      uz: 'Haydovchini siljiydigan yukdan himoya qilish uchun kabina orqasiga o\'rnatilgan mustahkam struktura.'
    }
  },
  {
    en: 'Jackknife',
    ru: 'Складывание (Ножницы)',
    uz: 'Bukilish (Qaychi)',
    desc: {
      en: 'An accident where the trailer swings around and faces the tractor, resembling a folding knife.',
      ru: 'Авария, при которой прицеп разворачивается и оказывается лицом к тягачу, напоминая складной нож.',
      uz: 'Tirkama aylanib, tyagachga qaragan holatda bo\'lib qoladigan baxtsiz hodisa, yig\'iladigan pichoqqa o\'xshaydi.'
    }
  },
  {
    en: 'Kingpin',
    ru: 'Шкворень',
    uz: 'Shkvoren',
    desc: {
      en: 'The large steel pin on the front of a trailer that locks into the tractor\'s fifth wheel.',
      ru: 'Большой стальной штифт в передней части прицепа, который фиксируется в седельно-сцепном устройстве тягача.',
      uz: 'Tirkamaning old qismidagi tyagachning egarli-ulash moslamasiga qulflanadigan katta po\'lat shtift.'
    }
  },
  {
    en: 'Landing Gear',
    ru: 'Опорные стойки',
    uz: 'Tayanch ustunlari',
    desc: {
      en: 'Retractable legs on a trailer that support it when it is disconnected from the tractor.',
      ru: 'Выдвижные опоры прицепа, которые поддерживают его, когда он отсоединен от тягача.',
      uz: 'Tirkama tyagachdan uzilganda uni ushlab turadigan yig\'iluvchi oyoqlar.'
    }
  },
  {
    en: 'Lowboy',
    ru: 'Низкорамный трал',
    uz: 'Past ramali traal',
    desc: {
      en: 'A trailer with a deck height very close to the ground, used for hauling heavy machinery.',
      ru: 'Прицеп с высотой платформы очень близко к земле, используемый для перевозки тяжелой техники.',
      uz: 'Platforma balandligi yerga juda yaqin bo\'lgan tirkama, og\'ir texnikalarni tashish uchun ishlatiladi.'
    }
  },
  {
    en: 'Mud Flap',
    ru: 'Брызговик',
    uz: 'Loydan himoya qiluvchi (Brizgovik)',
    desc: {
      en: 'Heavy rubber flaps behind the wheels to prevent road debris from flying up.',
      ru: 'Тяжелые резиновые щитки за колесами для предотвращения разлета дорожного мусора.',
      uz: 'Yo\'l qoldiqlarining uchib ketishini oldini olish uchun g\'ildiraklar orqasidagi og\'ir rezina qalqonlar.'
    }
  },
  {
    en: 'Pintle Hook',
    ru: 'Буксирный крюк',
    uz: 'Shaxtali ilgak',
    desc: {
      en: 'A type of hitch used to connect a trailer to a truck using a ring and hook system.',
      ru: 'Тип сцепки, используемый для соединения прицепа с грузовиком с помощью системы кольца и крюка.',
      uz: 'Halqa va ilgak tizimi yordamida tirkamani yuk mashinasiga ulash uchun ishlatiladigan tirkama turi.'
    }
  },
  {
    en: 'Placard',
    ru: 'Информационная табличка (Плакат)',
    uz: 'Axborot lavhasi (Plakat)',
    desc: {
      en: 'Diamond-shaped signs placed on a vehicle to indicate the presence of hazardous materials.',
      ru: 'Ромбовидные знаки, размещаемые на транспортном средстве для указания на наличие опасных грузов.',
      uz: 'Xavfli yuklar mavjudligini ko\'rsatish uchun transport vositasiga o\'rnatiladigan romb shaklidagi belgilar.'
    }
  },
  {
    en: 'Sleeper',
    ru: 'Спальник (Спальный отсек)',
    uz: 'Yotoq xonasi (Spalnik)',
    desc: {
      en: 'A compartment attached to the cab of a truck for the driver to sleep in during long trips.',
      ru: 'Отсек, прикрепленный к кабине грузовика, для сна водителя во время длительных поездок.',
      uz: 'Uzoq safarlar paytida haydovchi uxlashi uchun yuk mashinasi kabinasiga biriktirilgan bo\'linma.'
    }
  },
  {
    en: 'Straight Truck',
    ru: 'Одиночный грузовик',
    uz: 'Yagona yuk mashinasi',
    desc: {
      en: 'A truck where the engine, cab, and cargo area are all on a single frame.',
      ru: 'Грузовик, у которого двигатель, кабина и грузовой отсек расположены на одной раме.',
      uz: 'Dvigatel, kabina va yuk maydoni bitta ramkada joylashgan yuk mashinasi.'
    }
  },
  {
    en: 'Tandem Axle',
    ru: 'Тандемная ось',
    uz: 'Tandem o\'qi',
    desc: {
      en: 'A set of two axles grouped together to increase weight capacity.',
      ru: 'Набор из двух осей, сгруппированных вместе для увеличения грузоподъемности.',
      uz: 'Yuk ko\'tarish qobiliyatini oshirish uchun birgalikda guruhlangan ikkita o\'q to\'plami.'
    }
  },
  {
    en: 'Yard Dog',
    ru: 'Терминальный тягач',
    uz: 'Terminal tyagachi',
    desc: {
      en: 'A specialized tractor used only for moving trailers around a warehouse or terminal yard.',
      ru: 'Специализированный тягач, используемый только для перемещения прицепов по складу или территории терминала.',
      uz: 'Faqat ombor yoki terminal hovlisida tirkamalarni ko\'chirish uchun ishlatiladigan maxsus tyagach.'
    }
  }
];

export const ABBREVIATIONS: DictionaryItem[] = [
  {
    en: 'BOL',
    ru: 'BOL',
    uz: 'BOL',
    desc: {
      en: 'Bill of Lading',
      ru: 'Коносамент',
      uz: 'Konosament'
    }
  },
  {
    en: 'LTL',
    ru: 'LTL',
    uz: 'LTL',
    desc: {
      en: 'Less than Truckload',
      ru: 'Меньше чем полная загрузка грузовика',
      uz: 'To\'liq yuk mashinasidan kam'
    }
  },
  {
    en: 'FTL',
    ru: 'FTL',
    uz: 'FTL',
    desc: {
      en: 'Full Truckload',
      ru: 'Полная загрузка грузовика',
      uz: 'To\'liq yuk mashinasi yuki'
    }
  },
  {
    en: '3PL',
    ru: '3PL',
    uz: '3PL',
    desc: {
      en: 'Third-Party Logistics',
      ru: 'Сторонняя логистика',
      uz: 'Uchinchi tomon logistikasi'
    }
  },
  {
    en: 'ELD',
    ru: 'ELD',
    uz: 'ELD',
    desc: {
      en: 'Electronic Logging Device',
      ru: 'Электронное устройство регистрации',
      uz: 'Elektron jurnal qurilmasi'
    }
  },
  {
    en: 'HOS',
    ru: 'HOS',
    uz: 'HOS',
    desc: {
      en: 'Hours of Service',
      ru: 'Часы работы',
      uz: 'Xizmat soatlari'
    }
  },
  {
    en: 'TEU',
    ru: 'TEU',
    uz: 'TEU',
    desc: {
      en: 'Twenty-foot Equivalent Unit',
      ru: 'Двадцатифутовый эквивалент',
      uz: 'Yigirma futlik ekvivalent birligi'
    }
  },
  {
    en: 'LCL',
    ru: 'LCL',
    uz: 'LCL',
    desc: {
      en: 'Less than Container Load',
      ru: 'Меньше чем загрузка контейнера',
      uz: 'Konteyner yukidan kam'
    }
  },
  {
    en: 'FCL',
    ru: 'FCL',
    uz: 'FCL',
    desc: {
      en: 'Full Container Load',
      ru: 'Полная загрузка контейнера',
      uz: 'To\'liq konteyner yuki'
    }
  },
  {
    en: 'FOB',
    ru: 'FOB',
    uz: 'FOB',
    desc: {
      en: 'Free On Board',
      ru: 'Франко-борт',
      uz: 'Bortda bepul'
    }
  },
  {
    en: 'POD',
    ru: 'POD',
    uz: 'POD',
    desc: {
      en: 'Proof of Delivery',
      ru: 'Подтверждение доставки',
      uz: 'Yetkazib berish tasdig\'i'
    }
  },
  {
    en: 'KPI',
    ru: 'KPI',
    uz: 'KPI',
    desc: {
      en: 'Key Performance Indicator',
      ru: 'Ключевой показатель эффективности',
      uz: 'Asosiy samaradorlik ko\'rsatkichi'
    }
  },
  {
    en: 'TMS',
    ru: 'TMS',
    uz: 'TMS',
    desc: {
      en: 'Transportation Management System',
      ru: 'Система управления транспортировкой',
      uz: 'Transportni boshqarish tizimi'
    }
  },
  {
    en: 'WMS',
    ru: 'WMS',
    uz: 'WMS',
    desc: {
      en: 'Warehouse Management System',
      ru: 'Система управления складом',
      uz: 'Omborni boshqarish tizimi'
    }
  },
  {
    en: 'EDI',
    ru: 'EDI',
    uz: 'EDI',
    desc: {
      en: 'Electronic Data Interchange',
      ru: 'Электронный обмен данными',
      uz: 'Elektron ma\'lumotlar almashinuvi'
    }
  },
  {
    en: 'SKU',
    ru: 'SKU',
    uz: 'SKU',
    desc: {
      en: 'Stock Keeping Unit',
      ru: 'Единица складского учета',
      uz: 'Sklad hisobi birligi'
    }
  },
  {
    en: 'JIT',
    ru: 'JIT',
    uz: 'JIT',
    desc: {
      en: 'Just-in-Time',
      ru: 'Точно в срок',
      uz: 'Aynan vaqtida'
    }
  },
  {
    en: 'SCM',
    ru: 'SCM',
    uz: 'SCM',
    desc: {
      en: 'Supply Chain Management',
      ru: 'Управление цепочками поставок',
      uz: 'Ta\'minot zanjirini boshqarish'
    }
  },
  {
    en: 'RF',
    ru: 'RF',
    uz: 'RF',
    desc: {
      en: 'Radio Frequency',
      ru: 'Радиочастота',
      uz: 'Radiochastota'
    }
  },
  {
    en: 'RFID',
    ru: 'RFID',
    uz: 'RFID',
    desc: {
      en: 'Radio Frequency Identification',
      ru: 'Радиочастотная идентификация',
      uz: 'Radiochastotali identifikatsiya'
    }
  },
  {
    en: 'DOT',
    ru: 'DOT',
    uz: 'DOT',
    desc: {
      en: 'Department of Transportation',
      ru: 'Министерство транспорта',
      uz: 'Transport vazirligi'
    }
  },
  {
    en: 'GVW',
    ru: 'GVW',
    uz: 'GVW',
    desc: {
      en: 'Gross Vehicle Weight',
      ru: 'Полная масса автомобиля',
      uz: 'Avtomobilning umumiy vazni'
    }
  },
  {
    en: 'VIN',
    ru: 'VIN',
    uz: 'VIN',
    desc: {
      en: 'Vehicle Identification Number',
      ru: 'Идентификационный номер транспортного средства',
      uz: 'Transport vositasining identifikatsiya raqami'
    }
  },
  {
    en: 'IFTA',
    ru: 'IFTA',
    uz: 'IFTA',
    desc: {
      en: 'International Fuel Tax Agreement',
      ru: 'Международное соглашение о налоге на топливо',
      uz: 'Xalqaro yoqilg\'i solig\'i to\'g\'risidagi bitim'
    }
  },
  {
    en: 'IRP',
    ru: 'IRP',
    uz: 'IRP',
    desc: {
      en: 'International Registration Plan',
      ru: 'Международный план регистрации',
      uz: 'Xalqaro ro\'yxatga olish rejasi'
    }
  },
  {
    en: 'MC',
    ru: 'MC',
    uz: 'MC',
    desc: {
      en: 'Motor Carrier',
      ru: 'Автоперевозчик',
      uz: 'Avtotashuvchi'
    }
  },
  {
    en: 'RODS',
    ru: 'RODS',
    uz: 'RODS',
    desc: {
      en: 'Records of Duty Status',
      ru: 'Записи о статусе дежурства',
      uz: 'Navbatchilik holati qaydlari'
    }
  },
  {
    en: 'DVIR',
    ru: 'DVIR',
    uz: 'DVIR',
    desc: {
      en: 'Driver Vehicle Inspection Report',
      ru: 'Отчет об осмотре транспортного средства водителем',
      uz: 'Haydovchining transport vositasini tekshirish hisoboti'
    }
  },
  {
    en: 'PTI',
    ru: 'PTI',
    uz: 'PTI',
    desc: {
      en: 'Pre-Trip Inspection',
      ru: 'Предрейсовый осмотр',
      uz: 'Sayohatdan oldingi tekshiruv'
    }
  },
  {
    en: 'HUT',
    ru: 'HUT',
    uz: 'HUT',
    desc: {
      en: 'Highway Use Tax',
      ru: 'Налог на использование автомагистралей',
      uz: 'Magistral yo\'llardan foydalanish solig\'i'
    }
  },
  {
    en: 'SCAC',
    ru: 'SCAC',
    uz: 'SCAC',
    desc: {
      en: 'Standard Carrier Alpha Code',
      ru: 'Стандартный буквенный код перевозчика',
      uz: 'Tashuvchining standart alfa kodi'
    }
  },
  {
    en: 'ABS',
    ru: 'ABS',
    uz: 'ABS',
    desc: {
      en: 'Anti-lock Braking System',
      ru: 'Антиблокировочная система тормозов',
      uz: 'Tormozlarning blokirovkaga qarshi tizimi'
    }
  },
  {
    en: 'CSA',
    ru: 'CSA',
    uz: 'CSA',
    desc: {
      en: 'Compliance, Safety, Accountability',
      ru: 'Соответствие, безопасность, подотчетность',
      uz: 'Muvofiqlik, xavfsizlik, javobgarlik'
    }
  },
  {
    en: 'DVIR',
    ru: 'DVIR',
    uz: 'DVIR',
    desc: {
      en: 'Driver Vehicle Inspection Report',
      ru: 'Отчет об осмотре транспортного средства водителем',
      uz: 'Haydovchining transport vositasini tekshirish hisoboti'
    }
  },
  {
    en: 'FMCSR',
    ru: 'FMCSR',
    uz: 'FMCSR',
    desc: {
      en: 'Federal Motor Carrier Safety Regulations',
      ru: 'Федеральные правила безопасности автоперевозчиков',
      uz: 'Federal avtotashuvchilar xavfsizligi qoidalari'
    }
  },
  {
    en: 'NHTSA',
    ru: 'NHTSA',
    uz: 'NHTSA',
    desc: {
      en: 'National Highway Traffic Safety Administration',
      ru: 'Национальное управление безопасностью движения на трассах',
      uz: 'Magistral yo\'llarda harakat xavfsizligi milliy boshqarmasi'
    }
  },
  {
    en: 'OOS',
    ru: 'OOS',
    uz: 'OOS',
    desc: {
      en: 'Out of Service',
      ru: 'Выведен из эксплуатации',
      uz: 'Xizmatdan tashqari'
    }
  },
  {
    en: 'RODS',
    ru: 'RODS',
    uz: 'RODS',
    desc: {
      en: 'Records of Duty Status',
      ru: 'Записи о статусе дежурства',
      uz: 'Navbatchilik holati qaydlari'
    }
  },
  {
    en: 'STB',
    ru: 'STB',
    uz: 'STB',
    desc: {
      en: 'Surface Transportation Board',
      ru: 'Совет по наземному транспорту',
      uz: 'Yer usti transporti kengashi'
    }
  },
  {
    en: 'TSA',
    ru: 'TSA',
    uz: 'TSA',
    desc: {
      en: 'Transportation Security Administration',
      ru: 'Администрация транспортной безопасности',
      uz: 'Transport xavfsizligi ma\'muriyati'
    }
  }
];
