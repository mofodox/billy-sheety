import Head from "next/head";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
  CardFooter,
} from "reactstrap";

export default function Home({ data }) {
  const jobs = data.jobs;

  function checkStatus(status) {
    if (status === "Upcoming") {
      return "primary";
    } else if (status === "Completed") {
      return "success";
    } else {
      return "secondary";
    }
  }

  function isPaid(status) {
    if (status == "true") {
      return "success";
    } else {
      return "danger";
    }
  }

  return (
    <>
      <Head>
        <title>Billy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="header-wrapper mt-4 mb-4">
            <div className="d-flex align-items-center align-content-center justify-content-between">
              <h1>Jobs</h1>
              <p className="mt-0 mb-0">Total jobs: {jobs.length}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {jobs.map((job) => {
            return (
              <div className="col-md-3" key={job.id}>
                <Card className="mb-4">
                  <CardBody>
                    <CardTitle tag="h5">{job.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {`$${job.price.toFixed(2)}`}
                    </CardSubtitle>
                    <CardText>
                      <div class="clearfix">
                        <span>Status: </span>
                        <Badge className="me-1" color={checkStatus(job.status)}>
                          {job.status}
                        </Badge>
                        <span>Paid: </span>
                        <Badge color={isPaid(job.isPaid)}>{job.isPaid}</Badge>
                      </div>
                      <p className="small text-muted mt-3">{job.time}</p>
                    </CardText>
                  </CardBody>
                  <CardFooter>{job.date}</CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const url =
    "https://api.sheety.co/ae01045d0c01a7da6744a9027e46a2d7/billy/jobs";
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}
