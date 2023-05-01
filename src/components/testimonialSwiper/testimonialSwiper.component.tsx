import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './testimonialSwiper.module.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

type Testimonial = {
  id: number;
  customerImg: string;
  productName: string;
  productImg: string;
  testimonialText: string;
  linkToProduct: string;
  customerName: string;
};

type Testimonials = Array<Testimonial>;

const TestimonialSwiper = ({
  testimonials,
}: {
  testimonials: Testimonials;
}) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  return (
    <div className={styles.testimonialContainer}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
        className={`${styles.swiperContainer} ${styles.mySwiper}`}
      >
        {testimonials.map(
          ({
            id,
            customerImg,
            customerName,
            testimonialText,
            productImg,
            productName,
            linkToProduct,
          }: {
            id: number;
            customerImg: string;
            customerName: string;
            testimonialText: string;
            productImg?: string;
            productName?: string;
            linkToProduct: string;
          }) => (
            <SwiperSlide key={id} className={styles.swiperSlide}>
              <div className={styles.customerImg}>
                <img src={customerImg} alt={customerName} />
              </div>
              <div className={styles.testimonialText}>
                <p>{testimonialText}</p>
                <div className={styles.name}>- {customerName}</div>
              </div>
              <div className={styles.productImg}>
                <a href={linkToProduct}>
                  <p> See product</p>
                  <img src={productImg} alt={productName} />
                </a>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
