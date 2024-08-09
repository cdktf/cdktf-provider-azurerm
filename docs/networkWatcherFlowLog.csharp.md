# `networkWatcherFlowLog` Submodule <a name="`networkWatcherFlowLog` Submodule" id="@cdktf/provider-azurerm.networkWatcherFlowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkWatcherFlowLog <a name="NetworkWatcherFlowLog" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log azurerm_network_watcher_flow_log}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkWatcherFlowLog(Construct Scope, string Id, NetworkWatcherFlowLogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig">NetworkWatcherFlowLogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig">NetworkWatcherFlowLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics">PutTrafficAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTrafficAnalytics">ResetTrafficAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(NetworkWatcherFlowLogRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkWatcherFlowLogTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>

---

##### `PutTrafficAnalytics` <a name="PutTrafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics"></a>

```csharp
private void PutTrafficAnalytics(NetworkWatcherFlowLogTrafficAnalytics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrafficAnalytics` <a name="ResetTrafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTrafficAnalytics"></a>

```csharp
private void ResetTrafficAnalytics()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkWatcherFlowLog resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkWatcherFlowLog.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkWatcherFlowLog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkWatcherFlowLog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkWatcherFlowLog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkWatcherFlowLog resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkWatcherFlowLog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkWatcherFlowLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkWatcherFlowLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference">NetworkWatcherFlowLogRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference">NetworkWatcherFlowLogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalytics">TrafficAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference">NetworkWatcherFlowLogTrafficAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupIdInput">NetworkSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherNameInput">NetworkWatcherNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalyticsInput">TrafficAnalyticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherName">NetworkWatcherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.version">Version</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicy"></a>

```csharp
public NetworkWatcherFlowLogRetentionPolicyOutputReference RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference">NetworkWatcherFlowLogRetentionPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeouts"></a>

```csharp
public NetworkWatcherFlowLogTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference">NetworkWatcherFlowLogTimeoutsOutputReference</a>

---

##### `TrafficAnalytics`<sup>Required</sup> <a name="TrafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalytics"></a>

```csharp
public NetworkWatcherFlowLogTrafficAnalyticsOutputReference TrafficAnalytics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference">NetworkWatcherFlowLogTrafficAnalyticsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupIdInput`<sup>Optional</sup> <a name="NetworkSecurityGroupIdInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupIdInput"></a>

```csharp
public string NetworkSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `NetworkWatcherNameInput`<sup>Optional</sup> <a name="NetworkWatcherNameInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherNameInput"></a>

```csharp
public string NetworkWatcherNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicyInput"></a>

```csharp
public NetworkWatcherFlowLogRetentionPolicy RetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrafficAnalyticsInput`<sup>Optional</sup> <a name="TrafficAnalyticsInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalyticsInput"></a>

```csharp
public NetworkWatcherFlowLogTrafficAnalytics TrafficAnalyticsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupId"></a>

```csharp
public string NetworkSecurityGroupId { get; }
```

- *Type:* string

---

##### `NetworkWatcherName`<sup>Required</sup> <a name="NetworkWatcherName" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherName"></a>

```csharp
public string NetworkWatcherName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkWatcherFlowLogConfig <a name="NetworkWatcherFlowLogConfig" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkWatcherFlowLogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled,
    string Name,
    string NetworkSecurityGroupId,
    string NetworkWatcherName,
    string ResourceGroupName,
    NetworkWatcherFlowLogRetentionPolicy RetentionPolicy,
    string StorageAccountId,
    string Id = null,
    string Location = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    NetworkWatcherFlowLogTimeouts Timeouts = null,
    NetworkWatcherFlowLogTrafficAnalytics TrafficAnalytics = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#name NetworkWatcherFlowLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#network_security_group_id NetworkWatcherFlowLog#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkWatcherName">NetworkWatcherName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#network_watcher_name NetworkWatcherFlowLog#network_watcher_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#resource_group_name NetworkWatcherFlowLog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#storage_account_id NetworkWatcherFlowLog#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#id NetworkWatcherFlowLog#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#location NetworkWatcherFlowLog#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#tags NetworkWatcherFlowLog#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.trafficAnalytics">TrafficAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a></code> | traffic_analytics block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#version NetworkWatcherFlowLog#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#name NetworkWatcherFlowLog#name}.

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkSecurityGroupId"></a>

```csharp
public string NetworkSecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#network_security_group_id NetworkWatcherFlowLog#network_security_group_id}.

---

##### `NetworkWatcherName`<sup>Required</sup> <a name="NetworkWatcherName" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkWatcherName"></a>

```csharp
public string NetworkWatcherName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#network_watcher_name NetworkWatcherFlowLog#network_watcher_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#resource_group_name NetworkWatcherFlowLog#resource_group_name}.

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.retentionPolicy"></a>

