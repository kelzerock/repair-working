export interface LinkArr {
  link: string;
  namePage: string;
  subelements?: { name: string; path: string }[];
}

export const linkArr: LinkArr[] = [
  {
    link: "/repair",
    namePage: "Ремонт",
    subelements: [
      { name: "Холодильники", path: "/fridge" },
      { name: "Стиральные машины", path: "/washer" },
      { name: "Посудомоечные машины", path: "/dishwasher" },
      { name: "Телевизоры", path: "/tv" },
      { name: "Кондиционеры", path: "/conditioner" },
      { name: "Варочные панели", path: "/hob" },
      { name: "Электроплиты", path: "/stove" },
      { name: "Духовные шкафы", path: "/oven" },
      { name: "Морозильные камеры", path: "/freezing" },
      { name: "Сушильные машины", path: "/dryer" },
    ],
  },
  {
    link: "/installation",
    namePage: "Установка",
    subelements: [
      { name: "Стиральные машины", path: "/washer" },
      { name: "Посудомоечные машины", path: "/dishwasher" },
      { name: "Кондиционеры", path: "/conditioner" },
    ],
  },
  { link: "/price", namePage: "Цены" },
  { link: "/blog", namePage: "Блог" },
  { link: "/faq", namePage: "Вопрос-ответ" },
  { link: "/geography", namePage: "География" },
  { link: "/reviews", namePage: "Отзывы" },
  { link: "/masters", namePage: "Мастера" },
  { link: "/contacts", namePage: "Контакты" },
];