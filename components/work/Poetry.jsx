const WorkPoetry = () => {
  return (
    <>
      <div className="flex h-screen flex-col pt-8 md:flex md:flex-col md:items-start md:px-[10vw] lg:flex lg:flex-col lg:items-start lg:px-0">
        <h1 className="mb-5 text-6xl decoration-4 lg:pt-10 lg:text-left">Poetry</h1>

        <ul className="pt-[2vh] text-lg">
          <li className="flex gap-1 leading-snug">
            <a
              className="hover:underline"
              href="https://issuu.com/ivorytower/docs/tower_2018"
              target="blank">
              &#34;Salsa in Track Spikes&#34; pg.110 in <em>The Tower</em> (Spring 2018)
            </a>
          </li>

          <li className="leading-snugnug pt-4">
            <a
              className="hover:underline"
              href="https://issuu.com/ivorytower/docs/tower_2018"
              target="blank">
              &#34;Nausea&#34; pg.128 in <em>The Tower</em> (Spring 2018)
            </a>
          </li>

          <li className="pt-4 leading-snug">
            <a
              className="hover:underline"
              href="https://bluepepper.blogspot.com/2022/08/new-poetry-by-ben-schroeder.html?m=0"
              target="blank">
              &#34;Speech&#34; in <em>Bluepepper</em> (August 2022)
            </a>
          </li>

          <li className="pt-4 leading-snug">
            <a className="hover:underline" href="https://www.andchangepoetry.com" target="blank">
              &#34;Because it was him, / Because it was me&#34; in <em>&Change</em> Issue No.2
              (January 2023)
            </a>
          </li>

          <li className="pt-4 leading-snug">
            <a className="hover:underline" href="https://www.andchangepoetry.com" target="blank">
              &#34;[Sleepsmile, spark of rub against]&#34; <em>&Change</em> Issue No.2 (January
              2023)
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WorkPoetry;
