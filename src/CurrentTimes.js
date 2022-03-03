const CurrentTimes = ({ currentTimes }) => {
  return (
    <div
      className="m-2 p-2 col-start-3 col-span-4"
    >
      <table className="m-auto border dark:text-white">
        <thead>
          <tr>
            <th className="p-2 border">Timezone</th>
            <th className="p-2 border">Current time</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(currentTimes).map((tz) => (
            <tr key={tz}>
              <td className="p-2 border text-sm">{tz}</td>
              <td className="p-2 border text-sm">{currentTimes[tz]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentTimes;
