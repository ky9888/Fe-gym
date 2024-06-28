import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/Types";
import { BsHouseFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi";

import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <BsHouseFill className="h-6 w-6 " />,
    title: "Cơ sở vật chất hiện đại",
    description:
      "Với rất nhiều thiết bị hiện đại và phòng tập chất lượng sẽ làm bạn thoải mãi và thích thú..",
  },
  {
    icon: <IoIosPeople className="h-6 w-6" />,
    title: "100 lớp học đa dạng",
    description:
      "Có nhiều sự lựa chọn phù hợp thời gian và công việc của bạn...",
  },
  {
    icon: <HiAcademicCap className="h-6 w-6" />,
    title: "Huấn luyện viên nhiệt tình và chuyên nghiệp",
    description:
      "Đội ngũ huấn luyện viên tâm huyết đồng hành với bạn cho sự thay đổi bản thân mỗi ngày",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="nhungloiich" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>HƠN CẢ PHÒNG GYM</HText>
          <p className="my-5 text-sm">
            Chúng tôi cung cấp các thiết bị thể dục, huấn luyện viên và các lớp
            học đẳng cấp thế giới để giúp bạn đạt được mục tiêu tập thể dục cao
            nhất một cách dễ dàng. Chúng tôi cung cấp sự quan tâm thực sự đến
            từng thành viên.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>Các thành viên hòa hợp và vui vẻ</HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Bạn phải kiên trì. Kết quả sẽ không xuất hiện chỉ sau một đêm,
                nhưng cơ thể bạn sẽ luôn luôn hạnh phúc. Tập thể hình, ăn uống
                điều độ, kiên trì. Cơ thể sẽ đền đáp bạn xứng đáng
              </p>
              <p className="mb-5">
                Bạn không tập cho bất kỳ ai cả. Một số người sẽ nhìn thấy công
                sức mà bạn bỏ ra nhưng vì ghen tị mà từ chối công nhận bạn. Đừng
                nỗ lực vì lời khen của người khác. Đừng bao giờ ngừng cố gắng
                hết sức chỉ vì có ai đó không công nhận bạn
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Tham gia ngay
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
