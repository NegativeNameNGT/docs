---
title: Compatibility Versions
description: How to update your packages to the new Compatibility Versions
tags: [scripting, migration]
---

How to update your packages to the new Compatibility Versions


The Compatibility Version is meant to assure your packages will not break in future breaking changes updates.

It works by forcing that package to run code in a compatibility mode, meaning that breaking changes will keep working as the way it was before. Example:

Let's say you have this code running right now:

```lua
-- Make an asynchronous HTTP request
HTTP.Request("https://api.nanos.world/", "store/v1/packages/halloween", "GET", "", "application/json", false, {}, function(status, data)
    -- Do something with my data
end)
```

And then, in the hypothetical update `9.99` the API changes and make `HTTP.RequestSync` to become `HTTP.Request` and `HTTP.Request` to become `HTTP.RequestAsync`. I.e. you need to update your code to use `HTTP.RequestAsync` now, this is a breaking change as the new functions uses the same name as before.

With compatibility version, your scripts can keep working as it was before this update, as your `compatibility_version` in your Package.toml will still be set to the older version (i.e. `9.98`, lower than the last version `9.99` which changed it).

:::tip

The Compatibility Mode is a feature that aims to keep old and unmaintained packages/game-modes to keep working for a longer time. But from time to time all the deprecated compatibility modes will be removed from the codebase. So always keep your packages up-to-date!

:::


## All Updates

To use the following features, you must update your Package's `compatibility_version` setting in the Package.toml to at least that version (exact that version or bigger).


### Version `1.49`


#### [Package.GetName()](/scripting-reference/static-classes/package.mdx#static-function-getname)

Before, `Package.GetName()` was returning the title defined in Package.toml. Now it is standardized and it returns the Path of the Package (the real Name of it). Also `Package.GetPath()` was deprecated in favor of `Package.GetName()`.


#### [Server.GetMap()](/scripting-reference/static-classes/server.mdx#static-function-getmap)

Before, `Server.GetMap()` was returning the map asset defined in Config.toml. Now as we can load Map Packages, it will start returning the Map Package name instead. In compatibility mode it will still return the Map Asset. If you want to still keep retrieving the Map asset, please use the new method [Server.GetMapAsset()](/scripting-reference/static-classes/server.mdx#static-function-getmapasset) instead.


#### [Server.GetPackages()](/scripting-reference/static-classes/server.mdx#static-function-getpackages)

Before, `Package.GetPackages(only_loaded)` returned a list of strings containing all the package names. Now it has a new parameter (`package_type_filter`) and returns a list of table with the Packages information:

```lua
local packages = Package.GetPackages(only_loaded, package_type_filter)
--[[
	{
		{
			["title"] = "Awesome Package",
			["name"] = "awesome-package",
			["type"] = PackageType.Script,
			["version"] = "1.0.0",
			["author"] = "Myself",
		},
		...
	}
--]]
```


### Version `1.33`


#### [Input.GetScriptingKeyBindings()](/scripting-reference/static-classes/input.mdx#static-function-getscriptingkeybindings) and [Input.GetGameKeyBindings()](/scripting-reference/static-classes/input.mdx#static-function-getgamekeybindings)

Before those methods returned a table in the format (example):

```lua
-- KeyBinding = Key
{
	"Jump" = "Spacebar",
	"Crouch" = "Control",
	"Fire" = "LeftMouse",
}
```

Now it returns in the format (example):

```lua
-- KeyBinding = { Key, Key, ... }
{
	"Jump" = { "Spacebar", "O" },
	"Crouch" = { "Control" },
	"Fire" = { "LeftMouse", "Return" },
}
```


### Version `1.29`


#### [HTTP.Select()](/scripting-reference/static-classes/http.mdx#static-function-select)

Before `HTTP.Select` was an async method, and since 1.29 it works as a Sync method, not having the callback parameter anymore.


#### [Database:Execute()](/scripting-reference/classes/database.mdx#function-execute)

Before `Database:Execute` was an async method, and since 1.29 it works as a Sync method, not having the callback parameter anymore.


### Version `1.22`

In version 1.22 we introduced the concept of [Compatibility Version](/docs/next/core-concepts/packages/packages-guide#compatibility-version). Besides that, we've got just one breaking change:


#### [Events.Subscribe()](/scripting-reference/static-classes/events.mdx#static-function-subscribe)

`Events.Subscribe` now only subscribes to local events (ones called as **Events.Call**). If you want to subscribe to remote events (ones called as **Events.CallRemote** or **Events.BroadcastRemote**), please use `Events.SubscribeRemote`.

In compatibility mode (i.e. setting it to `1.21` or below) `Events.Subscribe` still subscribes for both Local and Remote events.