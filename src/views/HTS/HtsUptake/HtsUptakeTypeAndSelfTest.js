import React, { useEffect, useState, useCallback } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getAll } from '../../Shared/Api';

const HtsUptakeTypeAndSelfTest = ({ globalFilters }) => {
    const [uptakeByType, setUptakeByType] = useState({});
    const [uptakeBySelfTest, setUptakeBySelfTest] = useState({});

    const loadUptakeByType = useCallback(async () => {
        let params = null;

        if (globalFilters) {
            params = { ...globalFilters };
        }

        let couple = null;
        let individual = null;

        const result = await getAll('hts/uptakeByClientTestedAs', params);
        for (let i = 0; i < result.length; i++) {
            if(result[i].ClientTestedAs === "Individual") {
                individual = parseInt(result[i].Tested, 10);
            } else if(result[i].ClientTestedAs === "Couple") {
                couple = parseInt(result[i].Tested, 10);
            }
        }

        setUptakeByType({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Uptake By Type',
                colorByPoint: true,
                data: [{
                    name: 'COUPLE',
                    y: couple,
                    sliced: true,
                    selected: true,
                    color: "#1AB394",
                }, {
                    name: 'INDIVIDUAL',
                    y: individual,
                    color: '#2F4050',
                }]
            }]
        });
    }, [globalFilters]);

    const loadUptakeBySelfTest = useCallback(async () => {
        let params = null;

        if (globalFilters) {
            params = { ...globalFilters };
        }

        let yes = null;
        let no = null;

        const result = await getAll('hts/uptakeByClientSelfTested', params);
        for(let i = 0; i < result.length; i++) {
            if(result[i].ClientSelfTested === 'No'){
                no = parseInt(result[i].Tested, 10);
            } else if(result[i].ClientSelfTested === 'Yes') {
                yes = parseInt(result[i].Tested, 10);
            }
        }

        setUptakeBySelfTest({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Uptake By Self Test',
                colorByPoint: true,
                data: [{
                    name: 'Self Tested',
                    color: "#1AB394",
                    y: yes,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Did Not Self Test',
                    color: '#2F4050',
                    y: no
                }]
            }]
        });
    }, [globalFilters]);

    useEffect(() => {
        loadUptakeByType();
        loadUptakeBySelfTest();
    }, [loadUptakeByType, loadUptakeBySelfTest]);

    return (
        <div className="row">
            <div className="col-6">
                <Card className="trends-card">
                    <CardHeader className="trends-header">
                        Couple testing among persons accessing HTS
                    </CardHeader>
                    <CardBody className="trends-body">
                        <HighchartsReact highcharts={Highcharts} options={uptakeByType} />
                    </CardBody>
                </Card>
            </div>
            <div className="col-6">
                <Card className="trends-card">
                    <CardHeader className="trends-header">
                        Uptake of self-test among HTS clients
                    </CardHeader>
                    <CardBody className="trends-body">
                        <HighchartsReact highcharts={Highcharts} options={uptakeBySelfTest} />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default HtsUptakeTypeAndSelfTest;
