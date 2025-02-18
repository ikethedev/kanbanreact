export default function SideMenuToggle({ toggleSideMenu }) {
  return (
    <div>
      <div className="sidemenu__toggle-view">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.75589 0.244082C9.59969 0.087798 9.38769 0 9.16667 0C8.94566 0 8.73369 0.087798 8.57741 0.244082C8.42113 0.400362 8.33334 0.612322 8.33334 0.833332V1.66666C8.33334 1.88768 8.42113 2.09964 8.57741 2.25592C8.73369 2.4122 8.94566 2.5 9.16667 2.5C9.38769 2.5 9.59969 2.4122 9.75589 2.25592C9.91219 2.09964 9.99999 1.88768 9.99999 1.66666V0.833332C9.99999 0.612322 9.91219 0.400362 9.75589 0.244082ZM2.5 1.66684C2.27903 1.66684 2.06711 1.75461 1.91084 1.91083C1.75461 2.0671 1.66685 2.27903 1.66685 2.5C1.66685 2.72097 1.75461 2.93289 1.91084 3.08916L3.16084 4.33916C3.318 4.49096 3.52851 4.57496 3.747 4.57306C3.9655 4.57116 4.17451 4.48352 4.32902 4.32901C4.48352 4.17451 4.57117 3.9655 4.57306 3.747C4.57496 3.5285 4.49097 3.318 4.33917 3.16083L3.08917 1.91083C2.9329 1.75461 2.72097 1.66684 2.5 1.66684ZM16.6665 2.5C16.6665 2.27903 16.5787 2.0671 16.4225 1.91083C16.2662 1.75461 16.0543 1.66684 15.8333 1.66684C15.6124 1.66684 15.4005 1.75461 15.2442 1.91083L13.9942 3.16083C13.9146 3.2377 13.8511 3.32966 13.8074 3.43133C13.7638 3.533 13.7408 3.64235 13.7398 3.753C13.7388 3.86365 13.7599 3.97338 13.8018 4.07579C13.8437 4.17821 13.9056 4.27125 13.9838 4.34949C14.0621 4.42774 14.1551 4.48962 14.2576 4.53152C14.36 4.57342 14.4697 4.5945 14.5803 4.59354C14.691 4.59258 14.8003 4.56959 14.902 4.52592C15.0037 4.48224 15.0956 4.41876 15.1725 4.33916L16.4225 3.08916C16.5787 2.93289 16.6665 2.72097 16.6665 2.5ZM0.244077 8.57741C0.087797 8.73369 0 8.94565 0 9.16666C0 9.38767 0.087797 9.59967 0.244077 9.75587C0.400357 9.91217 0.612317 9.99997 0.833337 9.99997H1.66667C1.88768 9.99997 2.09964 9.91217 2.25593 9.75587C2.41221 9.59967 2.5 9.38767 2.5 9.16666C2.5 8.94565 2.41221 8.73369 2.25593 8.57741C2.09964 8.42113 1.88768 8.33333 1.66667 8.33333H0.833337C0.612317 8.33333 0.400357 8.42113 0.244077 8.57741ZM16.0774 8.57741C15.9211 8.73369 15.8333 8.94565 15.8333 9.16666C15.8333 9.38767 15.9211 9.59967 16.0774 9.75587C16.2337 9.91217 16.4457 9.99997 16.6667 9.99997H17.5C17.721 9.99997 17.933 9.91217 18.0893 9.75587C18.2455 9.59967 18.3333 9.38767 18.3333 9.16666C18.3333 8.94565 18.2455 8.73369 18.0893 8.57741C17.933 8.42113 17.721 8.33333 17.5 8.33333H16.6667C16.4457 8.33333 16.2337 8.42113 16.0774 8.57741ZM4.58316 14.5834C4.58316 14.3624 4.49539 14.1505 4.33917 13.9942C4.1829 13.838 3.97097 13.7502 3.75 13.7502C3.52903 13.7502 3.31711 13.838 3.16084 13.9942L1.91084 15.2442C1.75904 15.4014 1.67504 15.6119 1.67694 15.8304C1.67884 16.0489 1.76648 16.2579 1.92099 16.4124C2.07549 16.5669 2.2845 16.6545 2.503 16.6564C2.7215 16.6583 2.932 16.5743 3.08917 16.4225L4.33917 15.1725C4.49539 15.0163 4.58316 14.8043 4.58316 14.5834ZM14.5833 13.7502C14.3624 13.7502 14.1505 13.838 13.9942 13.9942C13.838 14.1505 13.7502 14.3624 13.7502 14.5834C13.7502 14.8043 13.838 15.0163 13.9942 15.1725L15.2442 16.4225C15.4013 16.5743 15.6118 16.6583 15.8303 16.6564C16.0488 16.6545 16.2579 16.5669 16.4124 16.4124C16.5669 16.2579 16.6545 16.0489 16.6564 15.8304C16.6583 15.6119 16.5743 15.4014 16.4225 15.2442L15.1725 13.9942C15.0162 13.838 14.8043 13.7502 14.5833 13.7502ZM9.75589 16.0774C9.59969 15.9212 9.38769 15.8334 9.16667 15.8334C8.94566 15.8334 8.73369 15.9212 8.57741 16.0774C8.42113 16.2337 8.33334 16.4457 8.33334 16.6667V17.5C8.33334 17.721 8.42113 17.933 8.57741 18.0893C8.73369 18.2456 8.94566 18.3334 9.16667 18.3334C9.38769 18.3334 9.59969 18.2456 9.75589 18.0893C9.91219 17.933 9.99999 17.721 9.99999 17.5V16.6667C9.99999 16.4457 9.91219 16.2337 9.75589 16.0774ZM6.22039 6.22039C7.00179 5.43899 8.0616 5 9.16667 5C10.2717 5 11.3316 5.43899 12.113 6.22039C12.8944 7.00179 13.3333 8.0616 13.3333 9.16666C13.3333 10.2718 12.8944 11.3316 12.113 12.113C11.3316 12.8944 10.2717 13.3334 9.16667 13.3334C8.0616 13.3334 7.00179 12.8944 6.22039 12.113C5.43899 11.3316 5 10.2718 5 9.16666C5 8.0616 5.43899 7.00179 6.22039 6.22039Z"
            fill="#828FA3"
          />
        </svg>
        <div className="view__toggle-btn"> </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9084 10.3678C15.3159 10.1878 15.8017 10.5328 15.6317 10.9378C14.4717 13.7128 11.6884 15.667 8.43845 15.667C4.14592 15.667 0.666748 12.2578 0.666748 8.05204C0.666748 4.51121 3.13342 1.53454 6.47425 0.682041C6.90758 0.572041 7.19175 1.08871 6.95508 1.46204C6.33663 2.43618 6.00881 3.5665 6.01008 4.72038C6.01008 8.13788 8.83675 10.9078 12.3242 10.9078C13.2137 10.9093 14.0938 10.7254 14.9084 10.3678ZM10.5017 1.4262C10.2075 0.984541 10.7342 0.457871 11.1759 0.752871L11.9634 1.27787C12.2827 1.49084 12.6579 1.6045 13.0417 1.6045C13.4255 1.6045 13.8007 1.49084 14.12 1.27787L14.9067 0.752871C15.3492 0.457871 15.8759 0.984541 15.5809 1.4262L15.0559 2.2137C14.8429 2.53301 14.7292 2.90822 14.7292 3.29204C14.7292 3.67585 14.8429 4.05107 15.0559 4.37037L15.5809 5.15787C15.8759 5.59954 15.3492 6.1262 14.9075 5.8312L14.12 5.3062C13.8007 5.09323 13.4255 4.97958 13.0417 4.97958C12.6579 4.97958 12.2827 5.09323 11.9634 5.3062L11.1767 5.8312C10.735 6.1262 10.2075 5.59954 10.5017 5.15787L11.0267 4.37037C11.2397 4.05107 11.3533 3.67585 11.3533 3.29204C11.3533 2.90822 11.2397 2.53301 11.0267 2.2137L10.5017 1.4262Z"
            fill="#828FA3"
          />
        </svg>
      </div>
      <div className="sidemenu__toggle-hide">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.7923 8.76153C16.7538 10.5238 15.1854 11.941 13.3062 12.8081L14.8099 14.9563C14.9286 15.1259 14.8874 15.3598 14.7177 15.4785L14.0697 15.9322C13.9 16.051 13.6662 16.0097 13.5474 15.84L3.19013 1.04373C3.07135 0.874074 3.11263 0.64023 3.28229 0.521481L3.93032 0.067825C4.09998 -0.050956 4.33382 -0.00967486 4.45257 0.159981L6.18775 2.63888C7.08163 2.38573 8.02525 2.25001 9 2.25001C12.7456 2.25001 16.0311 4.24982 17.7923 7.23847C18.0692 7.7084 18.0692 8.2916 17.7923 8.76153ZM1.50001 8C2.99714 10.5406 5.79513 12.25 9 12.25C9.07946 12.2499 9.15892 12.2487 9.23834 12.2465L10.239 13.676C9.82784 13.7253 9.4141 13.75 9 13.75C5.25438 13.75 1.96889 11.7502 0.207702 8.76156C-0.069234 8.29163 -0.069234 7.7084 0.207702 7.23847C0.997544 5.89816 2.09379 4.75732 3.4001 3.90623L4.26076 5.13569C3.12813 5.86432 2.17986 6.84635 1.50001 8ZM8.52194 11.2231C6.00685 10.9415 4.26532 8.50791 4.86788 6.00303L8.52194 11.2231ZM9.74494 3.78104C12.6351 4.02282 15.1201 5.65835 16.5 8C15.5721 9.57456 14.1446 10.8297 12.4302 11.5566L11.596 10.3649C13.2731 9.06931 13.7072 6.7886 12.75 4.99869L12.75 5C12.75 5.9665 11.9665 6.75 11 6.75C10.0335 6.75 9.25 5.9665 9.25 5C9.25 4.52594 9.43881 4.09619 9.74494 3.78104Z"
            fill="#828FA3"
          />
        </svg>
        <p>Hide Sidebar</p>
      </div>
    </div>
  );
}
