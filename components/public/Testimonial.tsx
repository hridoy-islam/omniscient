// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Grid } from "swiper/modules";
import { Avatar, Card } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function Testimonial() {
  return (
    <div className="container mx-auto pt-20">
      <div className="text-center space-y-3">
        <h2>Customer Review</h2>
        <h3 className="text-primary text-4xl">
          A Glimpse into Happy Clients' Experiences
        </h3>
        <p>
          Dive into a world of smiles as our clients share their blissful
          experiences. Discover stories that paint a vivid picture of
          satisfaction and success.
        </p>
      </div>
      <div className="my-10 py-10 bg-transparent w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper px-10"
        >
          <SwiperSlide>
            <Card className="rounded-md p-4 space-y-5">
              <Icon
                icon="fa-solid:quote-left"
                width={32}
                className="text-textLight"
              />
              <p className="text-xl">
                JAK's electrical brilliance gave my loft a seamless power
                system. Safety and efficiency - highly recommended.
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Albert Flores</p>
                  <p className="text-primary">8080 Railroad St.</p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="rounded-none p-4 space-y-5">
              <Icon
                icon="fa-solid:quote-left"
                width={32}
                className="text-textLight"
              />
              <p className="text-xl">
                JAK's electrical brilliance gave my loft a seamless power
                system. Safety and efficiency - highly recommended.
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Albert Flores</p>
                  <p className="text-primary">8080 Railroad St.</p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="rounded-none p-4 space-y-5">
              <Icon
                icon="fa-solid:quote-left"
                width={32}
                className="text-textLight"
              />
              <p className="text-xl">
                JAK's electrical brilliance gave my loft a seamless power
                system. Safety and efficiency - highly recommended.
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Albert Flores</p>
                  <p className="text-primary">8080 Railroad St.</p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="rounded-none p-4 space-y-5">
              <Icon
                icon="fa-solid:quote-left"
                width={32}
                className="text-textLight"
              />
              <p className="text-xl">
                JAK's electrical brilliance gave my loft a seamless power
                system. Safety and efficiency - highly recommended.
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Albert Flores</p>
                  <p className="text-primary">8080 Railroad St.</p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="rounded-none p-4 space-y-5">
              <Icon
                icon="fa-solid:quote-left"
                width={32}
                className="text-textLight"
              />
              <p className="text-xl">
                JAK's electrical brilliance gave my loft a seamless power
                system. Safety and efficiency - highly recommended.
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Albert Flores</p>
                  <p className="text-primary">8080 Railroad St.</p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="rounded-none p-4 space-y-5">
              <Icon
                icon="fa-solid:quote-left"
                width={32}
                className="text-textLight"
              />
              <p className="text-xl">
                JAK's electrical brilliance gave my loft a seamless power
                system. Safety and efficiency - highly recommended.
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Albert Flores</p>
                  <p className="text-primary">8080 Railroad St.</p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
