import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Badge } from "../common/Badge";
import { Section } from "../common/Section";
import { useLanguage } from "../../i18n";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  { name: "Selvam", location: "Sivagangai", review: "Mobile number change done quickly. Fast and efficient support." },
  { name: "Hema", location: "Theni", review: "Certificate status checked fast. Reliable service and helpful updates." },
  { name: "Farhan", location: "Salem", review: "PAN instant service was excellent. Got my work done without trouble." },
  { name: "Priya", location: "Madurai", review: "Very professional team. Passport application process was smooth." },
  { name: "Arun", location: "Coimbatore", review: "Income certificate completed before expected date. Highly recommended." },
];

export default function CustomerReviews() {
  const { t } = useLanguage();

  return (
    <Section>
      <div className="text-center">
        <Badge tone="teal">{t("online.reviews")}</Badge>
        <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">{t("online.reviews")}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--slate)]">{t("online.reviewsDesc")}</p>
      </div>

      <div className="relative">
        <button type="button" className="review-prev absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] shadow lg:flex" aria-label="Previous review">
          <ChevronLeft />
        </button>
        <button type="button" className="review-next absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] shadow lg:flex" aria-label="Next review">
          <ChevronRight />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ prevEl: ".review-prev", nextEl: ".review-next" }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={20}
          breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
          className="mt-12 pb-14"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="h-full rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-6 shadow-[var(--shadow-soft)]">
                <div className="mb-5 flex gap-1">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={18} className="fill-[var(--amber)] text-[var(--amber)]" />
                  ))}
                </div>
                <p className="min-h-28 leading-8 text-[var(--slate)]">"{item.review}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal)] text-lg font-bold text-[#f0fbff]">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold">{item.name}</h4>
                    <div className="mt-1 flex items-center gap-1 text-sm text-[var(--slate)]">
                      <MapPin size={15} className="text-[var(--amber-dark)]" />
                      {item.location}
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
