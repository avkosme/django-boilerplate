export class Preloader {
  hidePreloader() {
    try {
      document.getElementById("preloader").style.display = "none";
    } catch (error) {}
  }

  showPreloader() {
    try {
      document.getElementById("preloader").style.display = "block";
    } catch (error) {}
  }
}
