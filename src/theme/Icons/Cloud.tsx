import React from "react";
import { IconProps } from "../../@types";
import Svg, { Path } from "react-native-svg";

const Cloud = ({ width = 128, height = 169, style }: IconProps) => {
  return (
    <Svg
      width={width}
      height="169"
      viewBox="0 0 128 169"
      fill="none"
      style={style}
    >
      <Path
        d="M29.074 163.614V165H23.512V152.526H25.132V163.614H29.074ZM32.4579 165H30.9099V155.55H32.4579V165ZM31.6839 153.876C31.4079 153.876 31.1679 153.786 30.9639 153.606C30.7719 153.414 30.6759 153.162 30.6759 152.85C30.6759 152.538 30.7719 152.292 30.9639 152.112C31.1679 151.92 31.4079 151.824 31.6839 151.824C31.9599 151.824 32.1939 151.92 32.3859 152.112C32.5899 152.292 32.6919 152.538 32.6919 152.85C32.6919 153.162 32.5899 153.414 32.3859 153.606C32.1939 153.786 31.9599 153.876 31.6839 153.876ZM40.8852 164.73C40.8852 165.402 40.7952 165.966 40.6152 166.422C40.4472 166.89 40.2132 167.268 39.9132 167.556C39.6132 167.844 39.2592 168.054 38.8512 168.186C38.4552 168.318 38.0292 168.384 37.5732 168.384C37.1892 168.384 36.8052 168.342 36.4212 168.258C36.0372 168.174 35.6832 168.048 35.3592 167.88L35.6832 166.584C35.8992 166.704 36.1632 166.812 36.4752 166.908C36.7872 167.004 37.1112 167.052 37.4472 167.052C38.0352 167.052 38.4972 166.884 38.8332 166.548C39.1692 166.212 39.3372 165.636 39.3372 164.82V164.37C39.1452 164.454 38.9412 164.526 38.7252 164.586C38.5092 164.634 38.2632 164.658 37.9872 164.658C36.8592 164.658 36.0312 164.274 35.5032 163.506C34.9872 162.726 34.7292 161.628 34.7292 160.212C34.7292 159.456 34.7952 158.778 34.9272 158.178C35.0712 157.566 35.2872 157.05 35.5752 156.63C35.8752 156.198 36.2592 155.874 36.7272 155.658C37.1952 155.43 37.7652 155.316 38.4372 155.316C38.8812 155.316 39.3132 155.364 39.7332 155.46C40.1652 155.544 40.5492 155.658 40.8852 155.802V164.73ZM39.3372 156.81C39.1692 156.762 39.0072 156.732 38.8512 156.72C38.6952 156.696 38.5512 156.684 38.4192 156.684C37.6992 156.684 37.1712 156.96 36.8352 157.512C36.5112 158.064 36.3492 158.964 36.3492 160.212C36.3492 161.34 36.5112 162.138 36.8352 162.606C37.1592 163.062 37.6212 163.29 38.2212 163.29C38.4252 163.29 38.6172 163.266 38.7972 163.218C38.9892 163.17 39.1692 163.104 39.3372 163.02V156.81ZM43.6716 165V151.302L45.2196 151.032V155.604C45.4476 155.532 45.6936 155.472 45.9576 155.424C46.2336 155.376 46.5096 155.352 46.7856 155.352C47.1816 155.352 47.5536 155.418 47.9016 155.55C48.2496 155.67 48.5496 155.88 48.8016 156.18C49.0656 156.48 49.2696 156.888 49.4136 157.404C49.5696 157.908 49.6476 158.538 49.6476 159.294V165H48.0996V159.42C48.0996 158.484 47.9796 157.8 47.7396 157.368C47.4996 156.936 47.0496 156.72 46.3896 156.72C46.0416 156.72 45.6516 156.78 45.2196 156.9V165H43.6716ZM53.7952 155.55H56.1712V156.882H53.7952V162.084C53.7952 162.732 53.9092 163.188 54.1372 163.452C54.3772 163.704 54.6952 163.83 55.0912 163.83C55.2952 163.83 55.4872 163.8 55.6672 163.74C55.8592 163.68 56.0212 163.608 56.1532 163.524L56.4592 164.766C55.9672 165.054 55.4452 165.198 54.8932 165.198C54.0052 165.198 53.3392 164.952 52.8952 164.46C52.4632 163.956 52.2472 163.128 52.2472 161.976V153.012L53.7952 152.742V155.55ZM69.628 158.754C69.628 159.918 69.502 160.908 69.25 161.724C69.01 162.528 68.656 163.182 68.188 163.686C67.732 164.19 67.174 164.556 66.514 164.784C65.866 165.012 65.14 165.126 64.336 165.126C63.52 165.126 62.656 165.018 61.744 164.802V152.706C62.2 152.61 62.644 152.532 63.076 152.472C63.508 152.412 63.922 152.382 64.318 152.382C65.134 152.382 65.866 152.496 66.514 152.724C67.174 152.952 67.732 153.318 68.188 153.822C68.656 154.326 69.01 154.986 69.25 155.802C69.502 156.606 69.628 157.59 69.628 158.754ZM67.9 158.754C67.9 157.866 67.834 157.11 67.702 156.486C67.57 155.862 67.366 155.352 67.09 154.956C66.814 154.56 66.448 154.272 65.992 154.092C65.548 153.912 65.014 153.822 64.39 153.822C64.222 153.822 64.054 153.828 63.886 153.84C63.718 153.852 63.544 153.87 63.364 153.894V163.614C63.544 163.638 63.718 163.656 63.886 163.668C64.054 163.68 64.216 163.686 64.372 163.686C65.008 163.686 65.548 163.596 65.992 163.416C66.436 163.236 66.796 162.954 67.072 162.57C67.36 162.174 67.57 161.664 67.702 161.04C67.834 160.416 67.9 159.654 67.9 158.754ZM76.1111 156.954C75.7271 156.786 75.2951 156.702 74.8151 156.702C74.3711 156.702 73.9571 156.78 73.5731 156.936V165H72.0251V155.964C72.3731 155.796 72.7691 155.658 73.2131 155.55C73.6691 155.43 74.1671 155.37 74.7071 155.37C74.9951 155.37 75.2831 155.388 75.5711 155.424C75.8591 155.46 76.1291 155.526 76.3811 155.622L76.1111 156.954ZM79.4793 165H77.9313V155.55H79.4793V165ZM78.7053 153.876C78.4293 153.876 78.1893 153.786 77.9853 153.606C77.7933 153.414 77.6973 153.162 77.6973 152.85C77.6973 152.538 77.7933 152.292 77.9853 152.112C78.1893 151.92 78.4293 151.824 78.7053 151.824C78.9813 151.824 79.2153 151.92 79.4073 152.112C79.6113 152.292 79.7133 152.538 79.7133 152.85C79.7133 153.162 79.6113 153.414 79.4073 153.606C79.2153 153.786 78.9813 153.876 78.7053 153.876ZM86.6287 156.702C86.3647 157.146 86.0647 157.674 85.7287 158.286C85.3927 158.898 85.0567 159.528 84.7207 160.176C84.3967 160.812 84.0847 161.442 83.7847 162.066C83.4967 162.678 83.2627 163.212 83.0827 163.668H86.7547V165H81.4807V163.884C81.6727 163.356 81.9187 162.768 82.2187 162.12C82.5187 161.472 82.8307 160.824 83.1547 160.176C83.4907 159.528 83.8147 158.916 84.1267 158.34C84.4507 157.752 84.7267 157.266 84.9547 156.882H81.6967V155.55H86.6287V156.702ZM93.0447 156.702C92.7807 157.146 92.4807 157.674 92.1447 158.286C91.8087 158.898 91.4727 159.528 91.1367 160.176C90.8127 160.812 90.5007 161.442 90.2007 162.066C89.9127 162.678 89.6787 163.212 89.4987 163.668H93.1707V165H87.8967V163.884C88.0887 163.356 88.3347 162.768 88.6347 162.12C88.9347 161.472 89.2467 160.824 89.5707 160.176C89.9067 159.528 90.2307 158.916 90.5427 158.34C90.8667 157.752 91.1427 157.266 91.3707 156.882H88.1127V155.55H93.0447V156.702ZM97.5708 165.18C96.6828 165.156 96.0468 164.94 95.6628 164.532C95.2788 164.112 95.0868 163.452 95.0868 162.552V151.302L96.6348 151.032V162.588C96.6348 163.008 96.7188 163.314 96.8868 163.506C97.0548 163.686 97.3488 163.812 97.7688 163.884L97.5708 165.18ZM100.562 160.734C100.574 161.19 100.616 161.61 100.688 161.994C100.76 162.366 100.874 162.696 101.03 162.984C101.198 163.26 101.414 163.476 101.678 163.632C101.954 163.788 102.302 163.866 102.722 163.866C103.07 163.866 103.388 163.818 103.676 163.722C103.976 163.614 104.192 163.524 104.324 163.452L104.612 164.694C104.456 164.802 104.192 164.916 103.82 165.036C103.46 165.168 103.028 165.234 102.524 165.234C101.864 165.234 101.306 165.114 100.85 164.874C100.406 164.634 100.04 164.298 99.7517 163.866C99.4757 163.434 99.2777 162.918 99.1577 162.318C99.0377 161.718 98.9777 161.058 98.9777 160.338C98.9777 158.598 99.2657 157.326 99.8417 156.522C100.418 155.718 101.18 155.316 102.128 155.316C103.196 155.316 103.952 155.718 104.396 156.522C104.84 157.326 105.062 158.454 105.062 159.906C105.062 160.038 105.062 160.176 105.062 160.32C105.062 160.452 105.056 160.59 105.044 160.734H100.562ZM102.128 156.63C101.612 156.63 101.234 156.888 100.994 157.404C100.766 157.92 100.628 158.61 100.58 159.474H103.442C103.442 158.598 103.352 157.908 103.172 157.404C102.992 156.888 102.644 156.63 102.128 156.63Z"
        fill="#616161"
      />
      <Path
        d="M42.6667 101.333V112"
        stroke="black"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M42.6667 69.3334V80"
        stroke="black"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M85.3333 101.333V112"
        stroke="black"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M85.3333 69.3334V80"
        stroke="black"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M64 112V122.667"
        stroke="black"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M64 80V90.6667"
        stroke="black"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M106.667 88.4266C112.273 85.9711 116.865 81.6616 119.67 76.2215C122.475 70.7814 123.323 64.5419 122.073 58.5503C120.822 52.5587 117.548 47.1798 112.8 43.3164C108.053 39.4531 102.121 37.3405 96 37.3333H89.28C87.5894 30.7868 84.3672 24.7357 79.879 19.6789C75.3908 14.6221 69.765 10.7044 63.4654 8.24862C57.1659 5.79287 50.3729 4.8694 43.6463 5.55434C36.9198 6.23929 30.4523 8.51303 24.7771 12.1882C19.1018 15.8633 14.3812 20.8346 11.0043 26.6922C7.62746 32.5499 5.69107 39.1262 5.35475 45.8792C5.01843 52.6321 6.2918 59.3683 9.06991 65.5325C11.848 71.6967 16.0513 77.1125 21.3334 81.3333"
        stroke="black"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Cloud;
