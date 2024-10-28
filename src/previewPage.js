import React from "react";
import { data } from "./data";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PreviewPage = () => {
  const param = useParams();
  const game = data?.find((item) => item?.id == param?.id);
  const otherGames = data?.filter((item) => item?.id != param?.id);


  return (
    <div>
      <div className="mt-20">
        <section>
          <div class="container-fluid min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h4 class="text-center mt-3 mb-3 text-xl md:text-2xl font-semibold">
              Play Online - {game.name}
            </h4>

            <div class="game-area w-full flex-grow flex justify-center items-center relative">
              <iframe
                class="w-4/5 h-[70vh] md:h-[75vh] lg:h-[80vh] border-none"
                src={game?.iframe}
                allowfullscreen
              ></iframe>
            </div>

            <div class="w-full bg-gray-800 text-gray-100 flex flex-col lg:flex-row justify-center lg:justify-between items-center py-4 px-6">
              <div class="flex items-center mb-4 lg:mb-0">
                <img
                  src={game?.imgURL}
                  alt="Online Game"
                  class="rounded-md w-12 h-12 lg:w-16 lg:h-16 object-cover"
                />
                <div class="ml-4">
                  <span class="text-lg lg:text-xl font-semibold">
                    {game?.name}
                  </span>
                </div>
              </div>
            </div>
            <div className="mx-auto p-16 ">
              <p className="mx-auto tracking-normal	 w-[90%] font-sans font-medium	text-lg	">
                Small children can learn their first +100 words in several
                languages by playing this fun game. It starts displaying
                different emojis and plays an audio with the pronunciation in
                the selected language. Then they are verbally asked to find some
                emojis. It gets more challenging over time!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:px-10 container mx-auto bg-gray-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {
        otherGames.map((item)=>{
          return (
            <div
            key={item.id}
            className="col-span-1 z-0 flex w-full h-full bg-transparent"
          >
            <Link
              to={`/preview/${item.id}`}
              className="group relative w-full h-full block overflow-hidden rounded-xl transform transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Overlay div */}
              <div className="absolute w-full z-50 h-full inset-0 bg-opacity-0 bg-black  group-hover:bg-opacity-50 transition-opacity duration-300"></div>
              
              {/* Image with slight zoom on hover */}
              <div className="relative flex justify-center items-center overflow-hidden rounded-xl">
                <img
                  src={item.imgURL}
                  alt={item.name}
                  className="transform transition-transform duration-300 w-full h-full group-hover:scale-110 rounded-xl"
                />

                {/* Text fade-in effect */}
                <span className="absolute bottom-3 text-lg text-transparent font-bold leading-none transition-all duration-300 ease-in-out z-50 group-hover:text-white group-hover:opacity-100 opacity-0">
                  {item.name}
                </span>
              </div>
            </Link>
          </div>
          )
        })
        }
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreviewPage;
