import React from 'react';
import Axios from 'axios';
import CardManager from '../utilities/CardManager';


class PageDetail extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            product: {}
        };
    }
       

    async componentDidMount() {
        const res = await Axios.get(`/api/products/${this.props.match.params.id}`);
        this.setState({ product: res.data })
    };


    onClickHandler = () => {
        CardManager.addProduct(this.state.product._id);
        this.props.history.push('/Cart');
    }


    discountPrice = () => {
        if(this.state.product.discountPercentage >= 0) {
            let newPrice = this.state.product.price - (this.state.product.price * this.state.product.discountPercentage) / 100
            return (
                <div>
                    <h1 className="text-center">${newPrice}</h1>
                    <h3 className="text-center"><strike className="text-muted pr-3">${this.state.product.price}</strike><span className="text-success">{this.state.product.discountPercentage}%Off</span></h3>
                </div>
            );
        } else {
            return (
                <h1 className="text-danger text-center">${this.state.product.price}</h1>
            );
        }
    };        


    calculateFee12 = () => {
        if(this.state.product.discountPercentage >= 0) {
            let newPrice = this.state.product.price - (this.state.product.price * this.state.product.discountPercentage) / 100
            return (
                ((newPrice * 0.25) + newPrice)  / 12
            );
        } else {
            return (
                ((this.state.product.price * 0.25) + this.state.product.price)  / 12
            );
        }
    };


    calculateFee18 = () => {
        if(this.state.product.discountPercentage >= 0) {
            let newPrice = this.state.product.price - (this.state.product.price * this.state.product.discountPercentage) / 100
            return (
                ((newPrice * 0.45) + newPrice)  / 18
            );
        } else {
            return (
                ((this.state.product.price * 0.45) + this.state.product.price)  / 18
            );
        }
    };


    render() {
        let product = this.state.product;
       
        return (
          
            <div className="container-fluid row mx-auto">
                <div className="col-12 col-md-8 ">
                    <div key={product._id} className="mb-3">                        
                        <img src={product.images?product.images[0].path:""} className="d-md-none w-100" alt="alternative"/>
                        <img src={product.images?product.images[0].path:""} className="d-none d-md-block w-50 mx-auto" alt="alternative"/>
                    </div>
                    <h1 className="text-center d-none d-md-block">{ product.description }</h1>
                </div>
                <div className="col-12 col-md-4">
                    <h2 className="text-center mt-3">{ product.brand }</h2>
                    <h2 className="text-center mt-3">{ product.model }</h2>
                    <div className="my-4">
                        { this.discountPrice() }
                    </div>
                    <div className="d-flex justify-content-center my-3"><button  onClick={this.onClickHandler}type="button" className="btn btn-success btn-lg d-none d-md-block">Comprar</button></div>
                    <button onClick={this.onClickHandler} type="button" class="btn btn-success btn-lg btn-block mb-3 d-md-none">Comprar</button>
                    <h1 className="text-center d-md-none my-4">{ product.description }</h1>
                    <div>
                        <div class="alert alert-secondary" role="alert">
                            ¡Aprovechá nuestras promociones bancarias!
                        </div>
                        <div className="row border">
                            <div className="col-3"><img className="w-75 ml-2 mt-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAA2FBMVEX///8Wn8dgRor4/P0RpM4yrtLs+PsOoMlCq80AoMvv+PsVnse94e1gRouIy99/yeIVqdJbtdMAp9Q0rNPX7/aCw9tHrM5fQ4v7+vx1XJ1yxt8AmsXo5e7Nxdn29PhdQIuGc6eUzOB9Z6LN6PLi8/je2eZmSpKKeKjc7/Ws2+lRuNbj3upiRJFHtNfE4+7x7/Whkrq4rsqh2OjDutJWN4atocLHwNRvVZmUg7HUzt9+aaBhwN2l1OVZN4ywpsSkl7qZirI3t9yjhbawlb9+ZqaTgbRyXJYStOEvBdb8AAAX5ElEQVR4nO1dC1viOtBGm5LtDWrBLVaxIoiAFBUviOWofN/ZPf//H329JpMmKeDZPdb9fJ/nXOTW9O1kZjIzmdRqHwNF0Uez8bzphZMIYeg15mZ/oCjKB43nQ6DXR+NGqOJjzYmAEjjIcbRjww68eX+g/7+go942mxNbi24e470icESJpqnhfDb6w8moz1aeGt0uzwFLh2ZPDs32n0tGexWukVZOQwoDx2Q0TP2jh/xb0G8EtrYFC0Q0MIqmSf2jh/3L0Q9b9g40ZJKBbXX+Z82Rfug4O9KQS4ajzv+YOaIMPPROHmIgRx3/GVwM5rZUSWIGe4aECzvsf/45opihhgR3Z8S2MtYDahAEk+gf1baxETsZAjqwZvdGH30n/xKDhor4W4tspBYZhmZvbM76/XaEfn82M1cNL/K5hGYWa6H5qcViFgoMRuRGqpFPPeKdaqU+apuNCRaRgdTeJ7ao8xY3MbBzrDZn9ZKVRbQym0+ww3/TDj/tDPGKFsPAth2a23w1mlU8F0id/e4h/xaMJk5BQ2A7aAy2/r4ZtoqTBKH5bxzw78IscIo8HOzoO888tcAF0hqfzbVQzEArysN8e3nIf2XWbLFLFYyan0xvmipLhKb22u/5HX0WIsQy2tyZ0I/EWGWfpB3O3usNDOYtjdE3tveJqDBZLyJSdKWzu7PsXsnfVaLlG/NzdvPT6Io2K9COWj4x7s6Hw+HTqfwDeoNh1kDNT+JutlvQwca2V/7xp7/cfcuanpd9xlQZbrXGrxzvb8NgwhDRKncBOk/T/QR/XZR9rM3+qLb6pUP+PdA96FChYFwqyacPQytlYnpX+rMDZgWDUPW9TaXHjDjY4FvfLTIi9u+75Z/Um+wPV34NYraY8fbLP33x7GZEWPfXG36Z1ZsorLiHNQioajNQa4M3dfqaE7HvlmrMBBEVYN7ZvV805N8DBS4/kbbJrbxYUJHYMDli6PDXcbUXpmPgDuKNWu30xici8VziTxAoITCmWlhhX7MOXCpsjzd9/MrN1aXlbyES8QUmkIpedR2sEEiv3dg4zgcqEmeb9GWGNoiCIXuDPv44mDZQEp5kcdC5uLtLVxmnR0RL+Hedra9BDYgWVlQooOjiQKItr1/O3emPhIqlbxHDUepgMujR5T5GW0UC/3usqEjglkRJRD6la1nDl/j/b6b55PBft9GXKepAayL1lwz8V2MQ0qeFPIncdhOf0n+K1QJxL63FdvoyRd+mVDiVjGuu6AzGqsQXPrn0UwUZTY+rezI5Lk92uI6yAoy3KqgpRkAkbNmj6qaqIWHihUyOdLJsjUFYbaEYU5FAE8lnclcqYeIyZ8I6Wu54Kbq2wUHl4ld1KhJy5/LkyCLT4fRnbkO3diZy6FQoDJlq/jjMqEg4MpGI7GZ272/X0ZojUxPW8HXXi5mtzbr5o6A0gUhIXb+XnInXTu1uSCzH485Xo0KBg4otxOo00Iiknh+J1MUq8pUw8XMXy5HCpG49qtjq3KQioUkfUidTDdbirlZ7o2riHdejxONqLUmViUNFgg8mXZwNnyN/+tSyMmPRrV2f5UxMH95xwTG5HlYr5XLXaeWxxivzi+nUmkZuZe5LWdEy4+qcMLGLg5lD2SNCUa3F+ZhMDiRI8zxPYwtxUltmTLjP0f8f5abDT9RE5+Ri2X187C4vTrZaltLwVbUiNjQwofGpuu7Uim/4onaXm47LaxDU9uN5s3x5+nvh+r47PPrx0N1ChfZJDh21qhSmILKKET853mKLYd0va7c5E0+d2u2Qrjrubm/+dt1ojRrDdf3F5ctGLnQaOhbMxw9Dm4QvMR/Xv040QiwTD9PcsarVHkhUe99dLFzL2qew3OHzpqWI0iDXFIjhh2FONbnHWY5lMg8s66r2OiVOZYfG9+P39guIuDgrSZ/HmNHpMalO6oOqCUEW4naY+hAneWjGGj7UTp/c4t1zXGxID6p0RlYmH6Z8yx+PaEH0mmgE9/yaBKkiF/N6ExPRN4a3ZVZE94iiOK6MR9FuUTXB29DUmYwXnG+5TLzUTi55JlKNCahYlMV5QcAGVaaIgMa08QHn5Zym9+z+uK6RZcfbdfe8wISVmNBh/G9ChvuzLNBrkro8+Urnv8acMIEOuTevUyb8t1PChLV4OmOVpOW7z6+3j93u4+3NOeXCL6u06RNFgdSqMNHImTAECvMkXWD4N6cgSuWyEuEO35Ynp8lU6JyePJ75bk5QiSc+IkkFhKvCBNVdggzgVVoY4D+c1s6m+0L450tGIVy/DDMqppdyTTHw8tmBjytiPJQDsvwSOL4XqUbwXzq1M7G9mD5x0btulh6zfHlgTz8k2ejjikRrdMIEbvEPJ2ciMolFLZlNjTfBb3azZcm9PJ6l9GgIuSL+9iAgTHwTxCYoE88iJiT1ArfpTJqWxDhX1HhUJNbfBkzwqusiW3ZEvsFPARPWkFrKQbtNVhCddCpNn+TXpXkFpyIORTvIJ6wo0ZEzEcnEEbe+iK0r+eQ8XE+aZMancfDppfy6NG3uNH/l/bwffSIT6IB/F8yOI4Ff6RKRaMTb7jVSM9RJvlcmE7S4zdlQ/PpfYbYuZyKRBP+mU3N5mXCfc+PQT58wTX8ndSb3t/LrAibCX3xL78QGJlI9ae0/CZYaoF7gIHVKDJLpPHFdazosSY99NiYyz2rfmor0pZ9bSbKKQ9/yby7PF8+lC4/KzY4+1ZgCJk4k/lTBcpC1i9EiSvO0PLgLNGZFmKBWFH3n370WTQqiJs7zyBTw2NO1S6eT0dCR0TGunO0YlfoTp6VM/MhCt/UDGm1IJ/3L60vM0sXdy8PtnTCSRz2rqvgT0MfkUw+dsuhUvEJNQC3xHj6IHdUr31881jq350PXdxfPIhOyot52RXxMuu4wRIXabwJ/ijDxkom+ud4jTMRxr6tLN84Z3i4i+zF1LXfIF5uAdYdWlfAdleyWYEivQykVlptHbce0IgKvzbunyB2NmIh0jGXd3EbWR+Br1kmhAj6uSu6nSWJWogKrl6GMiH3LyiMxc1qmj9er/4ktbsTE8sidvtXizKF7xP0urfXDuCphfhCzEqiuu4WciUUu9D1ay2msV/97dJSUXy3Pnv+OuLobWoJND+2getG7MY1jCpy9pWjhlcI9EjGhrq6Wy2crkonOyUnkUnTPI2XB58RoPROaVIWJPpnk2gFvPE5+7siEHW93SzVmhNPbI9cdCop4x1rVHKtId9HMz1oQR5M7me7fuYsJmUiyRzkTV0+RGT2/44nQG0RPaxUxohFo6bot2L74tgUTKzg7ABPdZ9/6eSvKnA/IRTGuiumIjEeeFzU0PuGRJUbLZwfDRGyKUya6R661eO0uu13OnxjZVGFWp5SElsLhiSCmO5UpCpfYjrFKmMDJDEuYODmLYxTWcOpOfxZ/FZTxhNWpGqgbNLot8K0WMiaoFTXX1NtOcquXvn+0fBy6GbjN1goo46lSoZVaWv/1JMn4RD4mCU8U1x03Z2c/Lh7PCN4KvzlAtGigItmOBA1Q/8VPj8d7GRN+XhhA1y5ZkOM6diVifyJH4TfndHJUajtxm9h2bPPT45QvmslAg3eH1PwQP/Xk8a4rSxGDMqsKFRdFsxYUKwsGJp0eJD4B8u0kt3pxthguJIlRQH1VEmAZGpQJgU1b3kuEwjrKYzAkjolbGZOnl1PLErnZMWg5pqDG7UPRBkW6fG/PU3FGlCkLyGLbNBJ3kWgX91l0uTrt7qQdVmlyMJtPkM0P7c6XCAUJWtX6aTMahPJvp1sgrIUozk/jANJdiB8Guh6KDCn37okwObyfluRlaNgYY0RuLM2BwQ9QjGhrJDypjoOZYhSUCUXnVpD/SgCSXPMwCDxiebqpbhEy0aC+efWaLyg9sGGPj9dIsx4ukP46yJXnqsX9yRsPGP7d1OLiAzADEmvzw7uVRTN9cYVEvlFKEMDUm7R7T3VCExTKIe09IQhdSYtyLUHYOnJL87XKlI/vz+gmSQNVTySYQL0hqDxbCmoGMvnn8zp5ndW+9RdnOpiNsxVJDRdAHWahuyMNU3C1uNcPee2dYHIosNnAcdUMR4r+GkitwOd+82VUTC+7WTlmnBbunhHvw/K5qcNssK9IPpQDMG7YFniaZzL/ynL985vb5fLiYnn3eu7TaeRzyw7YHKlKwSoWYNOoMGRzJaUiK9teLIawblugTZUQNuKoTiS3CBO0B9UEYYOLZ9kE2c9L+Zm9P/5DUSSA17KnVbm5F+yyJMrHXJyVUMHB5/pSjEEnHNyqUqyqiAFQZ0ITd/IkDe9ycLluDCDaGW+jrlD4kocJmyGLHMBO3KhmSyKKhfwMERXbRc1BaYA+loYjam7aPR+W1JZQIv4uEjELIBHragVoeEAPMPI1RTHGk9cjdxMXln/GTQ1gP8XJtoqhD5/cnrgn9PKmnAvLX9wUXXC2b/Wn6B87hh0ysR2K1kiny4dzX6YvLN+9fCzGtFc2IMKoUtpLDgXkveNBi9umnp7c/RjeT91iAiBysdwf3eKyq96wMdOTttrakqDJdOTXZD2FIzKejvz76XSap/ym/r17/nLF5TjaIewRGnnZVcr1lCJkDydw+C3WOTrXy9uby+fn5/Ofz2eX0dpDlOkZrxFLRNXNBkDIHliB1H9xNM3AQ0yPfySqVqksFM9mqbCb7zwFsD5W2dMaNrZrrhjYntBxH593Hdagz7zCyVGoal2bNqLQSz9O6QSrHRWdMmtyR5lULPe3DfS5zZ42EfsWu8iFbnJHuuxpgpKd6kMx7eL5NtgOmlsKd31+wB3zg7XPdHQHxEjljgvE9janHimmJzh5Etm9z+BZiuE5/OF38cFojZkuOXpZUQbzEGkOx4Px+XQlg3EgOO4NR2TYk6bZHwzqekRJAr1eH4xmc0/FGn8SWHySmPcZVQRA27MFBwfGpgQdIzUIvWavt1r1eo1mOFFtI2JBdO4k1jacfvEZoI8nwsMkE9lASNM0I0L0H/Fp1SkPdvPzGU8BRr1W6fnDklNFgfiEf8rRzEq7KT9sdRMij2xc4Wj+rlDaIeLNwTY8/EnHEGeIVOeuXGBkB9VNc/0LDBqBirY+sTx2SL3PtezcAbrZnET+gsREQBY0ex3Oq1gl8uswMnuhmhy9LCMhMqzR8mQ1+9PUAw9lMBs3QtU+zlyIHCj2LiJfcuKtzPafT0MGfTDqj3veRFVtjI3jY8OID+yehM35rD2of3pvclcoeoSIkgTtUbQEkS3LvvCFL3zhC1/4whe+8IUvfOELX/jCF77whS984TdDiSOWny1CqdQpipF2+B7M2ergZe5+62bvMDyIcdgYc6kc+NX8quWUlYzvl0I5/EbQKpZ3zQL65gEYRo++HBR2/pte0LIRxpqGMbJbrQM23as3vnH4/v3gwGuMJbVY8xa42OaailmYoniKvNKfNzwv9JqNsaRSZ7bWSCZGK/beMVvkTa0F7uiQvFzoCtkPEFNnZSSpbzAovUkvBzNAjm1jdS6qFfiGDDrAzRvBPAfZto0c9tCdWRi95DjJhRysCivgerASCBeYNEE3gW+QCZrYg0xEt8mV3u3tIbh7Um9q/CfyDzqCzbdma7e9DdkGPXj8kNKfHMMtEgZyEL8dBx45Hl+JndebmYAy0Z9IigQcm9TQlTERc8HtnWL2S5ScZJoh7wgHmFDmxSrR6G0nKFbYg3uNP4BM2bubmegHkuKq+MjD/HfLmYhGWJD/QcAWs4s23AGQPc2UCaVni8aFCt1uQLfiBIWeWbswMZqU3CMpvt7AxB4qtPQYtwqbJUrNh94kDeFyJpQxX/Ca3iq7Z2Q0KZSLs3trdmBCCdnSw0LFBMr2em5ionDmmXLIPk+jtLv0oEl2VhAm4P58ttKNbR4yKxLGnle5AxNzZqeLox0fa0zBRLb/l2ECx8ocsYUVKIDy3w4K45OfB14b9cBN50woc9CowInsB/09jIHWBP1YCVFwINszoWO4v9wIx/3+OERATLINTJAJrE4SqAbQaBhD+edEGxsiSzsYz73Ahp/NmdBBUzq1OZ6HsJcFqOgaqUVlgjGcHtsz4YGbIUqhDSUzVUGQCdLwqO2Bh3kMFIXe5Co3HVFB2vwfp1DpmzMxO85fQKmH0KZ9b+EueJObtAbTj4lhAggLx4SCwL1QXTNoAdm0RzImmFPgIRN97klFNAuYKOhVwARpXkmOQe2Te8LkMBl6MLyBwIl8Mib0mpKDY4IeoR2Rv6Kcwe33ST9khgnaaaVP9t5iAwglaaNmfCMXRAKPW85EfpY4bRFXp43c6a2Sjgk4aBDVpIErMd5Go0fwnbyYMQEmB9NXV5mAaRmrIAkTdB7BPvNg0HMyPlHTdzkTxL8gPqOQCdKFVPPaoaipN8MEpmsQ+mLGxHdyw4bGeOy0C3DaEk7GBJEJ2Ge+nT+pyLgTXxMHvEsBTjsoMGFnBW4aWUDSXfCACfogerQhEwZDYT1QEVImBnRjOWYbW4FGHcn5CjI9QTU8feQKeVIorNPeJIJ2OON/UnNMbVXOxHFkzhMQT4s2iaAOxSDvjxxPIkoruJVtmejDEyiYpUEdTI/YVynIRLLfpT2nH0r1agpyLLdx3FNof0zBiabjtZ2CDiO7836O/GfpUUHADBGB06JJRB184Htty4QJmJgw7jI4O3jP6RU9KxxrSAPs+MEIrEbJUe04XsERtkSNgfKrfSeSzx+Fm2AGZNQgnhWxF9qhAlrvGCq5l22ZGMOHwYyzOBtYJtJJTH8MM308iBpGMbvkXHAsaCyXQdnEhAkdK4++Su4mFhN6Ajk9nORdTDArf+jFckwUYU96wINUyKgTp2xAOwofyhakG2RCXwG3x6YNR718+Dg5ua9NVy9e/itbMwFnx/YyUQCaMCqGuH2RhxL/TU8rlwbxyploNxFQ7HS7HTi/KbUw3/grvUdPBHI9Md8gE9HCAEwO0sghU8KkmbO8y3QZE8p4QolgNqJSbySz67SrOumNA5kwHArw6va2wyjaDg5YAzHluk3vKnmxTzSKJutuUcLEoAk8fyeYwbVD8VDl/nFOjZY3jgJMGHuhR0B839yf+Cb1J1pyfyJ6aa8QM8A2aUfDHQSugxWBZB+InIlZQB8f0jzonNGj/3Ar+xKdiHlXNWbdAb5MI128j2kw8beZBiRS55iIEEeiARtaLo8HxJatU24V2uscr8Q6U8pEg27bxE5hZ/KKCh/KnjS5bSOPpm+9KgdxVwQdCgWoiaQrHqNBvcFoNGqb8wPQxMPJeueBCYcyaZzQXrUTcRBPwkQ9dOjNBoX4ed0DzyYNHYHZr2UWZmsmTGYtSj/YLl2LEsca9DvMG1aDzptG5kqDhb/kdBsxE/0JsZLaulmcWP1Sq5AfkLE1EwrwWEDrDH0Cb7FdZIKswIBezTy/+kGp1UKCBamMCdopLXLcZty0WpXvUcsWlO+LWWkH2URsQ6WQqikxE8D/ys7BM1vlTIhPRhMxQZMPcZKNScvGA2J61QmvVN+NiQGQXQMHh2PTHDcC0KIEp9kfMRPKii4i09Ppe+XjM8QpIAETcAmoHrCI3e2+JAlAkEbTd4htN2BjFoxa63ULwQxplkmRxCfG9NighIlRuGF84mbTPBNKA+a/mJzsnqayfZvLrrQDE3V5Biz5euZ6SpgwC0yYm54UxqLpwTMxKtm3GwcqYTqkBQAWUkmwfZccWJuPvoKB557ndjIBPmUgOEB6W47I4+aZCAUpa8gE9Xfw3rhNAXKDSRfjnfKippQKA69FeVEoE5hhAh4D4Y3o+MZ0PI7gKGieCQWXPJ6YCervsA2s+zBPsisTsbkSiiLWqFcnYWKGGCZMcF4MjNXVqfoQHtnAMcGnMVgmdBtQDr01UENgaKOd6yfaHuIfAdZsj/pBsig/1QuRA6ZTtw/ZzGILmBTRMR7690JetFEyOeKIrunkXhvS2JasPfIGisdpquSTDlNTQz/GBN3r40BDbBdDhCawvYjepNf+BzABLqS2Bzb9i8lO0tBt9M4B73Hr3x3ybvI9j36eh6PWmms1RyHoMZuQd9YT5k8VuvoN+vKafTQDM7S1uIwnrhlyHM0OTeah6uKvDkL6sjrvgz9YxQg/N+E9bp2ON2UQ3KkAE5rLUri9zIW3JJ9Uyn5B78+bYRCRPPHmba6uTvJV9uWtx1dE8V2lHP8H2QY0HPvLnAkAAAAASUVORK5CYII="/></div>
                            <div className="col-9">
                                <p className="font-weight-bold mt-2">12 cuotas de ${this.calculateFee12()}</p>
                                <p className="text-muted">Precio financiado: $ {this.calculateFee12() * 12} - CFT 25.74% - TEA 21.07%</p>
                            </div>
                        </div>
                        <div className="row border border-top-0">
                            <div className="col-3"><img className="w-100 mt-4" src="data:image/png;base64,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"/></div>
                            <div className="col-9">
                                <p className="font-weight-bold mt-2">18 cuotas de ${this.calculateFee18()}</p>
                                <p className="text-muted">Precio financiado: $ {this.calculateFee18() * 18} - CFT 35.54% - TEA 45.54%</p>
                            </div>
                        </div>
                        <div className="row border pl-3 border-top-0"><a href="#top">Ver cuotas y medios de pago <i className="fas fa-chevron-right fa-sm"></i></a></div>
                        <div class="row mt-4 border">
                            <div className="col-3"><i className="fas fa-truck fa-3x mt-3"></i></div>
                            <div className="col-9 pb-2">
                                <p className="pt-2">Envío a domicilio</p>
                                <a href="#top">Calcular costo de envío <i className="fas fa-chevron-right fa-sm"></i></a>
                            </div>
                        </div>
                        <div class="row mb-4 border border-top-0">
                            <div className="col-3"><i class="fas fa-store fa-3x mt-3"></i></div>
                            <div className="col-9 pb-2">
                                <p className="pt-2">Retiro en la sucursal</p>
                                <a href="https://www.google.com.ar/maps/search/garbarino+bs+as/@-34.6171726,-58.4689384,12z" target="_blank">Ver sucursales más cercanas <i className="fas fa-chevron-right fa-sm"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default PageDetail;