<template>
  <div id="global_footer">
    <nav>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="https://github.com/hedwig100" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://hedwig1001.hatenablog.com/" target="_blank">Blog</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#global_footer {
  border-top: 1px solid #cccccc;
  margin-top: 50px;
  padding: 10px;
  width: 100%;
}
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  border-left: 1px solid #cccccc;
}
nav ul li a {
  display: flex;
  padding: 6px 20px;
  height: 60px;
  width: 100px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
nav ul li a:visited {
  color: black;
}
nav ul li a:hover {
  opacity: 0.5;
}
nav ul li {
  border-right: 1px solid #cccccc;
}
</style>
