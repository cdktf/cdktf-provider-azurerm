# `dynatraceMonitor` Submodule <a name="`dynatraceMonitor` Submodule" id="@cdktf/provider-azurerm.dynatraceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynatraceMonitor <a name="DynatraceMonitor" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor azurerm_dynatrace_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitor(Construct Scope, string Id, DynatraceMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig">DynatraceMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig">DynatraceMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putEnvironmentProperties">PutEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetEnvironmentProperties">ResetEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetMonitoringEnabled">ResetMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnvironmentProperties` <a name="PutEnvironmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putEnvironmentProperties"></a>

```csharp
private void PutEnvironmentProperties(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putEnvironmentProperties.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity"></a>

```csharp
private void PutIdentity(DynatraceMonitorIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan"></a>

```csharp
private void PutPlan(DynatraceMonitorPlan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts"></a>

```csharp
private void PutTimeouts(DynatraceMonitorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>

---

##### `PutUser` <a name="PutUser" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser"></a>

```csharp
private void PutUser(DynatraceMonitorUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---

##### `ResetEnvironmentProperties` <a name="ResetEnvironmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetEnvironmentProperties"></a>

```csharp
private void ResetEnvironmentProperties()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMonitoringEnabled` <a name="ResetMonitoringEnabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetMonitoringEnabled"></a>

```csharp
private void ResetMonitoringEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DynatraceMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DynatraceMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DynatraceMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DynatraceMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DynatraceMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DynatraceMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynatraceMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynatraceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DynatraceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentProperties">EnvironmentProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList">DynatraceMonitorEnvironmentPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference">DynatraceMonitorIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference">DynatraceMonitorPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference">DynatraceMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.user">User</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference">DynatraceMonitorUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentPropertiesInput">EnvironmentPropertiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscriptionInput">MarketplaceSubscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabledInput">MonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.userInput">UserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscription">MarketplaceSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabled">MonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EnvironmentProperties`<sup>Required</sup> <a name="EnvironmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentProperties"></a>

```csharp
public DynatraceMonitorEnvironmentPropertiesList EnvironmentProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList">DynatraceMonitorEnvironmentPropertiesList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identity"></a>

```csharp
public DynatraceMonitorIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference">DynatraceMonitorIdentityOutputReference</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.plan"></a>

```csharp
public DynatraceMonitorPlanOutputReference Plan { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference">DynatraceMonitorPlanOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeouts"></a>

```csharp
public DynatraceMonitorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference">DynatraceMonitorTimeoutsOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.user"></a>

```csharp
public DynatraceMonitorUserOutputReference User { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference">DynatraceMonitorUserOutputReference</a>

---

##### `EnvironmentPropertiesInput`<sup>Optional</sup> <a name="EnvironmentPropertiesInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.environmentPropertiesInput"></a>

```csharp
public object EnvironmentPropertiesInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identityInput"></a>

```csharp
public DynatraceMonitorIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MarketplaceSubscriptionInput`<sup>Optional</sup> <a name="MarketplaceSubscriptionInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscriptionInput"></a>

```csharp
public string MarketplaceSubscriptionInput { get; }
```

- *Type:* string

---

##### `MonitoringEnabledInput`<sup>Optional</sup> <a name="MonitoringEnabledInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabledInput"></a>

```csharp
public object MonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.planInput"></a>

```csharp
public DynatraceMonitorPlan PlanInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.userInput"></a>

```csharp
public DynatraceMonitorUser UserInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MarketplaceSubscription`<sup>Required</sup> <a name="MarketplaceSubscription" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscription"></a>

```csharp
public string MarketplaceSubscription { get; }
```

- *Type:* string

---

##### `MonitoringEnabled`<sup>Required</sup> <a name="MonitoringEnabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabled"></a>

```csharp
public object MonitoringEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynatraceMonitorConfig <a name="DynatraceMonitorConfig" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DynatraceMonitorIdentity Identity,
    string Location,
    string MarketplaceSubscription,
    string Name,
    DynatraceMonitorPlan Plan,
    string ResourceGroupName,
    DynatraceMonitorUser User,
    object EnvironmentProperties = null,
    string Id = null,
    object MonitoringEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DynatraceMonitorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#location DynatraceMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.marketplaceSubscription">MarketplaceSubscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#marketplace_subscription DynatraceMonitor#marketplace_subscription}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#name DynatraceMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#resource_group_name DynatraceMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.user">User</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.environmentProperties">EnvironmentProperties</a></code> | <code>object</code> | environment_properties block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#id DynatraceMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.monitoringEnabled">MonitoringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#monitoring_enabled DynatraceMonitor#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#tags DynatraceMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.identity"></a>

```csharp
public DynatraceMonitorIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#identity DynatraceMonitor#identity}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#location DynatraceMonitor#location}.

---

##### `MarketplaceSubscription`<sup>Required</sup> <a name="MarketplaceSubscription" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.marketplaceSubscription"></a>

```csharp
public string MarketplaceSubscription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#marketplace_subscription DynatraceMonitor#marketplace_subscription}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#name DynatraceMonitor#name}.

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.plan"></a>

```csharp
public DynatraceMonitorPlan Plan { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#resource_group_name DynatraceMonitor#resource_group_name}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.user"></a>

```csharp
public DynatraceMonitorUser User { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#user DynatraceMonitor#user}

---

##### `EnvironmentProperties`<sup>Optional</sup> <a name="EnvironmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.environmentProperties"></a>

```csharp
public object EnvironmentProperties { get; set; }
```

- *Type:* object

environment_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#environment_properties DynatraceMonitor#environment_properties}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#id DynatraceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonitoringEnabled`<sup>Optional</sup> <a name="MonitoringEnabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.monitoringEnabled"></a>

```csharp
public object MonitoringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#monitoring_enabled DynatraceMonitor#monitoring_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#tags DynatraceMonitor#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.timeouts"></a>

```csharp
public DynatraceMonitorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#timeouts DynatraceMonitor#timeouts}

---

### DynatraceMonitorEnvironmentProperties <a name="DynatraceMonitorEnvironmentProperties" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorEnvironmentProperties {
    object EnvironmentInfo
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties.property.environmentInfo">EnvironmentInfo</a></code> | <code>object</code> | environment_info block. |

---

##### `EnvironmentInfo`<sup>Required</sup> <a name="EnvironmentInfo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentProperties.property.environmentInfo"></a>

```csharp
public object EnvironmentInfo { get; set; }
```

- *Type:* object

environment_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#environment_info DynatraceMonitor#environment_info}

---

### DynatraceMonitorEnvironmentPropertiesEnvironmentInfo <a name="DynatraceMonitorEnvironmentPropertiesEnvironmentInfo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorEnvironmentPropertiesEnvironmentInfo {
    string EnvironmentId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo.property.environmentId">EnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#environment_id DynatraceMonitor#environment_id}. |

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfo.property.environmentId"></a>

```csharp
public string EnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#environment_id DynatraceMonitor#environment_id}.

---

### DynatraceMonitorIdentity <a name="DynatraceMonitorIdentity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#type DynatraceMonitor#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#type DynatraceMonitor#type}.

---

### DynatraceMonitorPlan <a name="DynatraceMonitorPlan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorPlan {
    string Plan,
    string BillingCycle = null,
    string UsageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.plan">Plan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.billingCycle">BillingCycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#billing_cycle DynatraceMonitor#billing_cycle}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.usageType">UsageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#usage_type DynatraceMonitor#usage_type}. |

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}.

---

##### `BillingCycle`<sup>Optional</sup> <a name="BillingCycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.billingCycle"></a>

```csharp
public string BillingCycle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#billing_cycle DynatraceMonitor#billing_cycle}.

---

##### `UsageType`<sup>Optional</sup> <a name="UsageType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.usageType"></a>

```csharp
public string UsageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#usage_type DynatraceMonitor#usage_type}.

---

### DynatraceMonitorTimeouts <a name="DynatraceMonitorTimeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#create DynatraceMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#delete DynatraceMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#read DynatraceMonitor#read}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#update DynatraceMonitor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#create DynatraceMonitor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#delete DynatraceMonitor#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#read DynatraceMonitor#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#update DynatraceMonitor#update}.

---

### DynatraceMonitorUser <a name="DynatraceMonitorUser" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorUser {
    string Country,
    string Email,
    string FirstName,
    string LastName,
    string PhoneNumber
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#country DynatraceMonitor#country}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#email DynatraceMonitor#email}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#first_name DynatraceMonitor#first_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#last_name DynatraceMonitor#last_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#phone_number DynatraceMonitor#phone_number}. |

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#country DynatraceMonitor#country}.

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#email DynatraceMonitor#email}.

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#first_name DynatraceMonitor#first_name}.

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#last_name DynatraceMonitor#last_name}.

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/dynatrace_monitor#phone_number DynatraceMonitor#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList <a name="DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get"></a>

```csharp
private DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference <a name="DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentIdInput"></a>

```csharp
public string EnvironmentIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynatraceMonitorEnvironmentPropertiesList <a name="DynatraceMonitorEnvironmentPropertiesList" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorEnvironmentPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.get"></a>

```csharp
private DynatraceMonitorEnvironmentPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynatraceMonitorEnvironmentPropertiesOutputReference <a name="DynatraceMonitorEnvironmentPropertiesOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorEnvironmentPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.putEnvironmentInfo">PutEnvironmentInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironmentInfo` <a name="PutEnvironmentInfo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.putEnvironmentInfo"></a>

```csharp
private void PutEnvironmentInfo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.putEnvironmentInfo.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfo">EnvironmentInfo</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList">DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfoInput">EnvironmentInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentInfo`<sup>Required</sup> <a name="EnvironmentInfo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfo"></a>

```csharp
public DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList EnvironmentInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList">DynatraceMonitorEnvironmentPropertiesEnvironmentInfoList</a>

---

##### `EnvironmentInfoInput`<sup>Optional</sup> <a name="EnvironmentInfoInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfoInput"></a>

```csharp
public object EnvironmentInfoInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorEnvironmentPropertiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynatraceMonitorIdentityOutputReference <a name="DynatraceMonitorIdentityOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.internalValue"></a>

```csharp
public DynatraceMonitorIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---


### DynatraceMonitorPlanOutputReference <a name="DynatraceMonitorPlanOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorPlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetBillingCycle">ResetBillingCycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetUsageType">ResetUsageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBillingCycle` <a name="ResetBillingCycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetBillingCycle"></a>

```csharp
private void ResetBillingCycle()
```

##### `ResetUsageType` <a name="ResetUsageType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetUsageType"></a>

```csharp
private void ResetUsageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.effectiveDate">EffectiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycleInput">BillingCycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageTypeInput">UsageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycle">BillingCycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageType">UsageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveDate`<sup>Required</sup> <a name="EffectiveDate" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.effectiveDate"></a>

```csharp
public string EffectiveDate { get; }
```

- *Type:* string

---

##### `BillingCycleInput`<sup>Optional</sup> <a name="BillingCycleInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycleInput"></a>

```csharp
public string BillingCycleInput { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `UsageTypeInput`<sup>Optional</sup> <a name="UsageTypeInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageTypeInput"></a>

```csharp
public string UsageTypeInput { get; }
```

- *Type:* string

---

##### `BillingCycle`<sup>Required</sup> <a name="BillingCycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycle"></a>

```csharp
public string BillingCycle { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `UsageType`<sup>Required</sup> <a name="UsageType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageType"></a>

```csharp
public string UsageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.internalValue"></a>

```csharp
public DynatraceMonitorPlan InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---


### DynatraceMonitorTimeoutsOutputReference <a name="DynatraceMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynatraceMonitorUserOutputReference <a name="DynatraceMonitorUserOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DynatraceMonitorUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.internalValue"></a>

```csharp
public DynatraceMonitorUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---



