//* drawer icons */
import dashboard from "../assets/icons/Vector-4.svg";
import token from "../assets/icons/Vector.svg";
import exit from "../assets/icons/Vector-5.svg";
import wallet from "../assets/icons/Vector-2.svg";
import forum from "../assets/icons/Vector-3.svg";
import game from "../assets/icons/3-Friends.svg";
import upgrade from "../assets/icons/Vector-6.svg";
import upgrade1 from "../assets/icons/Vector-7.svg";

export const constant = {
  DRAWER_WIDTH: "200px",
  API_ADDRESS: "http://api.developer-studio.ir",
  LOGO: "قالیچه نفیس",
  LANDING: {
    MAIN_TITLE: "بزرگترین کلکسیون قالیچه ایرانی",
    BUTTON: "فروشگاه",
    OPTIONS: [
      {
        id: 1,
        title: "شستشو قالی",
        description: "ما فرش شما رو مثل روز اول میکنیم",
        button: "درباره شستشو",
      },
      {
        id: 2,
        title: "فروشگاه آنلاین",
        description: "تنوع بالا، انتخاب مطمئن،پرداخت آسان",
        button: "رفتن به صفحه فروشگاه",
      },
      {
        id: 3,
        title: "مشاوره رایگان",
        description: "برای خرید فرش با مشاوران ما در تماس باشید.",
        button: "مشاوره رایگان",
      },
    ],
  },
  MENU: [
    { id: 1, label: "صفحه اصلی", link: "/landing" },
    { id: 2, label: "فروشگاه", link: "/store" },
    { id: 3, label: "درباره ما", link: "/about_us" },
    { id: 4, label: "ارتباط با ما", link: "/contact_us" },
  ],
  TOOLTIPS: ["لیست علاقه مندی ها", "پروفایل", "سبد خرید"],
  ACCOUNT: ["ثبت نام", "ورود", "خروج", "تکمیل پروفایل"],
  BUTTONS: {
    ADD_TO_BASKET: "اضافه کردن به سبد خرید",
    ADD_TO_FAVS: "اضافه کردن به لیست علاقه مندی ها",
    REMOVE: "حذف",
    EDIT: "ویرایش",
    ADD_PRODUCT: "اضافه کردن کالا",
    ABOUT_CLEANING: "درباره شستشو",
    SHOP_NOW: "همین حالا خرید کن",
    CONSULTANT_INFO: "درخواست مشاوره",
    SEE_MORE: "مشاهده اطلاعات بیشتر",
    SUBMIT: "ثبت",
    CANCLE: "انصراف",
  },
  SHOP_INFO: {
    EMAIL: {
      LABLE: "ایمیل",
      CONTENT: "bruceshabahang@gmail.com",
    },
    ADDRESS: {
      LABLE: "آدرس",
      CONTENT: " پلاک 33- بلوار سجاد - خیابان بنفشه",
    },
    TEL: {
      LABLE: "شماره گالری",
      CONTENT: "0513-7685544",
    },
    PHONE_NUMBER: {
      LABLE: "شماره همراه",
      CONTENT: "09121212121",
    },
  },
  PRODUCT_DESCRIPTION: "جزئیات فرش",
  RELATED_PRODUCTS: "فرش های مشابه",
  CATEGORIES: {
    TITLE: "دسته بندی",
  },
  FILTER_BY: {
    LABEL: "فیلتر بر اساس",
    CATEGORIES: "",
    COLOR: "رنگ",
    SIZE: "اندازه",
    SIZES: [
      { id: 2, name: "6" },
      { id: 3, name: "12" },
      { id: 4, name: "18" },
    ],
    FILTERS: [
      { id: 5, name: "قدیمی ترین", link: "older" },
      { id: 7, name: "جدیدترین", link: "newest" },
      { id: 6, name: "گران ترین", link: "price_decs" },
      { id: 8, name: "ارزان ترین", link: "price" },
    ],
    BUTTON: "اعمال فیلتر",
  },
  ACCOUNT_FORM: {
    LOGIN: {
      TITLE: "ورود",
      GUID_LINE: " نام کاربری شما شماره همراه یا ایمیل شماست ",
      EMAIL: "پست الکترونیک",
      PHONE_NUMBER: "شماره همراه",
      USER_NAME: "نام کاربری",
      PASSWORD: "رمز عبور",
      SIGNED_UP: "ثبت نام نکرده اید؟",
    },
    REGISTER: {
      TITLE: "ثبت نام",
      EMAIL: "پست الکترونیک",
      USER_NAME: "نام کاربری",
      PASSWORD: "رمزعبور",
      CONFIRM_PASSWORD: "تکرار رمز عبور",
      LOGED_IN: "قبلا ثبت نام کرده اید؟",
    },
  },
  BASKET: {
    MESSAGE: "سبد خرید شما خالی است.",
    BILL: "فاکتور خرید",
    TOTAL_PRICE: "هزینه نهایی",
    DELIVERY: "هزینه تحویل",
    PRICE: "هزینه",
    PAY: "پرداخت",
    REMOVE: "حذف ",
  },
  WishList: {
    MESSAGE: "لیست علاقه مندی های شما خالی است.",
    REMOVE: "حذف ",
  },
  ADMIN_PAGE: {
    ADD_PRODUCT_TITLE: "لطفا اطلاعات فرش را وارد کنید.",
    PRODUCTS_LIST: "لیست کالاها",
    NEW_PRODUCT: "افزودن کالا جدید",
    NAME: "نام ",
    SHORT_NAME: "نام کوتاه",
    PRICE: "قیمت",
    SLUG: "",
    NUMBER: "تعداد",
    CATEGORY: "دسته بندی",
    MATERIAL: "مواد اولیه",
    ORIGIN: "اصل و نسب",
    DISCOUNT: "درصد تخفیف",
    DESCRIPTION: "توضیحات",
    UPLOUD_BTN: "آپلود عکس",
  },
  DRAWER_MENU_ITEMS: [
    {
      id: 1,
      link: "/dashboard",
      name: "داشبورد",
      icon: dashboard,
    },
    { id: 2, link: "/userUpgrade", name: "ارتقای سطح کاربری", icon: upgrade1 },
    { id: 3, link: "/meterManagement", name: "مدیریت کنتور ها", icon: upgrade },
    { id: 4, link: "/tokens", name: "توکن ها", icon: token },
    {
      id: 6,
      name: "بازی",
      link: "/games",
      icon: game,
      subs: [
        { id: 61, subname: "بازی های ایجاد شده", link: "/createdGames" },
        { id: 62, subname: "بازی های جدید", link: "/newGames" },
        { id: 63, subname: "بازی های انجام شده", link: "/playedGames" },
        { id: 64, subname: "اعلام نیاز", link: "/gameCall" },
      ],
    },
    {
      id: 7,
      name: "تالار معاملاتی",
      link: "/tradingForum",
      icon: forum,
      subs: [
        {
          id: 71,
          subname: "تالار توکن های خدماتی",
          link: "/serviceTokenForum",
        },
        { id: 72, subname: "تالار توکن های بتا", link: "/betaTokenForum" },
      ],
    },
    { id: 8, link: "/wallet", name: "کیف پول", icon: wallet },
    { id: 9, link: "/exit", name: "خروج", icon: exit },
  ],
  PROFILE: {
    USER_NAME: "ارمیا نظریان",
    WELCOME_MESSAGE: "خوش آمدید",
    PROFILE_DROP_DOWN: [
      { id: 1, title: "تکمیل پروفایل", link: "/profile" },
      { id: 2, title: "خروج", link: "/login" },
    ],
  },
};
