export default function Blog({arrowRight}) {
    return (
      <section className="blog">
        <div className="blog__header mobile-blog-text">
          <a href="">Join the #ManCareMovement </a>
          <span>
            <img src={arrowRight} alt="" />{" "}
          </span>
        </div>

        <div className="blog__list mobile-img">
          <a href="#">
            <img src="https://i.shgcdn.com/d39c7a95-9888-4f13-b43a-355a2f0849dd/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
            <div className="overlay"></div>
          </a>
          <a href="#">
            <img src="https://i.shgcdn.com/19e25e65-d583-4357-9626-ee0f08d88c34/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
            <div className="overlay"></div>
          </a>
          <a href="#">
            <img src="https://i.shgcdn.com/c5b55791-a2d4-4659-b8bd-93ab3d0b3874/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
            <div className="overlay"></div>
          </a>
          <a href="#">
            <img src="https://i.shgcdn.com/b24d9740-8340-40dd-ab30-c5e35d755c26/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
            <div className="overlay"></div>
          </a>
          <a href="#">
            <img src="https://i.shgcdn.com/4fce0508-7701-43b0-893b-51c6fc785b5f/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
            <div className="overlay"></div>
          </a>
        </div>
      </section>
    );
}