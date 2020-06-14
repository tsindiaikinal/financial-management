<template>
  <div class="relative">
    <main>
      <app-diagram></app-diagram>
      <nav class="flex justify-between">
        <div>
          <span>Группировать: </span>
          <div class="inline-block relative w-48">
            <select
              class="block appearance-none w-full bg-white border hover:border-gray-500 px-4 py-2 pr-8 rounded-lg text-sm leading-tight focus:outline-none focus:shadow-outline"
            >
              <option class="" value="bydate"> По дате</option>
              <option value="bytime">По времени</option>
              <option value="byname">По имени</option>
              <option value="bypay">По оплате</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <span>Вид: </span>
          <div class="inline-block border">VIEW</div>
          <div class="inline-block border">
            <input class="w-8" type="date" name="" id="" />
          </div>
        </div>
        <div>
          <button
            class="bg-white active text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded-lg"
            active
          >
            Все операции
          </button>
          <button
            class="bg-white hover:bg-gray-100 text-color py-1 px-4 border border-gray-400 rounded-lg"
          >
            Будущие
          </button>
          <button
            class="bg-white hover:bg-gray-100 text-color py-1 px-4 border border-gray-400 rounded-lg"
          >
            Прошедшие
          </button>
        </div>
      </nav>
      <section class="stack w-full pt-10 pb-12" title="data">
        <!-- COMPONENTS -->
        <div class="w-full flex justify-between py-3 border-b">
          <div class="date-operation">Сегодня, 10 июля <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg></div>
          <app-add></app-add>
        </div>
        <app-opercard
        ard
          :nameBuyer="users[0].name"
          :nameResource="users[0].resource"
          :typeService="users[0].typeService"
          :status="users[0].status"
          :amountMoney="users[0].amountMoney"
        ></app-opercard>
        <app-opercard
          :nameBuyer="users[0].name"
          :nameResource="users[0].resource"
          :typeService="users[0].typeService"
          :status="users[0].status"
          :amountMoney="users[0].amountMoney"
        ></app-opercard>
        <app-copy></app-copy>
        <!-- <app-add></app-add> -->
      </section>
      <div class="absolute mt-8 flex justify-between w-3/4 ml-8 pr-2 pb-2">
        <app-operation></app-operation>
        <app-delete></app-delete>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data () {
    return {
      users: [
        {
          name: 'ИП Бирюков Михаил Алексеевич',
          resource: 'Сайт Volkswagen',
          typeService: 'Оплата за продвижение Google Adwords июнь-июль',
          status: 'Оплачено',
          amountMoney: '+21 239'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.active {
  background-color: #eeeeee;
}
</style>
