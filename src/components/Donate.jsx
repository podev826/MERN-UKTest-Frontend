export default function Donate() {
    return (
        <section id="paypal_donations-2" className="mb-5">
            <h4 className="mb-5">Support this project</h4>
            <p>
                <b><font size="3">
                    Lifeintheuktestweb has been created as a free source to help migrants prepare for the British Citizenship test.
                    If you like this project and would like to help us maintain it please donate.
                    <font color="#1E90FF">Thanks and good luck! </font>
                    <font color="red">ツ </font></font></b>
            </p>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <div>
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="bn" value="TipsandTricks_SP" />
                    <input type="hidden" name="business" value="TAGCADZMBLZVL" />
                    <input type="hidden" name="return" value="https://lifeintheuktestweb.co.uk/donations/" />
                    <input type="hidden" name="rm" value="0" />
                    <input type="hidden" name="currency_code" value="GBP" />
                    <input type="image" style={{ cursor: "pointer" }} src="/images/btn_donate_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online." />
                    <img alt="" src="/images/pixel.gif" width="1" height="1" />
                </div>
            </form>

            <div style={{ clear: "both" }}></div>
        </section >
    )
}