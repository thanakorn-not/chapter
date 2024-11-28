import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Chapter = () => {
  const params = useParams();
  const id = params.id;
  // ยิง api ไป get chapter ยังไง?
  const [data, setData] = useState([]);
  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    console.log(res);
    const data_format = await res.data.data;
    // เก็บข้อมูลที่อ่านได้ใส่ State
    setData(data_format);
  };
  useEffect(() => {
    //call api เมื่อมีการเปิด component ครั้งแรก
    callApi();
    console.log(data);
  }, []);
  return (
    <>
    <h1 className="text-3xl text-center p-2">วีดีโอ</h1>
    <div className="flex justify-center">
    <div className="grid grid-cols-3 gap-6 ">
    {data.map((c) => (
      <ChapterCourse key={c.ch_id} {...c}/>
    ))}
    </div>
    </div>
    
    </>
  );
};
const ChapterCourse = (props) => {
  return (
    <div className="bg-sky-600 max-w-md p-6 text-white rounded-xl shadow-lg">
      
      <div className="text-lg p-2">{props.ch_title}</div>
      <div>
      <iframe className="w-full" src={"https://www.youtube.com/embed/" + props.ch_url}></iframe>
      </div>
      <div className="flex justify-between p-2">
      <div className="text-lg">view:{props.ch_view}</div>
      <div className="text-lg">time:{props.ch_timetotal}</div>
      </div>
    </div>
  );
}

export default Chapter;