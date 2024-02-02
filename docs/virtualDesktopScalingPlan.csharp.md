# `virtualDesktopScalingPlan` Submodule <a name="`virtualDesktopScalingPlan` Submodule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopScalingPlan <a name="VirtualDesktopScalingPlan" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan azurerm_virtual_desktop_scaling_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopScalingPlan(Construct Scope, string Id, VirtualDesktopScalingPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig">VirtualDesktopScalingPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig">VirtualDesktopScalingPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putHostPool">PutHostPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetExclusionTag">ResetExclusionTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetHostPool">ResetHostPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHostPool` <a name="PutHostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putHostPool"></a>

```csharp
private void PutHostPool(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putHostPool.parameter.value"></a>

- *Type:* object

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putSchedule"></a>

```csharp
private void PutSchedule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putSchedule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualDesktopScalingPlanTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExclusionTag` <a name="ResetExclusionTag" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetExclusionTag"></a>

```csharp
private void ResetExclusionTag()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetFriendlyName"></a>

```csharp
private void ResetFriendlyName()
```

##### `ResetHostPool` <a name="ResetHostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetHostPool"></a>

```csharp
private void ResetHostPool()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopScalingPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopScalingPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopScalingPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopScalingPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopScalingPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualDesktopScalingPlan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualDesktopScalingPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualDesktopScalingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopScalingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPool">HostPool</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList">VirtualDesktopScalingPlanHostPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList">VirtualDesktopScalingPlanScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference">VirtualDesktopScalingPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTagInput">ExclusionTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPoolInput">HostPoolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.scheduleInput">ScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTag">ExclusionTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyName">FriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HostPool`<sup>Required</sup> <a name="HostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPool"></a>

```csharp
public VirtualDesktopScalingPlanHostPoolList HostPool { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList">VirtualDesktopScalingPlanHostPoolList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.schedule"></a>

```csharp
public VirtualDesktopScalingPlanScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList">VirtualDesktopScalingPlanScheduleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeouts"></a>

```csharp
public VirtualDesktopScalingPlanTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference">VirtualDesktopScalingPlanTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExclusionTagInput`<sup>Optional</sup> <a name="ExclusionTagInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTagInput"></a>

```csharp
public string ExclusionTagInput { get; }
```

- *Type:* string

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyNameInput"></a>

```csharp
public string FriendlyNameInput { get; }
```

- *Type:* string

---

##### `HostPoolInput`<sup>Optional</sup> <a name="HostPoolInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPoolInput"></a>

```csharp
public object HostPoolInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.scheduleInput"></a>

```csharp
public object ScheduleInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExclusionTag`<sup>Required</sup> <a name="ExclusionTag" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTag"></a>

```csharp
public string ExclusionTag { get; }
```

- *Type:* string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyName"></a>

```csharp
public string FriendlyName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopScalingPlanConfig <a name="VirtualDesktopScalingPlanConfig" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopScalingPlanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    object Schedule,
    string TimeZone,
    string Description = null,
    string ExclusionTag = null,
    string FriendlyName = null,
    object HostPool = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VirtualDesktopScalingPlanTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#location VirtualDesktopScalingPlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#resource_group_name VirtualDesktopScalingPlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.schedule">Schedule</a></code> | <code>object</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#time_zone VirtualDesktopScalingPlan#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#description VirtualDesktopScalingPlan#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.exclusionTag">ExclusionTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#exclusion_tag VirtualDesktopScalingPlan#exclusion_tag}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.friendlyName">FriendlyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#friendly_name VirtualDesktopScalingPlan#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.hostPool">HostPool</a></code> | <code>object</code> | host_pool block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#id VirtualDesktopScalingPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#tags VirtualDesktopScalingPlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#location VirtualDesktopScalingPlan#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#resource_group_name VirtualDesktopScalingPlan#resource_group_name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.schedule"></a>

```csharp
public object Schedule { get; set; }
```

