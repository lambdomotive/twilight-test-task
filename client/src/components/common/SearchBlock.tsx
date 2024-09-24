"use client";

import { Row, Col, Flex, Card, Typography, Skeleton } from "antd";
import { useMemo, useState } from "react";
import { ChartData } from "chart.js";
import { format } from "date-fns";

import { getInfections } from "@/services/api";
import { SearchInput } from "@/components/ui/SearchInput";
import { DoughnutChart } from "@/components/ui/DoughnutChart";
import { Infection } from "@/models/Infection";
import { getDoughnutChartData } from "@/utils/getDoughnutChartData";

export const SearchBlock = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [infections, setInfections] = useState<Infection[]>([]);

  const onSearch = async (value: string) => {
    setLoading(true);
    const infectionsList = await getInfections({ domains: value.split(", ") });

    if (infectionsList?.data?.length) {
      setInfections(infectionsList.data);
    } else {
      setInfections([]);
    }
    setLoading(false);
  };

  const doughnutChartData = useMemo<ChartData<"doughnut"> | null>(
    () => getDoughnutChartData(infections),
    [infections]
  );

  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Flex justify="center" style={{ height: "20vh", width: "100%" }}>
            <SearchInput
              allowClear
              loading={loading}
              width="100%"
              value={searchValue}
              onSearch={onSearch}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Check your domain"
              enterButton="Search"
              size="large"
              style={{ marginTop: "140px", transition: "margin 700ms" }}
            />
          </Flex>
        </Col>
      </Row>
      {loading ? (
        <Flex vertical gap="middle" justify="center" style={{ margin: "24px" }}>
          {Array.from(Array(8).keys()).map((i) => (
            <Skeleton.Input key={i} active size="large" block />
          ))}
        </Flex>
      ) : (
        <>
          {doughnutChartData && (
            <Row style={{ padding: "24px" }}>
              <Col
                xl={6}
                lg={8}
                sm={12}
                xs={24}
                style={{ width: "400px", height: "400px" }}
              >
                <Flex justify="center">
                  <Typography.Title level={3}>Stealer types:</Typography.Title>
                </Flex>
                <DoughnutChart data={doughnutChartData} />
              </Col>
              {/* <Col
            xl={6}
            lg={8}
            sm={12}
            xs={24}
            style={{ width: "400px", height: "400px" }}
          >
            <span>Stealer types:</span>
            <DoughnutChart data={doughnutChartData} />
          </Col> */}
            </Row>
          )}
          <Row gutter={[16, 16]} style={{ margin: "24px" }}>
            {infections.map(({ id, computer_information, stealer_type }) => (
              <Col xl={6} lg={8} sm={12} xs={24} key={id}>
                <Card
                  title={`Machine IP - ${computer_information.ip}`}
                  bordered={false}
                  style={{ width: "100%", border: "2px solid black" }}
                >
                  <p>
                    <b style={{ fontWeight: "bold" }}>Infection Date</b> -{" "}
                    {format(computer_information.infection_date, "PPpp")}
                  </p>
                  <p>
                    <b style={{ fontWeight: "bold" }}>Stealer type</b> -{" "}
                    {stealer_type}
                  </p>
                  {computer_information.malware_path && (
                    <p style={{ lineBreak: "anywhere" }}>
                      <b style={{ fontWeight: "bold" }}>Malware path</b> -{" "}
                      {computer_information.malware_path}
                    </p>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
