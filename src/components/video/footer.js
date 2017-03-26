import React from 'react'
import { Link } from 'react-router'
import 'ASSET/scss/footer.scss'
/**
 * 底部
 */
const Footer = _ => (
    <footer class="footer">
      <Link to="/">
        <div class="bottom-logo" />
      </Link>
      <img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.9c58110c.png" class="qrcode" />
      <div class="qr-tips">长按二维码关注「开眼 Eyepetizer」微信公众号</div>
    </footer>
)

export default Footer