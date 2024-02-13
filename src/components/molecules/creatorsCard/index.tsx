// imoort 


export default function CreatorsCard() {
  return (
    <section className="bg-[#e2e2e2] mb-[66px] md:mb-[147px]">
      <div className="container font-clash mx-auto md:py-[75px] relative">
        <div className="overflow-hidden relative">
          <article className="flex justify-between">
            <h2 className="font-semibold mt-[7px] md:mt-0 text-[1.5rem] md:text-[55px] leading-[155%] text-[#161616] max-w-[256px] md:max-w-[535px]">
              TOP CREATORS OF THE WEEK
            </h2>
            <div className="flex">
              <div className="hidden md:block rounded-full w-2.5 bg-[#AEAEAE] border mr-[34px] overflow-hidden flex items-end">
                <div className="w-full h-1/5 bg-grey-dark rounded-full"></div>
              </div>
              <ul className="absolute -right-24 md:relative md:right-0  text-grey text-[10px] md:text-[2.5rem] leading-[155%] mr-8 flex md:block gap-4">
                <li className="mb-5">Editorial</li>
                <li className="mb-5">Fashion</li>
                <li className="mb-5">Lifestyle</li>
                <li className="">Blueprint</li>
              </ul>
            </div>
          </article>
          <p className="text-[13px] md:text-3xl relative leading-[130%] text-black/[0.57] font-[200] md:mr-[12rem] mt-9">
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there’s always more people in a
            black and white photograph. It just makes it seem that there were
            more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
            <span className="text-grey text-[2rem] md:text-[3rem] leading-[155%] font-bold absolute bottom-8 right-0 md:right-8">
              CIRCA
            </span>
          </p>
          <div className="flex md:my-[75px]">
            <p className="my-4 ml-auto md:mr-8 font-bold text-[4rem] md:text-[170px] text-[#161616] md:leading-[150px] line-through decoration-8">
              1985
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
