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
    {data.map((c) => (
      <ChapterCourse key={c.ch_id} {...c}/>
    ))}
    
    </>
  );
};
const ChapterCourse = (props) => {
  return (
    <div style={{ border: "1px solid black", padding: 20, marginBottom: 10 }}>
      
      <div>{props.ch_title}</div>
      <div>
      <iframe src={"https://www.youtube.com/embed/" + props.ch_url}></iframe>
      </div>
      <div>view:{props.ch_view}
           time:{props.ch_timetotal}
      </div>
    </div>
  );
}

export default Chapter;