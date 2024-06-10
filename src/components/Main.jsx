import React from "react";

export default function Main() {
  const labelStyle = "font-normal text-lg text-black";
  const inputStyle =
    "w-full resize-none font-normal text-base text-black rounded py-2.5 px-4 bg-gray-300 border-none placeholder:text-black placeholder:text-opacity-60 focus:outline-none";

  return (
    <>
      <div className="w-4/5 mx-auto my-20 ">
        <h1 className="text-3xl font-semibold">Submit Form</h1>
        <form action="">
          <div className="flex flex-col gap-2 my-5">
            <label className={labelStyle} htmlFor="name">
              Name
            </label>
            <input
              className={inputStyle}
              type="text"
              name="name"
              id="name"
              placeholder="Waqar Ahmad"
            />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label className={labelStyle} htmlFor="Rank">
              Rank Address
            </label>
            <input
              className={inputStyle}
              type="text"
              name="rank"
              id="rank"
              placeholder="qqeht8vnwag20yv8dvtcrd4ujx09fwxwsqqqw93w88"
            />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label className={labelStyle} htmlFor="cash">
              Cash Address
            </label>
            <input
              className={inputStyle}
              type="text"
              name="cash"
              id="cash"
              placeholder="qqeht8vnwag20yv8dvtcrd4ujx09fwxwsqqqw93w88"
            />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label className={labelStyle} htmlFor="link">
              Link
            </label>
            <input
              className={inputStyle}
              type="text"
              name="link"
              id="link"
              placeholder="https://bitcoincashaddress.com"
            />
          </div>

          <div>
            <label className={labelStyle} htmlFor="Description">
              Description
            </label>
            <textarea
              rows={5}
              name="Description"
              id="Description"
              className={inputStyle}
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}
