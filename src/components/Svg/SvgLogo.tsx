import React from 'react';

const SvgLogo = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="17"
            height="24"
            viewBox="0 0 17 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15.0477 13.2152C13.804 12.0302 13.119 10.5595 13.119 9.07412V8.58072C13.119 6.17143 11.4258 4.09862 9.22054 3.73637C9.24578 3.31304 9.37663 2.90218 9.62129 2.54396C9.97892 2.02013 10.5315 1.6673 11.1772 1.55012C11.5967 1.47385 11.8757 1.06819 11.8006 0.64374C11.7252 0.219286 11.3221 -0.0651514 10.905 0.0128956C9.85159 0.204052 8.94489 0.787647 8.35187 1.65615C7.92268 2.28437 7.69168 3.0084 7.66917 3.75338C6.82371 3.90803 6.02883 4.29263 5.38411 4.88345C4.41563 5.77028 3.86003 7.03684 3.86003 8.35806V9.07408C3.86003 10.5597 3.17511 12.0304 1.93135 13.2154C-2.1218 17.0777 0.64048 23.9733 6.17427 23.9733C6.95743 23.9733 7.73624 23.8157 8.48953 23.5018C14.7225 26.0993 19.9875 17.9232 15.0477 13.2152ZM6.17561 20.8515C3.43306 20.8515 2.01166 17.4284 4.04776 15.4884C4.35791 15.1923 4.84672 15.2075 5.1383 15.5214C5.43066 15.8353 5.41584 16.3294 5.10564 16.625C4.0907 17.5931 4.81985 19.2898 6.17561 19.2898C6.60184 19.2898 6.9472 19.6393 6.9472 20.0707C6.9472 20.502 6.60184 20.8515 6.17561 20.8515Z"
                fill={props.fill ? props.fill : '#FFBC01'}
            />
        </svg>
    );
};

export default SvgLogo;
