import useTemp from "../Custom/useTemp";

function Temperature({ temperature }) {
  const temp = useTemp(temperature);
  return temp;
}

export default Temperature;
