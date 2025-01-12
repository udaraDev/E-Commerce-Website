import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            ipsam mollitia ratione unde sint minus esse perspiciatis, et, iste
            consectetur ut quia incidunt, harum earum. Ipsa iusto perferendis
            voluptates omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            modi tenetur sit, animi commodi nisi, saepe harum odit aspernatur
            explicabo, fugit incidunt. Dolore, distinctio aut quis quam
            explicabo voluptatum quidem?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            minima, laboriosam, quos aliquid nobis fugiat magni maxime in,
            voluptatum cupiditate reprehenderit modi debitis maiores esse
            voluptatem vitae. Illum, consequuntur quos!
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            ut nobis labore laudantium odit distinctio incidunt, laboriosam
            consequatur praesentium veritatis voluptatibus, explicabo
            perferendis cupiditate, consequuntur tempore ea earum! Id,
            blanditiis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            ut nobis labore laudantium odit distinctio incidunt, laboriosam
            consequatur praesentium veritatis voluptatibus, explicabo
            perferendis cupiditate, consequuntur tempore ea earum! Id,
            blanditiis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            ut nobis labore laudantium odit distinctio incidunt, laboriosam
            consequatur praesentium veritatis voluptatibus, explicabo
            perferendis cupiditate, consequuntur tempore ea earum! Id,
            blanditiis.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
