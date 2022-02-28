const CurrentTimes = ({ currentTimes }) => {
  return (
    <div className="currentTimes">
        <table>
          <thead>
            <tr>
              <th>Timezone</th>
              <th>Current time</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(currentTimes).map((tz) => (
              <tr key={tz}>
                <td>{tz}</td>
                <td>{currentTimes[tz]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default CurrentTimes;