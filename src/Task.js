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
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span className={renk}>{`${distance1} ${fark}`}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
