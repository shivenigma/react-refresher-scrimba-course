import chef from './assets/chef.png'
export default function Header() {
    return (
        <div className="chef-header">
            <img src={chef} alt="Chef Icon"/>
            <h1>Chef Claude</h1>
        </div>
    )
}
