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
          🌟 Join the Journey of Joy and Triumph: As you explore the remarkable
          experiences of our valued clients, immerse yourself in their stories
          of delight and achievement. Each testimonial is a testament to the
          transformative power of our product, showcasing real-world impacts and
          the joy it brings to users.
        </p>
      </div>
      <div className="my-10 py-10 bg-transparent w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
            865: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 3,
            },
          }}
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
                🚀 "A Game Changer!" - "Since I started using this mining rig,
                my crypto journey has taken a phenomenal turn. The efficiency
                and user-friendliness are unmatched. It's not just a product;
                it's a powerhouse of profitability and pleasure."
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Rohan Desai</p>
                  <p className="text-primary">Tech Enthusiast</p>
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
                💡 "Beyond Expectations!" - "I was skeptical at first, but this
                rig has surpassed all my expectations. The energy efficiency and
                sleek design have made mining both cost-effective and enjoyable.
                A big thumbs up!"
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Mahmudul Hasan</p>
                  <p className="text-primary">Cryptocurrency Miner</p>
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
                🌐 "Mining Made Simple and Rewarding!" - "As someone who's
                constantly on the move, I needed a mining solution that was
                compact and easy to manage. This rig delivered that and more.
                It's like having a reliable mining companion wherever I go."
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Vikram Singh</p>
                  <p className="text-primary">Digital Nomad</p>
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
                🔒 "Security and Performance in One!" - "The advanced security
                features give me peace of mind, knowing my mining activities are
                safe. Coupled with its high performance, this rig is truly a
                stellar investment."
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Neha Patel</p>
                  <p className="text-primary">Blockchain Enthusiast</p>
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
                🌿 "Eco-Friendly and Efficient - A Rare Combo!" - "In a world
                where we're all trying to be more environmentally conscious,
                this mining rig hits the mark. It's refreshing to see a product
                that's not only powerful but also cares for the planet."
              </p>
              <div className="flex gap-3">
                <Avatar
                  className="rounded-sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <p className="text-primary">Aamir Raza</p>
                  <p className="text-primary">Eco-Conscious Miner</p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="text-center space-y-4 pb-10">
        <h2 className="text-primary text-lg">Conclusion</h2>
        <p>
          🌈 Your Story Awaits: These are just a few of the countless happy
          stories we've received. Every client's journey with our product is
          unique, but the outcome is consistently joyous and successful. We
          invite you to become part of this thriving community and create your
          own success story!
        </p>
      </div>
    </div>
  );
}