- *Type:* object

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#schedule VirtualDesktopScalingPlan#schedule}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#time_zone VirtualDesktopScalingPlan#time_zone}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#description VirtualDesktopScalingPlan#description}.

---

##### `ExclusionTag`<sup>Optional</sup> <a name="ExclusionTag" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.exclusionTag"></a>

```csharp
public string ExclusionTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#exclusion_tag VirtualDesktopScalingPlan#exclusion_tag}.

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.friendlyName"></a>

```csharp
public string FriendlyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#friendly_name VirtualDesktopScalingPlan#friendly_name}.

---

##### `HostPool`<sup>Optional</sup> <a name="HostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.hostPool"></a>

```csharp
public object HostPool { get; set; }
```

- *Type:* object

host_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#host_pool VirtualDesktopScalingPlan#host_pool}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#id VirtualDesktopScalingPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#tags VirtualDesktopScalingPlan#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeouts"></a>

```csharp
public VirtualDesktopScalingPlanTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#timeouts VirtualDesktopScalingPlan#timeouts}

---

### VirtualDesktopScalingPlanHostPool <a name="VirtualDesktopScalingPlanHostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopScalingPlanHostPool {
    string HostpoolId,
    object ScalingPlanEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.hostpoolId">HostpoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#hostpool_id VirtualDesktopScalingPlan#hostpool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.scalingPlanEnabled">ScalingPlanEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#scaling_plan_enabled VirtualDesktopScalingPlan#scaling_plan_enabled}. |

---

##### `HostpoolId`<sup>Required</sup> <a name="HostpoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.hostpoolId"></a>

```csharp
public string HostpoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#hostpool_id VirtualDesktopScalingPlan#hostpool_id}.

---

##### `ScalingPlanEnabled`<sup>Required</sup> <a name="ScalingPlanEnabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.scalingPlanEnabled"></a>

```csharp
public object ScalingPlanEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#scaling_plan_enabled VirtualDesktopScalingPlan#scaling_plan_enabled}.

---

### VirtualDesktopScalingPlanSchedule <a name="VirtualDesktopScalingPlanSchedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopScalingPlanSchedule {
    string[] DaysOfWeek,
    string Name,
    string OffPeakLoadBalancingAlgorithm,
    string OffPeakStartTime,
    string PeakLoadBalancingAlgorithm,
    string PeakStartTime,
    double RampDownCapacityThresholdPercent,
    object RampDownForceLogoffUsers,
    string RampDownLoadBalancingAlgorithm,
    double RampDownMinimumHostsPercent,
    string RampDownNotificationMessage,
    string RampDownStartTime,
    string RampDownStopHostsWhen,
    double RampDownWaitTimeMinutes,
    string RampUpLoadBalancingAlgorithm,
    string RampUpStartTime,
    double RampUpCapacityThresholdPercent = null,
    double RampUpMinimumHostsPercent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#days_of_week VirtualDesktopScalingPlan#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakLoadBalancingAlgorithm">OffPeakLoadBalancingAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#off_peak_load_balancing_algorithm VirtualDesktopScalingPlan#off_peak_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakStartTime">OffPeakStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#off_peak_start_time VirtualDesktopScalingPlan#off_peak_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakLoadBalancingAlgorithm">PeakLoadBalancingAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#peak_load_balancing_algorithm VirtualDesktopScalingPlan#peak_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakStartTime">PeakStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#peak_start_time VirtualDesktopScalingPlan#peak_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownCapacityThresholdPercent">RampDownCapacityThresholdPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_down_capacity_threshold_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownForceLogoffUsers">RampDownForceLogoffUsers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_force_logoff_users VirtualDesktopScalingPlan#ramp_down_force_logoff_users}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownLoadBalancingAlgorithm">RampDownLoadBalancingAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_down_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownMinimumHostsPercent">RampDownMinimumHostsPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_down_minimum_hosts_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownNotificationMessage">RampDownNotificationMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_notification_message VirtualDesktopScalingPlan#ramp_down_notification_message}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStartTime">RampDownStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_start_time VirtualDesktopScalingPlan#ramp_down_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStopHostsWhen">RampDownStopHostsWhen</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_stop_hosts_when VirtualDesktopScalingPlan#ramp_down_stop_hosts_when}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownWaitTimeMinutes">RampDownWaitTimeMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_wait_time_minutes VirtualDesktopScalingPlan#ramp_down_wait_time_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpLoadBalancingAlgorithm">RampUpLoadBalancingAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_up_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpStartTime">RampUpStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_start_time VirtualDesktopScalingPlan#ramp_up_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpCapacityThresholdPercent">RampUpCapacityThresholdPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_up_capacity_threshold_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpMinimumHostsPercent">RampUpMinimumHostsPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_up_minimum_hosts_percent}. |

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#days_of_week VirtualDesktopScalingPlan#days_of_week}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}.

---

##### `OffPeakLoadBalancingAlgorithm`<sup>Required</sup> <a name="OffPeakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakLoadBalancingAlgorithm"></a>

```csharp
public string OffPeakLoadBalancingAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#off_peak_load_balancing_algorithm VirtualDesktopScalingPlan#off_peak_load_balancing_algorithm}.

