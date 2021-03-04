import DummyLink from 'components/Commons/DummyLink'
import DummyImage from "components/Commons/DummyImage";
export default function Blog({arrowRight}: {arrowRight: string}) {
    return (
      <section className="blog">
        <div className="blog__header mobile-blog-text">
          <DummyLink href="">Join the #ManCareMovement </DummyLink>
          <span>
            <img src={arrowRight} alt="" />
          </span>
        </div>

        <div className="blog__list mobile-img">
          <DummyLink href="">
            <DummyImage
              src={
                "https://i.shgcdn.com/d39c7a95-9888-4f13-b43a-355a2f0849dd/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              }
            />

            <div className="overlay"></div>
          </DummyLink>
          <DummyLink href="">
            <DummyImage
              src={
                "https://i.shgcdn.com/d39c7a95-9888-4f13-b43a-355a2f0849dd/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              }
            />

            <div className="overlay"></div>
          </DummyLink>
          <DummyLink href="">
            <DummyImage
              src={
                "https://i.shgcdn.com/d39c7a95-9888-4f13-b43a-355a2f0849dd/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              }
            />

            <div className="overlay"></div>
          </DummyLink>
          <DummyLink href="">
            <DummyImage
              src={
                "https://i.shgcdn.com/d39c7a95-9888-4f13-b43a-355a2f0849dd/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              }
            />

            <div className="overlay"></div>
          </DummyLink>
          <DummyLink href="">
            <DummyImage
              src={
                "https://i.shgcdn.com/d39c7a95-9888-4f13-b43a-355a2f0849dd/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              }
            />

            <div className="overlay"></div>
          </DummyLink>
        </div>
      </section>
    );
}