import {
  formatDistanceToNow,
  differenceInHours,
  differenceInDays,
} from "date-fns";
import React from "react";
import tr from "date-fns/locale/tr";

const Task = ({ taskObj, onComplete }) => {
  let today = new Date();
  let teslim = new Date(taskObj.deadline);
  let distance1 = formatDistanceToNow(teslim, { locale: tr });

  let a = Math.floor(differenceInHours(teslim, today));
  let b = differenceInDays(teslim, today);

  let fark = a > 0 ? "sonra " : "önce";
  let renk = Math.abs(b) <= 3 ? "bg-[#ffd9d4]" : "bg-green-600";

  return (
    <div className=" p-6 bg-white rounded-md leading-5 mt-4 shadow-md">
      <h3 className=" text-lg text-amber-600 ">{taskObj.title}</h3>
      <div className=" pt-1 text-xs">
        son teslim: <span className={renk}>{`${distance1} ${fark}`}</span>
      </div>
      <p className=" text-sm text-zinc-800 py-2 pt-0 pb-3">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className=" inline-block px-3 py-1 text-sm border-solid border-2 border-s rounded-3xl mr-1 mb-2 "
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className=" block py-2 px-3 ml-auto bg-orange-300 shadow-lg rounded cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
