import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const Project = () => {
  const [processedFrame, setProcessedFrame] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
/*   useEffect(() => {
    const captureAndProcessFrame = async () => {
      try {
        const videoBlob = new Blob([videoRef.current.src], { type: videoRef.current.type });
        const response = await fetch('http://localhost:5000/api/process_video', {
          method: 'POST',
          body: videoBlob,
        });
    
        if (response.ok) {
          const processedFrameBlob = await response.blob();
          const url = URL.createObjectURL(processedFrameBlob);
          setProcessedFrame(url);
          console.log(url); // Print the URL to verify
        } else {
          setError('Failed to process video: ' + response.statusText);
        }
      } catch (error) {
        setError('Error processing video: ' + error.message);
      }
    }; 
    

    const intervalId = setInterval(captureAndProcessFrame, 10000);

    return () => clearInterval(intervalId);
  }, []);*/
  useEffect(() => {
    const getVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError("Webcam erişiminde bir hata oluştu: " + err.message);
      }
    };

    getVideoStream();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <Container className="About-header">
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Projects (not working :/)</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        {/* <h2>Face and Eye Detection</h2> */}
        <h2></h2>
        <Col>
          <pre>
            <code>
              {`
              this page will be filled
`}
            </code>
          </pre>
          <p></p>

          {/* <p>This script detects faces and eyes from the webcam feed and draws ellipses around them in real-time using OpenCV.</p> */}
        </Col>
      </Row>



    </Container>
  );
};
