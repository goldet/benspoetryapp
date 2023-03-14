import styles from 'styles/cv.module.css';

const AboutCv = () => {
  return (
    <div className={styles.cv}>
      <h3 className={styles.section}>Education</h3>
      <h4 className={styles.subsection_name}>University of Minnesota</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2015-2018</div>
          <div className={styles.position}>
            BA summa cum laude in English literature, minor in creative writing
          </div>
          <div className={styles.company}>GPA: 3.987/4.00</div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Universidad de Alcalá</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2020-2021</div>
          <div className={styles.position}>Máster propio in International Education</div>
        </div>
      </div>
      <h3 className={styles.section}>Work</h3>
      <h4 className={styles.subsection_name}>Publishing</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2018-2020</div>
          <div className={styles.company}>Trouble Child</div>
          <div className={styles.position}>Co-editor in Chief</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2017-2018</div>
          <div className={styles.company}>University of Minnesota Press</div>
          <div className={styles.position}>Intern</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2016-2017</div>
          <div className={styles.company}>Ivory Tower</div>
          <div className={styles.position}>Poetry Editor, Editorial Board</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2016-2017</div>
          <div className={styles.company}>Ivory Tower</div>
          <div className={styles.position}>Copyeditor</div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Research</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2018-Present</div>
          <div className={styles.company}>CYFAR Lab</div>
          <div className={styles.position}>Contract Copyeditor</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2016-2018</div>
          <div className={styles.company}>CYFAR & REACH Military Families Lab</div>
          <div className={styles.position}>Undergraduate Research Assistant, Copyeditor</div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Advising</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2017-2018</div>
          <div className={styles.company}>Univeristy of Minnesota - English Department</div>
          <div className={styles.position}>Peer Adviser</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2017-2018</div>
          <div className={styles.company}>Univeristy of Minnesota</div>
          {/* What? */}
          <div className={styles.position}>Housing and Residential Life</div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Education</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2021-Present</div>
          <div className={styles.company}>CEIP Fernando de los Ríos - Madrid, Spain</div>
          <div className={styles.position}>Auxiliar de Conversación</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2020-2021</div>
          <div className={styles.company}>
            Colegio de Nuestra Señora de las Nieves - Madrid, Spain
          </div>
          <div className={styles.position}>Auxiliar de Conversación</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2020-2021</div>
          <div className={styles.company}>CEIP Fuente Santa - Madrid, Spain</div>
          <div className={styles.position}>Auxiliar de Conversación</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2020-2021</div>
          <div className={styles.company}>C.R.A. Entreviñas - La Rioja, Spain</div>
          <div className={styles.position}>Auxiliar de Conversación</div>
        </div>
      </div>
      <h3 className={styles.section}>Publications</h3>
      <h4 className={styles.subsection_name}>Poetry</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2023</div>
          <div className={styles.company}>& Change, Forthcoming</div>
          <div className={styles.position}>&quot;Because It Was Him / Because It Was Me.&quot;</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2023</div>
          <div className={styles.company}>& Change, Forthcoming</div>
          <div className={styles.position}>&quot;[Oh, sleepsmile, spark of rub against].&quot;</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2022</div>
          <div className={styles.company}>Blueppeper</div>
          <div className={styles.position}>
            <a href=" https://bluepepper.blogspot.com/2022/08/new-poetry-by-ben-schroeder.html">
              &quot;Speech.&quot;
            </a>
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2018</div>
          <div className={styles.company}>The Tower</div>
          <div className={styles.position}>&quot;Nausea.&quot;</div>
          <div className={styles.position}>Winner of the 2018 ArtWords Contest</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2018</div>
          <div className={styles.company}>The Tower</div>
          <div className={styles.position}>&quot;Salsa in Track Spikes.&quot;</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2016</div>
          <div className={styles.company}>The Tower</div>
          <div className={styles.position}>&quot;Mass.&quot;</div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Critical</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2018</div>
          <div className={styles.company}>MURAJ</div>
          <div className={styles.position}>
            &quot;Wheel in Large Circles&#39;: Whitman&#39;s Spiral Poetics.&quot;
          </div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Article</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2018</div>
          <div className={styles.company}>The Wake</div>
          <div className={styles.position}>
            &quot;A Theater of the Impossible: The Problem with &#39;Call Me by Your
            Name.&#39;&quot;
          </div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Review</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2018</div>
          <div className={styles.company}>Great River Review</div>
          <div className={styles.position}>
            &quot;The Variable of Absence: A Review of Caitlin Bailey&#39;s Solve for Desire.&quot;
          </div>
        </div>
      </div>
      <h3 className={styles.section}>Selected Presentations</h3>
      <h4 className={styles.subsection_name}>Panels</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2018</div>
          <div className={styles.company}>
            A Place at the Table Undergraduate English Conference, University of Minnesota Twin
            Cities, Minneapolis
          </div>
          <div className={styles.position}>
            Doorways, Loss, and Labels: Genre- and Consciousness-Bending.
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2017</div>
          <div className={styles.company}>
            Adventures in English Undergraduate English Conference, University of Minnesota Twin
            Cities, Minneapolis
          </div>
          <div className={styles.position}>The Politics of Movement.</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2016</div>
          <div className={styles.company}>
            Celebrate English Undergraduate English Conference, University of Minnesota Twin Cities,
            Minneapolis
          </div>
          <div className={styles.position}>
            Hidden Languages: Flowers, Identities, Poems, & &#39;Porn&#39;.
          </div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Performances</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2017</div>
          <div className={styles.company}>
            West Bank Arts Festival, University of Minnesota Twin Cities, Minneapolis
          </div>
          <div className={styles.position}>
            Blooming in the Dark, Collaborative Dance/Poetry Performance.
          </div>
        </div>
      </div>
      <h3 className={styles.section}>Other Academic</h3>
      <h4 className={styles.subsection_name}>Scholarships</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2017</div>
          <div className={styles.position}>Awarded $4,000 by Donald V. Hawkins Scholarship</div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2016</div>
          <div className={styles.position}>
            Awarded $1,000 by Joan C. Forester Scholarship for Excellence in Literary Studies
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2015-2019</div>
          <div className={styles.position}>
            Awarded $14,000 by Kohler Co. Dependent of Kohler Employee Academic Scholarship
          </div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Educational</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2015-2018</div>
          <div className={styles.position}>Dean&#39;s List</div>
        </div>
      </div>
      <h3 className={styles.section}>Misc. Honors</h3>
      <h4 className={styles.subsection_name}>Judging</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2016-2017</div>
          <div className={styles.position}>ArtWords contest judge</div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Grants</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2017</div>
          <div className={styles.position}>
            Awarded $1,500 from the Undergraduate Research Opportunities Program (UROP) to write{' '}
            <i>Exhibit A</i>, a poetry chapbook.
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2017</div>
          <div className={styles.position}>
            Awarded $1,500 from the Undergraduate Research Opportunities Program (UROP) to write{' '}
            <i>Apomictic Man</i>, a poetry chapbook.
          </div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Awards</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.date}>2018</div>
          <div className={styles.position}>
            Mark David Clawson Prize in English for an outstanding
            <i>summa cum laude</i> thesis.
          </div>
        </div>
      </div>
      <h3 className={styles.section}>Languages</h3>
      <h4 className={styles.subsection_name}>Spanish</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.position}>Professional reading, speaking, and writing skills</div>
        </div>
      </div>
      <h4 className={styles.subsection_name}>Italian</h4>
      <div className={styles.entries}>
        <div className={styles.entry}>
          <div className={styles.position}>Basic reading, speaking, and writing skills</div>
        </div>
      </div>
      <div className="pb-16"></div>
    </div>
  );
};

export default AboutCv;