---

##### `OffPeakStartTime`<sup>Required</sup> <a name="OffPeakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakStartTime"></a>

```csharp
public string OffPeakStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#off_peak_start_time VirtualDesktopScalingPlan#off_peak_start_time}.

---

##### `PeakLoadBalancingAlgorithm`<sup>Required</sup> <a name="PeakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakLoadBalancingAlgorithm"></a>

```csharp
public string PeakLoadBalancingAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#peak_load_balancing_algorithm VirtualDesktopScalingPlan#peak_load_balancing_algorithm}.

---

##### `PeakStartTime`<sup>Required</sup> <a name="PeakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakStartTime"></a>

```csharp
public string PeakStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#peak_start_time VirtualDesktopScalingPlan#peak_start_time}.

---

##### `RampDownCapacityThresholdPercent`<sup>Required</sup> <a name="RampDownCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownCapacityThresholdPercent"></a>

```csharp
public double RampDownCapacityThresholdPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_down_capacity_threshold_percent}.

---

##### `RampDownForceLogoffUsers`<sup>Required</sup> <a name="RampDownForceLogoffUsers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownForceLogoffUsers"></a>

```csharp
public object RampDownForceLogoffUsers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_force_logoff_users VirtualDesktopScalingPlan#ramp_down_force_logoff_users}.

---

##### `RampDownLoadBalancingAlgorithm`<sup>Required</sup> <a name="RampDownLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownLoadBalancingAlgorithm"></a>

```csharp
public string RampDownLoadBalancingAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_down_load_balancing_algorithm}.

---

##### `RampDownMinimumHostsPercent`<sup>Required</sup> <a name="RampDownMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownMinimumHostsPercent"></a>

```csharp
public double RampDownMinimumHostsPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_down_minimum_hosts_percent}.

---

##### `RampDownNotificationMessage`<sup>Required</sup> <a name="RampDownNotificationMessage" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownNotificationMessage"></a>

```csharp
public string RampDownNotificationMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_notification_message VirtualDesktopScalingPlan#ramp_down_notification_message}.

---

##### `RampDownStartTime`<sup>Required</sup> <a name="RampDownStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStartTime"></a>

```csharp
public string RampDownStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_start_time VirtualDesktopScalingPlan#ramp_down_start_time}.

---

##### `RampDownStopHostsWhen`<sup>Required</sup> <a name="RampDownStopHostsWhen" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStopHostsWhen"></a>

```csharp
public string RampDownStopHostsWhen { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_stop_hosts_when VirtualDesktopScalingPlan#ramp_down_stop_hosts_when}.

---

##### `RampDownWaitTimeMinutes`<sup>Required</sup> <a name="RampDownWaitTimeMinutes" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownWaitTimeMinutes"></a>

```csharp
public double RampDownWaitTimeMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_wait_time_minutes VirtualDesktopScalingPlan#ramp_down_wait_time_minutes}.

---

##### `RampUpLoadBalancingAlgorithm`<sup>Required</sup> <a name="RampUpLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpLoadBalancingAlgorithm"></a>

```csharp
public string RampUpLoadBalancingAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_up_load_balancing_algorithm}.

