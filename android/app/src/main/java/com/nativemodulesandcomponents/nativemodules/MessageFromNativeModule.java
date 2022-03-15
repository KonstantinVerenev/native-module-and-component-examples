package com.nativemodulesandcomponents.nativemodules;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;

public class MessageFromNativeModule extends ReactContextBaseJavaModule {
    public MessageFromNativeModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "MessageFromAndroidNative";
    }

    @ReactMethod
    public void show(Callback callBack) {
        callBack.invoke("text from native side");
    }
}
