"use client";
import React, { useState } from "react";

const page = () => {
  const [formdata, setFormData] = useState({
    username: "ali",
    password: "",
  });

  const [temp, setTemp] = useState();

  function formhandler(e) {
    e.preventDefault();

    // let form = e.target;
    // let formData = new FormData(form);
    // let formObj = Object.fromEntries(formData.entries());
    // console.log(formObj);
  }

  function handler(e) {
    const { name, value } = e.target;

    setFormData({ ...formdata, [name]: value });

    console.log(formdata);
  }
  console.log(temp);

  return (
    <div className="h-screen flex justify-center items-center">
      <div class="flex items-center justify-center">
        <div class="bg-gray-900 border-[4px] border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200">
          <div class="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col">
            <svg
              viewBox="0 0 24 24"
              class="h-12 w-12 text-white"
              fill="currentColor"
            >
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
            <h1 class="text-white text-2xl">Sign in to Twitter</h1>
            <form
              onSubmit={formhandler}
              className="w-[500px] flex flex-col gap-4"
            >
              <input
                class="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Email"
                type="text"
                name="username"
                value={formdata.username}
                id=""
                onChange={handler}
              />
              <input
                class="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Password"
                type="password"
                name="password"
                value={formdata.password}
                onChange={handler}
                id=""
              />

              {/* pic upload ------------------------------------- */}

              {temp ? (
                <div className="w-full h-64 border">
                  <img
                    className="w-full h-auto object-cover"
                    src={URL.createObjectURL(temp)}
                    alt=""
                  />
                  <button onClick={() => setTemp(null)}> Clear</button>
                </div>
              ) : (
                <label for="file" class="custum-file-upload">
                  <div class="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill=""
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                          fill=""
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div class="text">
                    <span>Click to upload image</span>
                  </div>
                  <input
                    id="file"
                    type="file"
                    onChange={(e) => setTemp(e.target.files[0])}
                  />
                </label>
              )}

              {/* ----------------------------------------------------------------------- */}

              <input
                class="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
                type="submit"
                id=""
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
