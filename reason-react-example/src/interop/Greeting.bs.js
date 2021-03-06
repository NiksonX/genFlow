// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var MyBannerRe = require("./MyBannerRe.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("PageReason");

function make(message, someNumber, extraGreeting, polymorphicProp, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              console.log("polymorphicProp:", polymorphicProp);
              var greeting = extraGreeting !== undefined ? extraGreeting : "How are you?";
              return React.createElement("div", undefined, ReasonReact.element(undefined, undefined, MyBannerRe.make(true, message + (" " + greeting), /* array */[])), "someNumber:" + String(someNumber));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

function cons(x, l) {
  return /* :: */[
          x,
          l
        ];
}

function cons2(l, x) {
  return /* :: */[
          x,
          l
        ];
}

function testNamedArgs(a, b, x, c, d, y, e) {
  return (((((a + b | 0) + x | 0) + c | 0) + d | 0) + y | 0) + e | 0;
}

function testCallNamedArgs(foo, a, b) {
  return Curry._2(foo, a, b);
}

function testDefaultArgs($staropt$star, y) {
  var x = $staropt$star !== undefined ? $staropt$star : 3;
  return x + y | 0;
}

var empty = /* [] */0;

var concat = $$String.concat;

exports.component = component;
exports.make = make;
exports.empty = empty;
exports.cons = cons;
exports.cons2 = cons2;
exports.concat = concat;
exports.testNamedArgs = testNamedArgs;
exports.testCallNamedArgs = testCallNamedArgs;
exports.testDefaultArgs = testDefaultArgs;
/* component Not a pure module */