```csharp
public NetworkWatcherFlowLogRetentionPolicy RetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#retention_policy NetworkWatcherFlowLog#retention_policy}

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#storage_account_id NetworkWatcherFlowLog#storage_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#id NetworkWatcherFlowLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#location NetworkWatcherFlowLog#location}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#tags NetworkWatcherFlowLog#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.timeouts"></a>

```csharp
public NetworkWatcherFlowLogTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#timeouts NetworkWatcherFlowLog#timeouts}

---

##### `TrafficAnalytics`<sup>Optional</sup> <a name="TrafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.trafficAnalytics"></a>

```csharp
public NetworkWatcherFlowLogTrafficAnalytics TrafficAnalytics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

traffic_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#traffic_analytics NetworkWatcherFlowLog#traffic_analytics}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#version NetworkWatcherFlowLog#version}.

---

### NetworkWatcherFlowLogRetentionPolicy <a name="NetworkWatcherFlowLogRetentionPolicy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkWatcherFlowLogRetentionPolicy {
    double Days,
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#days NetworkWatcherFlowLog#days}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#days NetworkWatcherFlowLog#days}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

### NetworkWatcherFlowLogTimeouts <a name="NetworkWatcherFlowLogTimeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkWatcherFlowLogTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#create NetworkWatcherFlowLog#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#delete NetworkWatcherFlowLog#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#read NetworkWatcherFlowLog#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#update NetworkWatcherFlowLog#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#create NetworkWatcherFlowLog#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#delete NetworkWatcherFlowLog#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#read NetworkWatcherFlowLog#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#update NetworkWatcherFlowLog#update}.

---

### NetworkWatcherFlowLogTrafficAnalytics <a name="NetworkWatcherFlowLogTrafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkWatcherFlowLogTrafficAnalytics {
    object Enabled,
    string WorkspaceId,
    string WorkspaceRegion,
    string WorkspaceResourceId,
    double IntervalInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#workspace_id NetworkWatcherFlowLog#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceRegion">WorkspaceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#workspace_region NetworkWatcherFlowLog#workspace_region}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceResourceId">WorkspaceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#workspace_resource_id NetworkWatcherFlowLog#workspace_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.intervalInMinutes">IntervalInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#interval_in_minutes NetworkWatcherFlowLog#interval_in_minutes}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#workspace_id NetworkWatcherFlowLog#workspace_id}.

---

##### `WorkspaceRegion`<sup>Required</sup> <a name="WorkspaceRegion" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceRegion"></a>

```csharp
public string WorkspaceRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#workspace_region NetworkWatcherFlowLog#workspace_region}.

---

##### `WorkspaceResourceId`<sup>Required</sup> <a name="WorkspaceResourceId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceResourceId"></a>

```csharp
public string WorkspaceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#workspace_resource_id NetworkWatcherFlowLog#workspace_resource_id}.

---

##### `IntervalInMinutes`<sup>Optional</sup> <a name="IntervalInMinutes" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.intervalInMinutes"></a>

```csharp
public double IntervalInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/network_watcher_flow_log#interval_in_minutes NetworkWatcherFlowLog#interval_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkWatcherFlowLogRetentionPolicyOutputReference <a name="NetworkWatcherFlowLogRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkWatcherFlowLogRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public NetworkWatcherFlowLogRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

---


### NetworkWatcherFlowLogTimeoutsOutputReference <a name="NetworkWatcherFlowLogTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkWatcherFlowLogTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkWatcherFlowLogTrafficAnalyticsOutputReference <a name="NetworkWatcherFlowLogTrafficAnalyticsOutputReference" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkWatcherFlowLogTrafficAnalyticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resetIntervalInMinutes">ResetIntervalInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalInMinutes` <a name="ResetIntervalInMinutes" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resetIntervalInMinutes"></a>

```csharp
private void ResetIntervalInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutesInput">IntervalInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegionInput">WorkspaceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceIdInput">WorkspaceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutes">IntervalInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegion">WorkspaceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceId">WorkspaceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IntervalInMinutesInput`<sup>Optional</sup> <a name="IntervalInMinutesInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutesInput"></a>

```csharp
public double IntervalInMinutesInput { get; }
```

- *Type:* double

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceRegionInput`<sup>Optional</sup> <a name="WorkspaceRegionInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegionInput"></a>

```csharp
public string WorkspaceRegionInput { get; }
```

- *Type:* string

---

##### `WorkspaceResourceIdInput`<sup>Optional</sup> <a name="WorkspaceResourceIdInput" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceIdInput"></a>

```csharp
public string WorkspaceResourceIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IntervalInMinutes`<sup>Required</sup> <a name="IntervalInMinutes" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutes"></a>

```csharp
public double IntervalInMinutes { get; }
```

- *Type:* double

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `WorkspaceRegion`<sup>Required</sup> <a name="WorkspaceRegion" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegion"></a>

```csharp
public string WorkspaceRegion { get; }
```

- *Type:* string

---

##### `WorkspaceResourceId`<sup>Required</sup> <a name="WorkspaceResourceId" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceId"></a>

```csharp
public string WorkspaceResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.internalValue"></a>

```csharp
public NetworkWatcherFlowLogTrafficAnalytics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

---



