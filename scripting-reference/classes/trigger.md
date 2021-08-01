---
description: >-
  A Trigger class is a utility class to trigger events when any Entity enters an
  Area
---

# Trigger

![](../../.gitbook/assets/image%20%2853%29.png)

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local sphere_trigger = Trigger(Vector(-200, 100, 500), Rotator(), Vector(100), TriggerType.Sphere, true, Color(1, 0, 0))

sphere_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)
    Package.Log("Something entered my Sphere Trigger")
end)

local box_trigger = Trigger(Vector(300, 200, 500), Rotator(0, 45, 0), Vector(150, 150, 150), TriggerType.Box, true, Color(0, 1, 0))

box_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)
    Package.Log("Something entered my Box Trigger")
end)

box_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)
    Package.Log("Something left my Box Trigger")
end)
```
{% endtab %}
{% endtabs %}

## Constructor Parameters

| **Type** | **Name** | **Default** |  |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |  |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | `Rotator(0, 0, 0)` |  |
| [Vector](../utility-classes/vector.md) | **`extent`** | `Vector(0, 0, 0)` | Size of the Trigger. If using Sphere, only the **X** is used |
| [TriggerType](../glossary/enums.md#triggertype) | **`trigger_type`** | `TriggerType.Sphere` | Currently supports **Sphere** of **Box** |
| [boolean](../glossary/basic-types.md#boolean) | **`is_visible`** | `false` | Useful for debugging |
| [Color](../utility-classes/color.md) | **`color`** | `Color.RED` | Color to paint the Trigger bounds - if Visible |

## Functions

|  | **Returns** | **Name** | **Description** |
| :--- | :--- | :--- | :--- |
| [![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-McxSn_occzhXBX6BNoH%2Fsync%2F47d896a044d50e645c888356b18fe44c6a94d8d9.png?generation=1624738441629723&alt=media)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | **`SetExtent`** | Sets the extent size of this trigger |
| [![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-McxSn_occzhXBX6BNoH%2Fsync%2F47d896a044d50e645c888356b18fe44c6a94d8d9.png?generation=1624738441629723&alt=media)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | **`SetVisibility`** | Sets if this Trigger is visible as a Sphere |

### [![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-McxSn_occzhXBX6BNoH%2Fsync%2F47d896a044d50e645c888356b18fe44c6a94d8d9.png?generation=1624738441629723&alt=media) ](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability)`SetExtent`

> Sets the extent size of this trigger \(sphere triggers will use only the .X component for radius\)

```lua
my_trigger:SetExtent(extent)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`extent`** | Sphere triggers will use only the .X component for radius |

### [ ![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-McxSn_occzhXBX6BNoH%2Fsync%2F47d896a044d50e645c888356b18fe44c6a94d8d9.png?generation=1624738441629723&alt=media)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) **`SetVisibility`**

> Sets if this Trigger is visible for debugging

```lua
my_trigger:SetVisibility(is_visible)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`is_visible`** |  |

## Events

|  | **Name** | **Description** |
| :--- | :--- | :--- |
| [![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-McxSn_occzhXBX6BNoH%2Fsync%2F47d896a044d50e645c888356b18fe44c6a94d8d9.png?generation=1624738441629723&alt=media)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) | \*\*\*\*[**`BeginOverlap`**](trigger.md#beginoverlap)\*\*\*\* | Triggered when something overlaps this Trigger |
| [![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-McxSn_occzhXBX6BNoH%2Fsync%2F47d896a044d50e645c888356b18fe44c6a94d8d9.png?generation=1624738441629723&alt=media)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) | [**`EndOverlap`**](trigger.md#endoverlap) | Triggered when something leaves this Trigger |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability)`BeginOverlap`

> Triggered when something overlaps this Trigger

```lua
Trigger.Subscribe("BeginOverlap", function(self, entity)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Trigger](trigger.md) | `self` | The Trigger entity |
| [Actor](base-classes/actor.md) | `entity` | Any Actor which overlaps |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability)`EndOverlap`

> Triggered when something leaves this Trigger

```lua
Trigger.Subscribe("EndOverlap", function(self, entity)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Trigger](trigger.md) | `self` | The Trigger entity |
| [Actor](base-classes/actor.md) | `entity` | Any Actor which left the Trigger |

## 