---

##### `RampUpStartTime`<sup>Required</sup> <a name="RampUpStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpStartTime"></a>

```csharp
public string RampUpStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_start_time VirtualDesktopScalingPlan#ramp_up_start_time}.

---

##### `RampUpCapacityThresholdPercent`<sup>Optional</sup> <a name="RampUpCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpCapacityThresholdPercent"></a>

```csharp
public double RampUpCapacityThresholdPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_up_capacity_threshold_percent}.

---

##### `RampUpMinimumHostsPercent`<sup>Optional</sup> <a name="RampUpMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpMinimumHostsPercent"></a>

```csharp
public double RampUpMinimumHostsPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_up_minimum_hosts_percent}.

---

### VirtualDesktopScalingPlanTimeouts <a name="VirtualDesktopScalingPlanTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopScalingPlanTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#create VirtualDesktopScalingPlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#delete VirtualDesktopScalingPlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#read VirtualDesktopScalingPlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#update VirtualDesktopScalingPlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#create VirtualDesktopScalingPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#delete VirtualDesktopScalingPlan#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#read VirtualDesktopScalingPlan#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_desktop_scaling_plan#update VirtualDesktopScalingPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopScalingPlanHostPoolList <a name="VirtualDesktopScalingPlanHostPoolList" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopScalingPlanHostPoolList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.get"></a>

```csharp
private VirtualDesktopScalingPlanHostPoolOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualDesktopScalingPlanHostPoolOutputReference <a name="VirtualDesktopScalingPlanHostPoolOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopScalingPlanHostPoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolIdInput">HostpoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabledInput">ScalingPlanEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolId">HostpoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabled">ScalingPlanEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostpoolIdInput`<sup>Optional</sup> <a name="HostpoolIdInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolIdInput"></a>

```csharp
public string HostpoolIdInput { get; }
```

- *Type:* string

---

##### `ScalingPlanEnabledInput`<sup>Optional</sup> <a name="ScalingPlanEnabledInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabledInput"></a>

```csharp
public object ScalingPlanEnabledInput { get; }
```

- *Type:* object

---

##### `HostpoolId`<sup>Required</sup> <a name="HostpoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolId"></a>

```csharp
public string HostpoolId { get; }
```

- *Type:* string

---

##### `ScalingPlanEnabled`<sup>Required</sup> <a name="ScalingPlanEnabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabled"></a>

```csharp
public object ScalingPlanEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualDesktopScalingPlanScheduleList <a name="VirtualDesktopScalingPlanScheduleList" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopScalingPlanScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.get"></a>

```csharp
private VirtualDesktopScalingPlanScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualDesktopScalingPlanScheduleOutputReference <a name="VirtualDesktopScalingPlanScheduleOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopScalingPlanScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpCapacityThresholdPercent">ResetRampUpCapacityThresholdPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpMinimumHostsPercent">ResetRampUpMinimumHostsPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRampUpCapacityThresholdPercent` <a name="ResetRampUpCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpCapacityThresholdPercent"></a>

```csharp
private void ResetRampUpCapacityThresholdPercent()
```

##### `ResetRampUpMinimumHostsPercent` <a name="ResetRampUpMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpMinimumHostsPercent"></a>

