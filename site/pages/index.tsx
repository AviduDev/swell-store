import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard, ProductSlider } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import CategoryList from '@components/ui/CategoryList'
import Features from '../components/ui/Design/index';
import WhyUs from '../components/ui/WhyUs/WhyUs';
import ProductSliderControl from '@components/product/ProductSliderControl'
import Shipping from '@components/ui/Shipping'
import Testimonial from '@components/ui/Testimonial/Testimonial'
import Design from '../components/ui/Design/index';
import Faq from '@components/ui/Faq/Faq'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Teees Store | Buy/ Design Custom Made T-Shirt</title>
      </Head>
      {/* -------------------------HERO-------------------------------- */}
      <section>
      <Hero />
      </section>
      {/* --------------------------PRODUCT CATAGORIES------------------ */}
      <section>
      <CategoryList />
      </section>
      {/* ----------------------------SERVICES----------------------------- */}
      <section>
      <Design />
      </section>
      {/* ------------------------------WHY US------------------------------- */}
      <section>
      <WhyUs />
      </section>
      {/* ----------------------------------PRODUCT LIST-------------------- */}
      <section>
      {/* <ProductSlider /> */}
      </section>
      {/* -----------------------------SHIPPING----------------------------- */}
      <section>
      <Shipping />
      </section>
      {/* ----------------------------TESTIMONIALS------------------------ */}
      <section>
      <Testimonial />
      </section>
      {/* ------------------------------FAQ----------------------------- */}
      <section>
      <Faq />
      </section>
      {/* <Grid variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
              priority: true,
            }}
          />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Hero
        headline=" Dessert drag??e halvah croissant."
        description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Souffl?? bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake. "
      />
      <Grid layout="B" variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee> */}
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

Home.Layout = Layout
