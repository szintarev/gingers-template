import React from 'react'

type PriceMenuItem = {
  label?: string | null
  price?: string | null
  id?: string | null
}

const DEFAULT_ITEMS: Record<string, { label: string; price: string }[]> = {
  en: [
    { label: '100% Ginger Essence', price: '1000 RSD' },
    { label: 'Ginger Drink', price: '350 RSD' },
    { label: 'Ginger Drink 3l', price: '900 RSD' },
    { label: 'Ginger Syrup', price: '600 RSD' },
    { label: 'Ginger Erythritol Syrup 1l', price: '1300 RSD' },
    { label: 'Ginger Erythritol Syrup 0.33l', price: '500 RSD' },
    { label: 'Ginger Wine 1l', price: '1000 RSD' },
    { label: 'Small Ginger Wine 0.25l', price: '300 RSD' },
    { label: 'Ginger Garlic (Small)', price: '200 RSD' },
    { label: 'Ginger Garlic (Medium)', price: '400 RSD' },
    { label: 'Ginger Garlic (Large)', price: '600 RSD' },
    { label: 'Ginger Honey – Small Jar', price: '750 RSD' },
    { label: 'Ginger Honey – Large Jar', price: '1500 RSD' },
    { label: 'Ginger Seedling', price: '500 RSD' },
    { label: 'Ginger Beer 1l', price: '300 RSD' },
  ],
  sr:[
  {label:'Ginger Esencija', price:'1000 RSD'},
  { label: 'Ginger Napitak', price: '350 RSD' },
  { label: 'Ginger Napitak 3l', price: '900 RSD' },
  { label: 'Ginger Sirup', price: '600 RSD' },
  { label: 'Ginger Eritritol Sirup 1L', price: '1300 RSD' },
  { label: 'Ginger Eritritol Sirup 0.33L', price: '500 RSD' },
  { label: 'Ginger Vino 1L', price: '1000 RSD' },
  { label: 'Small Ginger Wine 0.25L', price: '300 RSD' },
  { label: 'Ginger Garlic (Mali)', price: '200 RSD' },
  { label: 'Ginger Garlic (Srednji)', price: '400 RSD' },
  { label: 'Ginger Garlic (Veliki)', price: '600 RSD' },
  { label: 'Ginger Honey – Mala Tegla', price: '750 RSD' },
  { label: 'Ginger Honey – Velika Tegla', price: '1500 RSD' },
  { label: 'Ginger Sadnica', price: '500 RSD' },
  { label: 'Ginger Pivo 1L', price: '300 RSD' },
  ],
  hu: [
    { label: '100% gyömbér esszencia', price: '1000 RSD' },
    { label: 'Gyömbérital', price: '350 RSD' },
    { label: 'Gyömbérital 3 l', price: '900 RSD' },
    { label: 'Gyömbérszirup', price: '600 RSD' },
    { label: 'Gyömbér–eritrit szirup 1 l', price: '1300 RSD' },
    { label: 'Gyömbér–eritrit szirup 0,33 l', price: '500 RSD' },
    { label: 'Gyömbérbor 1 l', price: '1000 RSD' },
    { label: 'Kis gyömbérbor 0,25 l', price: '300 RSD' },
    { label: 'Gyömbér–fokhagyma (kicsi)', price: '200 RSD' },
    { label: 'Gyömbér–fokhagyma (közepes)', price: '400 RSD' },
    { label: 'Gyömbér–fokhagyma (nagy)', price: '600 RSD' },
    { label: 'Gyömbéres méz – kis üveg', price: '750 RSD' },
    { label: 'Gyömbéres méz – nagy üveg', price: '1500 RSD' },
    { label: 'Gyömbérpalánta', price: '500 RSD' },
    { label: 'Gyömbérsör 1 l', price: '300 RSD' },
  ],
  ru: [
    { label: '100% имбирная эссенция', price: '1000 RSD' },
    { label: 'Имбирный напиток', price: '350 RSD' },
    { label: 'Имбирный напиток 3 л', price: '900 RSD' },
    { label: 'Имбирный сироп', price: '600 RSD' },
    { label: 'Имбирный сироп с эритритом 1 л', price: '1300 RSD' },
    { label: 'Имбирный сироп с эритритом 0,33 л', price: '500 RSD' },
    { label: 'Имбирное вино 1 л', price: '1000 RSD' },
    { label: 'Имбирное вино (малое) 0,25 л', price: '300 RSD' },
    { label: 'Имбирь с чесноком (малый)', price: '200 RSD' },
    { label: 'Имбирь с чесноком (средний)', price: '400 RSD' },
    { label: 'Имбирь с чесноком (большой)', price: '600 RSD' },
    { label: 'Имбирный мёд — маленькая банка', price: '750 RSD' },
    { label: 'Имбирный мёд — большая банка', price: '1500 RSD' },
    { label: 'Саженец имбиря', price: '500 RSD' },
    { label: 'Имбирное пиво 1 л', price: '300 RSD' },
  ],
}

type PriceMenuBlockProps = {
  headingTop?: string | null
  brandTitle?: string | null
  brandSubtitle?: string | null
  headingMenu?: string | null
  items_en?: PriceMenuItem[] | null
  items_sr?: PriceMenuItem[] | null
  items_hu?: PriceMenuItem[] | null
  items_ru?: PriceMenuItem[] | null
  footerLeft?: string | null
  footerRight?: string | null
  locale?: string
}

export const PriceMenuBlock: React.FC<PriceMenuBlockProps> = ({
  headingTop,
  brandTitle,
  brandSubtitle,
  headingMenu,
  items_en,
  items_sr,
  items_hu,
  items_ru,
  footerLeft,
  footerRight,
  locale = 'en',
}) => {
  const selected =
    (locale === 'sr' ? items_sr : locale === 'hu' ? items_hu : locale === 'ru' ? items_ru : items_en) || items_en || []

  const items: PriceMenuItem[] =
    selected.length > 0 ? selected : (DEFAULT_ITEMS[locale] ?? DEFAULT_ITEMS.en)

  return (
    <section className="py-16 px-4 bg-white">
      <div
        className="mx-auto"
        style={{
          maxWidth: 700,
          fontFamily: 'Arial, sans-serif',
          color: '#6b0f1a',
        }}
      >
        <h2 className="text-center tracking-[2px] font-semibold">
          {headingTop}
        </h2>

        <div className="text-center px-5 py-5 rounded-[25px] my-5" style={{ background: '#7a0f23', color: '#fff' }}>
          <h1 className="m-0 text-[48px] leading-none font-bold">{brandTitle}</h1>
          <p className="mt-1 mb-0 tracking-[2px]">{brandSubtitle}</p>
        </div>

        <h3 className="text-center mb-5 font-semibold">{headingMenu}</h3>

        <ul className="list-none p-0 m-0">
          {items.map((item, i) => (
            <li
              key={item.id || i}
              className="flex justify-between py-[6px]"
              style={{ borderBottom: '1px dotted #6b0f1a' }}
            >
              <span className="font-medium">{item.label}</span>
              <span className="font-bold">{item.price}</span>
            </li>
          ))}
        </ul>

        <div
          className="flex justify-between mt-[30px] px-[15px] py-[15px] rounded-[10px]"
          style={{ background: '#7a0f23', color: '#fff' }}
        >
          <span>{footerLeft}</span>
          <span>{footerRight}</span>
        </div>
      </div>
    </section>
  )
}
