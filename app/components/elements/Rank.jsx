/* eslint-disable @next/next/no-img-element */
export default function Rank({ img, title, floor, vol }) {
  return (
    // <div className="flex items-center text-xl font-bold">

    //   <p>{floor}</p>
    //   <p>{vol}</p>
    // </div>
    <div>
      <table className="text-white items-center">
        <tr className="">
          <td className="pr-10">1</td>
          <td className="flex items-center pr-10">
            <img src={img} alt={title} className="w-20 rounded-xl mr-10 mb-8" />
            <h1 className=" text-white">{title}</h1>
          </td>
        </tr>
      </table>
    </div>
  );
}
