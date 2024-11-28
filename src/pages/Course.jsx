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
    <h1>Course</h1>
    <hr />
      <div className="grid grid-cols-3 gap-6 ">
        

        {data.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-sky-600 max-w-md p-6 text-white">
      <div>
        <img src={props.picture} alt="" />
      </div>
      <div>{props.title}</div>
      <div>{props.detail}</div>
      <div>
        <NavLink to={"/course/" + props.id}>เนื้อหาในหลักสูตร</NavLink>
      </div>
    </div>
  );
};

export default Course;
