const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-lg-3 left" data-aos="fade-right" data-aos-delay='500'>
                        <img src="assets/img/placement.svg" alt="placement" />
                        <img className="img-fluid" src="assets/img/home-img-1.svg" alt="student-one" />
                    </div>
                    <div className="col col-12 col-lg-6 middle">
                        <div data-aos="zoom-out" data-aos-delay='300'>
                            {/* <h1 className="heading-primary">Make Your</h1>
                            <h1 className="heading-primary">Future Better</h1> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="469" height="72" viewBox="0 0 469 72" fill="none">
                                <path className="strokeAndFill" d="M434.786 28.1538V64.1538C434.786 66.7048 436.649 71.5741 443.082 70.9308C448.228 70.4161 449.515 66.1984 449.515 64.1538C449.586 60.6946 449.687 52.468 449.515 47.2358C449.343 42.0036 450.957 39.0011 451.786 38.1538C454.586 34.9538 459.953 34.4872 462.286 34.6538C466.286 34.6538 467.619 32.3205 467.786 31.1538C469.386 23.9538 466.119 22.1538 464.286 22.1538C455.486 21.3538 450.286 27.8205 448.786 31.1538L448.286 26.1538C447.953 24.6538 446.086 21.7538 441.286 22.1538C436.486 22.5538 434.953 26.3205 434.786 28.1538Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M392.286 53.1538V27.6538C391.486 22.8538 387.286 21.9871 385.286 22.1538C380.286 22.1538 378.286 25.4871 377.786 27.6538V51.1538C377.786 57.1538 378.786 60.3205 379.286 61.1538C382.086 69.5538 390.453 71.3205 394.286 71.1538C402.686 71.9538 407.786 66.4871 409.286 63.6538C409.686 70.4538 414.786 71.1538 417.286 70.6538C422.486 70.6538 423.453 65.9871 423.286 63.6538V26.6538C422.953 25.1538 420.986 22.1538 415.786 22.1538C410.586 22.1538 408.953 26.4871 408.786 28.6538V48.1538C409.286 51.1538 408.586 57.6538 401.786 59.6538C394.986 61.6538 392.619 56.1538 392.286 53.1538Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M343.286 22.1538C323.686 22.1538 319.119 38.1538 319.286 46.1538C319.286 66.5538 335.286 71.3205 343.286 71.1538C368.086 71.1538 370.619 51.1538 368.786 41.1538C368.453 34.8205 362.886 22.1538 343.286 22.1538Z" stroke="var(--text-color-4)"/>
                                <path className="strokeNotFill" d="M354.786 46.6538C354.786 35.4538 347.786 32.6538 344.286 32.6538C335.086 32.6538 333.453 41.9871 333.786 46.6538C333.786 59.4538 341.453 60.9871 345.286 60.1538C348.453 60.3205 354.786 57.8538 354.786 46.6538Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M309.286 4.65378L294.286 26.1538C290.953 21.1538 283.586 10.2538 280.786 6.65378C277.986 3.05378 275.286 1.82045 274.286 1.65378C273.286 1.32044 270.586 1.15377 267.786 3.15377C264.986 5.15377 265.619 9.32044 266.286 11.1538L286.286 39.6538V64.1538C286.286 65.6538 288.286 71.6538 294.286 71.1538C299.086 70.7538 300.953 67.3204 301.286 65.6538V39.6538L320.786 12.1538C321.786 10.8204 323.386 7.45378 321.786 4.65378C320.186 1.85378 317.119 1.48711 315.786 1.65378C312.986 1.25378 310.286 3.48711 309.286 4.65378Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M151.286 42.6538V9.15383C151.286 2.35382 146.286 1.32049 143.786 1.65383C138.186 1.25383 136.786 6.48716 136.786 9.15383V64.6538C137.286 67.6538 138.786 71.1538 144.786 71.1538C149.586 71.1538 151.119 67.1538 151.286 65.1538V49.6538C155.619 54.4872 164.986 64.8538 167.786 67.6538C170.586 70.4538 172.286 70.8205 172.786 70.6538C177.986 71.8538 180.286 69.8205 180.786 68.6538C182.786 65.8538 181.286 62.8205 180.286 61.6538L166.286 45.6538C169.286 42.1538 175.786 34.6538 177.786 32.6538C179.786 30.6538 180.286 28.4872 180.286 27.6538C180.286 23.1538 176.286 22.1538 173.786 22.1538C171.786 22.1538 169.286 23.4872 168.286 24.1538L151.286 42.6538Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M0.785889 7.65381V64.1538C0.785889 69.7538 5.45256 71.1538 7.78589 71.1538C12.1859 71.1538 13.9526 67.1538 14.2859 65.1538V29.1538L30.2859 57.1538C35.0859 63.1538 39.9526 59.6538 41.7859 57.1538L57.7859 28.6538V65.1538C58.1192 67.3205 59.8859 71.5538 64.2859 71.1538C68.6859 70.7538 70.4526 66.9871 70.7859 65.1538C71.1192 46.9871 71.5859 10.0538 70.7859 7.65381C69.7859 4.65382 68.7859 2.15381 64.2859 1.65381C60.6859 1.25382 58.1192 3.82048 57.2859 5.15381L36.2859 44.1538C32.7859 38.3205 24.4859 24.0538 19.2859 13.6538C14.0859 3.25381 10.1192 1.32048 8.78589 1.65381C2.78589 0.0538144 0.952555 4.98715 0.785889 7.65381Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M108.786 33.6538C111.986 34.0538 112.453 39.4871 112.286 42.1538H104.286L97.7858 42.6538L91.7858 43.6538C90.6191 43.8204 87.6858 44.6538 85.2858 46.6538C82.8858 48.6538 81.9525 51.1538 81.7858 52.1538C81.1191 54.4871 80.7858 60.3538 84.7858 65.1538C88.7858 69.9538 95.4524 71.1538 98.2858 71.1538C107.086 72.3538 111.286 66.3204 112.286 63.1538C112.686 70.1454 117.453 71.4003 119.786 71.1538C124.986 71.1538 126.286 66.1538 126.286 63.6538C126.286 57.8204 126.086 44.0538 125.286 35.6538C124.486 27.2538 116.953 23.8204 113.286 23.1538C106.786 20.6538 97.7858 22.6538 94.7858 23.1538C92.3858 23.5538 88.7858 24.9871 87.2858 25.6538C84.0858 28.0538 84.2858 31.3204 84.7858 32.6538C85.9858 36.2538 89.2858 36.1538 90.7858 35.6538L96.2858 33.6538C103.086 32.0538 107.453 32.9871 108.786 33.6538Z" stroke="var(--text-color-4)"/>
                                <path className="strokeNotFill" d="M107.443 60.2374C112.002 58.078 112.542 52.2065 112.242 49.5406C109.276 49.5406 102.585 49.7005 99.5456 50.3403C96.5065 50.9801 95.6134 53.2062 95.5468 54.2392C94.747 57.0383 96.8131 59.4043 97.9461 60.2374C99.2123 61.1371 102.885 62.3967 107.443 60.2374Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M213.286 60.1538C203.686 60.1538 201.286 53.1538 201.286 49.6538H230.786C233.586 49.6538 233.953 47.3204 233.786 46.1538C234.186 26.9538 220.286 22.1538 213.286 22.1538C208.953 21.4871 198.586 22.4538 191.786 31.6538C184.986 40.8538 187.619 53.4871 189.786 58.6538C191.453 61.6538 196.886 68.1538 205.286 70.1538C215.786 72.6538 226.286 69.6538 230.786 66.6538C234.386 64.2538 232.953 59.9871 231.786 58.1538C230.786 57.3205 227.986 56.1538 224.786 58.1538C221.586 60.1538 215.786 60.3205 213.286 60.1538Z" stroke="var(--text-color-4)"/>
                                <path className="strokeNotFill" d="M201.286 42.1537H221.786V40.6537C221.453 37.4871 218.886 31.2537 211.286 31.6537C203.686 32.0537 201.453 38.8204 201.286 42.1537Z" stroke="var(--text-color-4)"/>
                            </svg>
                            <svg style={{margin: '4rem 0'}} width="603" height="70" viewBox="0 0 603 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="strokeAndFill" d="M568.954 26.2759V62.2759C568.954 64.8269 570.817 69.6961 577.25 69.0528C582.397 68.5382 583.683 64.3204 583.683 62.2759C583.755 58.8166 583.855 50.5901 583.683 45.3579C583.512 40.1257 585.126 37.1232 585.954 36.2759C588.754 33.0759 594.121 32.6092 596.454 32.7759C600.454 32.7759 601.787 30.4426 601.954 29.2759C603.554 22.0759 600.287 20.2759 598.454 20.2759C589.654 19.4759 584.454 25.9426 582.954 29.2759L582.454 24.2759C582.121 22.7759 580.254 19.8759 575.454 20.2759C570.654 20.6759 569.121 24.4426 568.954 26.2759Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M205.295 26.0797V62.0797C205.295 64.6306 207.159 69.4999 213.592 68.8566C218.738 68.342 220.025 64.1242 220.025 62.0797C220.096 58.6204 220.196 50.3938 220.025 45.1617C219.853 39.9295 221.467 36.9269 222.295 36.0797C225.095 32.8797 230.462 32.413 232.795 32.5797C236.795 32.5797 238.129 30.2463 238.295 29.0797C239.895 21.8797 236.629 20.0797 234.795 20.0797C225.995 19.2797 220.795 25.7463 219.295 29.0797L218.795 24.0797C218.462 22.5797 216.595 19.6797 211.795 20.0797C206.995 20.4797 205.462 24.2463 205.295 26.0797Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M67.202 51.0747V25.5747C66.402 20.7747 62.202 19.908 60.202 20.0747C55.202 20.0747 53.202 23.408 52.702 25.5747V49.0747C52.702 55.0747 53.702 58.2414 54.202 59.0747C57.002 67.4747 65.3687 69.2414 69.202 69.0747C77.602 69.8747 82.702 64.408 84.202 61.5747C84.602 68.3747 89.702 69.0747 92.202 68.5747C97.402 68.5747 98.3687 63.908 98.202 61.5747V24.5747C97.8687 23.0747 95.902 20.0747 90.702 20.0747C85.502 20.0747 83.8687 24.408 83.702 26.5747V46.0747C84.202 49.0747 83.502 55.5747 76.702 57.5747C69.902 59.5747 67.5354 54.0747 67.202 51.0747Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M162.974 51.0747V25.5747C162.174 20.7747 157.974 19.908 155.974 20.0747C150.974 20.0747 148.974 23.408 148.474 25.5747V49.0747C148.474 55.0747 149.474 58.2414 149.974 59.0747C152.774 67.4747 161.141 69.2414 164.974 69.0747C173.374 69.8747 178.474 64.408 179.974 61.5747C180.374 68.3747 185.474 69.0747 187.974 68.5747C193.174 68.5747 194.141 63.908 193.974 61.5747V24.5747C193.641 23.0747 191.674 20.0747 186.474 20.0747C181.274 20.0747 179.641 24.408 179.474 26.5747V46.0747C179.974 49.0747 179.274 55.5747 172.474 57.5747C165.674 59.5747 163.307 54.0747 162.974 51.0747Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M267.521 58.1795C257.921 58.1795 255.521 51.1795 255.521 47.6795H285.021C287.821 47.6795 288.188 45.3461 288.021 44.1795C288.421 24.9795 274.521 20.1795 267.521 20.1795C263.188 19.5128 252.821 20.4795 246.021 29.6795C239.221 38.8795 241.855 51.5128 244.021 56.6795C245.688 59.6795 251.121 66.1795 259.521 68.1795C270.021 70.6795 280.521 67.6795 285.021 64.6795C288.621 62.2795 287.188 58.0128 286.021 56.1795C285.021 55.3461 282.221 54.1795 279.021 56.1795C275.821 58.1795 270.021 58.3461 267.521 58.1795Z" stroke="var(--text-color-4)"/>
                                <path className="strokeNotFill" d="M255.521 40.1795H276.021V38.6795C275.688 35.5128 273.121 29.2795 265.521 29.6795C257.921 30.0795 255.688 36.8462 255.521 40.1795Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M413.725 58.1795C404.125 58.1795 401.725 51.1795 401.725 47.6795H431.225C434.025 47.6795 434.391 45.3461 434.225 44.1795C434.625 24.9795 420.725 20.1795 413.725 20.1795C409.391 19.5128 399.025 20.4795 392.225 29.6795C385.425 38.8795 388.058 51.5128 390.225 56.6795C391.891 59.6795 397.325 66.1795 405.725 68.1795C416.225 70.6795 426.725 67.6795 431.225 64.6795C434.825 62.2795 433.391 58.0128 432.225 56.1795C431.225 55.3461 428.425 54.1795 425.225 56.1795C422.025 58.1795 416.225 58.3461 413.725 58.1795Z" stroke="var(--text-color-4)"/>
                                <path className="strokeNotFill" d="M401.725 40.1795H422.225V38.6795C421.891 35.5128 419.325 29.2795 411.725 29.6795C404.125 30.0795 401.891 36.8462 401.725 40.1795Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M539.851 58.1794C530.251 58.1794 527.851 51.1794 527.851 47.6794H557.351C560.151 47.6794 560.518 45.3461 560.351 44.1794C560.751 24.9794 546.851 20.1794 539.851 20.1794C535.518 19.5128 525.151 20.4794 518.351 29.6794C511.551 38.8794 514.184 51.5128 516.351 56.6794C518.018 59.6794 523.451 66.1794 531.851 68.1794C542.351 70.6794 552.851 67.6794 557.351 64.6794C560.951 62.2794 559.518 58.0128 558.351 56.1794C557.351 55.3461 554.551 54.1794 551.351 56.1794C548.151 58.1794 542.351 58.3461 539.851 58.1794Z" stroke="var(--text-color-4)"/>
                                <path className="strokeNotFill" d="M527.851 40.1794H548.351V38.6794C548.018 35.5127 545.451 29.2794 537.851 29.6794C530.251 30.0794 528.018 36.846 527.851 40.1794Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M0.814257 61.199V9.19694C0.814257 2.03878 5.27827 0.476906 7.51028 0.590737C17.2245 0.640307 37.7928 0.709704 42.3525 0.590737C46.9123 0.47177 47.7404 4.5875 47.5845 6.66024C46.6966 11.0994 43.7266 12.867 42.3525 12.867H15.5588V28.5392H39.1817C41.4013 28.5392 45.7771 29.6807 45.5234 34.2467C45.2697 38.8128 42.1411 39.9543 40.6086 39.9543H15.5588V64.3699C15.2945 66.061 13.3392 69.3798 7.63161 69.1262C1.92406 68.8725 0.708563 63.7357 0.814257 61.199Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M107.803 31.8339H112.937V47.7097C112.43 53.3501 113.792 65.2585 123.299 67.7682C135.182 70.9053 140.505 67.9584 142.311 66.3423C143.756 65.0494 143.42 60.7335 143.072 58.7371C142.92 55.9993 139.206 56.7725 137.368 57.5013C130.067 58.4899 127.798 54.174 127.576 51.8925V31.8339H137.843C139.333 31.8339 142.311 30.7502 142.311 26.4153C142.311 22.0803 139.016 20.8698 137.368 20.8065H127.576C127.64 19.4439 127.729 16.0723 127.576 13.4865C127.424 10.9008 126.562 9.43045 126.15 9.0185C125.802 8.13123 123.983 6.35669 119.496 6.35669C115.009 6.35669 113.253 10.3494 112.937 12.3458V21.3769H106.662C105.458 21.6621 103.107 23.1641 103.335 26.8906C103.563 30.6171 106.409 31.7389 107.803 31.8339Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M440.739 31.7908H445.872V47.6666C445.365 53.3071 446.728 65.2154 456.234 67.7251C468.117 70.8623 473.441 67.9153 475.247 66.2992C476.692 65.0063 476.356 60.6904 476.008 58.694C475.855 55.9562 472.142 56.7294 470.304 57.4582C463.003 58.4469 460.734 54.1309 460.512 51.8494V31.7908H470.779C472.268 31.7908 475.247 30.7071 475.247 26.3722C475.247 22.0372 471.951 20.8268 470.304 20.7634H460.512C460.575 19.4008 460.664 16.0292 460.512 13.4434C460.36 10.8577 459.498 9.38736 459.086 8.97541C458.737 8.08814 456.919 6.3136 452.432 6.3136C447.945 6.3136 446.189 10.3063 445.872 12.3027V21.3338H439.598C438.394 21.619 436.042 23.121 436.271 26.8475C436.499 30.574 439.344 31.6958 440.739 31.7908Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M475.995 31.7908H481.129V47.6666C480.622 53.3071 481.984 65.2154 491.491 67.7251C503.374 70.8623 508.698 67.9153 510.504 66.2992C511.949 65.0063 511.613 60.6904 511.264 58.694C511.112 55.9562 507.398 56.7294 505.56 57.4582C498.259 58.4469 495.991 54.1309 495.769 51.8494V31.7908H506.036C507.525 31.7908 510.504 30.7071 510.504 26.3722C510.504 22.0372 507.208 20.8268 505.56 20.7634H495.769C495.832 19.4008 495.921 16.0292 495.769 13.4434C495.617 10.8577 494.755 9.38736 494.343 8.97541C493.994 8.08814 492.175 6.3136 487.688 6.3136C483.201 6.3136 481.446 10.3063 481.129 12.3027V21.3338H474.855C473.65 21.619 471.299 23.121 471.527 26.8475C471.756 30.574 474.601 31.6958 475.995 31.7908Z" stroke="var(--text-color-4)"/>
                                <path className="strokeAndFill" d="M332.25 0.557778C326.014 0.329614 324.581 5.59619 324.645 8.258C324.613 23.2465 324.588 54.7444 324.74 60.8285C324.892 66.9126 329.746 68.2435 332.155 68.1485C336.559 68.1168 347.175 68.0724 354.4 68.1485C361.625 68.2245 365.586 67.3563 366.663 66.9126C370.783 66.0888 379.231 61.6081 380.067 50.2764C380.904 38.9447 372.367 34.1472 367.994 33.1648C377.12 30.2749 378.641 20.6163 378.261 16.1483C376.588 3.29563 364.191 0.399339 358.202 0.557778C352.15 0.652847 338.486 0.785942 332.25 0.557778Z" stroke="var(--text-color-4)"/>
                                <path className="strokeNotFill" d="M356.111 39.344H338.904V57.121H357.062C359.039 57.121 360.04 56.7408 360.294 56.5506C362.29 56.2021 366.226 53.9079 365.998 47.5195C365.77 41.1312 359.311 39.4074 356.111 39.344Z" stroke="var(--text-color-4)"/>
                                <path className="strokeNotFill" d="M353.544 11.5853H338.904V28.3166C341.344 28.4116 348.069 28.5447 355.446 28.3166C362.823 28.0884 364.223 22.4543 364.001 19.6657C364.382 12.9732 357.188 11.4902 353.544 11.5853Z" stroke="var(--text-color-4)"/>
                            </svg>
                            <p>Learn and interact with to industry experts to develop in-demand skills</p>

                            <div className="btn-box">
                                <div data-aos="fade-left" data-aos-delay='1500'>
                                    <button className="button-primary">Enroll now 
                                        <svg className="ms-3" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15.5" cy="15.5" r="15.5" fill="#FFB546"/>
                                            <path d="M11.0171 9.55266C11.0127 8.78287 11.8432 8.29696 12.5121 8.67801L22.892 14.5914C23.5608 14.9724 23.5664 15.9347 22.902 16.3234L12.5909 22.356C11.9264 22.7447 11.0904 22.2684 11.0859 21.4986L11.0171 9.55266Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                                <div data-aos="fade-right" data-aos-delay='1500'>
                                    <button className="button-primary">
                                        <svg className="me-3" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15.5" cy="15.5" r="15.5" fill="#ff7ba6"/>
                                            <path d="M11.0171 9.55266C11.0127 8.78287 11.8432 8.29696 12.5121 8.67801L22.892 14.5914C23.5608 14.9724 23.5664 15.9347 22.902 16.3234L12.5909 22.356C11.9264 22.7447 11.0904 22.2684 11.0859 21.4986L11.0171 9.55266Z" fill="white"/>
                                        </svg>
                                        Contact us
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <div className="seen-on" data-aos="fade-up" data-aos-delay='1200'>
                            <ul>
                                <li>
                                    <img className="img-fluid" src="assets/icons/tallyPrime.jpg" alt="logo-forbes" />
                                </li>
                                <li>
                                    <img className="img-fluid" src="assets/icons/sql_icon.png" alt="logo-bi" />
                                </li>
                                <li>
                                    <img className="img-fluid" src="assets/icons/aspnet.png" alt="logo-bbc" />
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="col col-12 col-lg-3 right" data-aos="fade-left" data-aos-delay='900'>
                        <img src="assets/img/graph.svg" alt="placement" />
                        <img className="img-fluid" style={{transform: 'scale(1.2)'}} src="assets/img/home-img-2.svg" alt="student-two" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;