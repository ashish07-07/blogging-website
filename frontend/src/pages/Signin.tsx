import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";
export function Signin() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type={"signin"}></Auth>
        </div>
        <div className="invisible lg:visible col-span-1">
          <Quote></Quote>
        </div>
      </div>
    </div>
  );
}
