const TestimonialItem = ({ name, role, avatarSrc, content }) => {
  return (
    <>
      <div
        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-active
        data-te-carousel-item
        style={{ backfaceVisibility: "hidden" }}
      >
        <img
          className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
          src={avatarSrc}
          alt="avatar"
        />
        <div className="flex flex-wrap justify-center">
          <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
            <h5 className="mb-2 text-lg font-bold">{name}</h5>
            <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
              {role}
            </p>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              {content}
            </p>
            {/* Add the rating stars here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialItem;
