<template>
  <header class="header center">
    <div class="header-title">
      <router-link class="header-title__head" :to="{ name: 'Main' }">ФОТОГРАФ</router-link>
      <router-link class="header-title__subhead" :to="{ name: 'Main' }">ПАВЕЛ ДОКУЧАЕВ</router-link>
    </div>
    <nav class="header-links">
      <router-link class="header-links__item" :to="{ name: 'Main' }">ГЛАВНАЯ</router-link>
      <router-link class="header-links__item" :to="{ name: 'Author' }">ОБ&nbsp;АВТОРЕ</router-link>
      <Menu as="div" class="relative inline-block text-left">
        <MenuButton class="header-links__btn">ПРОЕКТЫ</MenuButton>
        <MenuItems class="header-links__menuitems">
          <MenuItem v-slot="{ active }">
          <a class="header-links__menuitems-el" :class='{ "bg-blue-500": active }'
            @click="$router.push('/macho-na-dosuge')">
            МАЧО НА&nbsp;ДОСУГЕ
          </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <a class="header-links__menuitems-el" :class='{ "bg-blue-500": active }'
            @click="$router.push('/pacan-k-uspehu-shel')">
            ПАЦАН К&nbsp;УСПЕХУ ШЕЛ ИЛИ 12&nbsp;СОВЕТОВ,<br />КАК СТАТЬ УСПЕШНЫМ
          </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <a class="header-links__menuitems-el" :class='{ "bg-blue-500": active }'
            @click="$router.push('/kostyanoy-yazik')">
            КОСТЯНОЙ ЯЗЫК
          </a>
          </MenuItem>
        </MenuItems>
      </Menu>
      <router-link class="header-links__item" :to="{ name: 'Contacts' }">КОНТАКТЫ</router-link>
    </nav>
  </header>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;

  &-title {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__head {
      color: rgb(92, 92, 92);
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding-right: 20px;
    }

    &__subhead {
      color: rgb(92, 92, 92);
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-left: solid 3px rgb(92, 92, 92);
      padding-left: 10px;
    }
  }

  &-links {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: baseline;
    gap: 10px;

    &__item {
      padding: 20px;
      color: rgb(92, 92, 92);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    &__btn {
      display: flex;
      align-items: center;
      padding: 20px;
      color: rgb(92, 92, 92);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      background-color: rgb(255, 254, 242);
      border: none;
      cursor: pointer;
    }

    &__btn:hover {
      color: black;
      transition: all .3s ease-in-out;
    }

    .header-links__menuitems {
      padding: 20px;
      color: rgb(92, 92, 92);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: rgb(255, 254, 242);
      box-shadow: 10px 10px 5px rgba(92, 92, 92, 0.21);
      position: absolute;
      top: 75px;
      max-width: 300px;

      &-el {
        cursor: pointer;
      }
    }
  }
}
</style>