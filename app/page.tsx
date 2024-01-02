import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "CoilCrypt - Home",
  description: "",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mx-4">
      <h1 className="text-3xl pt-16 pb-4 flex-wrap text-center">
        Everything you need out of a password manager
      </h1>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="card card-compact w-full md:w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 201 200"
              style={{ width: "80%", height: "80%" }}
            >
              <clipPath id="icon-easy-flat_svg__a">
                <path d="M.5 0h200v200H.5z"></path>
              </clipPath>
              <g
                fill-rule="evenodd"
                clip-path="url(#icon-easy-flat_svg__a)"
                clip-rule="evenodd"
              >
                <g fill="#ffffff">
                  <path d="M101.5 53a2 2 0 0 1 2 2v47.69a2 2 0 0 1-.6 1.44l-23 22.3a2 2 0 0 1-2.8-2.87l22.4-21.72V55c0-1.1.9-2 2-2zM89.67 10v6.06h23.26V10zm-2-4a2 2 0 0 0-2 2v10.06c0 1.1.9 2 2 2h27.26a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
                  <path d="M108.5 28V18h2v10zm-14-10v10h-2V18zm56.09 12.3a5 5 0 0 1 7.07 0l15.9 15.91a5 5 0 0 1 0 7.07l-8.89 8.9-2.82-2.83 8.89-8.9a1 1 0 0 0 0-1.41l-15.9-15.9a1 1 0 0 0-1.42 0l-8.9 8.89-2.83-2.83z"></path>
                </g>
                <path
                  fill="#82cb00"
                  d="M124.94 40.6A64.7 64.7 0 0 0 41.7 78.63a1 1 0 0 1-1.87-.7A66.7 66.7 0 0 1 141.45 47.2a1 1 0 0 1-1.17 1.62 64.77 64.77 0 0 0-15.34-8.2zm-6.49 124.34a1 1 0 0 1-.74 1.2 66.4 66.4 0 0 1-38.7-2.4 67.2 67.2 0 0 1-8.48-3.85 1 1 0 1 1 .95-1.76 65.42 65.42 0 0 0 8.23 3.73 64.4 64.4 0 0 0 37.54 2.34 1 1 0 0 1 1.2.75z"
                ></path>
                <path
                  fill="#ffffff"
                  d="M122.57 172.74a2 2 0 0 1-1.42 2.45 76.33 76.33 0 0 1-87.8-38.85l-4.92 12.44a2 2 0 0 1-3.72-1.48l6.63-16.73a2 2 0 0 1 2.6-1.12l16.73 6.62a2 2 0 0 1-1.47 3.72l-12.02-4.76a72.33 72.33 0 0 0 82.94 36.3 2 2 0 0 1 2.45 1.4zm49.7-48.32a2 2 0 0 1-1.35-2.49 71.36 71.36 0 0 0 .5-38.9c-10.3-38.4-49.94-61.15-88.57-50.8-35.15 9.42-57.32 43-53.28 77.89a2 2 0 0 1-3.97.46C21.33 73.72 44.74 38.3 81.82 28.37c40.74-10.92 82.6 13.08 93.46 53.63a75.37 75.37 0 0 1-.52 41.07 2 2 0 0 1-2.5 1.35z"
                ></path>
                <path
                  fill="#ffffff"
                  d="M154 119c-19.58 0-35.5 16.1-35.5 36s15.92 36 35.5 36 35.5-16.1 35.5-36-15.92-36-35.5-36zm-39.5 36c0-22.07 17.66-40 39.5-40s39.5 17.93 39.5 40-17.66 40-39.5 40-39.5-17.93-39.5-40z"
                ></path>
                <path
                  fill="#82cb00"
                  d="M176.77 139.45a2 2 0 0 1 .28 2.82l-26.17 32a2 2 0 0 1-3.07.03L132.98 157a2 2 0 0 1 3.04-2.6l13.27 15.49 24.66-30.16a2 2 0 0 1 2.82-.28z"
                ></path>
              </g>
            </svg>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Powerful security within minutes</h2>
            <p>
              For those who want to do more, secure more, and collaborate more,
              CoilCrypt is fast and easy to set up for both individuals and
              businesses.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 200"
              style={{ width: "80%", height: "80%" }}
            >
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M132.41 80.02c-.73-.23-2.16-.3-4.87 1.07-5.83 2.93-26.92 15.17-36.79 20.97a2 2 0 0 1-2.62-.53 69.74 69.74 0 0 0-5.55-6.48c-2.35-2.42-4.74-4.44-6.57-5.26-5.17-2.31-9.92-2.13-12.84-.17-1.38.93-1.48 1.67-1.43 2.14.08.72.62 1.7 1.74 2.83.5.5 1.27 1.12 2.25 1.84l1.56 1.13 1.49 1.08c1 .74 2.02 1.52 2.8 2.27.39.37.77.8 1.07 1.25.28.42.64 1.07.64 1.88 0 .57-.12 1.44-.24 2.32l-.05.34a66.7 66.7 0 0 0-.43 3.93c-.23 3.02-.22 6.65.66 10.26 1.38 5.66 6.1 7.66 9.86 9.13a2 2 0 0 1 1.2 1.31 25.29 25.29 0 0 0 2.32 5.46c1.2 2.07 2.59 3.72 4.03 4.44 2.27 1.14 3.99 1.6 5.82 1.6 1.9-.02 4.1-.54 7.37-1.7 3.99-1.41 6.05-2.86 7.16-3.95a6.53 6.53 0 0 0 1.46-2l.3-.55a2 2 0 0 1 3.44 2.06l-.1.2a11.5 11.5 0 0 1-2.3 3.15c-1.63 1.6-4.24 3.3-8.62 4.86-3.37 1.2-6.09 1.9-8.68 1.93-2.66.01-5-.7-7.65-2.03-2.5-1.26-4.38-3.74-5.7-6.02a29.85 29.85 0 0 1-2.4-5.4c-3.76-1.5-9.63-4.29-11.4-11.54a37.5 37.5 0 0 1-.76-11.51c.12-1.62.3-3.05.46-4.16l.02-.16.21-1.7a4.72 4.72 0 0 0-.47-.52c-.57-.55-1.4-1.2-2.39-1.92a168.1 168.1 0 0 0-3.06-2.22c-.98-.73-1.98-1.5-2.7-2.24-1.35-1.35-2.66-3.14-2.88-5.2-.26-2.32.88-4.37 3.18-5.91 4.46-3 10.78-2.8 16.69-.17 2.59 1.16 5.43 3.68 7.81 6.13a75 75 0 0 1 4.8 5.46c10.33-6.05 29.8-17.35 35.5-20.2 3.19-1.61 5.75-1.99 7.88-1.3 2.1.66 3.29 2.22 4 3.23 1.1 1.55 1.33 3.71.9 5.7a9.6 9.6 0 0 1-3.82 5.74 320.48 320.48 0 0 1-16.9 11.17 2 2 0 1 1-2.02-3.46c3.82-2.22 13.16-8.5 16.58-10.96a5.6 5.6 0 0 0 2.25-3.34c.27-1.24.01-2.16-.25-2.54-.65-.92-1.2-1.5-1.96-1.74Zm-63.05 24.42v-.02.02Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#82cb00"
                fill-rule="evenodd"
                d="M96.95 53.27a1 1 0 0 1 .97 1.03l-.66 25.11a1 1 0 1 1-2-.05l.66-25.11a1 1 0 0 1 1.03-.98Zm23.87 9.17a1 1 0 0 1 .25 1.4L107.14 83.8a1 1 0 0 1-1.64-1.15l13.93-19.97a1 1 0 0 1 1.39-.25Zm-48.03-2.17a1 1 0 0 1 1.38.35l12.46 20.9a1 1 0 1 1-1.72 1.02l-12.46-20.9a1 1 0 0 1 .34-1.37Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M115.7 98.64c1.95-.12 3.86.58 5.7 2.05a6.64 6.64 0 0 1 2.61 4.43c.1.78.07 1.57 0 2.24.35.27.71.6 1.06.92.83.8 1.75 1.84 2.35 2.74.86 1.28.95 2.8.86 3.9a10 10 0 0 1-.21 1.4c.92.73 2.08 1.68 2.82 2.42a4.45 4.45 0 0 1 1.17 2.58c.12.86.08 1.81-.05 2.75a15.93 15.93 0 0 1-2.06 5.77 10.19 10.19 0 0 1-2.95 2.88 29 29 0 0 1-3.87 2.2 41.2 41.2 0 0 1-6.83 2.61c-1.6.4-3.6.37-5.44.03-1.8-.34-3.81-1.07-5.16-2.4a5.06 5.06 0 0 1-1.33-4.58 8.64 8.64 0 0 1-3.64-2.21 5.53 5.53 0 0 1-1.42-5.78l-.29-.12a10.83 10.83 0 0 1-3.26-2.13c-1.72-1.71-1.53-3.91-.93-5.52a12.2 12.2 0 0 1 2.8-4.1 15.6 15.6 0 0 1 3.86-2.55 39.42 39.42 0 0 1 3-1.35c.23-.36.5-.72.77-1.04a38.65 38.65 0 0 1 5.48-5.13 9.24 9.24 0 0 1 4.96-2.02Zm.23 3.99a5.3 5.3 0 0 0-2.8 1.23 34.88 34.88 0 0 0-4.8 4.48 8.31 8.31 0 0 0-.62.88 2 2 0 0 1-1.14 1.08c-.77.29-2.04.81-3.28 1.44a12.5 12.5 0 0 0-2.85 1.81c-.8.8-1.53 1.8-1.86 2.68-.33.87-.14 1.13 0 1.27.5.5 1.24.95 2.05 1.3.8.35 1.53.56 1.9.63a2 2 0 0 1 1.17 3.22c-.24.3-.55.86-.64 1.45-.07.5.02.96.5 1.43a4.61 4.61 0 0 0 2.03 1.23 3.2 3.2 0 0 0 .96.11l.08-.01a2 2 0 0 1 2.2 2.98c-.2.32-.45.91-.52 1.5-.07.56.06.83.21.98a6.25 6.25 0 0 0 3.08 1.3c1.43.28 2.84.25 3.73.03 1.08-.27 3.6-1.14 6.06-2.33a25.2 25.2 0 0 0 3.33-1.89 6.47 6.47 0 0 0 1.81-1.66c.79-1.3 1.32-2.9 1.52-4.27.1-.69.1-1.24.05-1.63a1.3 1.3 0 0 0-.09-.35 44.2 44.2 0 0 0-3.45-2.85 2 2 0 0 1-.66-2.35 6.3 6.3 0 0 0 .4-1.7c.05-.74-.07-1.18-.2-1.38a14.48 14.48 0 0 0-2.68-2.83l-.08-.06a2 2 0 0 1-1.45-2.15l.08-.63c.09-.77.16-1.32.08-1.92-.08-.58-.31-1.18-1.13-1.83-1.26-1-2.23-1.23-3-1.2Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M119.9 113.07a20.25 20.25 0 0 1-4.11 4.48c-1.39 1.06-4 2.1-6.53 2.9a46.16 46.16 0 0 1-6.86 1.7l-.27-1.98c1.46-.2 4.01-.81 6.52-1.62 2.54-.81 4.85-1.76 5.92-2.59 1.29-.98 2.6-2.46 3.68-4.03a14.33 14.33 0 0 0 2.11-4.21l1.94.47a16.22 16.22 0 0 1-2.4 4.88Zm6.42 3.98c-.8 2.57-2.75 6.51-5.93 8.65-1.45.98-4.13 1.85-6.7 2.5a46.02 46.02 0 0 1-6.95 1.26l-.15-2a44.3 44.3 0 0 0 6.6-1.2c2.6-.65 4.95-1.46 6.08-2.22 2.64-1.77 4.4-5.2 5.14-7.58l1.91.6Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M155.28 40.72A81.02 81.02 0 0 0 49.1 33.41a2 2 0 1 1-2.41-3.19A85.02 85.02 0 0 1 161.34 154.7h13.35a2 2 0 1 1 0 4h-18a2 2 0 0 1-2-2v-18a2 2 0 0 1 4 0v12.96a81 81 0 0 0-3.41-110.93ZM21.3 37.31h18a2 2 0 0 1 2 2v18a2 2 0 1 1-4 0V44.35a81 81 0 0 0 110.47 117.56 2 2 0 0 1 2.46 3.15A85.02 85.02 0 0 1 34.66 41.31H21.31a2 2 0 0 1 0-4Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#82cb00"
                fill-rule="evenodd"
                d="M151.03 44.97a75.02 75.02 0 0 0-98.3-6.78 1 1 0 0 1-1.21-1.59 77.02 77.02 0 0 1 116.8 92.8 1 1 0 0 1-1.82-.8 75.03 75.03 0 0 0-15.47-83.63ZM29.95 64.1c.5.24.7.84.47 1.33a75.03 75.03 0 0 0 113.67 91.74 1 1 0 1 1 1.24 1.58A77.01 77.01 0 0 1 28.6 64.57a1 1 0 0 1 1.34-.47Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Unlimited passwords, unlimited devices
            </h2>
            <p>Cross platform access for mobile, browser, and desktop apps.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 200"
              style={{ width: "80%", height: "80%" }}
            >
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M35 97a18 18 0 0 1 18-18h94a18 18 0 0 1 18 18v15h-4V97a14 14 0 0 0-14-14H53a14 14 0 0 0-14 14v15h-4V97Zm4 61.5v7.5a14 14 0 0 0 14 14h94a14 14 0 0 0 14-14v-7.5h4v7.5a18 18 0 0 1-18 18H53a18 18 0 0 1-18-18v-7.5h4Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M100 22c-22.29 0-40 15.88-40 34.83V80h-4V56.83C56 35.2 76.01 18 100 18c23.98 0 44 17.1 44 38.83V80h-4V56.83C140 37.8 122.29 22 100 22ZM44.06 123.12a2 2 0 0 1 2 2v11.36a2 2 0 1 1-4 0v-11.36c0-1.1.9-2 2-2Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M56.9 132.36a2 2 0 0 1-1.29 2.51l-10.94 3.51a2 2 0 0 1-1.23-3.8l10.95-3.52a2 2 0 0 1 2.51 1.3Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M42.88 134.86a2 2 0 0 1 2.8.45l6.7 9.29a2 2 0 1 1-3.24 2.34l-6.7-9.29a2 2 0 0 1 .44-2.8Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M45.21 134.85a2 2 0 0 1 .48 2.79l-6.61 9.29a2 2 0 0 1-3.26-2.32l6.6-9.29a2 2 0 0 1 2.8-.47Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M31.31 132.35a2 2 0 0 1 2.52-1.28l10.84 3.5a2 2 0 1 1-1.23 3.81l-10.84-3.5a2 2 0 0 1-1.29-2.53Zm49.71-9.23a2 2 0 0 1 2 2v11.36a2 2 0 1 1-4 0v-11.36c0-1.1.9-2 2-2Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M93.76 132.35a2 2 0 0 1-1.29 2.52l-10.84 3.51a2 2 0 1 1-1.23-3.8l10.84-3.51a2 2 0 0 1 2.52 1.28Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M79.85 134.86a2 2 0 0 1 2.79.45l6.7 9.29a2 2 0 1 1-3.23 2.34l-6.72-9.29a2 2 0 0 1 .46-2.8Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M82.19 134.86a2 2 0 0 1 .45 2.79l-6.71 9.3a2 2 0 0 1-3.25-2.35l6.71-9.3a2 2 0 0 1 2.8-.44Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M68.27 132.35a2 2 0 0 1 2.52-1.28l10.84 3.5a2 2 0 1 1-1.23 3.81l-10.84-3.5a2 2 0 0 1-1.29-2.53Zm36.87 13.42c0-1.1.9-2 2-2h21.68a2 2 0 0 1 0 4h-21.68a2 2 0 0 1-2-2Zm36.96 0c0-1.1.9-2 2-2h21.68a2 2 0 0 1 0 4H144.1a2 2 0 0 1-2-2Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#82cb00"
                fill-rule="evenodd"
                d="M15 135.5A25.5 25.5 0 0 1 40.5 110h119a25.5 25.5 0 0 1 0 51h-119A25.5 25.5 0 0 1 15 135.5ZM40.5 114a21.5 21.5 0 0 0 0 43h119a21.5 21.5 0 0 0 0-43h-119Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Protect what&apos;s important to you</h2>
            <p>
              Zero knowledge, end-to-end encryption guides the CoilCrypt open
              source approach to trust, accountability, and security.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl pt-16 pb-12 text-center">
        CoilCrypt helps businesses run quickly and securely
      </h1>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 pb-16">
        <div className="card w-full md:w-96 bg-base-200">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              University of Toronto Press solves for efficient password sharing
              with CoilCrypt
            </h2>
            <p>
              Robust password management, secure sharing, and powerful
              application commands simplify workflows and enhance security for
              one of North America’s largest university presses.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-full md:w-96 bg-base-200">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              High-growth delivery startup Glovo boosts password security and
              compliance with CoilCrypt
            </h2>
            <p>
              Open source transparency, end-to-end encryption, and
              cross-platform accessibility were reasons why Glovo selected
              CoilCrypt for secure password management.{" "}
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-base-200">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Case Study - How Intesys uses CoilCrypt for business collaboration
            </h2>
            <p>
              Intesys chose CoilCrypt primarily because of the open source
              nature of the software and the opportunity to use it on-premises.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
