//
//  RCTMessageFromIOSNative.m
//

#import "RCTMessageFromIOSNative.h"

@implementation RCTMessageFromIOSNative

RCT_EXPORT_MODULE(MessageFromIosNative);

RCT_EXPORT_METHOD(getMessage:(RCTResponseSenderBlock)callback)
{
  callback(@[@"text from ios native code"]);
}

@end
