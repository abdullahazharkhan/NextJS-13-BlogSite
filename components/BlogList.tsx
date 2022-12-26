import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSIdeRoute from "./ClientSIdeRoute";

type Props = {
  posts: Post[];
};
function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#f7ab0a] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* <Post /> */}
        {posts.map((p) => {
          return (
            <>
            <ClientSIdeRoute key={p._id} route={`/post/${p.slug.current}`}>
            <div className="group cursor-pointer flex flex-col">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(p.mainImage).url()}
                  alt={p.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{p.title}</p>
                    <p>
                      {new Date(p._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {p.categories!.map((cat) => {
                      return (
                        <div
                          className="bg-[#f7ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semi
                      "
                        >
                          <p>Course</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{p.title}</p>
                <p className="line-clamp-2 text-gray-500">
                  Best course out here about {p.title}
                </p>
              </div>

              <p className="mt-5 font-bold flex items-center group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
            </ClientSIdeRoute>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;
