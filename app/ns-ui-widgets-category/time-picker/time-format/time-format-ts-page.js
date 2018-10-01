"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("tns-core-modules/platform");
function onPickerLoaded(args) {
    var timePicker = args.object;
    if (platform_1.isAndroid) {
        timePicker.android.setIs24HourView(java.lang.Boolean.TRUE);
        timePicker.hour = 23;
        timePicker.minute = 59;
    }
    else if (platform_1.isIOS) {
        var local = NSLocale.alloc().initWithLocaleIdentifier("NL");
        timePicker.ios.locale = local;
        timePicker.hour = 23;
        timePicker.minute = 59;
    }
}
exports.onPickerLoaded = onPickerLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1mb3JtYXQtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUtZm9ybWF0LXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzREFBMkQ7QUFHM0Qsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxVQUFVLEdBQTRCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFeEQsRUFBRSxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7UUFDWixVQUFVLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFLLENBQUMsQ0FBQyxDQUFDO1FBR2YsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNyQixVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0FBQ0wsQ0FBQztBQWZELHdDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gdGltZXBpY2tlci10aW1lLWZvcm1hdC1jb2RlLXRzXG5pbXBvcnQge2lzQW5kcm9pZCwgaXNJT1N9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBUaW1lUGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGltZS1waWNrZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcbiAgICBjb25zdCB0aW1lUGlja2VyOiBUaW1lUGlja2VyID0gPFRpbWVQaWNrZXI+IGFyZ3Mub2JqZWN0O1xuXG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICB0aW1lUGlja2VyLmFuZHJvaWQuc2V0SXMyNEhvdXJWaWV3KGphdmEubGFuZy5Cb29sZWFuLlRSVUUpO1xuICAgICAgICB0aW1lUGlja2VyLmhvdXIgPSAyMztcbiAgICAgICAgdGltZVBpY2tlci5taW51dGUgPSA1OTtcbiAgICB9IGVsc2UgaWYgKGlzSU9TKSB7XG4gICAgICAgIC8vIGEgYml0IGhhY2t5IHNvbHV0aW9uXG4gICAgICAgIC8vIGltcG9ydGFudCBzZXQgdGhlIGNvdW50cnkgbm90IHRoZSBsYW5ndWFnZSBmb3IgbG9jYWxlXG4gICAgICAgIGNvbnN0IGxvY2FsID0gTlNMb2NhbGUuYWxsb2MoKS5pbml0V2l0aExvY2FsZUlkZW50aWZpZXIoXCJOTFwiKTtcbiAgICAgICAgdGltZVBpY2tlci5pb3MubG9jYWxlID0gbG9jYWw7XG4gICAgICAgIHRpbWVQaWNrZXIuaG91ciA9IDIzO1xuICAgICAgICB0aW1lUGlja2VyLm1pbnV0ZSA9IDU5O1xuICAgIH1cbn1cbi8vIDw8IHRpbWVwaWNrZXItdGltZS1mb3JtYXQtY29kZS10c1xuIl19