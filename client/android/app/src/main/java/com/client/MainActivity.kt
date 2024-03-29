package com.client

import android.os.Bundle
import com.facebook.react.ReactActivity
import org.devio.rn.splashscreen.SplashScreen // here

class MainActivity : ReactActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this, R.id.lottie) // here
        SplashScreen.setAnimationFinished(true) // If you want the animation dialog to be forced to close when hide is called, use this code
        super.onCreate(savedInstanceState)
        // ...other code
    }
}