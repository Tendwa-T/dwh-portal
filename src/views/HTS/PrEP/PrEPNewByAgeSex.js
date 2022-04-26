import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardHeader, CardBody } from 'reactstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const PrEPNewByAgeSex = () => {
    const filters = useSelector(state => state.filters);
    const [prepOverall, setPrepOverall] = useState({});

    const loadPrepOverall = useCallback(async () => {
        setPrepOverall({
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: [
                    '15-19 YRS', '20-24 YRS', '25-29 YRS', '30-34 YRS', '35-39 YRS','40-44 YRS', '45-49 YRS', '50 +', 'UNKNOWN AGE'
                ],
                crosshair: true,
                title: {
                    text: 'AGE GROUP'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'PERCENTAGE OF PATIENTS'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            legend: {
                align: 'left',
                verticalAlign: 'top',
            },
            plotOptions: {
                column: {
                    pointPadding: 0.01,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'MALE',
                data: [23.6, 78.8, 98.5, 20, 10, 50, 70, 20, 90],
                color: '#14084D'
            }, {
                name: 'FEMALE',
                data: [18, 45, 90, 27, 19, 70, 50, 70, 100],
                color: "#EA4C8B"
            }]
        });
    }, []);

    useEffect(() => {
        loadPrepOverall();
    }, [loadPrepOverall]);

    return (
        <Card>
            <CardHeader className="cardTitle">
                NEW ON PREP BY AGE AND SEX
            </CardHeader>
            <CardBody>
                <HighchartsReact highcharts={Highcharts} options={prepOverall}/>
            </CardBody>
        </Card>
    );
};

export default PrEPNewByAgeSex;
