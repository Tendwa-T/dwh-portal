import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody } from 'reactstrap';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getHealthCareWorkersByCounty } from '../../selectors/HRH/practitionersCountByCountyQualification';

const DistributionDensityHCW = () => {
    const healthCareWorkersByCounty = useSelector(getHealthCareWorkersByCounty);
    const distributionAndDensityOfHCWByCounty = {
        title: { text: 'Distribution and Density of HCW by County' },
        subtitle: { text: 'Source: Regulatory HRIS' },
        xAxis: [{ categories: healthCareWorkersByCounty.counties, crosshair: true }],
        yAxis: [
            { title: { text: 'Ratio per 10,000 population' }},
            { title: { text: 'No of HCWs' }, opposite: true }
        ],
        tooltip: { shared: true },
        legend: { align: 'left', verticalAlign: 'top', y: 0, x: 80, floating: true, borderWidth: 1 },
        series: [
            { name: 'Density', type: 'column', yAxis: 1, data: healthCareWorkersByCounty.count, color: "#485969" },
            { name: 'Ratio to 10,000 pop', type: 'spline', data: healthCareWorkersByCounty.population, color: "#E06F07" },
        ]
    };
    return (
        <Card>
            <CardBody>
                <HighchartsReact highcharts={Highcharts} options={distributionAndDensityOfHCWByCounty} />
            </CardBody>
        </Card>
    );
};

export default DistributionDensityHCW;