```csharp
private void ResetRampUpMinimumHostsPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithmInput">OffPeakLoadBalancingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTimeInput">OffPeakStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithmInput">PeakLoadBalancingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTimeInput">PeakStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercentInput">RampDownCapacityThresholdPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsersInput">RampDownForceLogoffUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithmInput">RampDownLoadBalancingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercentInput">RampDownMinimumHostsPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessageInput">RampDownNotificationMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTimeInput">RampDownStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhenInput">RampDownStopHostsWhenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutesInput">RampDownWaitTimeMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercentInput">RampUpCapacityThresholdPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithmInput">RampUpLoadBalancingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercentInput">RampUpMinimumHostsPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTimeInput">RampUpStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithm">OffPeakLoadBalancingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTime">OffPeakStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithm">PeakLoadBalancingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTime">PeakStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercent">RampDownCapacityThresholdPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsers">RampDownForceLogoffUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithm">RampDownLoadBalancingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercent">RampDownMinimumHostsPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessage">RampDownNotificationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTime">RampDownStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhen">RampDownStopHostsWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutes">RampDownWaitTimeMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercent">RampUpCapacityThresholdPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithm">RampUpLoadBalancingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercent">RampUpMinimumHostsPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTime">RampUpStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OffPeakLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="OffPeakLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithmInput"></a>

```csharp
public string OffPeakLoadBalancingAlgorithmInput { get; }
```

- *Type:* string

---

##### `OffPeakStartTimeInput`<sup>Optional</sup> <a name="OffPeakStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTimeInput"></a>

```csharp
public string OffPeakStartTimeInput { get; }
```

- *Type:* string

---

##### `PeakLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="PeakLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithmInput"></a>

```csharp
public string PeakLoadBalancingAlgorithmInput { get; }
```

- *Type:* string

---

##### `PeakStartTimeInput`<sup>Optional</sup> <a name="PeakStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTimeInput"></a>

```csharp
public string PeakStartTimeInput { get; }
```

- *Type:* string

---

##### `RampDownCapacityThresholdPercentInput`<sup>Optional</sup> <a name="RampDownCapacityThresholdPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercentInput"></a>

```csharp
public double RampDownCapacityThresholdPercentInput { get; }
```

- *Type:* double

---

##### `RampDownForceLogoffUsersInput`<sup>Optional</sup> <a name="RampDownForceLogoffUsersInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsersInput"></a>

```csharp
public object RampDownForceLogoffUsersInput { get; }
```

- *Type:* object

---

##### `RampDownLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="RampDownLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithmInput"></a>

```csharp
public string RampDownLoadBalancingAlgorithmInput { get; }
```

- *Type:* string

---

##### `RampDownMinimumHostsPercentInput`<sup>Optional</sup> <a name="RampDownMinimumHostsPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercentInput"></a>

```csharp
public double RampDownMinimumHostsPercentInput { get; }
```

- *Type:* double

---

##### `RampDownNotificationMessageInput`<sup>Optional</sup> <a name="RampDownNotificationMessageInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessageInput"></a>

```csharp
public string RampDownNotificationMessageInput { get; }
```

- *Type:* string

---

##### `RampDownStartTimeInput`<sup>Optional</sup> <a name="RampDownStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTimeInput"></a>

```csharp
public string RampDownStartTimeInput { get; }
```

- *Type:* string

---

##### `RampDownStopHostsWhenInput`<sup>Optional</sup> <a name="RampDownStopHostsWhenInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhenInput"></a>

```csharp
public string RampDownStopHostsWhenInput { get; }
```

- *Type:* string

---

##### `RampDownWaitTimeMinutesInput`<sup>Optional</sup> <a name="RampDownWaitTimeMinutesInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutesInput"></a>

```csharp
public double RampDownWaitTimeMinutesInput { get; }
```

- *Type:* double

---

##### `RampUpCapacityThresholdPercentInput`<sup>Optional</sup> <a name="RampUpCapacityThresholdPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercentInput"></a>

```csharp
public double RampUpCapacityThresholdPercentInput { get; }
```

- *Type:* double

---

##### `RampUpLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="RampUpLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithmInput"></a>

