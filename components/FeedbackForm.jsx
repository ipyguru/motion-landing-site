"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import {
  BsTelephoneFill,
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsFillFileEarmarkMedicalFill,
} from "react-icons/bs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles";
import Link from "next/link";

export const FeedbackForm = () => {
  const { register, control, handleSubmit, errors, reset } = useForm();
  const [phoneValue, setPhoneValue] = useState();

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post("/api/feedback", formData);
      if (response.status === 200) {
        reset();
        toast.success("Заявка принята! Мы свяжемся с Вами в ближайшее время!", {
          position: toast.POSITION.TOP_CENTER,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-12 w-full mx-auto flex flex-col gap-4 text-primary-black"
    >
      <h4 className="font-bold md:text-[64px] text-[44px] text-white">
        Оставить заявку
      </h4>

      {/* name */}
      <div>
        <label for="name-icon" className="block mb-2 text-secondary-white">
          Имя
        </label>
        <div className="relative text-secondary-white">
          <div className={`${styles.inputIcon}`}>
            <BsFillPersonFill />
          </div>
          <input
            id="name-icon"
            className={`${styles.inputWithIcon} `}
            type="text"
            name="name"
            placeholder="Как к Вам обращаться?"
            {...register("name", {
              required: "Как мы можем к Вам обращаться?",
              minLength: {
                value: 3,
                message: "Имя должно быть не менее 3 символов",
              },
            })}
          />
        </div>
      </div>

      {/* phone */}
      <div className="font-normal text-[16px]">
        <label
          for="phone-address-icon"
          className="block mb-2 text-secondary-white "
        >
          Телефон *
        </label>

        <div className="relative text-secondary-white">
          <div className={`${styles.inputIcon}`}>
            <BsTelephoneFill />
          </div>
          <PhoneInput
            id="phone-address-icon"
            className={`${styles.inputWithIcon} `}
            placeholder="8 (999) 999-99-99"
            name="phone"
            country="RU"
            value={phoneValue}
            onChange={setPhoneValue}
            control={control}
            rules={{ required: true }}
          />
        </div>
      </div>

      {/* email */}
      <div>
        <label for="email-icon" className="block mb-2 text-secondary-white">
          Адрес эл. почты
        </label>
        <div className="relative text-secondary-white">
          <div className={`${styles.inputIcon}`}>
            <BsFillEnvelopeFill />
          </div>
          <input
            id="email-icon"
            className={`${styles.inputWithIcon} `}
            type="text"
            name="email"
            placeholder="name@mail.ru"
            {...register("email", { required: false })}
          />
        </div>
      </div>

      {/* subject */}
      <div>
        <label for="theme-icon" className="block mb-2 text-secondary-white">
          Тема
        </label>
        <div className="relative text-secondary-white">
          <div className={`${styles.inputIcon}`}>
            <BsFillFileEarmarkMedicalFill />
          </div>
          <input
            id="theme-icon"
            className={`${styles.inputWithIcon} `}
            type="text"
            name="subject"
            placeholder="Тема вашего обращения"
            {...register("subject", { required: false })}
          />
        </div>
      </div>

      {/* message */}
      <div>
        <label for="message-icon" className="block mb-2 text-secondary-white">
          Сообщение
        </label>
        <div className="relative text-secondary-white">
          <textarea
            id="message-icon"
            className={`${styles.inputWithIcon} pl-2`}
            name="message"
            placeholder="Message"
            rows="5"
            {...register("message", { required: false })}
          />
        </div>
      </div>

      {/* privacy */}
      <div className="flex items-start gap-3">
        <input
          id="privacy"
          type="checkbox"
          name="privacy"
          {...register("privacy", { required: true })}
          className="mt-[2px] min-w-[14px] min-h-max"
        />
        <span className="block text-secondary-white">
          * Отправляя форму, я даю согласие на{" "}
          <Link href="/privacy" className="text-primary-blue underline">
            обработку персональных данных.
          </Link>
        </span>
      </div>

      <button
        type="submit"
        className={`${styles.btnPrimary} max-w-[120px] font-normal text-[16px] text-white`}
      >
        Отправить
      </button>
      <ToastContainer />
    </form>
  );
};
