import { SelectedPage } from "@/shared/Types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("Không được để trống")
        .min(4, "Phải có ít nhất 4 kí tự"),
      email: Yup.string()
        .required("Không được để trống")
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không đúng "),
      password: Yup.string()
        .required("Không được để trống")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Password phải có 8 ký tự,có ít nhất 1 chữ cái và 1 chứ số"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);

      // axios({
      //   method: 'POST',
      //   url: 'https://cg-be-traveloka.onrender.com/api/auth/singup',
      //   data: values
      // })
      //   .then(function (res) {
      //      console.log(res)
      //      alert('Đăng ký thành công');
      //      const register = loginRef.current;
      //      setShowLogin(false);
      //      register.style.position = "";
      //      register.style.top = "";
      //      register.style.left = "";
      //      register.style.width = "";
      //      register.style.height = "";
      //      register.style.backgroundColor = "";
      //      register.style.zIndex = "";

      //   })
      //   .catch(function (res) {
      //      console.log(res)
      //      alert("đăng ký thất bại")
      // });
    },
  });
  return (
    <section id="lienhechungtoi" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-red-800">Tham gia ngay</span> với chúng tôi
          </HText>
          <p className="my-5">
            Dịch vụ chăm sóc khách hàng tốt nhất là khi khách hàng không cần gọi
            cho bạn, không cần nói chuyện với bạn, mà dịch vụ đó chỉ đơn thuần
            diễn ra.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form className="space-y-2" onSubmit={formik.handleSubmit}>
              <h1 className="text-center text-[23px]">Đăng ký Hội Viên</h1>
              <div>
                <label htmlFor="name" className="text-slate-700">
                  Tên Hội viên:
                </label>
                <br />
                <input
                  id="name"
                  name="userName"
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                  className="w-full outline-0 border-[1px] border-slate-400 hover:border-slate-600 p-2 text-[15px] font-normal rounded-md "
                  type="text"
                  placeholder="Tên Đăng nhập"
                />
                {formik.errors.userName && (
                  <span className="text-red-500 text-[14px] font-normal ">
                    {formik.errors.userName}
                  </span>
                )}
              </div>
              <div>
                <label className="text-slate-700" htmlFor="email">
                  Email:
                </label>
                <br />
                <input
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="w-full outline-0 border-[1px] border-slate-400 hover:border-slate-600 p-2 text-[15px] font-normal rounded-md"
                  type="email"
                  placeholder="Email"
                />
                {formik.errors.email && (
                  <span className="text-red-500 text-[14px] font-normal ">
                    {formik.errors.email}
                  </span>
                )}
              </div>
              <div>
                <label
                  id="password"
                  className="text-slate-700"
                  htmlFor="password"
                >
                  Password:
                </label>
                <br />
                <div className="flex bg-white border-[1px] border-slate-400 hover:border-slate-600 p-2 text-[15px] font-normal rounded-md">
                  <input
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="w-full outline-0 h-full"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                {formik.errors.password && (
                  <span className="text-red-500 text-[14px] font-normal ">
                    {formik.errors.password}
                  </span>
                )}
              </div>

              <div className="flex justify-center pt-2     ">
                <button
                  className="text-blue-500 py-1 px-2 border border-blue-500 w-[110px] rounded-md hover:bg-blue-100 "
                  type="submit"
                >
                  Đăng ký
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
