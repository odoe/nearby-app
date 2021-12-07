<template>
    <footer>
      <aside>
        <nav>
          <calcite-button appearance="outline" color="blue" width="full" label="Home">
            <calcite-icon icon="home"></calcite-icon>
          </calcite-button>
          <calcite-button appearance="outline" color="blue" width="full" label="Map">
            <calcite-icon icon="layer"></calcite-icon>
          </calcite-button>
          <calcite-button appearance="outline" color="blue" width="full" label="Search">
            <calcite-icon icon="search"></calcite-icon>
          </calcite-button>
          <calcite-button appearance="outline" color="blue" width="full" label="User">
            <calcite-icon icon="user"></calcite-icon>
          </calcite-button>
        </nav>
      </aside>
    </footer>
</template>

<style>
nav {
  display: flex;
  width: 100%;
}

calcite-button {
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}

footer {
   flex-shrink: 0;
}
</style>
