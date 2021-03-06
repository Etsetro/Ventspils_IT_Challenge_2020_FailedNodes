import { useState } from "react";
import styles from "../styles/simulation.module.css";
import Form from "../components/Form";
import Simulation from "../components/Simulation.tsx";

export default function Home({ scrollPos }) {
  const [values, setValues] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [chartData, setChartData] = useState({});
  const [animationState, setAnimationState] = useState(false);

  return (
    <section className={styles["simulation-section"]}>
      {isOpen && (
        <div className={styles.overlay} onClick={(e) => setIsOpen(false)}></div>
      )}
      <Form
        setValues={setValues}
        values={values}
        setChartData={setChartData}
        setAnimationState={setAnimationState}
        animationState={animationState}
      />
      <Simulation
        values={values}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        chartData={chartData}
        animationState={animationState}
      />
    </section>
  );
}
