
const Footer = () => {
    return (
      <div>
          <footer className="footer md:p-10 bg-base-200 text-base-content">
    <nav>
      <header className="footer-title">WorkDay</header> 
      <a className="link link-hover">Admin</a> 
      <a className="link link-hover">HR </a> 
      <a className="link link-hover">Employees</a> 
    </nav> 
    <nav>
      <header className="footer-title">Company</header> 
      <a className="link link-hover">About us</a> 
      <a className="link link-hover">Contact</a> 
      <a className="link link-hover">Jobs</a> 
    </nav> 
    <nav>
      <header className="footer-title">Legal</header> 
      <a className="link link-hover">Terms of use</a> 
      <a className="link link-hover">Privacy policy</a> 
      <a className="link link-hover">Cookie policy</a>
    </nav> 
    <form>
      <header className="footer-title">Newsletter</header> 
      <fieldset className="form-control w-80">
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label> 
        <div className="relative">
          <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
          <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
      </div>
    )
  }
  
  export default Footer