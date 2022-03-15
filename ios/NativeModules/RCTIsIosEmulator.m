//
//  RCTIsIosEmulator.m
//

#import "RCTIsIosEmulator.h"

@implementation RCTIsIosEmulator

RCT_EXPORT_MODULE(IsIosEmulator);



RCT_EXPORT_METHOD(get:(RCTResponseSenderBlock)callback)
{
#if TARGET_OS_SIMULATOR
  callback(@[@true]);
#else
  callback(@[@false]);
#endif
}

@end
