package com.nativemodulesandcomponents;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;

import android.os.Build;

public class IsEmulatorModule extends ReactContextBaseJavaModule {
    IsEmulatorModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "IsAndroidEmulator";
    }

    @ReactMethod
    public void get(Callback callBack) {
        callBack.invoke(
                (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
                        || Build.FINGERPRINT.startsWith("generic")
                        || Build.FINGERPRINT.startsWith("unknown")
                        || Build.HARDWARE.contains("goldfish")
                        || Build.HARDWARE.contains("ranchu")
                        || Build.MODEL.contains("google_sdk")
                        || Build.MODEL.contains("Emulator")
                        || Build.MODEL.contains("Android SDK built for x86")
                        || Build.MANUFACTURER.contains("Genymotion")
                        || Build.PRODUCT.contains("sdk_google")
                        || Build.PRODUCT.contains("google_sdk")
                        || Build.PRODUCT.contains("sdk")
                        || Build.PRODUCT.contains("sdk_x86")
                        || Build.PRODUCT.contains("sdk_gphone64_arm64")
                        || Build.PRODUCT.contains("vbox86p")
                        || Build.PRODUCT.contains("emulator")
                        || Build.PRODUCT.contains("simulator")
        );
    }
}
