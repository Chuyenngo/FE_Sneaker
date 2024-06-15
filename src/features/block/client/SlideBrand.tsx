const SlideBrand = () => {
  return (
    <div className="slideshow">
      <marquee
        id="marq"
        scrollamount="3"
        direction="up"
        loop="50"
        scrolldelay="0"
        onmouseover="this.stop()"
        onmouseout="this.start()"
      >
        <a href="Link">
          <img src="Link hình ảnh" alt title width="200" height="300" />{" "}
        </a>
        <a href="Link">
          <img src="Link hình ảnh" alt title width="200" height="300" />{" "}
        </a>
        .................................( Thêm link vào đây)
        <a href="Link">
          <img src="Link hình ảnh" alt title width="200" height="300" />{" "}
        </a>
      </marquee>
    </div>
  );
};

export default SlideBrand;
