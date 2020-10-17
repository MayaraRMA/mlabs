 <template>
  <div class="modal" v-if="showModal && movie">
    <div class="content">
      <img :src="movie.posterPath" alt="movie.title" />
      <h1 class="title">{{ movie.title }}</h1>
      <p class="info">
        <span>{{ movie.year }}</span>
        <span>{{ movie.genres }}</span>
        <span>{{ movie.runtime }}</span>
      </p>
      <FavoriteRanked :grade="movie.average" darkHeart />
      <p class="votes">({{ movie.voteCount }})</p>
      <p class="overview">{{ movie.overview }}</p>
      <button type="button" @click="close" class="close-modal">X</button>
    </div>
  </div>
</template>

<script>
import FavoriteRanked from "@/components/FavoriteRanked";

export default {
  name: "VdModal",
  components: {
    FavoriteRanked
  },
  props: {
    movie: {
      type: Object
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    open() {
      this.showModal = true;
      this.$emit("open");
    },
    close() {
      this.showModal = false;
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes show-down {
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.modal {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba($color: #000000, $alpha: 0.7);
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  z-index: 900;

  .content {
    width: 60%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--white);
    color: var(--gray-dark);
    border-radius: var(--space-xxs);
    padding: var(--space-lg);
    animation: show-down 0.5s ease-in;

    font-weight: bold;
    background: linear-gradient(var(--red-light) 20%, var(--white) 20% 80%);

    @media (max-width: 712px) {
      width: 90%;
      height: 95%;
      padding: var(--space);
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: var(--space-xxs);
    }
  }
}

.title {
  text-transform: uppercase;
  margin-top: var(--space);

  @media (max-width: 320px) {
    margin-top: var(--space-xxs);
    font-size: 1.2rem;
  }
}

.info {
  text-transform: uppercase;
  color: var(--gray);
  margin-top: var(--space-sm);
  font-size: 1rem;
  margin-bottom: var(--space);
  font-weight: normal;

  span:not(:last-child) {
    &::after {
      content: "\2022";
      padding: var(--space-xxs);
    }
  }
  @media (max-width: 516px) {
    margin: var(--space-xxs);
    font-size: 0.7rem;
  }
}

.votes {
  margin-top: var(--space-sm);
  margin-bottom: var(--space);
  color: var(--gray);
  font-weight: normal;

  @media (max-width: 516px) {
    margin: var(--space-xxs);
    font-size: 0.7rem;
  }
}

.overview {
  line-height: 30px;
  font-size: 1.2rem;
  text-align: left;

  @media (max-width: 516px) {
    line-height: 20px;
    font-size: 0.875rem;
    margin: var(--space-xxs) 0;
  }
}

.close-modal {
  position: absolute;
  width: 70px;
  height: 70px;
  top: -20px;
  right: -20px;
  border-radius: 50%;
  padding: 10px;
  font-size: 2rem;
  color: var(--gray-dark);
  border: none;

  &:hover {
    background-color: var(--background-hover);
  }

  @media (max-width: 516px) {
    width: 50px;
    height: 50px;
    top: -10px;
    right: -10px;
    font-size: 1.5rem;
  }
}
</style>
