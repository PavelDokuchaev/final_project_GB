<template>
  <footer class="footer center">
    <div class="footer-left">
      <h3 class="footer-left__title">&copy;&nbsp;2024 Павел Докучаев</h3>
      <h5 class="footer-left__text">
        Использование материалов c&nbsp;данного сайта допускается только при
        согласии автора
      </h5>
    </div>
    <div class="footer-right">
      <a class="footer-right__link" href="https://vk.com/pavel_ladan" target="_blank"><svg
          xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
          <path
            d="M45.763,35.202c-1.797-3.234-6.426-7.12-8.337-8.811c-0.523-0.463-0.579-1.264-0.103-1.776 c3.647-3.919,6.564-8.422,7.568-11.143C45.334,12.27,44.417,11,43.125,11l-3.753,0c-1.237,0-1.961,0.444-2.306,1.151 c-3.031,6.211-5.631,8.899-7.451,10.47c-1.019,0.88-2.608,0.151-2.608-1.188c0-2.58,0-5.915,0-8.28 c0-1.147-0.938-2.075-2.095-2.075L18.056,11c-0.863,0-1.356,0.977-0.838,1.662l1.132,1.625c0.426,0.563,0.656,1.248,0.656,1.951 L19,23.556c0,1.273-1.543,1.895-2.459,1.003c-3.099-3.018-5.788-9.181-6.756-12.128C9.505,11.578,8.706,11.002,7.8,11l-3.697-0.009 c-1.387,0-2.401,1.315-2.024,2.639c3.378,11.857,10.309,23.137,22.661,24.36c1.217,0.12,2.267-0.86,2.267-2.073l0-3.846 c0-1.103,0.865-2.051,1.977-2.079c0.039-0.001,0.078-0.001,0.117-0.001c3.267,0,6.926,4.755,8.206,6.979 c0.368,0.64,1.056,1.03,1.8,1.03l4.973,0C45.531,38,46.462,36.461,45.763,35.202z"
            fill="rgb(92, 92, 92)"></path>
        </svg>
      </a>
      <a class="footer-right__link" href="https://t.me/PavelTeplohod" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
          <path
            d="M25,8c9.389,0,17,7.611,17,17s-7.611,17-17,17S8,34.389,8,25S15.611,8,25,8z M30.864,31.93	c0.312-0.959,1.778-10.521,1.958-12.405c0.055-0.571-0.126-0.95-0.478-1.119c-0.427-0.205-1.06-0.103-1.794,0.162	c-1.007,0.363-13.876,5.827-14.62,6.144c-0.704,0.3-1.372,0.626-1.372,1.1c0,0.333,0.198,0.52,0.742,0.714	c0.566,0.202,1.992,0.634,2.834,0.866c0.811,0.224,1.734,0.03,2.251-0.292c0.548-0.341,6.878-4.576,7.332-4.947	c0.454-0.371,0.816,0.104,0.445,0.476c-0.371,0.371-4.715,4.588-5.289,5.172c-0.696,0.709-0.202,1.443,0.265,1.738	c0.533,0.336,4.365,2.906,4.943,3.319c0.578,0.412,1.162,0.599,1.699,0.599C30.316,33.456,30.597,32.749,30.864,31.93z"
            fill="rgb(92, 92, 92)"></path>
        </svg>
      </a>
      <a class="footer-right__link" href="https://instagram.com/pasha_pod?igshid=NGVhN2U2NjQ0Yg==" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
            fill="rgb(92, 92, 92)"></path>
        </svg></a>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 20px;

  &-left {

    &__title {
      color: rgb(92, 92, 92);
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 10px;
    }

    &__text {
      color: rgb(92, 92, 92);
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 10px;
    }
  }

  &-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

svg:hover path {
  fill: black;
  transition: all .3s ease-in-out;
}
</style>