```csharp
public string RampUpLoadBalancingAlgorithmInput { get; }
```

- *Type:* string

---

##### `RampUpMinimumHostsPercentInput`<sup>Optional</sup> <a name="RampUpMinimumHostsPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercentInput"></a>

```csharp
public double RampUpMinimumHostsPercentInput { get; }
```

- *Type:* double

---

##### `RampUpStartTimeInput`<sup>Optional</sup> <a name="RampUpStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTimeInput"></a>

```csharp
public string RampUpStartTimeInput { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OffPeakLoadBalancingAlgorithm`<sup>Required</sup> <a name="OffPeakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithm"></a>

```csharp
public string OffPeakLoadBalancingAlgorithm { get; }
```

- *Type:* string

---

##### `OffPeakStartTime`<sup>Required</sup> <a name="OffPeakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTime"></a>

```csharp
public string OffPeakStartTime { get; }
```

- *Type:* string

---

##### `PeakLoadBalancingAlgorithm`<sup>Required</sup> <a name="PeakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithm"></a>

```csharp
public string PeakLoadBalancingAlgorithm { get; }
```

- *Type:* string

---

##### `PeakStartTime`<sup>Required</sup> <a name="PeakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTime"></a>

```csharp
public string PeakStartTime { get; }
```

- *Type:* string

---

##### `RampDownCapacityThresholdPercent`<sup>Required</sup> <a name="RampDownCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercent"></a>

```csharp
public double RampDownCapacityThresholdPercent { get; }
```

- *Type:* double

---

##### `RampDownForceLogoffUsers`<sup>Required</sup> <a name="RampDownForceLogoffUsers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsers"></a>

```csharp
public object RampDownForceLogoffUsers { get; }
```

- *Type:* object

---

##### `RampDownLoadBalancingAlgorithm`<sup>Required</sup> <a name="RampDownLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithm"></a>

```csharp
public string RampDownLoadBalancingAlgorithm { get; }
```

- *Type:* string

---

##### `RampDownMinimumHostsPercent`<sup>Required</sup> <a name="RampDownMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercent"></a>

```csharp
public double RampDownMinimumHostsPercent { get; }
```

- *Type:* double

---

##### `RampDownNotificationMessage`<sup>Required</sup> <a name="RampDownNotificationMessage" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessage"></a>

```csharp
public string RampDownNotificationMessage { get; }
```

- *Type:* string

---

##### `RampDownStartTime`<sup>Required</sup> <a name="RampDownStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTime"></a>

```csharp
public string RampDownStartTime { get; }
```

- *Type:* string

---

##### `RampDownStopHostsWhen`<sup>Required</sup> <a name="RampDownStopHostsWhen" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhen"></a>

```csharp
public string RampDownStopHostsWhen { get; }
```

- *Type:* string

---

##### `RampDownWaitTimeMinutes`<sup>Required</sup> <a name="RampDownWaitTimeMinutes" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutes"></a>

```csharp
public double RampDownWaitTimeMinutes { get; }
```

- *Type:* double

---

##### `RampUpCapacityThresholdPercent`<sup>Required</sup> <a name="RampUpCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercent"></a>

```csharp
public double RampUpCapacityThresholdPercent { get; }
```

- *Type:* double

---

##### `RampUpLoadBalancingAlgorithm`<sup>Required</sup> <a name="RampUpLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithm"></a>

```csharp
public string RampUpLoadBalancingAlgorithm { get; }
```

- *Type:* string

---

##### `RampUpMinimumHostsPercent`<sup>Required</sup> <a name="RampUpMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercent"></a>

```csharp
public double RampUpMinimumHostsPercent { get; }
```

- *Type:* double

---

##### `RampUpStartTime`<sup>Required</sup> <a name="RampUpStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTime"></a>

```csharp
public string RampUpStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualDesktopScalingPlanTimeoutsOutputReference <a name="VirtualDesktopScalingPlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopScalingPlanTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



