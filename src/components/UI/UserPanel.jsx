import React from "react";

function UserPanel({ userStats }) {
  // Вычисление процента выполнения опыта
  const experiencePercent =
    (userStats.experience / userStats.experienceNeed) * 100;

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-light bg-gradient p-4 text-center border rounded">
            <b>Your stats</b>
            <h1>Lv. {userStats.level}</h1>
            <h2>
              XP: {userStats.experience} of {userStats.experienceNeed}
            </h2>
            <div className="container">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${experiencePercent}%` }}
                  aria-valuenow={experiencePercent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {experiencePercent.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
