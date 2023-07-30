import { USER } from "@/constants"
import Image from "next/image"

export function UserSidebar() {
  return (
    <aside className="flex flex-col gap-2 py-5 px-10 items-center border-white/[.25] border-2 rounded-xl h-full">
      <Image
        src="/images/profile.png"
        width={96}
        height={96}
        className="object-contain aspect-square rounded-full"
        alt="Profile picture"
      />
      <article className="flex items-center gap-2 flex-col">
        <h2 className="text-2xl font-bold">{USER.name}</h2>
        <div className="flex gap-2 text-[#FCBD47]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g filter="url(#filter0_i_25_3806)">
              <path
                d="M12.4392 20.9529C17.3837 20.9529 21.392 16.9446 21.392 12C21.392 7.05551 17.3837 3.04718 12.4392 3.04718C7.49466 3.04718 3.48633 7.05551 3.48633 12C3.48633 16.9446 7.49466 20.9529 12.4392 20.9529Z"
                fill="url(#paint0_linear_25_3806)"
              />
            </g>
            <g filter="url(#filter1_iiii_25_3806)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4395 23.5C18.7908 23.5 23.9395 18.3514 23.9395 12C23.9395 5.64861 18.7908 0.5 12.4395 0.5C6.08807 0.5 0.939453 5.64944 0.939453 12.0008C0.939453 18.3514 6.08807 23.5 12.4395 23.5ZM12.4395 20.9529C17.3839 20.9529 21.3923 16.9444 21.3923 12C21.3923 7.05555 17.3839 3.04796 12.4395 3.04796C7.495 3.04796 3.48659 7.05555 3.48659 12C3.48659 16.9444 7.495 20.9537 12.4395 20.9537V20.9529Z"
                fill="url(#paint1_linear_25_3806)"
              />
            </g>
            <g filter="url(#filter2_f_25_3806)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.42756 7.80219C7.35734 7.84685 7.29954 7.90853 7.25953 7.9815C7.21952 8.05447 7.19859 8.13636 7.19869 8.21958V8.45009C7.19872 8.5504 7.23538 8.64725 7.30177 8.72244C7.36817 8.79763 7.45974 8.84599 7.55928 8.85842V15.1127H7.47036C7.34282 15.1128 7.21892 15.1552 7.11806 15.2332C7.0172 15.3113 6.94509 15.4206 6.91302 15.544L6.65782 16.5204C6.64196 16.5813 6.64027 16.645 6.65288 16.7066C6.66548 16.7682 6.69204 16.8262 6.73051 16.8759C6.76899 16.9257 6.81836 16.966 6.87483 16.9937C6.9313 17.0214 6.99337 17.0358 7.05627 17.0358H17.3058C17.3677 17.0359 17.4289 17.022 17.4847 16.9951C17.5405 16.9683 17.5896 16.9292 17.6282 16.8808C17.6668 16.8324 17.694 16.7758 17.7077 16.7154C17.7214 16.655 17.7214 16.5923 17.7075 16.532L17.4836 15.5597C17.4543 15.4325 17.3827 15.3191 17.2806 15.2379C17.1785 15.1566 17.0518 15.1125 16.9213 15.1127H16.8332V8.85595C16.9299 8.84068 17.018 8.79143 17.0817 8.71704C17.1454 8.64266 17.1804 8.54801 17.1806 8.45009V8.21958C17.1808 8.13644 17.16 8.05459 17.1201 7.98163C17.0803 7.90867 17.0226 7.84695 16.9526 7.80219L12.521 4.98256C12.422 4.91956 12.307 4.88611 12.1897 4.88611C12.0723 4.88611 11.9573 4.91956 11.8583 4.98256L7.42756 7.80302V7.80219ZM15.5086 15.1127V8.86172H14.1832V15.1127H15.5086ZM12.8585 15.1127V8.86172H11.5331V15.1127H12.8585ZM10.2085 15.1127V8.86172H8.88389V15.1127H10.2085Z"
                fill="#DC7B3C"
              />
            </g>
            <g filter="url(#filter3_ii_25_3806)">
              <path
                d="M7.45703 7.98746C7.45698 7.90446 7.47785 7.82278 7.51771 7.74998C7.55756 7.67717 7.61512 7.61558 7.68507 7.5709L12.1166 4.75044C12.2157 4.68745 12.3306 4.65399 12.448 4.65399C12.5654 4.65399 12.6803 4.68745 12.7794 4.75044L17.2101 7.5709C17.2802 7.61548 17.3379 7.67703 17.3779 7.74984C17.4179 7.82266 17.4389 7.90439 17.439 7.98746V8.21797C17.439 8.32714 17.3956 8.43184 17.3184 8.50904C17.2412 8.58623 17.1365 8.6296 17.0273 8.6296H7.86866C7.75949 8.6296 7.65479 8.58623 7.57759 8.50904C7.5004 8.43184 7.45703 8.32714 7.45703 8.21797V7.98746Z"
                fill="#FFC546"
              />
            </g>
            <path
              d="M7.45703 7.98746C7.45698 7.90446 7.47785 7.82278 7.51771 7.74998C7.55756 7.67717 7.61512 7.61558 7.68507 7.5709L12.1166 4.75044C12.2157 4.68745 12.3306 4.65399 12.448 4.65399C12.5654 4.65399 12.6803 4.68745 12.7794 4.75044L17.2101 7.5709C17.2802 7.61548 17.3379 7.67703 17.3779 7.74984C17.4179 7.82266 17.4389 7.90439 17.439 7.98746V8.21797C17.439 8.32714 17.3956 8.43184 17.3184 8.50904C17.2412 8.58623 17.1365 8.6296 17.0273 8.6296H7.86866C7.75949 8.6296 7.65479 8.58623 7.57759 8.50904C7.5004 8.43184 7.45703 8.32714 7.45703 8.21797V7.98746Z"
              fill="url(#paint2_linear_25_3806)"
            />
            <path
              d="M7.81641 8.46247C7.81641 8.40788 7.83809 8.35553 7.87669 8.31693C7.91528 8.27834 7.96763 8.25665 8.02222 8.25665H8.93603C8.99061 8.25665 9.04296 8.27834 9.08156 8.31693C9.12016 8.35553 9.14184 8.40788 9.14184 8.46247V15.0616H7.81641V8.46247Z"
              fill="url(#paint3_linear_25_3806)"
            />
            <path
              d="M7.81641 8.46247C7.81641 8.40788 7.83809 8.35553 7.87669 8.31693C7.91528 8.27834 7.96763 8.25665 8.02222 8.25665H8.93603C8.99061 8.25665 9.04296 8.27834 9.08156 8.31693C9.12016 8.35553 9.14184 8.40788 9.14184 8.46247V15.0616H7.81641V8.46247Z"
              fill="url(#paint4_linear_25_3806)"
            />
            <path
              d="M10.4668 8.25665H11.7914V15.0616H10.4668V8.25665Z"
              fill="url(#paint5_linear_25_3806)"
            />
            <path
              d="M10.4668 8.25665H11.7914V15.0616H10.4668V8.25665Z"
              fill="url(#paint6_linear_25_3806)"
            />
            <path
              d="M13.1172 8.25665H14.4418V15.0616H13.1172V8.25665Z"
              fill="url(#paint7_linear_25_3806)"
            />
            <path
              d="M13.1172 8.25665H14.4418V15.0616H13.1172V8.25665Z"
              fill="url(#paint8_linear_25_3806)"
            />
            <path
              d="M15.7656 8.25665H17.0902V15.0616H15.7656V8.25665Z"
              fill="url(#paint9_linear_25_3806)"
            />
            <path
              d="M15.7656 8.25665H17.0902V15.0616H15.7656V8.25665Z"
              fill="url(#paint10_linear_25_3806)"
            />
            <g filter="url(#filter4_ii_25_3806)">
              <path
                d="M7.17001 15.312C7.20227 15.1885 7.27457 15.0793 7.37558 15.0014C7.47659 14.9235 7.60061 14.8813 7.72818 14.8814H17.1791C17.3095 14.8814 17.4359 14.9257 17.5379 15.0069C17.6399 15.088 17.7113 15.2014 17.7406 15.3284L17.9653 16.2999C17.9793 16.3603 17.9795 16.4231 17.9658 16.4836C17.9522 16.5441 17.925 16.6007 17.8864 16.6493C17.8477 16.6978 17.7986 16.737 17.7427 16.7639C17.6868 16.7907 17.6256 16.8046 17.5636 16.8045H7.31408C7.25118 16.8045 7.18911 16.7901 7.13264 16.7624C7.07617 16.7347 7.0268 16.6944 6.98832 16.6447C6.94985 16.5949 6.92329 16.537 6.91069 16.4754C6.89809 16.4137 6.89978 16.35 6.91563 16.2892L7.17001 15.312Z"
                fill="#FFC248"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_25_3806"
                x="3.23633"
                y="3.04718"
                width="18.1562"
                height="18.1557"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-0.25" dy="0.25" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.831373 0 0 0 0 0.45098 0 0 0 0 0.196078 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_25_3806"
                />
              </filter>
              <filter
                id="filter1_iiii_25_3806"
                x="0.639453"
                y="0.2"
                width="23.6"
                height="23.6"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.3" dy="0.3" />
                <feGaussianBlur stdDeviation="0.3" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.886275 0 0 0 0 0.662745 0 0 0 0 0.235294 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_25_3806"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.3" dy="-0.3" />
                <feGaussianBlur stdDeviation="0.3" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.956863 0 0 0 0 0.607843 0 0 0 0 0.294118 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_25_3806"
                  result="effect2_innerShadow_25_3806"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-0.3" />
                <feGaussianBlur stdDeviation="0.3" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.956863 0 0 0 0 0.607843 0 0 0 0 0.294118 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_25_3806"
                  result="effect3_innerShadow_25_3806"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-0.3" dy="0.3" />
                <feGaussianBlur stdDeviation="0.3" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.882353 0 0 0 0 0.337255 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_innerShadow_25_3806"
                  result="effect4_innerShadow_25_3806"
                />
              </filter>
              <filter
                id="filter2_f_25_3806"
                x="6.04453"
                y="4.28611"
                width="12.2742"
                height="13.3497"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.3"
                  result="effect1_foregroundBlur_25_3806"
                />
              </filter>
              <filter
                id="filter3_ii_25_3806"
                x="7.45703"
                y="4.40399"
                width="10.1324"
                height="4.47559"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-0.25" />
                <feGaussianBlur stdDeviation="0.25" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.980392 0 0 0 0 0.647059 0 0 0 0 0.172549 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_25_3806"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.15" dy="0.25" />
                <feGaussianBlur stdDeviation="0.25" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.980392 0 0 0 0 0.647059 0 0 0 0 0.172549 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_25_3806"
                  result="effect2_innerShadow_25_3806"
                />
              </filter>
              <filter
                id="filter4_ii_25_3806"
                x="6.65234"
                y="14.6314"
                width="11.5742"
                height="2.4231"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.25" dy="-0.25" />
                <feGaussianBlur stdDeviation="0.2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.992157 0 0 0 0 0.658824 0 0 0 0 0.0705882 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_25_3806"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-0.25" dy="0.25" />
                <feGaussianBlur stdDeviation="0.2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8 0 0 0 0 0.290196 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_25_3806"
                  result="effect2_innerShadow_25_3806"
                />
              </filter>
              <linearGradient
                id="paint0_linear_25_3806"
                x1="8.78642"
                y1="16.4769"
                x2="18.4596"
                y2="4.28206"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F19D48" />
                <stop offset="1" stop-color="#E89A44" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25_3806"
                x1="12.4395"
                y1="0.5"
                x2="12.4395"
                y2="23.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFC444" />
                <stop offset="1" stop-color="#FFC24B" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25_3806"
                x1="15.1668"
                y1="6.13433"
                x2="14.8317"
                y2="6.64227"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.459" stop-color="#FFCA3F" />
                <stop offset="1" stop-color="#FFCA3F" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25_3806"
                x1="7.9366"
                y1="10.8845"
                x2="8.58038"
                y2="10.8845"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.167" stop-color="#FFB33B" />
                <stop offset="1" stop-color="#FFC047" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25_3806"
                x1="9.14184"
                y1="12.2239"
                x2="8.82407"
                y2="12.2239"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.067" stop-color="#FFC34C" />
                <stop offset="1" stop-color="#FFC34C" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25_3806"
                x1="10.587"
                y1="10.8845"
                x2="11.23"
                y2="10.8845"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.167" stop-color="#FFB33B" />
                <stop offset="1" stop-color="#FFC047" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25_3806"
                x1="11.7914"
                y1="12.2239"
                x2="11.4745"
                y2="12.2239"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.067" stop-color="#FFC34C" />
                <stop offset="1" stop-color="#FFC34C" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_25_3806"
                x1="13.2374"
                y1="10.8845"
                x2="13.8803"
                y2="10.8845"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.167" stop-color="#FFB33B" />
                <stop offset="1" stop-color="#FFC047" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_25_3806"
                x1="14.4418"
                y1="12.2239"
                x2="14.1248"
                y2="12.2239"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.067" stop-color="#FFC34C" />
                <stop offset="1" stop-color="#FFC34C" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_25_3806"
                x1="15.8866"
                y1="10.8845"
                x2="16.5296"
                y2="10.8845"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.167" stop-color="#FFB33B" />
                <stop offset="1" stop-color="#FFC047" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_25_3806"
                x1="17.0911"
                y1="12.2239"
                x2="16.7741"
                y2="12.2239"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.067" stop-color="#FFC34C" />
                <stop offset="1" stop-color="#FFC34C" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          {USER.coins.toLocaleString("es-MX")}
        </div>
      </article>
    </aside>
  )
}
