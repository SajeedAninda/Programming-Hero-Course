import { LineChart as LChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const GymCharts = () => {

    const gymData = [
        { name: "FitZone Gym", price: 49.99 },
        { name: "Peak Performance Fitness", price: 59.99 },
        { name: "IronStrong Gym", price: 39.99 },
        { name: "Elevate Fitness Center", price: 69.99 },
        { name: "HealthHub Gym", price: 54.99 }
    ];

    return (
        <div>
            <LChart width={1000} height={400} data={gymData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />
                <Line dataKey="price" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default GymCharts;