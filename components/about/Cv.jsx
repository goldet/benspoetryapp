import styles from "../../styles/cv.module.css";

const AboutCv = () => {
  // CONTACT doesn't make sense
  // NAME ??
  return (
    <div>
      {/* <h2>Benjamin James Schroeder</h2>
      <div>
        <div>Plaza Lucena 2</div>
        <div>3º D</div>
        <div>28011</div>
        <div>Madrid, España</div>
      </div>
      <div>
        <div>ben.schroeder100@gmail.com</div>
        <div>+34 644 22 78 29</div>
      </div> */}
      <section className="px-10">
        <h3 className={styles.section}>Work</h3>
        <div className={styles.subsection}>
          <h4 className={styles.subsection_name}>Publishing</h4>
          <div className={styles.entries}>
            <div className={styles.entry}>
              <div className={styles.date}>2018-2020</div>
              <div className={styles.company}>Trouble Child</div>
              <div className={styles.position}>Co-editor in Chief</div>
            </div>
            <div className={styles.entry}>
              <div className={styles.date}>2017-2018</div>
              <div className={styles.company}>
                University of Minnesota Press
              </div>
              <div className={styles.position}>Intern</div>
            </div>
            <div className={styles.entry}>
              <div className={styles.date}>2016-2017</div>
              <div className={styles.company}>Ivory Tower</div>
              <div className={styles.position}>
                Poetry Editor, Editorial Board
              </div>
            </div>
            <div className={styles.entry}>
              <div className={styles.date}>2016-2017</div>
              <div className={styles.company}>Ivory Tower</div>
              <div className={styles.position}>Copyeditor</div>
            </div>
          </div>
        </div>
        <div className={styles.subsection}>
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
            <h4>Advising</h4>
            <div>
              <div>2017-2018</div>
              <div>Univeristy of Minnesota - English Department</div>
              <div>Peer Adviser</div>
            </div>
            <div>
              <div>2017-2018</div>
              <div>Univeristy of Minnesota</div>
              <div>Housing and Residential Life</div> {/* What? */}
            </div>
          </div>
        </div>
        <h4>Education</h4>
        <div>
          <div>2021-Present</div>
          <div>CEIP Fernando de los Ríos - Madrid, Spain</div>
          <div>Auxiliar de Conversación</div>
        </div>
        <div>
          <div>2020-2021</div>
          <div>Colegio de Nuestra Señora de las Nieves - Madrid, Spain</div>
          <div>Auxiliar de Conversación</div>
        </div>
        <div>
          <div>2020-2021</div>
          <div>CEIP Fuente Santa - Madrid, Spain</div>
          <div>Auxiliar de Conversación</div>
        </div>
        <div>
          <div>2020-2021</div>
          <div>C.R.A. Entreviñas - La Rioja, Spain</div>
          <div>Auxiliar de Conversación</div>
        </div>
      </section>
    </div>
  );
};

export default AboutCv;
