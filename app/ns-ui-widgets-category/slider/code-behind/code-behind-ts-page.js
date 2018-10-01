"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var slider_1 = require("tns-core-modules/ui/slider");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var stackLayout = page.getViewById("stackLayoutId");
    vm.set("slResult", 22);
    var options = {
        sourceProperty: "age",
        targetProperty: "value"
    };
    var sliderComponent = new slider_1.Slider();
    sliderComponent.bind(options, vm);
    vm.set("age", 22);
    sliderComponent.on("valueChange", function (slargs) {
        vm.set("slResult", slargs.object.value);
    });
    stackLayout.addChild(sliderComponent);
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1iZWhpbmQtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZGUtYmVoaW5kLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBNEQ7QUFJNUQscURBQWtEO0FBR2xELHNCQUE2QixJQUFJO0lBQzdCLElBQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLElBQU0sV0FBVyxHQUE4QixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRWpGLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXZCLElBQU0sT0FBTyxHQUFHO1FBQ1osY0FBYyxFQUFFLEtBQUs7UUFDckIsY0FBYyxFQUFFLE9BQU87S0FDMUIsQ0FBQztJQUNGLElBQU0sZUFBZSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDckMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbEIsZUFBZSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxNQUFNO1FBQ3JDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFXLE1BQU0sQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxXQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXRDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUF2QkQsb0NBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHtTdGFja0xheW91dH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbi8vID4+IHNsaWRlci1pbXBvcnRcbmltcG9ydCB7U2xpZGVyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zbGlkZXJcIjtcbi8vIDw8IHNsaWRlci1pbXBvcnRcbi8vID4+IGNyZWF0aW5nLXNsaWRlci1jb2RlLXRzXG5leHBvcnQgZnVuY3Rpb24gb25QYWdlTG9hZGVkKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICBjb25zdCBzdGFja0xheW91dDogU3RhY2tMYXlvdXQgPSA8U3RhY2tMYXlvdXQ+IHBhZ2UuZ2V0Vmlld0J5SWQoXCJzdGFja0xheW91dElkXCIpO1xuXG4gICAgdm0uc2V0KFwic2xSZXN1bHRcIiwgMjIpO1xuICAgIC8vIGNyZWF0aW5nIG5ldyBTd2l0Y2ggYW5kIGJpbmRpbmcgdGhlIHZhbHVlIHByb3BlcnR5XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgc291cmNlUHJvcGVydHk6IFwiYWdlXCIsXG4gICAgICAgIHRhcmdldFByb3BlcnR5OiBcInZhbHVlXCJcbiAgICB9O1xuICAgIGNvbnN0IHNsaWRlckNvbXBvbmVudCA9IG5ldyBTbGlkZXIoKTtcbiAgICBzbGlkZXJDb21wb25lbnQuYmluZChvcHRpb25zLCB2bSk7XG4gICAgLy8gc2V0dGluZyBzbGlkZXIudmFsdWUgdG8gMjJcbiAgICB2bS5zZXQoXCJhZ2VcIiwgMjIpO1xuXG4gICAgc2xpZGVyQ29tcG9uZW50Lm9uKFwidmFsdWVDaGFuZ2VcIiwgKHNsYXJncykgPT4ge1xuICAgICAgICB2bS5zZXQoXCJzbFJlc3VsdFwiLCAoPFNsaWRlcj5zbGFyZ3Mub2JqZWN0KS52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBzdGFja0xheW91dC5hZGRDaGlsZChzbGlkZXJDb21wb25lbnQpO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuLy8gPDwgY3JlYXRpbmctc2xpZGVyLWNvZGUtdHNcbiJdfQ==