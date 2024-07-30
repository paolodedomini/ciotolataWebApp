"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
function Svganimation({ level }: { level: number }) {
  const [scope, animate] = useAnimate();
  const [mainLevel, setMainLevel] = useState(500);

  useEffect(() => {
    animate(
      "#sburro",
      {
        x: [160, 430, 160],
      },
      { duration: 2, repeat: Infinity }
    );
    animate("#sburro", { y: [mainLevel, mainLevel - level] }, { duration: 2 });
    animate("#compass", { rotate: [0, 360] }, { duration: 2 });
    setMainLevel(mainLevel - level);
  }, [level]);

  return (
    <svg
      ref={scope}
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 316 316"
    >
      <g transform="translate(-328 -39) translate(-39.66 -122.19)">
        <g id="main" transform="translate(101.201 -57.314)">
          <motion.g id="compass">
            <circle
              cx="240.192"
              cy="301.816"
              r="126.435"
              fill="#4B4B4B"
              stroke="#717171"
              strokeWidth="0.82"
              transform="translate(130.388 6.478) scale(1.2254)"
            ></circle>
            <path
              fill="none"
              stroke="#717171"
              strokeLinecap="butt"
              strokeWidth="5"
              d="M477.678 45.901v17.315"
              transform="translate(-52.958 175.489)"
            ></path>
            <path
              fill="none"
              stroke="#717171"
              strokeLinecap="butt"
              strokeWidth="5"
              d="M477.678 45.901v17.315"
              transform="translate(-52.958 468.135)"
            ></path>
            <path
              fill="none"
              stroke="#717171"
              strokeLinecap="butt"
              strokeWidth="5"
              d="M477.678 45.901v17.315"
              transform="rotate(90 363.454 262.147)"
            ></path>
            <path
              fill="none"
              stroke="#717171"
              strokeLinecap="butt"
              strokeWidth="5"
              d="M477.678 45.901v17.315"
              transform="rotate(90 217.131 115.824)"
            ></path>
          </motion.g>
          <circle
            cx="240.192"
            cy="301.816"
            r="126.435"
            fill="#3C3C3C"
            stroke="#717171"
            strokeWidth="0.92"
            transform="translate(163.281 47.81) scale(1.08846)"
          ></circle>
          <circle
            cx="212.177"
            cy="318.363"
            r="135.634"
            fill="#717171"
            transform="matrix(.79463 0 0 .08354 256.117 444.497)"
          ></circle>
          <g id="bicchiere" transform="matrix(.4918 0 0 .63737 102.386 74.833)">
            <path
              fill="#5D5D5D"
              fillOpacity="0.79"
              d="M478.917 354.747H469c-4.677 0-8.473-2.929-8.473-6.538 0-3.608 3.796-6.537 8.473-6.537h372.828c4.676 0 8.472 2.929 8.472 6.537 0 3.609-3.796 6.538-8.472 6.538h-9.918v243.246c0 13.102-13.765 23.723-30.745 23.723H509.662c-16.98 0-30.745-10.621-30.745-23.723V354.747z"
            ></path>
            <clipPath id="_clip1">
              <path d="M478.917 354.747H469c-4.677 0-8.473-2.929-8.473-6.538 0-3.608 3.796-6.537 8.473-6.537h372.828c4.676 0 8.472 2.929 8.472 6.537 0 3.609-3.796 6.538-8.472 6.538h-9.918v243.246c0 13.102-13.765 23.723-30.745 23.723H509.662c-16.98 0-30.745-10.621-30.745-23.723V354.747z"></path>
            </clipPath>
            <g clipPath="url(#_clip1)">
              <motion.path
                id="sburro"
                fill="#fff"
                d="M29.373 346.905s54.595-25.909 114.861-5.671c60.266 20.239 70.72 13.2 130.648-5.673 59.929-18.873 173.424 27.915 173.424 27.915s36.703 18.842 128.655 4.06c0 56.27-.617 145.758-.617 145.758H32.547l-3.174-166.389zm156.673 70.963c-7.816 0-13.982-2.364-14.096 1.596-.262 9.074 28.026 9.771 28.323 0 .121-3.96-6.411-1.596-14.227-1.596zm-76.723-39.182c-9.176 0-17.938-2.703-17.938 8.47s8.501 16.448 17.677 16.448c9.175 0 15.572-5.275 15.572-16.448s-6.136-8.47-15.311-8.47zm16.36-20.211c-1.912 0-3.464 1.89-3.464 4.219 0 2.328 1.552 4.219 3.464 4.219s3.465-1.891 3.465-4.219c0-2.329-1.553-4.219-3.465-4.219zm179.834-18.287c-8.802 0-17.552 3.576-17.089 10.272.559 8.085 8.352 3.773 17.03 2.92 7.048-.692 14.97 3.615 14.868-2.92-.099-6.412-6.006-10.272-14.809-10.272z"
                transform="matrix(2.03334 0 0 2.33014 82.688 -209.071)"
                initial={{ scale: 3 }}
              ></motion.path>
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                d="M122.801 260.765h34.197"
                transform="matrix(2.03334 0 0 1.56895 229.222 11.57)"
              ></path>
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                d="M122.801 260.765h34.197"
                transform="matrix(2.03334 0 0 1.56895 229.222 35.194)"
              ></path>
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                d="M122.801 260.765h34.197"
                transform="matrix(2.03334 0 0 1.56895 229.222 58.818)"
              ></path>
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                d="M122.801 260.765h34.197"
                transform="matrix(2.03334 0 0 1.56895 229.222 82.443)"
              ></path>
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                d="M122.801 260.765h34.197"
                transform="matrix(2.03334 0 0 1.56895 229.222 106.067)"
              ></path>
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                d="M122.801 260.765h34.197"
                transform="matrix(2.03334 0 0 1.56895 229.222 129.692)"
              ></path>
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                d="M122.801 260.765h34.197"
                transform="matrix(2.03334 0 0 1.56895 229.222 153.316)"
              ></path>
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                d="M122.801 260.765h34.197"
                transform="matrix(2.03334 0 0 1.56895 229.222 176.941)"
              ></path>
            </g>
            <path
              fill="none"
              stroke="#fff"
              strokeWidth="8.78"
              d="M478.917 354.747H469c-4.677 0-8.473-2.929-8.473-6.538 0-3.608 3.796-6.537 8.473-6.537h372.828c4.676 0 8.472 2.929 8.472 6.537 0 3.609-3.796 6.538-8.472 6.538h-9.918v243.246c0 13.102-13.765 23.723-30.745 23.723H509.662c-16.98 0-30.745-10.621-30.745-23.723V354.747z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Svganimation;
