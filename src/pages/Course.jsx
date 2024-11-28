import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = await res.data.data;
    //เก็บข้อมูลที่อ่านได้
    setData(data_format);
  };
  useEffect(() => {
    //call api เมื่อเปิด component ครั้งแรก
    callApi();
    console.log(data);
  }, []);

  return (
    <>
    <h1 className="text-4xl text-center p-4">Course</h1>
      <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-6 ">
        {data.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
      </div>
    </>
  );
};

const CourseCard = (props) => {
  return ( 
    <div className="bg-sky-600 max-w-md p-6 text-white rounded-xl shadow-lg">
      <div>
        <img src={props.picture} alt="" />
      </div>
      <div className="font-bold text-xl p-1">{props.title}</div>
      <div className="p-1">{props.detail}</div>
      <div className="bg-blue-900 px-4 py-1 rounded-md w-40">
        <NavLink to={"/course/" + props.id}>เนื้อหาในหลักสูตร</NavLink>
      </div>
    </div>
  );
};

export default Course;
