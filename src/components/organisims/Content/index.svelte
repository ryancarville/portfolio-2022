<div>
 <slot></slot>
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    grid-gap: 1.5em;
    padding: 1em ;
  }
  div:nth-child(even) {
    background-color:#BADA55;
    color: white
  }
  @media only screen and (min-width: 700px) {
    div {
      flex-direction: row;
    }
  }
</style>