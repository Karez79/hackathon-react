import { members } from "../../../entities/member/model/member";
import MemberCard from "../../../entities/member/ui/MemberCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import styles from "./MemberList.module.scss";
import { useWidgetModal } from "../model";

const MembersGrid = () => {
    const { stateGridOrSwiper, handleStateGridOrSwiper } = useWidgetModal();

    return (
        <section className={styles.teamSection}>
            <label className={styles.teamSectionAction}>
                <input
                    type="checkbox"
                    checked={stateGridOrSwiper}
                    onChange={handleStateGridOrSwiper}
                />
                <span></span>
            </label>
            <div className={styles.container}>
                {stateGridOrSwiper ? (
                    <div className={styles.grid}>
                        {members.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            1280: {
                                spaceBetween: 16,
                                slidesPerView: 2,
                            },
                            640: {
                                spaceBetween: 10,
                                slidesPerView: 1.5,
                            },
                            320: {
                                spaceBetween: 10,
                                slidesPerView: 1,
                            },
                        }}
                        className={styles["swiper-team"]}
                    >
                        {members.map((member) => (
                            <SwiperSlide
                                key={member.id}
                                className={styles["swiper-slide"]}
                            >
                                <MemberCard member={member} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default MembersGrid;
